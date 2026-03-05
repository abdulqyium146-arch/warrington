import Link from 'next/link';
import {
  PHONE,
  PHONE_DISPLAY,
  EMAIL,
  ADDRESS,
  FACEBOOK,
  INSTAGRAM,
  AREAS_SERVED,
} from '@/lib/constants';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-darkgray border-t border-brand-gray">
      {/* CTA Banner */}
      <div className="bg-gradient-gold py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading font-black text-2xl md:text-4xl text-brand-black mb-3">
            Ready to Transform Your Vehicle?
          </h2>
          <p className="text-brand-black/80 mb-6 text-lg">
            Book your car detailing or mobile valeting service in Warrington today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center gap-2 bg-brand-black text-brand-gold font-bold py-3 px-8 rounded-md hover:bg-brand-darkgray transition-colors"
            >
              📞 Call Now — {PHONE_DISPLAY}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-brand-black text-brand-black font-bold py-3 px-8 rounded-md hover:bg-brand-black hover:text-brand-gold transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center font-heading font-black text-brand-black text-lg">
                W
              </div>
              <div>
                <div className="font-heading font-black text-brand-white text-lg">WCD</div>
                <div className="text-brand-gold text-xs font-semibold tracking-widest">
                  CAR DETAILING
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Warrington&apos;s premier car detailing and mobile valeting specialists.
              Professional results, exceptional service, every time.
            </p>
            <div className="flex gap-3">
              <a
                href={FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-brand-gray hover:bg-brand-gold hover:text-brand-black transition-all flex items-center justify-center text-gray-300"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-brand-gray hover:bg-brand-gold hover:text-brand-black transition-all flex items-center justify-center text-gray-300 font-bold text-xs"
                aria-label="Instagram"
              >
                ig
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-brand-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                { href: '/car-detailing', label: 'Car Detailing' },
                { href: '/mobile-car-valeting', label: 'Mobile Car Valeting' },
                { href: '/ceramic-coating', label: 'Ceramic Coating' },
                { href: '/paint-correction', label: 'Paint Correction' },
                { href: '/interior-detailing', label: 'Interior Detailing' },
                { href: '/headlight-restoration', label: 'Headlight Restoration' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-brand-gold transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="text-brand-gold/60">→</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas Served */}
          <div>
            <h3 className="font-heading font-bold text-brand-white mb-4">Areas We Cover</h3>
            <ul className="space-y-1.5 columns-2">
              {AREAS_SERVED.map((area) => (
                <li key={area} className="text-gray-400 text-sm flex items-center gap-1.5">
                  <span className="text-brand-gold/60">•</span>
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-brand-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <span className="text-brand-gold mt-0.5">📍</span>
                <span>{ADDRESS}</span>
              </li>
              <li>
                <a
                  href={`tel:${PHONE}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-brand-gold transition-colors text-sm"
                >
                  <span className="text-brand-gold">📞</span>
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-brand-gold transition-colors text-sm"
                >
                  <span className="text-brand-gold">✉</span>
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <span className="text-brand-gold">🕐</span>
                Open 24 Hours, 7 Days
              </li>
              <li>
                <a
                  href="https://share.google/Srfz4m37t6oxFsNHX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-brand-gold transition-colors text-sm font-bold"
                >
                  <span className="text-brand-gold">📍</span>
                  Visit on Google
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-brand-gray flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {year} WCD Car Detailing Warrington. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-brand-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-brand-gold transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap.xml" className="hover:text-brand-gold transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
