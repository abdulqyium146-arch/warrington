import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import CTASection from '@/components/CTASection';
import Breadcrumb from '@/components/Breadcrumb';
import JsonLd from '@/components/JsonLd';
import RelatedServices from '@/components/RelatedServices';
import { serviceSchema, breadcrumbSchema } from '@/lib/schema';
import { PHONE, PHONE_DISPLAY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Paint Correction Warrington | Scratch & Swirl Removal | WCD',
  description:
    'Professional paint correction in Warrington. Remove swirl marks, scratches, oxidation & water spots. Multi-stage machine polishing for a flawless mirror finish. Book now.',
  alternates: { canonical: 'https://www.warringtoncardetailing.co.uk/paint-correction/' },
};

export default function PaintCorrectionPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema(
          'Paint Correction',
          'Professional multi-stage paint correction in Warrington removing swirl marks, scratches, oxidation and water spots.',
          'https://warringtoncardetailing.co.uk/paint-correction'
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: 'https://warringtoncardetailing.co.uk' },
          { name: 'Paint Correction', url: 'https://warringtoncardetailing.co.uk/paint-correction' },
        ])}
      />

      {/* Hero */}
      <section
        className="relative pt-32 pb-20"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, #1a0000 0%, #0a0a0a 60%)' }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'Paint Correction' }]} />
          <div className="mt-6 max-w-3xl">
            <p className="section-subheading">Restore Your Paintwork</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-brand-white leading-tight mb-6">
              Professional Paint Correction{' '}
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
                📞 Book Paint Correction — {PHONE_DISPLAY}
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
            <h2 className="section-heading">Paint Correction Stages</h2>
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
                name: 'Paint Correction',
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
        subtitle="Book a professional paint correction in Warrington and see the difference a flawless finish makes."
        dark
      />
    </>
  );
}
