import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL, PHONE, PHONE_DISPLAY, EMAIL } from '@/lib/constants';
import JsonLd from '@/components/JsonLd';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'About WCD Car Detailing — Warrington\'s Local Specialists',
  description:
    'Learn about WCD Car Detailing — Warrington\'s trusted mobile car detailing and valeting specialists. Professional results, local knowledge, 5-star rated service.',
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: 'About WCD Car Detailing — Warrington\'s Local Specialists',
    description:
      'Learn about WCD Car Detailing — Warrington\'s trusted mobile car detailing and valeting specialists. Professional results, local knowledge, 5-star rated service.',
    url: `${SITE_URL}/about`,
    type: 'website',
  },
};

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About WCD Car Detailing Warrington',
  url: `${SITE_URL}/about`,
  description:
    'WCD Car Detailing is Warrington\'s premier mobile car detailing and valeting service, serving the WA1–WA5 postcodes and surrounding areas.',
  mainEntity: {
    '@type': 'LocalBusiness',
    name: 'WCD Car Detailing',
    description:
      'Professional mobile car detailing and valeting service based in Warrington, serving Cheshire and Greater Manchester.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Unit 1, Fairclough Mill',
      addressLocality: 'Warrington',
      postalCode: 'WA5 1AH',
      addressCountry: 'GB',
    },
    telephone: PHONE,
    email: EMAIL,
    areaServed: ['Warrington', 'St Helens', 'Widnes', 'Runcorn', 'Wigan', 'Sale', 'Knutsford'],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '47',
      bestRating: '5',
    },
    knowsAbout: [
      'Car detailing',
      'Mobile car valeting',
      'Ceramic coating',
      'Paint correction',
      'Interior detailing',
      'Headlight restoration',
    ],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'About', item: `${SITE_URL}/about` },
  ],
};

const credentials = [
  {
    icon: '★',
    title: '5.0 Google Rating',
    detail: '47 verified reviews from real Warrington customers',
  },
  {
    icon: '✓',
    title: 'Fully Insured',
    detail: 'Public liability and trade vehicle insurance',
  },
  {
    icon: '⊕',
    title: 'Professional Products',
    detail: 'Koch Chemie, CarPro, and IGL ceramic grade chemicals',
  },
  {
    icon: '◎',
    title: 'Specialist Equipment',
    detail: 'Dual-action polishers, steam cleaners, HEPA extraction',
  },
  {
    icon: '♦',
    title: 'Ceramic Coating Trained',
    detail: 'IGL Coatings certified application technician',
  },
  {
    icon: '◈',
    title: 'Paint Correction Expertise',
    detail: 'Multi-stage defect removal on all paint types',
  },
];

const services = [
  {
    name: 'Mobile Car Valeting',
    href: '/mobile-car-valeting',
    desc: 'Full valet at your door, anywhere in Warrington.',
  },
  {
    name: 'Car Detailing',
    href: '/car-detailing',
    desc: 'Deep-clean detailing beyond a standard valet.',
  },
  {
    name: 'Ceramic Coating',
    href: '/ceramic-coating',
    desc: 'Nano-ceramic protection lasting 3–5 years.',
  },
  {
    name: 'Paint Correction',
    href: '/paint-correction',
    desc: 'Multi-stage swirl and scratch removal.',
  },
  {
    name: 'Interior Detailing',
    href: '/interior-detailing',
    desc: 'Full cabin deep-clean, sanitise and protect.',
  },
  {
    name: 'Headlight Restoration',
    href: '/headlight-restoration',
    desc: 'Restore clarity and legal compliance in 60 min.',
  },
];

const reviews = [
  {
    name: 'James T.',
    location: 'Stockton Heath',
    text: 'Absolutely outstanding. My BMW looked better than when I bought it. The paint correction removed swirls I thought were permanent.',
    rating: 5,
  },
  {
    name: 'Sarah M.',
    location: 'Padgate',
    text: 'Booked the mobile valet — they came to my office in Warrington. Spotless work, very professional team. Will definitely rebook.',
    rating: 5,
  },
  {
    name: 'Mike R.',
    location: 'Great Sankey',
    text: 'Had the ceramic coating done on my new car. The water beads like nothing I\'ve seen. Excellent service, great value.',
    rating: 5,
  },
  {
    name: 'Claire H.',
    location: 'Birchwood',
    text: 'Interior detailing on a family car with dog hair everywhere — they made it look factory fresh. Incredible results.',
    rating: 5,
  },
];

