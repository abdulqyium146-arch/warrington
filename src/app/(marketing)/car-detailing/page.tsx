import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import Breadcrumb from '@/components/Breadcrumb';
import JsonLd from '@/components/JsonLd';
import RelatedServices from '@/components/RelatedServices';
import LocationsGrid from '@/components/LocationsGrid';
import { serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';
import { PHONE, PHONE_DISPLAY } from '@/lib/constants';

const CANONICAL = 'https://warringtoncardetailing.co.uk/car-detailing/';

export const metadata: Metadata = {
  // absolute bypasses the layout template
  title: { absolute: 'Car Detailing Warrington | Professional Valeting & Paint Correction | Car Ceramic Coating and detailing warrington0' },
  description:
    'Professional car detailing in Warrington from £80. Full exterior valet, interior deep clean, paint correction & ceramic coating at our WA5 unit. Free quote: 07482 225323.',
  keywords: [
    'car detailing Warrington',
    'car valeting Warrington',
    'professional car detailing Warrington',
    'full car detail Warrington',
    'exterior car detailing Warrington',
    'interior car detailing Warrington',
    'paint correction Warrington',
    'car detailing WA5',
  ],
  alternates: {
    canonical: CANONICAL,
    languages: { 'en-GB': CANONICAL },
  },
  openGraph: {
    title: 'Car Detailing Warrington | Professional Valeting & Paint Correction | Car Ceramic Coating and detailing warrington0',
    description: 'Professional car detailing in Warrington from £80. Full exterior & interior valet, paint correction at our WA5 unit. Free quote: 07482 225323.',
    url: CANONICAL,
    siteName: 'Car Ceramic Coating and detailing warrington0',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/hero-bg.jpg', width: 1200, height: 630, alt: 'Professional car detailing in Warrington by Car Ceramic Coating and detailing warrington0 — exterior and interior detail' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Car Detailing Warrington | Professional Valeting & Paint Correction | Car Ceramic Coating and detailing warrington0',
    description: 'Professional car detailing in Warrington from £80. Full exterior & interior valet at our WA5 unit.',
    images: ['/hero-bg.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const carDetailingFaqs = [
  {
    question: 'How much does car detailing cost in Warrington?',
    answer: "Car detailing in Warrington at Car Ceramic Coating and detailing warrington0 starts from £80 for an Essential Detail (exterior or interior), £180 for a Full Detail, and £350 for the Ultimate Detail package including paint correction and ceramic coating. Final pricing depends on your vehicle's size and condition. Car Ceramic Coating and detailing warrington0 always provides a free, no-obligation quote before any work begins. Call 07482 225323.",
  },
  {
    question: 'How long does car detailing take?',
    answer: 'An Essential car detail takes 2–3 hours. A Full Detail typically takes 4–6 hours. The Ultimate Detail with multi-stage paint correction and ceramic coating requires 1–2 full days. Car Ceramic Coating and detailing warrington0 will always give you a precise time estimate with your free quote.',
  },
  {
    question: 'What is the difference between car detailing and car valeting?',
    answer: "Car valeting is a thorough clean of your car's interior and exterior — removing dirt and grime to leave it looking fresh. Car detailing goes significantly further: it's a multi-stage process including paint decontamination (clay bar, iron fallout removal), machine polishing to remove swirl marks and scratches, and the application of protective coatings. Car Ceramic Coating and detailing warrington0 specialises in professional detailing at our Warrington WA5 unit.",
  },
  {
    question: 'Do you detail luxury and prestige vehicles in Warrington?',
    answer: "Yes — Car Ceramic Coating and detailing warrington0 regularly details BMW, Mercedes-Benz, Audi, Porsche, Land Rover, Range Rover and other prestige vehicles for customers across Warrington and Cheshire. We use professional-grade products (CarPro, Koch Chemie, Gtechniq) suited to each vehicle's specific paintwork and interior materials.",
  },
  {
    question: 'Where is Car Ceramic Coating and detailing warrington0 Car Detailing based in Warrington?',
    answer: "Car Ceramic Coating and detailing warrington0 is based at Unit 1 Fairclough Mill, Atherton's Quay, Warrington, WA5 1AH. Customers bring their vehicles to our fully-equipped detailing unit. We are conveniently located in Warrington and serve customers from across WA1, WA2, WA3, WA4, WA5 and the wider North West including Runcorn, Widnes, St Helens, Northwich and Knutsford.",
  },
  {
    question: 'Can you detail a car before selling it?',
    answer: 'Absolutely — a professional detail before sale can increase your car\'s perceived value and help it sell faster. Car Ceramic Coating and detailing warrington0 offers pre-sale car detailing in Warrington covering full exterior machine polish, interior deep clean, and paint correction to make your car look its best for listings and viewings.',
  },
];

const services = [
  {
    title: 'Exterior Detailing',
    icon: '🚗',
    desc: 'A thorough exterior detail includes a safe foam pre-soak, two-bucket hand wash, clay bar decontamination, iron fallout removal, machine polish, and a final wax or sealant to leave your paintwork glowing.',
    includes: [
      'pH-neutral foam pre-wash & hand wash',
      'Clay bar paint decontamination',
      'Iron & tar fallout removal',
      'Machine polish for gloss enhancement',
      'Carnauba wax or synthetic sealant finish',
      'Tyre dressing & alloy wheel deep clean',
      'Window cleaning inside & out',
      'Door shuts & jambs cleaned',
    ],
  },
  {
    title: 'Interior Detailing',
    icon: '🪑',
    desc: 'Our deep interior detail removes embedded dirt, odours, and bacteria from every surface — leaving your cabin fresh, sanitised, and restored to near showroom condition.',
    includes: [
      'Full vacuum of carpets, seats, and boot',
      'Fabric & upholstery steam cleaning',
      'Leather cleaning and conditioning',
      'Dashboard, centre console & trim dressing',
      'Air vent cleaning with specialised brushes',
      'Door card & pocket cleaning',
      'Headliner and pillar cleaning',
      'Odour elimination treatment',
    ],
  },
  {
    title: 'Paint Correction',
    icon: '✨',
    desc: 'Multi-stage machine polishing removes swirl marks, fine scratches, water spots, and oxidation — restoring your car\'s paint to a deep, mirror-like finish.',
    includes: [
      'Paint depth gauge assessment',
      'Single, dual or multi-stage correction',
      'Swirl mark and scratch removal',
      'Oxidation and water spot removal',
      'High-speed and finishing polish',
      'IPA wipe-down & paint inspection',
      'Sealant or coating applied on completion',
    ],
  },
  {
    title: 'Engine Bay Detailing',
    icon: '🔧',
    desc: 'A clean engine bay improves resale value, makes it easier to spot leaks, and keeps your vehicle looking professionally maintained under the bonnet.',
    includes: [
      'Careful degreasing of all components',
      'Pressure rinse with targeted application',
      'Plastic and rubber dressing & protection',
      'Metal polishing where appropriate',
      'Final inspection and drying',
    ],
  },
  {
    title: 'Headlight Restoration',
    icon: '💡',
    desc: 'Yellowed, cloudy headlights reduce visibility and make your car look neglected. Our restoration process sands, polishes, and seals headlight lenses to crystal clarity.',
    includes: [
      'Multi-stage wet sanding',
      'Machine polishing to optical clarity',
      'UV-resistant sealant coating',
      'Before and after comparison photos',
      'Improved night visibility guaranteed',
    ],
  },
  {
    title: 'Paint Protection Film (PPF)',
    icon: '🛡️',
    desc: 'Invisible PPF film protects high-impact areas from stone chips, road debris, and light scratches, keeping your paintwork pristine for years.',
    includes: [
      'Self-healing thermoplastic film',
      'Bonnet, bumper & mirror coverage options',
      'Full-body PPF available',
      '10-year manufacturer warranty',
      'Crystal clear, invisible finish',
    ],
  },
];

export default function CarDetailingPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema(
          'Car Detailing Warrington',
          'Professional car detailing in Warrington from £80. Full exterior and interior detailing, paint correction, engine bay cleaning and headlight restoration at our dedicated WA5 unit.',
          CANONICAL,
          '80'
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: 'https://warringtoncardetailing.co.uk' },
          { name: 'Car Detailing Warrington', url: CANONICAL },
        ])}
      />
      <JsonLd data={faqSchema(carDetailingFaqs)} />

      {/* Page Hero */}
      <section
        className="relative pt-32 pb-20"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, #1a1200 0%, #0a0a0a 60%)' }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumb
            items={[
              { name: 'Home', href: '/' },
              { name: 'Car Detailing' },
            ]}
          />
          <div className="mt-6 max-w-3xl">
            <p className="section-subheading">Expert Auto Detailing</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-brand-white leading-tight mb-6">
              Professional Car Detailing{' '}
              <span className="text-gradient-gold">in Warrington</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Car Ceramic Coating and detailing warrington0 offers the highest standard of car detailing in Warrington. Whether
              you need a deep interior clean, full exterior paint correction, ceramic
              coating, or engine bay detailing — our expert team delivers showroom-quality
              results every time. We service all makes and models, from daily drivers
              to prestige and exotic vehicles.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={`tel:${PHONE}`} className="btn-primary">
                📞 Book a Detail — {PHONE_DISPLAY}
              </a>
              <Link href="/contact" className="btn-secondary">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is Car Detailing */}
      <section className="py-20 bg-brand-darkgray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="section-subheading">What We Do</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-white mb-6">
                What Is Car Detailing?
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  <strong className="text-brand-white">Car detailing</strong> is far more than
                  a standard car wash. It is a comprehensive, multi-step process of deep
                  cleaning, restoring, and protecting every surface of your vehicle — inside
                  and out. Professional detailers use specialist tools, machine polishers,
                  and premium-grade products to achieve results that are simply not possible
                  with conventional washing.
                </p>
                <p>
                  The key difference between <strong className="text-brand-white">car detailing</strong> and{' '}
                  <strong className="text-brand-white">car valeting</strong> is depth. Valeting
                  cleans and presents your vehicle; detailing restores and protects it. Paint
                  correction removes swirl marks and scratches invisible to the naked eye.
                  Ceramic coatings create a hydrophobic barrier lasting years. Engine bay
                  detailing preserves mechanical components.
                </p>
                <p>
                  At Car Ceramic Coating and detailing warrington0 in Warrington, we provide a full spectrum of{' '}
                  <strong className="text-brand-white">professional vehicle detailing</strong>{' '}
                  services tailored to your car and your budget. Our detailers are trained to
                  the highest industry standards and use only the best products from brands
                  like CarPro, Koch Chemie, and Gtechniq.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Vehicles Detailed', value: '500+' },
                { label: 'Google Rating', value: '5.0 ★' },
                { label: 'Years Experience', value: '10+' },
                { label: 'Happy Clients', value: '98%' },
              ].map((stat) => (
                <div key={stat.label} className="card-dark text-center py-8">
                  <div className="text-3xl font-heading font-black text-brand-gold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services breakdown */}
      <section className="py-20 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="section-subheading">Services Breakdown</p>
            <h2 className="section-heading">
              Everything Your Car Needs
            </h2>
            <div className="gold-divider" />
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Choose individual services or combine them for the ultimate full-vehicle
              transformation. Every detail is completed to the highest standard.
            </p>
          </div>

          <div className="space-y-8">
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-start card-dark ${
                  i % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{s.icon}</span>
                    <h3 className="font-heading font-bold text-2xl text-brand-white">
                      {s.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">{s.desc}</p>
                  <Link
                    href="/contact"
                    className="text-brand-gold text-sm font-semibold hover:text-brand-gold-light transition-colors"
                  >
                    Enquire about {s.title} →
                  </Link>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-brand-gold uppercase tracking-widest mb-3">
                    What&apos;s Included
                  </h4>
                  <ul className="space-y-2">
                    {s.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                        <span className="text-brand-gold mt-0.5 flex-shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-brand-darkgray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="section-subheading">Pricing Packages</p>
            <h2 className="section-heading">Choose Your Detail Package</h2>
            <div className="gold-divider" />
            <p className="text-gray-400 mt-4">All prices are guide prices. Final quote based on vehicle size and condition.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Essential Detail',
                price: 'From £80',
                popular: false,
                features: [
                  'Exterior hand wash & dry',
                  'Tyre dressing',
                  'Interior vacuum',
                  'Dashboard wipe down',
                  'Window clean',
                  'Door shuts cleaned',
                ],
              },
              {
                name: 'Full Detail',
                price: 'From £180',
                popular: true,
                features: [
                  'Everything in Essential',
                  'Clay bar decontamination',
                  'Machine polish',
                  'Wax protection',
                  'Interior deep clean',
                  'Leather conditioning',
                  'Engine bay clean',
                ],
              },
              {
                name: 'Ultimate Detail',
                price: 'From £350',
                popular: false,
                features: [
                  'Everything in Full Detail',
                  'Multi-stage paint correction',
                  'Ceramic coating application',
                  'Headlight restoration',
                  'Alloy wheel deep clean',
                  'Full interior steam clean',
                  'Paint depth assessment',
                ],
              },
            ].map((pkg) => (
              <div
                key={pkg.name}
                className={`relative rounded-xl border p-8 transition-all duration-300 ${
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
                  {pkg.name}
                </h3>
                <div className="text-3xl font-heading font-black text-brand-gold mb-6">
                  {pkg.price}
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-gray-300">
                      <span className="text-brand-gold flex-shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={pkg.popular ? 'btn-primary w-full text-center' : 'btn-secondary w-full text-center'}>
                  Book This Package
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices currentSlug="car-detailing" heading="Complete Detailing Services" />
      <LocationsGrid dark />
      <CTASection dark />
    </>
  );
}

