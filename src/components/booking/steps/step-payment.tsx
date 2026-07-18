'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { formatCurrency, formatDate } from '@/lib/utils';
import { ArrowLeft, CreditCard, Shield, Check, Loader2 } from 'lucide-react';
import type { CustomerFormValues } from './step-customer';
import type { VehicleFormValues } from './step-vehicle';
import type { ServiceSelection, ServiceOption } from './step-service';
import type { DateTimeSelection } from './step-datetime';

interface StepPaymentProps {
  customer: CustomerFormValues;
  vehicle: VehicleFormValues;
  serviceSelection: ServiceSelection;
  services: ServiceOption[];
  dateTime: DateTimeSelection;
  notes: string;
  onBack: () => void;
  onSuccess: (bookingRef: string) => void;
}

export function StepPayment({ customer, vehicle, serviceSelection, services, dateTime, notes, onBack, onSuccess }: StepPaymentProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [bookingRef, setBookingRef] = useState('');

  const selectedService = services.find((s) => s.id === serviceSelection.serviceId)!;
  const selectedAddons = services
    .flatMap((s) => s.addons)
    .filter((a) => serviceSelection.addonIds.includes(a.id));

  const serviceTotal = Number(selectedService?.basePrice ?? 0);
  const addonTotal = selectedAddons.reduce((sum, a) => sum + Number(a.price), 0);
  const total = serviceTotal + addonTotal;
  const deposit = Math.round(total * 0.25 * 100) / 100;
  const remaining = total - deposit;

  const handleBookNow = async () => {
    setLoading(true);
    setError('');

    try {
      const bookingRes = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer,
          vehicle,
          services: [{ serviceId: serviceSelection.serviceId, quantity: 1 }],
          addonIds: serviceSelection.addonIds,
          scheduledDate: dateTime.date,
          scheduledTime: dateTime.time,
          notes,
        }),
      });

      const bookingData = await bookingRes.json();

      if (!bookingRes.ok) {
        setError(bookingData.error ?? 'Failed to create booking. Please try again.');
        setLoading(false);
        return;
      }

      const { bookingRef: ref, booking } = bookingData;
      setBookingRef(ref);

      const paymentRes = await fetch('/api/payments/create-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bookingId: booking.id, type: 'deposit' }),
      });

      const paymentData = await paymentRes.json();
      if (!paymentRes.ok || !paymentData.url) {
        onSuccess(ref);
        return;
      }

      window.location.href = paymentData.url;
    } catch {
      setError('Something went wrong. Please try again or call us directly.');
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-heading font-bold text-brand-white">Review & Pay</h2>
        <p className="text-gray-400 text-sm mt-1">Please review your booking before confirming</p>
      </div>

      <div className="bg-brand-darkgray border border-brand-gray/50 rounded-xl divide-y divide-brand-gray/50">
        <div className="p-4">
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Customer</p>
          <p className="text-brand-white font-medium">{customer.firstName} {customer.lastName}</p>
          <p className="text-gray-400 text-sm">{customer.email} • {customer.phone}</p>
        </div>

        <div className="p-4">
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Vehicle</p>
          <p className="text-brand-white font-medium">{vehicle.year} {vehicle.make} {vehicle.model}</p>
          {vehicle.registration && <p className="text-gray-400 text-sm font-mono">{vehicle.registration.toUpperCase()}</p>}
        </div>

        <div className="p-4">
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Appointment</p>
          <p className="text-brand-white font-medium">
            {formatDate(new Date(dateTime.date))} at {dateTime.time}
          </p>
        </div>

        <div className="p-4">
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Services</p>
          <div className="space-y-1.5">
            <div className="flex justify-between text-sm">
              <span className="text-brand-white">{selectedService?.name}</span>
              <span className="text-brand-white">{formatCurrency(selectedService?.basePrice ?? 0)}</span>
            </div>
            {selectedAddons.map((a) => (
              <div key={a.id} className="flex justify-between text-sm">
                <span className="text-gray-400">{a.name}</span>
                <span className="text-gray-400">+{formatCurrency(a.price)}</span>
              </div>
            ))}
            <div className="flex justify-between font-bold text-brand-gold pt-2 border-t border-brand-gray/50 mt-2">
              <span>Total</span>
              <span>{formatCurrency(total)}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-brand-gold/10 border border-brand-gold/30 rounded-xl p-5">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-brand-gold font-semibold">Deposit Required Today</p>
            <p className="text-gray-400 text-sm mt-1">25% deposit to secure your booking</p>
          </div>
          <p className="text-3xl font-heading font-bold text-brand-gold">{formatCurrency(deposit)}</p>
        </div>
        <div className="mt-3 pt-3 border-t border-brand-gold/20">
          <p className="text-xs text-gray-400">Remaining balance <span className="text-brand-white font-medium">{formatCurrency(remaining)}</span> due on the day</p>
        </div>
      </div>

      <div className="flex items-start gap-2 text-xs text-gray-500">
        <Shield className="h-4 w-4 shrink-0 mt-0.5 text-gray-400" />
        <p>Your payment is secured by Stripe. We never store your card details. You can cancel free of charge up to 48 hours before your appointment.</p>
      </div>

      {error && (
        <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">{error}</div>
      )}

      <div className="flex items-center gap-3">
        <Button type="button" variant="outline" onClick={onBack} disabled={loading}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        <Button onClick={handleBookNow} disabled={loading} className="flex-1 sm:flex-none">
          {loading ? (
            <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Processing...</>
          ) : (
            <><CreditCard className="mr-2 h-4 w-4" />Pay Deposit {formatCurrency(deposit)}</>
          )}
        </Button>
      </div>
    </div>
  );
}