const coverage = [
  'Warrington', 'Great Sankey', 'Stockton Heath', 'Birchwood', 'Padgate',
  'Latchford', 'Fearnhead', 'Grappenhall', 'Westbrook', 'Penketh',
  'St Helens', 'Widnes', 'Runcorn', 'Wigan', 'Sale', 'Knutsford',
];

export default function AboutPage() {
  return (
    <article>
      <JsonLd data={aboutSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Hero */}
      <header
        className="relative pt-32 pb-20 px-4 text-center overflow-hidden"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.15) 0%, transparent 70%), #0a0a0a',
        }}
      >
        <div className="max-w-4xl mx-auto">
          <Breadcrumb
            items={[
              { name: 'Home', href: '/' },
              { name: 'About', href: '/about' },
            ]}
          />
          <h1 className="font-heading font-black text-4xl md:text-6xl text-brand-white mt-6 mb-6 leading-tight">
            About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-300">
              WCD Car Detailing
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
            Warrington&apos;s Local Car Detailing Specialists
          </p>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            WCD Car Detailing is a professional mobile car detailing and valeting service based in
            Warrington, WA5. We serve customers across the WA1–WA5 postcodes, Cheshire, and Greater
            Manchester, delivering showroom-quality results at your home or workplace.
          </p>
        </div>
      </header>

      {/* Who We Are */}
      <section id="who-we-are" aria-label="Who we are" className="py-20 px-4 bg-brand-darkgray">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading font-black text-3xl md:text-4xl text-brand-white mb-6">
              Who We Are
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              WCD Car Detailing is Warrington&apos;s trusted name for professional car care. We
              specialise in mobile car valeting, paint correction, ceramic coatings, and full
              interior detailing — combining professional-grade products with genuine attention to
              detail.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              Based at Unit 1, Fairclough Mill, Warrington WA5 1AH, we operate a fully mobile
              service that comes to you — whether you&apos;re at home in Stockton Heath, at the office in
              Birchwood, or anywhere across the wider Warrington area.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              We work on all vehicle types: family hatchbacks, prestige and luxury cars, sports cars,
              SUVs and 4x4s, vans, and fleet vehicles. Every job gets the same level of care,
              regardless of vehicle age or value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${PHONE}`}
                className="btn-primary text-center"
              >
                Call {PHONE_DISPLAY}
              </a>
              <Link href="/contact" className="btn-secondary text-center">
                Get a Free Quote
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '5.0★', label: 'Google Rating' },
              { value: '47+', label: 'Verified Reviews' },
              { value: '500+', label: 'Cars Detailed' },
              { value: '28+', label: 'Areas Covered' },
            ].map((stat) => (
              <div key={stat.label} className="card-dark rounded-xl p-6 text-center">
                <div className="font-heading font-black text-3xl text-brand-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section id="our-story" aria-label="Our story" className="py-20 px-4 bg-brand-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading font-black text-3xl md:text-4xl text-brand-white mb-6">
            Our Story
          </h2>
          <div className="gold-divider mb-8" />
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            WCD Car Detailing was founded with a simple aim: to provide Warrington car owners with a
            genuinely professional detailing service that comes to them — no inconvenient drop-offs,
            no waiting around.
          </p>
          <p className="text-gray-400 leading-relaxed mb-6">
            What started as a local mobile valeting operation quickly expanded to cover the full
            spectrum of professional car care: multi-stage paint correction, IGL ceramic coating
            application, deep interior sanitisation, and headlight restoration. We invested in
            professional equipment — dual-action polishers, hot water extraction machines, steam
            cleaners — and professional-grade products from Koch Chemie, CarPro, and IGL Coatings.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Today, WCD Car Detailing serves customers across Warrington, St Helens, Widnes, Runcorn,
            Sale, Knutsford, and surrounding areas. Our 5.0 Google rating across 47 reviews reflects
            our commitment to quality over quantity — every vehicle is treated as if it were our own.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section id="what-we-do" aria-label="Our services" className="py-20 px-4 bg-brand-darkgray">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading font-black text-3xl md:text-4xl text-brand-white mb-4">
              What We Do
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We offer a full range of professional car care services across Warrington and the
              surrounding area.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                className="card-dark rounded-xl p-6 hover:border-brand-gold/50 transition-all group"
              >
                <h3 className="font-heading font-bold text-brand-white text-lg mb-2 group-hover:text-brand-gold transition-colors">
                  {svc.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{svc.desc}</p>
                <span className="text-brand-gold text-sm mt-3 inline-block">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/mobile-car-detailing-warrington" className="btn-secondary inline-block">
              View Mobile Detailing Service →
            </Link>
          </div>
        </div>
      </section>

      {/* Our Standards / EEAT */}
      <section id="our-standards" aria-label="Our standards and credentials" className="py-20 px-4 bg-brand-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading font-black text-3xl md:text-4xl text-brand-white mb-4">
              Our Standards
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Professional credentials, verified reviews, and genuine expertise — not just promises.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {credentials.map((cred) => (
              <div key={cred.title} className="card-dark rounded-xl p-6 flex gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-brand-gold to-yellow-500 rounded-lg flex items-center justify-center text-brand-black font-bold text-lg flex-shrink-0">
                  {cred.icon}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-brand-white mb-1">{cred.title}</h3>
                  <p className="text-gray-400 text-sm">{cred.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="card-dark rounded-xl p-8 max-w-3xl mx-auto">
            <h3 className="font-heading font-bold text-brand-white text-xl mb-4">
              The Products We Use
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              We exclusively use professional-grade detailing products — not supermarket-shelf
              alternatives. Our chemical kit includes Koch Chemie all-surface cleaners, CarPro Iron-X
              for fallout removal, Gyeon Quartz paint sealants, and IGL Coatings ceramic products for
              long-term protection.
            </p>
            <p className="text-gray-400 leading-relaxed">
              For interior work, we use pH-neutral fabric cleaners, bacterial sanitisers, and
              professional hot-water extraction equipment. For paint correction, we use Rupes and
              Flex dual-action and rotary polishers with Menzerna and Koch Chemie compounds and
              finishing polishes. The difference in results versus a basic valet is significant and
              permanent.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" aria-label="Customer reviews" className="py-20 px-4 bg-brand-darkgray">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading font-black text-3xl md:text-4xl text-brand-white mb-4">
              What Warrington Customers Say
            </h2>
            <div className="flex items-center justify-center gap-2 text-brand-gold text-2xl mb-2">
              {'★★★★★'}
            </div>
            <p className="text-gray-400">5.0 average from 47 Google reviews</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((rev) => (
              <div key={rev.name} className="card-dark rounded-xl p-6">
                <div className="text-brand-gold text-lg mb-3">{'★'.repeat(rev.rating)}</div>
                <p className="text-gray-300 leading-relaxed mb-4 italic">&ldquo;{rev.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold font-bold text-sm">
                    {rev.name[0]}
                  </div>
                  <div>
                    <div className="text-brand-white text-sm font-semibold">{rev.name}</div>
                    <div className="text-gray-500 text-xs">{rev.location}, Warrington</div>
                  </div>
                  <span className="ml-auto text-xs text-gray-500 bg-brand-gray/30 px-2 py-1 rounded">
                    Google Review
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section id="coverage" aria-label="Areas we cover" className="py-20 px-4 bg-brand-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading font-black text-3xl md:text-4xl text-brand-white mb-4">
              Areas We Cover
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Based in Warrington WA5, we cover the full WA postcode area and travel to surrounding
              towns across Cheshire and Greater Manchester.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {coverage.map((area) => (
              <span
                key={area}
                className="bg-brand-darkgray border border-brand-gray text-gray-300 text-sm px-4 py-2 rounded-full"
              >
                {area}
              </span>
            ))}
          </div>
          <div className="text-center">
            <Link href="/mobile-car-detailing-warrington" className="btn-secondary inline-block">
              See Full Coverage Area →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" aria-label="Book a service" className="py-20 px-4 bg-gradient-gold">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading font-black text-3xl md:text-4xl text-brand-black mb-4">
            Ready to Book?
          </h2>
          <p className="text-brand-black/80 text-lg mb-8">
            Call us or get a free quote online. We cover Warrington and surrounding areas, 7 days a
            week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center gap-2 bg-brand-black text-brand-gold font-bold py-3 px-8 rounded-md hover:bg-brand-darkgray transition-colors"
            >
              Call {PHONE_DISPLAY}
            </a>
            <Link
              href="/get-a-quote"
              className="inline-flex items-center justify-center gap-2 border-2 border-brand-black text-brand-black font-bold py-3 px-8 rounded-md hover:bg-brand-black hover:text-brand-gold transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
