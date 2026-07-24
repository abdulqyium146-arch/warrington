import type { Metadata } from 'next';
import BookingForm from '@/components/booking-form/BookingForm';

export const metadata: Metadata = {
  title: 'Book a Service | WCD Car Detailing',
  description:
    'Request a booking for car detailing, ceramic coating, paint correction, or any of our services in Warrington.',
  robots: 'index, follow',
};

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-brand-black">
      {/* Hero */}
      <section className="border-b border-brand-gray/50 bg-brand-darkgray py-14 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold mb-3">
            Book a Service
          </p>
          <h1 className="font-heading text-3xl font-bold text-brand-white sm:text-4xl">
            Request Your Appointment
          </h1>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-xl mx-auto">
            Fill in the form below and we&apos;ll get back to you within 24 hours to confirm
            your booking. No payment required at this stage.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-12 px-4">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-xl border border-brand-gray/50 bg-brand-darkgray p-6 sm:p-10">
            <BookingForm />
          </div>
        </div>
      </section>
    </main>
  );
}
