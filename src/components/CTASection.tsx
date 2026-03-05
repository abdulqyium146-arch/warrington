import Link from 'next/link';
import { PHONE, PHONE_DISPLAY } from '@/lib/constants';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  dark?: boolean;
}

export default function CTASection({
  title = 'Ready to Book Your Detailing?',
  subtitle = 'Professional car detailing and mobile valeting across Warrington and surrounding areas. Get in touch for a free quote.',
  dark = false,
}: CTASectionProps) {
  return (
    <section
      className={`py-12 md:py-16 lg:py-20 ${
        dark ? 'bg-brand-darkgray' : 'bg-gradient-dark'
      } border-y border-brand-gold/20`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Subheading */}
        <p className="section-subheading">Get Started Today</p>

        {/* Main heading */}
        <h2 className="section-heading mb-4 md:mb-6">{title}</h2>

        {/* Subtitle text */}
        <p className="text-gray-400 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
          {subtitle}
        </p>

        {/* CTA Buttons - Stacked on mobile, side-by-side on larger screens */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 md:mb-8">
          <a
            href={`tel:${PHONE}`}
            className="btn-primary text-base md:text-lg py-4 md:py-4 px-6 md:px-8 w-full sm:w-auto justify-center"
          >
            📞 Call {PHONE_DISPLAY}
          </a>
          <Link
            href="/contact"
            className="btn-secondary text-base md:text-lg py-4 md:py-4 px-6 md:px-8 w-full sm:w-auto justify-center"
          >
            Get a Free Quote
          </Link>
        </div>

        {/* Trust indicators */}
        <p className="text-gray-500 text-xs md:text-sm space-x-4 md:space-x-6 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-0">
          <span>✓ Open 24 hours</span>
          <span className="hidden md:inline">·</span>
          <span>✓ No hidden fees</span>
          <span className="hidden md:inline">·</span>
          <span>✓ Free estimates</span>
        </p>
      </div>
    </section>
  );
}
