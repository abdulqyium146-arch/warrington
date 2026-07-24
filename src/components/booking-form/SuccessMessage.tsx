import { CheckCircle } from 'lucide-react';

interface SuccessMessageProps {
  onReset: () => void;
}

export default function SuccessMessage({ onReset }: SuccessMessageProps) {
  return (
    <div className="flex flex-col items-center gap-6 py-12 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-gold/15 ring-1 ring-brand-gold/40">
        <CheckCircle className="h-10 w-10 text-brand-gold" />
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-heading font-bold text-brand-white">
          Booking Request Received!
        </h2>
        <p className="max-w-md text-sm text-gray-400 leading-relaxed">
          Thank you for your enquiry. Our team will review your request and contact you
          within 24 hours to confirm your appointment.
        </p>
      </div>

      <div className="rounded-lg border border-brand-gray bg-brand-darkgray px-6 py-4 text-left space-y-1 w-full max-w-sm">
        <p className="text-xs font-semibold text-brand-gold uppercase tracking-wider">What happens next?</p>
        <ul className="mt-2 space-y-1.5 text-sm text-gray-400">
          <li>✓ We&apos;ll review your preferred date &amp; time</li>
          <li>✓ You&apos;ll receive a confirmation call or text</li>
          <li>✓ We&apos;ll send a booking confirmation email</li>
        </ul>
      </div>

      <button
        onClick={onReset}
        className="text-sm text-brand-gold underline underline-offset-4 hover:text-brand-gold-light transition-colors"
      >
        Submit another booking
      </button>
    </div>
  );
}
