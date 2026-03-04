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
      className={`py-16 ${
        dark ? 'bg-brand-darkgray' : 'bg-brand-black'
      } border-y border-brand-gray`}
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="section-subheading">Get Started Today</p>
        <h2 className="section-heading mb-4">{title}</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={`tel:${PHONE}`} className="btn-primary text-base py-4 px-8">
            📞 Call {PHONE_DISPLAY}
          </a>
          <Link href="/contact" className="btn-secondary text-base py-4 px-8">
            Get a Free Quote
          </Link>
        </div>
        <p className="mt-4 text-gray-500 text-sm">
          Open 24 hours · No hidden fees · Free estimates
        </p>
      </div>
    </section>
  );
}
