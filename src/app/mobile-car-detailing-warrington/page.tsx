import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import Breadcrumb from '@/components/Breadcrumb';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema, serviceSchema } from '@/lib/schema';
import { PHONE, PHONE_DISPLAY, SITE_URL, TESTIMONIALS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Mobile Car Detailing Warrington | We Come To You | WCD',
  description:
    'Mobile car detailing in Warrington — WCD brings the studio to your door. Full detailing, ceramic coating & valeting at home or work. Call 07958 752513.',
  alternates: { canonical: `${SITE_URL}/mobile-car-detailing-warrington` },
  openGraph: {
    title: 'Mobile Car Detailing Warrington | We Come To You | WCD',
    description:
      'Mobile car detailing in Warrington — WCD brings the studio to your door. Full detailing, ceramic coating & valeting at home or work.',
    url: `${SITE_URL}/mobile-car-detailing-warrington`,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
};

const steps = [
  {
    step: '1',
    title: 'Get a Free Quote',
    desc: 'Call us on 07958 752513 or fill in our online form. Tell us your vehicle, your Warrington postcode, and which service you need. We\'ll confirm a fixed price immediately.',
  },
  {
    step: '2',
    title: 'We Come to You',
    desc: 'At the agreed time, our fully-equipped mobile unit arrives at your Warrington address — home, workplace, or any location across WA1, WA2, WA3, WA4, or WA5.',
  },
  {
    step: '3',
    title: 'Professional Detail',
    desc: 'We work systematically through your vehicle using professional-grade products, machine polishers, steam cleaners, and dedicated detailing tools. No shortcuts, no rush.',
  },
  {
    step: '4',
    title: 'Drive Away Transformed',
    desc: 'Once complete, we walk you through the work and explain any protection products applied. Your car is ready to drive — and looking its absolute best.',
  },
];

const whatsIncluded = [
  {
    category: 'Mobile Valet',
    price: 'From £40',
    items: [
      'Pre-wash foam & hand wash',
      'Tyre dressing & alloy clean',
      'Interior vacuum & dashboard wipe',
      'Window clean inside & out',
      'Air freshener',
    ],
  },
  {
    category: 'Mobile Full Detail',
    price: 'From £150',
    popular: true,
    items: [
      'Everything in Mobile Valet',
      'Clay bar decontamination',
      'Machine polish & wax',
      'Interior deep clean',
      'Leather conditioning',
      'Door shuts & jambs',
    ],
  },
  {
    category: 'Mobile Ceramic Coating',
    price: 'From £350',
    items: [
      'Paint decontamination wash',
      'Paint correction (stage 1)',
      'Ceramic coating application',
      '3–5 year protection',
      'Hydrophobic finish',
      'Aftercare advice',
    ],
  },
];

const mobileBenefits = [
  {
    icon: '🏠',
    title: 'Detail at Home',
    desc: 'Your car is detailed on your own driveway while you\'re inside — the ultimate in convenience.',
  },
  {
    icon: '🏢',
    title: 'Detail at Work',
    desc: 'Park at the office, we detail while you work. Drive home in a transformed car.',
  },
  {
    icon: '⏰',
    title: 'Save Time',
    desc: 'No drop-off, no collection, no waiting around. We come to you and get on with it.',
  },
  {
    icon: '🔬',
    title: 'Studio-Grade Results',
    desc: 'Same products, same equipment, same standards as a fixed studio — at your location.',
  },
];

const warringtonAreas = [
  { name: 'Great Sankey', postcode: 'WA5', slug: 'car-detailing-great-sankey-warrington' },
  { name: 'Stockton Heath', postcode: 'WA4', slug: 'car-detailing-stockton-heath-warrington' },
  { name: 'Birchwood', postcode: 'WA3', slug: 'car-detailing-birchwood-warrington' },
  { name: 'Padgate', postcode: 'WA1', slug: 'car-detailing-padgate-warrington' },
  { name: 'Latchford', postcode: 'WA4', slug: 'car-detailing-latchford-warrington' },
  { name: 'Fearnhead', postcode: 'WA2', slug: 'car-detailing-fearnhead-warrington' },
  { name: 'Grappenhall', postcode: 'WA4', slug: 'car-detailing-grappenhall-warrington' },
  { name: 'Westbrook', postcode: 'WA5', slug: 'car-detailing-westbrook-warrington' },
  { name: 'Penketh', postcode: 'WA5', slug: 'car-detailing-penketh-warrington' },
  { name: 'Woolston', postcode: 'WA1', slug: 'car-detailing-woolston-warrington' },
  { name: 'Appleton', postcode: 'WA4', slug: 'car-detailing-appleton-warrington' },
  { name: 'Callands', postcode: 'WA5', slug: 'car-detailing-callands-warrington' },
  { name: 'Culcheth', postcode: 'WA3', slug: 'car-detailing-culcheth-warrington' },
  { name: 'Thelwall', postcode: 'WA4', slug: 'car-detailing-thelwall-warrington' },
];

const faqs = [
  {
    q: 'What does mobile car detailing mean?',
    a: 'Mobile car detailing means our fully-equipped professional team comes to your location — your home, workplace, or any address across Warrington. We bring the same equipment, products, and skill set as a fixed detailing studio, but delivered entirely at your convenience.',
  },
  {
    q: 'Do I need to provide water or electricity?',
    a: 'For most mobile details we use your outdoor tap. We can also carry our own water supply if needed. For power we carry our own equipment. Just let us know your situation when you book.',
  },
  {
    q: 'Which Warrington postcodes do you cover?',
    a: 'We cover all Warrington postcodes: WA1, WA2, WA3, WA4, and WA5. This includes every neighbourhood from Great Sankey to Culcheth, and from Thelwall to Birchwood.',
  },
  {
    q: 'How long does a mobile car detail take?',
    a: 'A mobile valet typically takes 1–2 hours. A full detail takes 3–5 hours. A full paint correction and ceramic coating can take a full day. We\'ll give you an accurate time estimate when you book.',
  },
  {
    q: 'Do you offer ceramic coating as part of the mobile service?',
    a: 'Yes — ceramic coating is available as part of our mobile service in Warrington. Paint preparation and coating application are both carried out at your location. We take care to shield from wind and dust where necessary.',
  },
];

export default function MobileCarDetailingWarringtonPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema(
          'Mobile Car Detailing Warrington',
          'Professional mobile car detailing and valeting across all Warrington postcodes (WA1–WA5). WCD brings the full studio to your home or workplace.',
          `${SITE_URL}/mobile-car-detailing-warrington`
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: SITE_URL },
          { name: 'Mobile Car Detailing Warrington', url: `${SITE_URL}/mobile-car-detailing-warrington` },
        ])}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.q,
            acceptedAnswer: { '@type': 'Answer', text: faq.a },
          })),
        }}
      />

      {/* Hero */}
      <section
        className="relative pt-32 pb-20"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, #1a1200 0%, #0a0a0a 60%)' }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumb
            items={[
              { name: 'Home', href: '/' },
              { name: 'Mobile Car Detailing Warrington' },
            ]}
          />
          <div className="mt-6 max-w-3xl">
            <p className="section-subheading">Warrington WA1 · WA2 · WA3 · WA4 · WA5</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-brand-white leading-tight mb-6">
              Mobile Car Detailing{' '}
              <span className="text-gradient-gold">in Warrington</span>
              {' '}— We Come to You
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              WCD Car Detailing operates a fully mobile service across all Warrington postcodes.
              Whether you need a{' '}
              <Link href="/mobile-car-valeting" className="text-brand-gold hover:underline">
                mobile car valet
              </Link>
              , a full{' '}
              <Link href="/car-detailing" className="text-brand-gold hover:underline">
                car detail
              </Link>
              , or a{' '}
              <Link href="/ceramic-coating" className="text-brand-gold hover:underline">
                ceramic coating
              </Link>{' '}
              — our team comes to you with everything needed for showroom-quality results.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={`tel:${PHONE}`} className="btn-primary">
                📞 Call Now — {PHONE_DISPLAY}
              </a>
              <Link href="/contact" className="btn-secondary">
                Get a Free Quote
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-400">
              <span>⭐ 5.0 Google Rating</span>
              <span>🚐 Fully Mobile</span>
              <span>📍 All WA1–WA5 Postcodes</span>
              <span>🕐 Open 24/7</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-brand-darkgray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="section-subheading">Simple Process</p>
            <h2 className="section-heading">How Our Mobile Service Works</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.step} className="card-dark p-6 relative">
                <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center font-heading font-black text-brand-black text-lg mb-5">
                  {step.step}
                </div>
                <h3 className="font-heading font-bold text-brand-white text-lg mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included / Packages */}
      <section className="py-20 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="section-subheading">Mobile Service Packages</p>
            <h2 className="section-heading">What&apos;s Included</h2>
            <div className="gold-divider" />
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              All prices are guide prices. Final quote based on vehicle size and condition. We provide
              fixed prices before any work begins.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whatsIncluded.map((pkg) => (
              <div
                key={pkg.category}
                className={`relative rounded-xl border p-8 ${
                  pkg.popular
                    ? 'border-brand-gold bg-brand-gold/5 shadow-lg shadow-brand-gold/10'
                    : 'card-dark'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-brand-black text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="font-heading font-bold text-xl text-brand-white mb-1">
                  {pkg.category}
                </h3>
                <div className="text-3xl font-heading font-black text-brand-gold mb-6">
                  {pkg.price}
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                      <span className="text-brand-gold flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={pkg.popular ? 'btn-primary w-full text-center' : 'btn-secondary w-full text-center'}
                >
                  Book This Package
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of Mobile */}
      <section className="py-20 bg-brand-darkgray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="section-subheading">Why Mobile?</p>
            <h2 className="section-heading">
              Benefits of Mobile Detailing vs. Dropping Off
            </h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {mobileBenefits.map((b) => (
              <div key={b.title} className="card-dark p-6 text-center">
                <div className="text-4xl mb-4">{b.icon}</div>
                <h3 className="font-heading font-bold text-brand-white text-base mb-2">
                  {b.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-dark p-6">
              <h3 className="font-heading font-bold text-brand-white text-lg mb-4">
                Traditional Studio Drop-Off
              </h3>
              <ul className="space-y-3">
                {[
                  'Drive across town to drop the car off',
                  'Arrange alternative transport or wait on-site',
                  'Return to collect — more time, more fuel',
                  'Limited access to your own vehicle while it\'s in',
                  'Fixed appointment slots only',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-400">
                    <span className="text-red-500 flex-shrink-0 mt-0.5">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-brand-gold/40 bg-brand-gold/5 p-6">
              <h3 className="font-heading font-bold text-brand-white text-lg mb-4">
                WCD Mobile Service in Warrington
              </h3>
              <ul className="space-y-3">
                {[
                  'We come to your Warrington home or workplace',
                  'No transport needed — stay at home or carry on working',
                  'No collection trip — the car is ready where you parked it',
                  'Full visibility of the work being carried out',
                  'Flexible timing including evenings & weekends',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                    <span className="text-brand-gold flex-shrink-0 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-20 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-subheading">Service Coverage</p>
            <h2 className="section-heading">
              Mobile Car Detailing Across All of Warrington
            </h2>
            <div className="gold-divider" />
            <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
              We cover every postcode in Warrington — WA1, WA2, WA3, WA4, and WA5. From Great
              Sankey to Culcheth, Grappenhall to Birchwood, our mobile unit is a familiar sight
              on driveways and car parks across the whole town.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {warringtonAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/${area.slug}`}
                className="card-dark p-3 text-center hover:border-brand-gold/50 hover:bg-brand-gold/5 transition-all duration-200 group"
              >
                <div className="text-xs text-brand-gold font-semibold mb-1">{area.postcode}</div>
                <div className="text-xs text-gray-300 group-hover:text-brand-white transition-colors">
                  {area.name}
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 p-5 rounded-xl border border-brand-gold/20 bg-brand-gold/5 text-center">
            <p className="text-gray-300 text-sm">
              Based at{' '}
              <strong className="text-brand-white">Unit 1, Fairclough Mill, Warrington WA5 1AH</strong>
              . We also travel to surrounding towns including{' '}
              <Link href="/car-detailing-st-helens" className="text-brand-gold hover:underline">St Helens</Link>,{' '}
              <Link href="/car-detailing-widnes" className="text-brand-gold hover:underline">Widnes</Link>,{' '}
              <Link href="/car-detailing-runcorn" className="text-brand-gold hover:underline">Runcorn</Link>,{' '}
              <Link href="/car-detailing-lymm" className="text-brand-gold hover:underline">Lymm</Link>, and{' '}
              <Link href="/car-detailing-knutsford" className="text-brand-gold hover:underline">Knutsford</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-brand-darkgray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="section-subheading">Customer Reviews</p>
            <h2 className="section-heading">What Warrington Customers Say</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 3).map((review) => (
              <div key={review.name} className="card-dark p-6">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i} className="text-brand-gold text-sm">★</span>
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div>
                  <div className="font-semibold text-brand-white text-sm">{review.name}</div>
                  <div className="text-brand-gold text-xs">{review.service} · {review.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-brand-black">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="section-subheading">Common Questions</p>
            <h2 className="section-heading">
              Mobile Car Detailing FAQs
            </h2>
            <div className="gold-divider" />
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="card-dark p-6">
                <h3 className="font-heading font-bold text-brand-white text-base mb-3">
                  {faq.q}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-brand-darkgray">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-heading font-bold text-brand-white text-xl mb-6">
            Also Available in Warrington
          </h2>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/" className="text-brand-gold hover:underline">car detailing Warrington</Link>
            <span className="text-gray-600">·</span>
            <Link href="/car-detailing" className="text-gray-400 hover:text-brand-gold transition-colors">professional car detailing</Link>
            <span className="text-gray-600">·</span>
            <Link href="/mobile-car-valeting" className="text-gray-400 hover:text-brand-gold transition-colors">mobile car valeting Warrington</Link>
            <span className="text-gray-600">·</span>
            <Link href="/ceramic-coating" className="text-gray-400 hover:text-brand-gold transition-colors">ceramic coating Warrington</Link>
            <span className="text-gray-600">·</span>
            <Link href="/paint-correction" className="text-gray-400 hover:text-brand-gold transition-colors">paint correction Warrington</Link>
            <span className="text-gray-600">·</span>
            <Link href="/car-detailing-warrington" className="text-gray-400 hover:text-brand-gold transition-colors">car detailing in Warrington</Link>
            <span className="text-gray-600">·</span>
            <Link href="/car-detailing-st-helens" className="text-gray-400 hover:text-brand-gold transition-colors">car detailing St Helens</Link>
            <span className="text-gray-600">·</span>
            <Link href="/car-detailing-widnes" className="text-gray-400 hover:text-brand-gold transition-colors">car detailing Widnes</Link>
            <span className="text-gray-600">·</span>
            <Link href="/car-detailing-runcorn" className="text-gray-400 hover:text-brand-gold transition-colors">car detailing Runcorn</Link>
          </div>
        </div>
      </section>

      <CTASection dark />
    </>
  );
}
