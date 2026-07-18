import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { getStripe } from '@/lib/stripe';
import { z } from 'zod';

const schema = z.object({
  bookingId: z.string(),
  type: z.enum(['deposit', 'remaining', 'full']).optional().default('deposit'),
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid request', issues: parsed.error.issues }, { status: 400 });
  }

  const { bookingId, type } = parsed.data;

  const booking = await prisma.booking.findFirst({
    where: { OR: [{ id: bookingId }, { bookingRef: bookingId }] },
    include: { customer: true, services: { include: { service: true } } },
  });
  if (!booking) return NextResponse.json({ error: 'Booking not found' }, { status: 404 });
  if (booking.status === 'CANCELLED') {
    return NextResponse.json({ error: 'Cannot pay for a cancelled booking' }, { status: 422 });
  }

  let amount: number;
  let description: string;
  if (type === 'deposit') {
    if (booking.depositPaid) return NextResponse.json({ error: 'Deposit already paid' }, { status: 422 });
    amount = Math.round(Number(booking.depositAmount) * 100);
    description = `Deposit for booking ${booking.bookingRef}`;
  } else if (type === 'remaining') {
    const remaining = Number(booking.totalAmount) - Number(booking.amountPaid ?? 0);
    amount = Math.round(remaining * 100);
    description = `Remaining balance for booking ${booking.bookingRef}`;
  } else {
    amount = Math.round(Number(booking.totalAmount) * 100);
    description = `Full payment for booking ${booking.bookingRef}`;
  }

  if (amount <= 0) return NextResponse.json({ error: 'Nothing to pay' }, { status: 422 });

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? process.env.NEXTAUTH_URL ?? 'http://localhost:3000';

  const session = await getStripe().checkout.sessions.create({
    mode: 'payment',
    payment_method_types: ['card'],
    customer_email: booking.customer.email,
    line_items: [
      {
        price_data: {
          currency: 'gbp',
          unit_amount: amount,
          product_data: {
            name: description,
            description: booking.services.map((s) => s.name).join(', '),
          },
        },
        quantity: 1,
      },
    ],
    metadata: {
      bookingId: booking.id,
      bookingRef: booking.bookingRef,
      paymentType: type,
    },
    success_url: `${baseUrl}/book/confirmation?ref=${booking.bookingRef}&paid=true`,
    cancel_url: `${baseUrl}/book/confirmation?ref=${booking.bookingRef}&paid=false`,
  });

  await prisma.booking.update({
    where: { id: booking.id },
    data: { stripeSessionId: session.id },
  });

  return NextResponse.json({ url: session.url, sessionId: session.id });
}
