import type { Metadata } from 'next';
import Link from 'next/link';
import { PHONE, PHONE_DISPLAY } from '@/lib/constants';

export const metadata: Metadata = {
  title: {
    default: 'Book a Service | WCD Detailing',
    template: '%s | Book — WCD Detailing',
  },
  description: 'Book your car detailing, ceramic coating, or paint correction service online. Fast, secure, and easy.',
  robots: { index: true, follow: true },
};

export default function BookingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-brand-black flex flex-col">
      {/* Minimal header — no navigation distractions during booking */}
      <header className="border-b border-brand-gray bg-brand-darkgray">
        <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2"
            aria-label="WCD Detailing — Return to home"
          >
            <div className="w-8 h-8 bg-gradient-gold rounded-lg flex items-center justify-center">
              <span className="text-brand-black font-heading font-black text-sm">W</span>
            </div>
            <span className="text-brand-white font-heading font-bold text-sm hidden sm:block">
              WCD Detailing
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${PHONE}`}
              className="text-sm text-gray-400 hover:text-brand-gold transition-colors flex items-center gap-1.5"
              aria-label={`Need help? Call ${PHONE_DISPLAY}`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="hidden sm:inline">Need help?</span>
              <span className="text-brand-gold font-semibold">{PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </header>

      {/* Page content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Minimal footer */}
      <footer className="border-t border-brand-gray py-4 text-center">
        <p className="text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} WCD Detailing. Secure booking powered by Stripe.
        </p>
      </footer>
    </div>
  );
}
