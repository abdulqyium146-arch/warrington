'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { bookingEnquirySchema, type BookingEnquiryInput } from '@/lib/validations/booking-enquiry';
import { createBookingAction } from '@/app/actions/bookings';
import SuccessMessage from './SuccessMessage';

const inputClass =
  'w-full rounded-lg border border-brand-gray bg-brand-darkgray px-4 py-3 text-sm text-brand-white placeholder:text-gray-500 focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold transition-colors';

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<BookingEnquiryInput>({
    resolver: zodResolver(bookingEnquirySchema),
  });

  async function onSubmit(data: BookingEnquiryInput) {
    setServerError('');
    const result = await createBookingAction({
      full_name: data.full_name,
      phone: data.phone,
      notes: data.message ?? '',
    });
    if (result.success) {
      setSubmitted(true);
      reset();
    } else {
      setServerError(result.error ?? 'Something went wrong. Please try again.');
    }
  }

  if (submitted) {
    return <SuccessMessage onReset={() => setSubmitted(false)} />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-brand-white mb-1.5">
          Your Name <span className="text-brand-gold">*</span>
        </label>
        <input
          {...register('full_name')}
          type="text"
          placeholder="John Smith"
          className={inputClass}
        />
        {errors.full_name && (
          <p className="mt-1 text-xs text-red-400">{errors.full_name.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-brand-white mb-1.5">
          Phone Number <span className="text-brand-gold">*</span>
        </label>
        <input
          {...register('phone')}
          type="tel"
          placeholder="07700 900000"
          className={inputClass}
        />
        {errors.phone && (
          <p className="mt-1 text-xs text-red-400">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-brand-white mb-1.5">
          Message <span className="text-gray-500 font-normal">(optional)</span>
        </label>
        <textarea
          {...register('message')}
          rows={4}
          placeholder="Tell us about your vehicle, the service you need, or any questions…"
          className={`${inputClass} resize-none`}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
        )}
      </div>

      {serverError && (
        <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          {serverError}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-brand-gold px-8 py-3.5 text-sm font-semibold text-brand-black transition-colors hover:bg-brand-gold-light disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? 'Sending…' : 'Request a Callback'}
      </button>

      <p className="text-center text-xs text-gray-500">
        We&apos;ll call you back within a few hours to arrange your appointment.
      </p>
    </form>
  );
}
