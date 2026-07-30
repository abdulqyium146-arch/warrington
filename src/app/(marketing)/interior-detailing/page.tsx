import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import Breadcrumb from '@/components/Breadcrumb';
import JsonLd from '@/components/JsonLd';
import RelatedServices from '@/components/RelatedServices';
import { serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';
import { PHONE, PHONE_DISPLAY } from '@/lib/constants';

const CANONICAL = 'https://warringtoncardetailing.co.uk/interior-detailing/';

export const metadata: Metadata = {
  title: { absolute: 'Interior Car Detailing Warrington | Deep Clean & Leather Care | Car Ceramic Coating and detailing warrington0' },
  description:
    'Interior car detailing in Warrington from £80. Deep vacuum, fabric & leather cleaning, steam sanitising & odour removal at our WA5 unit. Free quote: 07482 225323.',
  keywords: [
    'interior car detailing Warrington',
    'interior car clean Warrington',
    'car interior deep clean Warrington',
    'leather seat cleaning Warrington',
    'car steam clean Warrington',
    'car odour removal Warrington',
    'interior valeting Warrington',
    'car interior restoration Warrington',
  ],
  alternates: {
    canonical: CANONICAL,
    languages: { 'en-GB': CANONICAL },
  },
  openGraph: {
    title: 'Interior Car Detailing Warrington | Deep Clean & Leather Care | Car Ceramic Coating and detailing warrington0',
    description: 'Interior car detailing in Warrington from £80. Deep vacuum, fabric & leather cleaning, steam sanitising & odour removal. Free quote: 07482 225323.',
    url: CANONICAL,
    siteName: 'Car Ceramic Coating and detailing warrington0',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/gallery/warrington-interior-car-detailing-1.webp', width: 1200, height: 630, alt: 'Interior car detailing in Warrington by Car Ceramic Coating and detailing warrington0 — deep clean leather seats and cabin' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interior Car Detailing Warrington | Deep Clean & Leather Care | Car Ceramic Coating and detailing warrington0',
    description: 'Interior car detailing in Warrington from £80. Deep clean, leather conditioning & odour removal. Free quote: 07482 225323.',
    images: ['/gallery/warrington-interior-car-detailing-1.webp'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const interiorDetailingFaqs = [
  {
    question: 'What is included in interior car detailing at Car Ceramic Coating and detailing warrington0?',
    answer: "Interior car detailing at Car Ceramic Coating and detailing warrington0 in Warrington includes: full vacuum of carpets, seats, and boot; fabric and upholstery steam cleaning; leather seat cleaning and conditioning; dashboard and trim dressing; air vent cleaning with specialist brushes; door card and pocket cleaning; headliner cleaning; and odour elimination treatment. We use professional-grade products from Koch Chemie and CarPro.",
  },
  {
    question: 'How much does interior car detailing cost in Warrington?',
    answer: 'Interior car detailing at Car Ceramic Coating and detailing warrington0 starts from £80 for a standard interior clean and from £180 for a full deep interior restoration including steam cleaning, leather conditioning and odour treatment. Prices vary by vehicle size, condition and the extent of cleaning required. Car Ceramic Coating and detailing warrington0 provides a free, no-obligation quote.',
  },
  {
    question: 'How long does interior car detailing take?',
    answer: 'A standard interior detail takes 2–4 hours. A deep interior restoration with steam cleaning, leather conditioning and odour treatment can take 4–6 hours. Car Ceramic Coating and detailing warrington0 will confirm the exact timeframe with your free quote when you call 07482 225323.',
  },
  {
    question: 'Can interior detailing remove pet hair?',
    answer: 'Yes — Car Ceramic Coating and detailing warrington0 uses specialist tools including high-powered vacuums and pet hair removal attachments to extract embedded pet hair from carpets, fabric seats, and door cards. Stubborn hair is removed with rubber brushes and lint rollers before steam cleaning and fabric sanitising.',
  },
  {
    question: 'Can interior detailing remove bad smells from a car?',
    answer: "Yes. Bad smells from pets, food, mould, smoke, or damp are treated at source with professional odour elimination products. Car Ceramic Coating and detailing warrington0 uses a combination of steam sanitising (which kills bacteria and mould spores), enzyme-based odour neutralisers, and ozone treatment where required to permanently eliminate odours rather than masking them.",
  },
];

export default function InteriorDetailingPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema(
          'Interior Car Detailing Warrington',
          'Professional interior car detailing in Warrington from £80. Deep vacuum, fabric and leather cleaning, steam sanitising and odour elimination at our WA5 unit.',
          CANONICAL,
          '80'
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: 'https://warringtoncardetailing.co.uk' },
          { name: 'Interior Car Detailing Warrington', url: CANONICAL },
        ])}
      />
      <JsonLd data={faqSchema(interiorDetailingFaqs)} />

      {/* Hero */}
      <section
        className="relative pt-32 pb-20"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, #0d1a00 0%, #0a0a0a 60%)' }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'Interior Detailing' }]} />
          <div className="mt-6 max-w-3xl">
            <p className="section-subheading">Deep Interior Clean</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-brand-white leading-tight mb-6">
              Interior Car Detailing{' '}
              <span className="text-gradient-gold">in Warrington</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Your car&apos;s interior endures daily abuse — coffee spills, muddy footwells,
              pet hair, and years of accumulated grime. Our professional interior detailing
              service deep-cleans, sanitises, and restores every surface to as-new
              condition, leaving your cabin fresh, hygienic, and looking immaculate.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={`tel:${PHONE}`} className="btn-primary">
                📞 Book Interior Detail — {PHONE_DISPLAY}
              </a>
              <Link href="/contact" className="btn-secondary">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-brand-darkgray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="section-subheading">What&apos;s Covered</p>
            <h2 className="section-heading">Every Surface, Immaculate</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '🪑',
                title: 'Seats & Upholstery',
                desc: 'Fabric seats are hot-water extracted and pre-treated for stains. Leather seats are carefully cleaned with pH-balanced leather cleaners and conditioned to prevent cracking.',
                points: ['Fabric extraction cleaning', 'Leather clean & condition', 'Stain pre-treatment', 'Pet hair removal'],
              },
              {
                icon: '🧹',
                title: 'Carpets & Mats',
                desc: 'Floor mats and carpets are removed, pre-treated, and deep-cleaned using hot water extraction to remove embedded dirt, stains, and odour-causing bacteria.',
                points: ['Hot water extraction', 'Stain treatment', 'Odour elimination', 'Mat scrubbing & rinse'],
              },
              {
                icon: '🎛️',
                title: 'Dashboard & Trim',
                desc: 'All dashboard surfaces, centre consoles, door cards, and trim are thoroughly cleaned, degreased, and finished with a UV-protective dressing.',
                points: ['Vinyl & plastic cleaning', 'UV protectant applied', 'Switch & knob detailing', 'Carbon fibre safe'],
              },
              {
                icon: '💨',
                title: 'Air Vents & Gaps',
                desc: 'Dust and bacteria accumulate deep inside vents and panel gaps. We use specialised brushes and compressed air to clean every crevice.',
                points: ['Vent brush cleaning', 'Compressed air blow-out', 'Gap detailing tools', 'Fresh air treatment'],
              },
              {
                icon: '🪟',
                title: 'Interior Glass',
                desc: 'Interior windscreen and windows are cleaned with specialist glass cleaner to remove the oily film that builds up inside, eliminating glare and improving visibility.',
                points: ['Streak-free clean', 'Tinted glass safe', 'Windscreen defogging', 'Rear windows & sunroof'],
              },
              {
                icon: '🌬️',
                title: 'Odour Elimination',
                desc: 'Persistent odours from smoke, pets, food or mould are neutralised using ozone treatment or specialist odour-eliminating solutions — not just masked.',
                points: ['Ozone treatment available', 'Pet odour removal', 'Smoke smell treatment', 'Antibacterial sanitise'],
              },
            ].map((s) => (
              <div key={s.title} className="card-dark">
                <div className="text-4xl mb-3">{s.icon}</div>
                <h3 className="font-heading font-bold text-lg text-brand-white mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{s.desc}</p>
                <ul className="space-y-1.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-xs text-gray-400">
                      <span className="text-brand-gold">✓</span>{p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="section-subheading">Interior Packages</p>
            <h2 className="section-heading">Choose Your Interior Detail</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Interior Refresh',
                price: 'From £60',
                popular: false,
                features: ['Full vacuum', 'Dashboard wipe', 'Door card clean', 'Interior windows', 'Air freshener'],
              },
              {
                name: 'Interior Deep Clean',
                price: 'From £120',
                popular: true,
                features: ['Everything in Refresh', 'Seat shampoo or leather clean', 'Carpet extraction', 'Trim dressing', 'Air vent clean', 'Odour treatment'],
              },
              {
                name: 'Interior Restoration',
                price: 'From £200',
                popular: false,
                features: ['Everything in Deep Clean', 'Leather conditioning', 'Ozone odour treatment', 'Headliner clean', 'Boot area detail', 'Steam sanitise'],
              },
            ].map((pkg) => (
              <div key={pkg.name} className={`relative rounded-xl border p-8 transition-all ${pkg.popular ? 'border-brand-gold bg-brand-gold/5 shadow-xl shadow-brand-gold/10' : 'card-dark'}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-brand-black text-xs font-bold px-4 py-1 rounded-full">Most Popular</div>
                )}
                <h3 className="font-heading font-bold text-xl text-brand-white mb-1">{pkg.name}</h3>
                <div className="text-3xl font-heading font-black text-brand-gold mb-6">{pkg.price}</div>
                <ul className="space-y-2 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-brand-gold flex-shrink-0">✓</span>{f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={pkg.popular ? 'btn-primary w-full text-center' : 'btn-secondary w-full text-center'}>
                  Book Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices currentSlug="interior-detailing" heading="Explore Our Full Range of Services" />
      <CTASection title="Book Your Interior Detail" subtitle="Get a quote for interior car detailing in Warrington. Bring your vehicle to our unit in WA5." dark />
    </>
  );
}

