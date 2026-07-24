import type { Metadata } from 'next';
import Link from 'next/link';
import { prisma } from '@/lib/db';
import { CheckCircle2, Calendar, Phone, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatCurrency, formatDateTime } from '@/lib/utils';

export const metadata: Metadata = { title: 'Booking Confirmed | WCD Detailing' };
export const dynamic = 'force-dynamic';

interface PageProps {
  searchParams: Promise<{ ref?: string; paid?: string }>;
}

export default async function ConfirmationPage({ searchParams }: PageProps) {
  const { ref, paid: paidStr } = await searchParams;
  const paid = paidStr === 'true';

  const booking = ref
    ? await prisma.booking.findUnique({
        where: { bookingRef: ref },
        include: {
          customer: { select: { firstName: true, email: true } },
          services: { include: { service: { select: { name: true } } } },
        },
      })
    : null;

  return (
    <div className="min-h-screen bg-brand-black flex items-center justify-center p-4">
      <div className="max-w-lg w-full text-center space-y-8">
        <div>
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/10 mb-4">
            <CheckCircle2 className="h-10 w-10 text-green-400" />
          </div>
          <h1 className="text-3xl font-heading font-bold text-brand-white">
            {paid ? 'Booking Confirmed!' : 'Booking Received!'}
          </h1>
          <p className="text-gray-400 mt-2">
            {paid
              ? 'Your deposit has been paid and your appointment is secured.'
              : 'We\'ve received your booking and will be in touch shortly to confirm.'}
          </p>
        </div>

        {booking && (
          <div className="bg-brand-darkgray border border-brand-gray/50 rounded-2xl p-6 text-left space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-gray-400 text-sm">Booking Reference</p>
              <p className="font-mono font-bold text-brand-gold">{booking.bookingRef}</p>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-gray-400 text-sm">Service</p>
              <p className="text-brand-white">{booking.services[0]?.name || booking.services[0]?.service.name}</p>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-gray-400 text-sm">Date & Time</p>
              <p className="text-brand-white">{formatDateTime(booking.scheduledDate)}</p>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-gray-400 text-sm">Total</p>
              <p className="text-brand-white font-semibold">{formatCurrency(booking.totalAmount)}</p>
            </div>

            {paid && (
              <div className="flex items-center justify-between">
                <p className="text-gray-400 text-sm">Deposit Paid</p>
                <p className="text-green-400 font-semibold">{formatCurrency(booking.depositAmount)}</p>
              </div>
            )}

            <div className="pt-4 border-t border-brand-gray/50">
              <p className="text-sm text-gray-400">
                A confirmation email has been sent to{' '}
                <span className="text-brand-white">{booking.customer.email}</span>
              </p>
            </div>
          </div>
        )}

        {!booking && (
          <div className="bg-brand-darkgray border border-brand-gray/50 rounded-2xl p-6">
            <p className="text-gray-400">Your booking has been submitted. Check your email for confirmation details.</p>
          </div>
        )}

        <div className="space-y-3 text-sm text-gray-400">
          <p className="font-medium text-brand-white">What happens next?</p>
          <div className="text-left space-y-2">
            <p>1. You&rsquo;ll receive a confirmation email with your appointment details</p>
            <p>2. We&rsquo;ll call you the day before to confirm timing</p>
            <p>3. Arrive at your scheduled time and we&rsquo;ll take care of the rest</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/">
            <Button variant="outline">Return to Site</Button>
          </Link>
          <Link href="/booking">
            <Button>
              Book Another Service <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
          <a href="tel:07XXXXXXXXX" className="flex items-center gap-1.5 hover:text-brand-gold transition-colors">
            <Phone className="h-4 w-4" /> Call Us
          </a>
          <a href="mailto:info@warringtoncardetailing.co.uk" className="flex items-center gap-1.5 hover:text-brand-gold transition-colors">
            <Mail className="h-4 w-4" /> Email Us
          </a>
        </div>
      </div>
    </div>
  );
}
