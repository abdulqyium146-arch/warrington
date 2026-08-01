import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import CTASection from '@/components/CTASection';
import Breadcrumb from '@/components/Breadcrumb';
import JsonLd from '@/components/JsonLd';
import RelatedServices from '@/components/RelatedServices';
import { serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';
import { howToSchema } from '@/lib/seo/schema';
import { PHONE, PHONE_DISPLAY } from '@/lib/constants';

const CANONICAL = 'https://warringtoncardetailing.co.uk/paint-correction/';

export const metadata: Metadata = {
  title: { absolute: 'Machine Polishing Warrington | Paint Correction & Swirl Removal | Car Ceramic Coating and detailing warrington0' },
  description:
    'Professional machine polishing in Warrington from £150. Remove swirl marks, scratches & oxidation. Stage 1, 2 & 3 paint correction available. Free quote: 07375 759686.',
  keywords: [
    'machine polishing Warrington',
    'paint correction Warrington',
    'swirl mark removal Warrington',
    'scratch removal Warrington',
    'car polish Warrington',
    'paint defect removal Warrington',
    'machine polish Cheshire',
    'two stage paint correction Warrington',
  ],
  alternates: {
    canonical: CANONICAL,
    languages: { 'en-GB': CANONICAL },
  },
  openGraph: {
    title: 'Machine Polishing Warrington | Paint Correction & Swirl Removal | Car Ceramic Coating and detailing warrington0',
    description: 'Professional machine polishing in Warrington from £150. Remove swirl marks, scratches & oxidation. Stage 1, 2 & 3 correction. Free quote: 07375 759686.',
    url: CANONICAL,
    siteName: 'Car Ceramic Coating and detailing warrington0',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/gallery/warrington-paint-correction-swirl-removal-1.jpg', width: 1200, height: 630, alt: 'Machine polishing and swirl mark removal on car paintwork in Warrington by Car Ceramic Coating and detailing warrington0' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Machine Polishing Warrington | Paint Correction & Swirl Removal | Car Ceramic Coating and detailing warrington0',
    description: 'Professional machine polishing & paint correction in Warrington from £150. Free quote: 07375 759686.',
    images: ['/gallery/warrington-paint-correction-swirl-removal-1.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const machinePolishingFaqs = [
  {
    question: 'What is machine polishing?',
    answer: "Machine polishing is the professional process of using a powered dual-action or rotary polishing machine with abrasive polishing compounds to remove scratches, swirl marks, and paint defects from a car's clear coat. It restores depth, clarity, and a deep gloss to dull or damaged paintwork — results that are impossible to achieve by hand polishing alone.",
  },
  {
    question: 'How much does machine polishing cost in Warrington?',
    answer: 'Machine polishing at Car Ceramic Coating and detailing warrington0 in Warrington starts from £150 for Stage 1 Enhancement Polish (up to 50% defect removal), £300 for Stage 2 Machine Polishing (up to 80% defect removal), and £500 for Stage 3 Full Paint Correction (up to 95%+ defect removal). Prices vary by vehicle size and the severity of paint defects.',
  },
  {
    question: 'How long does machine polishing take?',
    answer: 'Stage 1 machine polishing takes approximately 4–6 hours. Stage 2 takes a full working day. Stage 3 full paint correction can take 1–2 full days depending on the extent of defects and the vehicle size. All stages begin with a full decontamination wash. Car Ceramic Coating and detailing warrington0 will confirm exact timings with your free quote.',
  },
  {
    question: 'Can machine polishing remove deep scratches?',
    answer: "Machine polishing can remove scratches that are within the clear coat layer. If a scratch has penetrated through the clear coat into the base coat or primer, it cannot be removed by polishing alone and may require touch-up paint or panel repair. Car Ceramic Coating and detailing warrington0 assesses every vehicle's paint depth and defect level before recommending the appropriate correction stage.",
  },
  {
    question: 'Should I get paint correction before ceramic coating?',
    answer: "Yes — paint correction before ceramic coating is essential. A ceramic coating chemically bonds to and permanently seals the paintwork underneath it. If swirl marks or scratches are present, the coating will preserve those defects indefinitely. At Car Ceramic Coating and detailing warrington0, all ceramic coating packages include a paint correction preparation stage as standard.",
  },
];

const machinePolishingHowToSteps = [
  { name: 'Decontamination Wash', text: 'The vehicle is thoroughly washed using a pH-neutral foam pre-soak and two-bucket hand wash method to remove all loose dirt. Iron fallout remover and clay bar decontamination then remove bonded contaminants from the paint surface.' },
  { name: 'Paint Depth Assessment', text: 'We use a paint depth gauge to measure clear coat thickness across all panels, identifying safe polishing levels and areas that require care.' },
  { name: 'Test Spot Polish', text: 'A test spot is polished in a hidden area to determine the correct compound and pad combination needed to achieve maximum defect removal for your specific paint.' },
  { name: 'Compounding Stage', text: 'A cutting compound and cutting pad are worked systematically across all panels to remove the majority of paint defects, swirl marks, and scratches.' },
  { name: 'Refining Stage', text: 'A finishing polish and foam finishing pad are applied to remove any light marring left by the compound stage, revealing a deep, mirror-like gloss.' },
  { name: 'IPA Wipe-Down & Inspection', text: 'All surfaces are wiped with isopropyl alcohol to remove polish residue. The entire vehicle is inspected under high-intensity lighting to confirm all defects have been corrected.' },
];

export default function PaintCorrectionPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema(
          'Machine Polishing Warrington',
          'Professional multi-stage machine polishing and paint correction in Warrington from £150. Removes swirl marks, scratches, oxidation and water spots. Stage 1, 2 and 3 correction available.',
          CANONICAL,
          '150'
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: 'https://warringtoncardetailing.co.uk' },
          { name: 'Machine Polishing Warrington', url: CANONICAL },
        ])}
      />
      <JsonLd data={faqSchema(machinePolishingFaqs)} />
      <JsonLd data={howToSchema(
        machinePolishingHowToSteps,
        'How Machine Polishing Works — The Professional Process',
        'A step-by-step guide to the professional machine polishing and paint correction process used by Car Ceramic Coating and detailing warrington0 in Warrington.'
      )} />

      {/* Hero */}
      <section
        className="relative pt-32 pb-20"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, #1a0000 0%, #0a0a0a 60%)' }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'Machine Polishing' }]} />
          <div className="mt-6 max-w-3xl">
            <p className="section-subheading">Restore Your Paintwork</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-brand-white leading-tight mb-6">
              Professional Machine Polishing{' '}
              <span className="text-gradient-gold">in Warrington</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Swirl marks, scratches, oxidation, water spots — every car accumulates paint
              defects over time. Our multi-stage machine polishing process removes these
              imperfections, revealing a deep, flawless mirror finish beneath. The single
              most impactful service you can do for your vehicle&apos;s appearance.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={`tel:${PHONE}`} className="btn-primary">
                📞 Book Machine Polishing — {PHONE_DISPLAY}
              </a>
              <Link href="/contact" className="btn-secondary">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What causes defects */}
      <section className="py-20 bg-brand-darkgray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="section-subheading">Paint Defects</p>
            <h2 className="section-heading">What We Remove</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🌀', title: 'Swirl Marks', desc: 'Fine circular scratches caused by incorrect washing technique, automated car washes, or wiping with dry cloths. Highly visible in direct sunlight.' },
              { icon: '🔪', title: 'Scratches', desc: 'Surface-level scratches from car park incidents, keys, branches, or road debris. If they haven\'t penetrated the primer, they can be corrected.' },
              { icon: '🌡️', title: 'Oxidation', desc: 'UV radiation breaks down paint molecules, causing a dull, chalky, faded appearance — common on older vehicles or those stored outdoors.' },
              { icon: '💧', title: 'Water Spots', desc: 'Mineral deposits left behind when water evaporates on paint. Hard water spots can etch into the clear coat if left untreated.' },
              { icon: '🐦', title: 'Chemical Etching', desc: 'Bird droppings and tree sap are highly acidic and can etch permanently into clear coat within hours in warm weather.' },
              { icon: '🔵', title: 'Buffer Trails', desc: 'Heavy circular marks left by previous poor-quality machine polishing. Often requires correction before proper work can begin.' },
            ].map((d) => (
              <div key={d.title} className="card-dark">
                <div className="text-4xl mb-3">{d.icon}</div>
                <h3 className="font-heading font-bold text-lg text-brand-white mb-2">{d.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stages */}
      <section className="py-20 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="section-subheading">Our Process</p>
            <h2 className="section-heading">Machine Polishing Stages</h2>
            <div className="gold-divider" />
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              We offer three levels of correction depending on your paint&apos;s condition,
              your goals, and your budget. Every stage begins with a full decontamination wash.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                stage: 'Stage 1',
                name: 'Enhancement Polish',
                price: 'From £150',
                correction: 'Up to 50% defect removal',
                popular: false,
                desc: 'A single-stage machine polish using a mild compound or finishing polish. Enhances gloss and clarity, removes light swirls and water spots.',
                includes: ['Full decontamination wash', 'Single machine polish pass', 'IPA wipe-down', 'Final wax or sealant'],
              },
              {
                stage: 'Stage 2',
                name: 'Machine Polishing',
                price: 'From £300',
                correction: 'Up to 80% defect removal',
                popular: true,
                desc: 'Two-stage process using a cutting compound followed by a refining polish. Removes the majority of swirls, scratches, and light oxidation.',
                includes: ['Full decontamination wash', 'Cutting compound pass', 'Refining polish pass', 'IPA wipe-down', 'Paint sealant or wax'],
              },
              {
                stage: 'Stage 3',
                name: 'Full Correction',
                price: 'From £500',
                correction: 'Up to 95%+ defect removal',
                popular: false,
                desc: 'The most thorough multi-stage correction, targeting heavy oxidation, deep scratches, and severe swirl damage. Best paired with ceramic coating.',
                includes: ['Full decontamination wash', 'Heavy cutting stage', 'Refining stages', 'Finishing stage', 'IPA wipe-down', 'Ceramic coating prep'],
              },
            ].map((pkg) => (
              <div
                key={pkg.stage}
                className={`relative rounded-xl border p-8 transition-all ${
                  pkg.popular
                    ? 'border-brand-gold bg-brand-gold/5 shadow-xl shadow-brand-gold/10'
                    : 'card-dark'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-brand-black text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <p className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-1">{pkg.stage}</p>
                <h3 className="font-heading font-bold text-xl text-brand-white mb-1">{pkg.name}</h3>
                <p className="text-sm text-green-400 font-semibold mb-2">{pkg.correction}</p>
                <div className="text-2xl font-heading font-black text-brand-gold mb-3">{pkg.price}</div>
                <p className="text-gray-400 text-sm mb-5 leading-relaxed">{pkg.desc}</p>
                <ul className="space-y-2 mb-6">
                  {pkg.includes.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-brand-gold flex-shrink-0">✓</span>{f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={pkg.popular ? 'btn-primary w-full text-center' : 'btn-secondary w-full text-center'}>
                  Book This Stage
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              Not sure which stage you need?{' '}
              <a href={`tel:${PHONE}`} className="text-brand-gold hover:underline">
                Call us on {PHONE_DISPLAY}
              </a>{' '}
              — we&apos;ll assess your paint and recommend the right option.
            </p>
          </div>
        </div>
      </section>

      {/* Before/After */}
      <section className="py-20 bg-brand-darkgray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="section-subheading">Results</p>
            <h2 className="section-heading">Before &amp; After</h2>
            <div className="gold-divider" />
            <p className="text-gray-400 mt-4">Real results from our Warrington customers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                before: '/gallery/warrington-car-detailing-before-after-1.webp',
                after: '/gallery/warrington-paint-correction-swirl-removal-1.jpg',
                label: 'BMW 3 Series — Stage 2 Correction',
              },
              {
                before: '/gallery/warrington-car-polish-machine-detailing-1.webp',
                after: '/gallery/warrington-car-exterior-detailing-1.jpg',
                label: 'Audi A4 — Full Stage 3 Correction',
              },
              {
                before: '/gallery/warrington-car-valeting-results-warrington-1.webp',
                after: '/gallery/warrington-professional-car-wash-warrington-1.webp',
                label: 'Mercedes C-Class — Enhancement Polish',
              },
            ].map((item) => (
              <div key={item.label} className="rounded-xl overflow-hidden border border-brand-gray">
                <div className="grid grid-cols-2">
                  <div className="relative h-48">
                    <Image src={item.before} alt={`Before paint correction — ${item.label}`} fill className="object-cover" sizes="(max-width: 768px) 50vw, 20vw" />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-center text-xs py-1 text-gray-300">Before</div>
                  </div>
                  <div className="relative h-48">
                    <Image src={item.after} alt={`After paint correction — ${item.label}`} fill className="object-cover" sizes="(max-width: 768px) 50vw, 20vw" />
                    <div className="absolute bottom-0 left-0 right-0 bg-brand-gold/80 text-center text-xs py-1 text-brand-black font-semibold">After</div>
                  </div>
                </div>
                <div className="p-4 bg-brand-darkgray">
                  <p className="text-sm text-gray-400 text-center">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/gallery" className="btn-secondary">View Full Gallery →</Link>
          </div>
        </div>
      </section>

      <RelatedServices currentSlug="paint-correction" heading="Complete the Detail — Explore More Services" />
      <CTASection
        title="Restore Your Car's Finish"
        subtitle="Book professional machine polishing in Warrington and see the difference a flawless finish makes."
        dark
      />
    </>
  );
}

