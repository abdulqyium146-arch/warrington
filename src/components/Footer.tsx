import Link from 'next/link';
import { PHONE, PHONE_DISPLAY, EMAIL, ADDRESS } from '@/lib/constants';

const footerLinks = {
  services: [
    { label: 'Car Detailing Warrington', href: '/car-detailing' },
    { label: 'Mobile Car Valeting', href: '/mobile-car-valeting' },
    { label: 'Ceramic Coating', href: '/ceramic-coating' },
    { label: 'Paint Correction', href: '/paint-correction' },
    { label: 'Interior Detailing', href: '/interior-detailing' },
    { label: 'Headlight Restoration', href: '/headlight-restoration' },
    { label: 'Mobile Detailing Warrington', href: '/mobile-car-detailing-warrington' },
  ],
  warringtonAreas: [
    { label: 'Car Detailing Warrington', href: '/car-detailing-warrington' },
    { label: 'Great Sankey', href: '/car-detailing-great-sankey-warrington' },
    { label: 'Stockton Heath', href: '/car-detailing-stockton-heath-warrington' },
    { label: 'Birchwood', href: '/car-detailing-birchwood-warrington' },
    { label: 'Padgate', href: '/car-detailing-padgate-warrington' },
    { label: 'Latchford', href: '/car-detailing-latchford-warrington' },
    { label: 'Fearnhead', href: '/car-detailing-fearnhead-warrington' },
    { label: 'Grappenhall', href: '/car-detailing-grappenhall-warrington' },
    { label: 'Westbrook', href: '/car-detailing-westbrook-warrington' },
    { label: 'Penketh', href: '/car-detailing-penketh-warrington' },
    { label: 'Woolston', href: '/car-detailing-woolston-warrington' },
    { label: 'Appleton', href: '/car-detailing-appleton-warrington' },
    { label: 'Callands', href: '/car-detailing-callands-warrington' },
    { label: 'Culcheth', href: '/car-detailing-culcheth-warrington' },
    { label: 'Thelwall', href: '/car-detailing-thelwall-warrington' },
  ],
  surroundingTowns: [
    { label: 'Car Detailing St Helens', href: '/car-detailing-st-helens' },
    { label: 'Car Detailing Widnes', href: '/car-detailing-widnes' },
    { label: 'Car Detailing Runcorn', href: '/car-detailing-runcorn' },
    { label: 'Car Detailing Wigan', href: '/car-detailing-wigan' },
    { label: 'Car Detailing Sale', href: '/car-detailing-sale' },
    { label: 'Car Detailing Stockport', href: '/car-detailing-stockport' },
    { label: 'Car Detailing Manchester', href: '/car-detailing-manchester' },
    { label: 'Car Detailing Liverpool', href: '/car-detailing-liverpool' },
    { label: 'Car Detailing Chester', href: '/car-detailing-chester' },
    { label: 'Car Detailing Northwich', href: '/car-detailing-northwich' },
    { label: 'Car Detailing Knutsford', href: '/car-detailing-knutsford' },
    { label: 'Car Detailing Newton-le-Willows', href: '/car-detailing-newton-le-willows' },
    { label: 'Car Detailing Lymm', href: '/car-detailing-lymm' },
  ],
  company: [
    { label: 'About WCD', href: '/about' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Blog', href: '/blog' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
    { label: 'Get a Free Quote', href: '/get-a-quote' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Sitemap', href: '/sitemap.xml' },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="bg-brand-black border-t border-brand-gray">
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
              aria-label={`Call WCD Car Detailing on ${PHONE_DISPLAY}`}
            >
              📞 Call Now — {PHONE_DISPLAY}
            </a>
            <Link
              href="/get-a-quote"
              className="inline-flex items-center justify-center gap-2 border-2 border-brand-black text-brand-black font-bold py-3 px-8 rounded-md hover:bg-brand-black hover:text-brand-gold transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10">

          {/* Brand + NAP */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center font-heading font-black text-brand-black text-lg">
                W
              </div>
              <div>
                <div className="font-heading font-black text-brand-white text-lg">WCD</div>
                <div className="text-brand-gold text-xs font-semibold tracking-widest">CAR DETAILING</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Warrington&apos;s premier car detailing and mobile valeting specialists.
              Professional results, every time.
            </p>
            {/* NAP in address — machine-readable for schema signals */}
            <address className="not-italic text-sm text-gray-400 space-y-1 mb-4">
              <div className="font-semibold text-brand-white">WCD Car Detailing</div>
              <div>{ADDRESS}</div>
              <div className="pt-1">
                <a
                  href={`tel:${PHONE}`}
                  className="text-brand-gold hover:text-brand-gold-light font-medium transition-colors"
                  aria-label={`Call WCD on ${PHONE_DISPLAY}`}
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
              <div>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-brand-gold hover:text-brand-gold-light transition-colors"
                >
                  {EMAIL}
                </a>
              </div>
              <div className="text-gray-500 text-xs pt-1">Open 24 hours · 7 days a week</div>
            </address>
            {/* Rating badge */}
            <div className="p-3 bg-brand-darkgray border border-brand-gray rounded-lg inline-block">
              <div className="text-yellow-400 text-lg leading-none">★★★★★</div>
              <div className="text-brand-white text-sm font-semibold">5.0 / 5.0</div>
              <div className="text-gray-500 text-xs">47 Google Reviews</div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-brand-white text-sm mb-4 uppercase tracking-wider">
              Our Services
            </h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-brand-gold text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Warrington areas */}
          <div>
            <h3 className="font-heading font-bold text-brand-white text-sm mb-4 uppercase tracking-wider">
              Warrington Areas
            </h3>
            <ul className="space-y-2">
              {footerLinks.warringtonAreas.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-brand-gold text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Surrounding towns */}
          <div>
            <h3 className="font-heading font-bold text-brand-white text-sm mb-4 uppercase tracking-wider">
              Areas Covered
            </h3>
            <ul className="space-y-2">
              {footerLinks.surroundingTowns.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-brand-gold text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading font-bold text-brand-white text-sm mb-4 uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-brand-gold text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-brand-gray/50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>© {year} WCD Car Detailing Warrington. All rights reserved.</p>
          <p className="text-center">
            <span>{ADDRESS}</span>
            <span className="mx-2">·</span>
            <a href={`tel:${PHONE}`} className="hover:text-brand-gold transition-colors">
              {PHONE_DISPLAY}
            </a>
            <span className="mx-2">·</span>
            <span>Registered in England &amp; Wales</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
