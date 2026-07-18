import { NextRequest, NextResponse } from 'next/server';
import { getStripe } from '@/lib/stripe';
import { prisma } from '@/lib/db';
import Stripe from 'stripe';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  const sig = req.headers.get('stripe-signature');
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!sig || !webhookSecret) {
    return NextResponse.json({ error: 'Missing signature or secret' }, { status: 400 });
  }

  let event: Stripe.Event;
  const rawBody = await req.arrayBuffer();

  try {
    event = getStripe().webhooks.constructEvent(Buffer.from(rawBody), sig, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    const { bookingId, paymentType } = session.metadata ?? {};

    if (!bookingId) return NextResponse.json({ received: true });

    const booking = await prisma.booking.findUnique({ where: { id: bookingId } });
    if (!booking) return NextResponse.json({ received: true });

    const amountPaid = (session.amount_total ?? 0) / 100;
    const newAmountPaid = Number(booking.amountPaid ?? 0) + amountPaid;

    const isDepositPayment = paymentType === 'deposit';
    const isFullyPaid = newAmountPaid >= Number(booking.totalAmount);

    await prisma.$transaction([
      prisma.booking.update({
        where: { id: bookingId },
        data: {
          depositPaid: isDepositPayment ? true : booking.depositPaid,
          amountPaid: newAmountPaid,
          status: booking.status === 'PENDING' ? 'CONFIRMED' : booking.status,
          stripePaymentIntentId: session.payment_intent as string,
        },
      }),
      prisma.payment.create({
        data: {
          bookingId,
          amount: amountPaid,
          method: 'STRIPE',
          status: 'COMPLETED',
          stripePaymentIntentId: session.payment_intent as string,
          type: paymentType as 'deposit' | 'remaining' | 'full',
        },
      }),
    ]);

    if (booking.status === 'PENDING') {
      await prisma.bookingStatusHistory.create({
        data: { bookingId, status: 'CONFIRMED', note: 'Auto-confirmed after deposit payment' },
      });
    }
  }

  if (event.type === 'checkout.session.expired') {
    const session = event.data.object as Stripe.Checkout.Session;
    const { bookingId } = session.metadata ?? {};
    if (bookingId) {
      await prisma.booking.update({
        where: { id: bookingId },
        data: { stripeSessionId: null },
      });
    }
  }

  return NextResponse.json({ received: true });
}
