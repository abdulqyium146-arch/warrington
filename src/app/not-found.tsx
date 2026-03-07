import type { Metadata } from 'next';
import Link from 'next/link';
import { PHONE, PHONE_DISPLAY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Page Not Found | WCD Car Detailing Warrington',
  description: 'The page you were looking for could not be found. Return to WCD Car Detailing Warrington.',
  robots: { index: false, follow: false },
};

const quickLinks = [
  { label: 'Homepage', href: '/' },
  { label: 'Car Detailing Warrington', href: '/car-detailing' },
  { label: 'Mobile Car Valeting', href: '/mobile-car-valeting' },
  { label: 'Ceramic Coating', href: '/ceramic-coating' },
  { label: 'Paint Correction', href: '/paint-correction' },
  { label: 'Interior Detailing', href: '/interior-detailing' },
  { label: 'Headlight Restoration', href: '/headlight-restoration' },
  { label: 'Get a Free Quote', href: '/get-a-quote' },
  { label: 'FAQs', href: '/faq' },
  { label: 'About Us', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-24"
      style={{
        background:
          'radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.1) 0%, transparent 60%), #0a0a0a',
      }}
    >
      <div className="max-w-2xl w-full text-center">
        <div className="font-heading font-black text-8xl md:text-9xl text-transparent bg-clip-text bg-gradient-to-b from-brand-gold to-brand-gold-dark mb-4 leading-none">
          404
        </div>
        <h1 className="text-2xl font-bold text-brand-white mb-3">
          This page doesn&apos;t exist — but your clean car can.
        </h1>
        <p className="text-gray-400 mb-8">
          The page you&apos;re looking for has moved or never existed.
          Here&apos;s where you probably want to go:
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Link href="/" className="btn-primary text-center">
            Back to Home
          </Link>
          <a href={`tel:${PHONE}`} className="btn-secondary text-center">
            Call {PHONE_DISPLAY}
          </a>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-10">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="bg-brand-darkgray border border-brand-gray hover:border-brand-gold/50 text-gray-300 hover:text-brand-gold px-4 py-3 rounded-lg text-sm font-medium transition-all text-left"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <p className="text-gray-600 text-sm">
          Still stuck?{' '}
          <Link href="/contact" className="text-brand-gold hover:underline">
            Contact us
          </Link>{' '}
          and we&apos;ll help.
        </p>
      </div>
    </div>
  );
}
