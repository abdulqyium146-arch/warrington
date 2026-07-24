'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { bookingEnquirySchema, type BookingEnquiryInput } from '@/lib/validations/booking-enquiry';
import { createBookingAction } from '@/app/actions/bookings';
import SuccessMessage from './SuccessMessage';

const SERVICES = [
  'Car Detailing',
  'Ceramic Coating',
  'Paint Correction / Machine Polishing',
  'Headlight Restoration',
  'Interior Detailing',
  'Mobile Car Valeting',
];

interface FieldProps {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}

function Field({ label, error, required, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-brand-white">
        {label}
        {required && <span className="text-brand-gold ml-1">*</span>}
      </label>
      {children}
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}

const inputClass =
  'w-full rounded-lg border border-brand-gray bg-brand-darkgray px-4 py-2.5 text-sm text-brand-white placeholder:text-gray-500 focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold transition-colors';

const selectClass =
  'w-full rounded-lg border border-brand-gray bg-brand-darkgray px-4 py-2.5 text-sm text-brand-white focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold transition-colors appearance-none';

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
    defaultValues: { notes: '' },
  });

  async function onSubmit(data: BookingEnquiryInput) {
    setServerError('');
    const result = await createBookingAction({
      full_name: data.full_name,
      email: data.email,
      phone: data.phone,
      address: data.address,
      preferred_date: '',
      preferred_time: '',
      notes: data.notes ?? '',
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
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      {/* Personal details */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Full Name" error={errors.full_name?.message} required>
          <input
            {...register('full_name')}
            type="text"
            placeholder="John Smith"
            className={inputClass}
          />
        </Field>

        <Field label="Email Address" error={errors.email?.message} required>
          <input
            {...register('email')}
            type="email"
            placeholder="john@example.com"
            className={inputClass}
          />
        </Field>

        <Field label="Phone Number" error={errors.phone?.message} required>
          <input
            {...register('phone')}
            type="tel"
            placeholder="07700 900000"
            className={inputClass}
          />
        </Field>

        <Field label="Address" error={errors.address?.message} required>
          <input
            {...register('address')}
            type="text"
            placeholder="123 High Street, Warrington, WA1 1AA"
            className={inputClass}
          />
        </Field>
      </div>

      {/* Vehicle & Service */}
      <div>
        <h3 className="text-sm font-semibold text-brand-gold uppercase tracking-wider mb-4">
          Vehicle & Service
        </h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Field label="Vehicle Make" error={errors.vehicle_make?.message} required>
            <input
              {...register('vehicle_make')}
              type="text"
              placeholder="e.g. BMW"
              className={inputClass}
            />
          </Field>

          <Field label="Vehicle Model" error={errors.vehicle_model?.message} required>
            <input
              {...register('vehicle_model')}
              type="text"
              placeholder="e.g. 3 Series"
              className={inputClass}
            />
          </Field>

          <Field label="Select Service" error={errors.service?.message} required>
            <div className="relative">
              <select {...register('service')} className={selectClass}>
                <option value="">Choose a service…</option>
                {SERVICES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">▾</span>
            </div>
          </Field>
        </div>
      </div>

      {/* Notes */}
      <Field label="Additional Notes" error={errors.notes?.message}>
        <textarea
          {...register('notes')}
          rows={4}
          placeholder="Tell us anything else we should know — condition of the vehicle, specific concerns, etc."
          className={`${inputClass} resize-none`}
        />
      </Field>

      {serverError && (
        <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          {serverError}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto rounded-lg bg-brand-gold px-8 py-3 text-sm font-semibold text-brand-black transition-colors hover:bg-brand-gold-light disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? 'Submitting…' : 'Request Booking'}
      </button>
    </form>
  );
}
