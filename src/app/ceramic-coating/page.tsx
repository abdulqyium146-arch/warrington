import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import Breadcrumb from '@/components/Breadcrumb';
import JsonLd from '@/components/JsonLd';
import RelatedServices from '@/components/RelatedServices';
import LocationsGrid from '@/components/LocationsGrid';
import { serviceSchema, breadcrumbSchema } from '@/lib/schema';
import { PHONE, PHONE_DISPLAY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Ceramic Coating Warrington | Long-Lasting Paint Protection | WCD',
  description:
    'Professional ceramic coating in Warrington. Industry-leading 9H hardness coatings for unrivalled paint protection, gloss and hydrophobic properties. Book today.',
  alternates: { canonical: 'https://warringtoncardetailing.co.uk/ceramic-coating/' },
};

const benefits = [
  { icon: '🛡️', title: 'Superior Protection', desc: 'A 9H hardness ceramic layer shields your paint from UV rays, bird droppings, road salt, tree sap, and light scratches.' },
  { icon: '💧', title: 'Hydrophobic Effect', desc: 'Water, mud and contaminants bead off the surface effortlessly, making your car far easier to keep clean.' },
  { icon: '✨', title: 'Incredible Gloss', desc: 'Ceramic coatings intensify your car\'s colour and depth, producing a mirror-like, deep-gloss finish.' },
  { icon: '🔥', title: 'Heat Resistance', desc: 'Withstands temperatures up to 1300°C, protecting brake dust-covered wheels and engine components.' },
  { icon: '📅', title: 'Lasts Years', desc: 'Unlike wax that lasts weeks, a professional ceramic coating can protect your car for 3–7+ years.' },
  { icon: '💰', title: 'Preserves Value', desc: 'A coated car stays looking newer for longer, retaining higher resale value at point of sale.' },
];

const packages = [
  {
    name: 'Gtechniq Crystal Serum Light',
    protection: '3–5 years',
    price: 'From £350',
    popular: false,
    features: [
      'Professional-grade SiO2 coating',
      'Paint correction prep included',
      '3–5 year protection',
      'Hydrophobic water repellency',
      'Gloss enhancement',
      'UV protection',
      'Certificate of authenticity',
    ],
  },
  {
    name: 'Gtechniq Crystal Serum Ultra',
    protection: '9+ years',
    price: 'From £650',
    popular: true,
    features: [
      'Flagship dual-layer coating',
      'Full paint correction prep',
      '9-year manufacturer warranty',
      'Maximum hardness & protection',
      'Swirl resistance properties',
      'Supreme hydrophobic effect',
      'Registered on Gtechniq portal',
      'Annual maintenance plan',
    ],
  },
  {
    name: 'CarPro Cquartz UK 3.0',
    protection: '2–3 years',
    price: 'From £250',
    popular: false,
    features: [
      'Entry-level professional coating',
      'Light polish prep included',
      '2–3 year protection',
      'Hydrophobic properties',
      'Enhanced gloss',
      'Easy maintenance',
    ],
  },
];

export default function CeramicCoatingPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema(
          'Ceramic Coating',
          'Professional ceramic coating in Warrington. 9H hardness coatings offering years of paint protection, gloss and hydrophobic properties.',
          'https://warringtoncardetailing.co.uk/ceramic-coating'
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: 'https://warringtoncardetailing.co.uk' },
          { name: 'Ceramic Coating', url: 'https://warringtoncardetailing.co.uk/ceramic-coating' },
        ])}
      />

      {/* Hero */}
      <section
        className="relative pt-32 pb-20"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, #001233 0%, #0a0a0a 60%)' }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'Ceramic Coating' }]} />
          <div className="mt-6 max-w-3xl">
            <p className="section-subheading">Ultimate Paint Protection</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-brand-white leading-tight mb-6">
              Ceramic Coating{' '}
              <span className="text-gradient-gold">in Warrington</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              The ultimate protection for your vehicle&apos;s paintwork. Our professional
              ceramic coatings create a permanent bond with your paint, delivering
              unrivalled hardness, gloss, and hydrophobic properties that last for years —
              not weeks. Applied by accredited Gtechniq installers in Warrington.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={`tel:${PHONE}`} className="btn-primary">
                📞 Book Ceramic Coating — {PHONE_DISPLAY}
              </a>
              <Link href="/contact" className="btn-secondary">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is ceramic coating */}
      <section className="py-20 bg-brand-darkgray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="section-subheading">What It Is</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-white mb-6">
                What Is Ceramic Coating?
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  A <strong className="text-brand-white">ceramic coating</strong> is a
                  liquid polymer applied to the exterior of a vehicle that chemically bonds
                  with the factory paint, creating a semi-permanent protective layer. Unlike
                  traditional wax or sealants that sit on top of the paint and wash away
                  over time, ceramic coatings form a genuine bond that can only be removed
                  by abrasion.
                </p>
                <p>
                  The result is a dramatically enhanced{' '}
                  <strong className="text-brand-white">hydrophobic</strong> surface —
                  water, dirt, and contaminants bead off effortlessly. Your car stays
                  cleaner for longer, maintenance washes take a fraction of the time, and
                  your paintwork is shielded from UV damage, chemical etching, bird
                  droppings, and light scratches.
                </p>
                <p>
                  At WCD Warrington, we are accredited installers of{' '}
                  <strong className="text-brand-white">Gtechniq</strong> and{' '}
                  <strong className="text-brand-white">CarPro</strong> ceramic coatings —
                  trusted by professional detailers worldwide. Every application begins
                  with thorough paint correction to ensure the coating bonds to a flawless
                  surface.
                </p>
              </div>
            </div>

            {/* Before/After visual */}
            <div className="relative rounded-2xl overflow-hidden border border-brand-gray">
              <div className="relative h-80">
                <Image
                  src="/gallery/warrington-ceramic-coating-application-1.jpg"
                  alt="Ceramic coating applied to car in Warrington — deep gloss finish"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-4 bg-brand-darkgray grid grid-cols-3 divide-x divide-brand-gray text-center">
                {[
                  { label: '9H Hardness', sub: 'Scratch resistance' },
                  { label: '5–9 Years', sub: 'Protection duration' },
                  { label: '120°', sub: 'Contact angle' },
                ].map((s) => (
                  <div key={s.label} className="px-4">
                    <div className="text-brand-gold font-bold font-heading">{s.label}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="section-subheading">Why Ceramic?</p>
            <h2 className="section-heading">Benefits of Ceramic Coating</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="card-dark">
                <div className="text-4xl mb-3">{b.icon}</div>
                <h3 className="font-heading font-bold text-lg text-brand-white mb-2">{b.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-brand-darkgray">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="section-subheading">Application Process</p>
            <h2 className="section-heading">How We Apply Ceramic Coating</h2>
            <div className="gold-divider" />
          </div>
          <div className="space-y-6">
            {[
              { step: '01', title: 'Paint Assessment', desc: 'We inspect your paint with a paint depth gauge and under specialist lighting to identify any defects, swirl marks, or scratches that need addressing before coating.' },
              { step: '02', title: 'Decontamination Wash', desc: 'A thorough two-stage decontamination removes all bonded contaminants, iron fallout, tar, and road grime from the paint surface.' },
              { step: '03', title: 'Paint Correction', desc: 'Any swirl marks, scratches, or oxidation are corrected using machine polishers. The ceramic coating locks in the finish permanently, so it must be perfect.' },
              { step: '04', title: 'IPA Panel Wipe', desc: 'All surfaces are wiped with isopropyl alcohol to remove any remaining polish oils, ensuring maximum coating adhesion.' },
              { step: '05', title: 'Ceramic Coating Application', desc: 'The coating is applied panel by panel in a controlled environment, carefully levelled and allowed to flash before buffing.' },
              { step: '06', title: 'Curing & Inspection', desc: 'The vehicle is left to cure (24–48 hours) before a final inspection under high-intensity lighting. You collect a perfectly protected car.' },
            ].map((s) => (
              <div key={s.step} className="flex gap-6 items-start card-dark">
                <div className="text-3xl font-heading font-black text-brand-gold/30 flex-shrink-0 w-10 text-center leading-none">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-brand-white mb-1">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="section-subheading">Coating Packages</p>
            <h2 className="section-heading">Choose Your Ceramic Coating</h2>
            <div className="gold-divider" />
            <p className="text-gray-400 mt-4">All packages include paint correction prep. Prices are guide prices — final quote based on vehicle size and paint condition.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative rounded-xl border p-8 transition-all ${
                  pkg.popular
                    ? 'border-brand-gold bg-brand-gold/5 shadow-xl shadow-brand-gold/10'
                    : 'card-dark'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-brand-black text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                    Best Protection
                  </div>
                )}
                <h3 className="font-heading font-bold text-lg text-brand-white mb-1">{pkg.name}</h3>
                <p className="text-brand-gold text-sm font-semibold mb-2">{pkg.protection} protection</p>
                <div className="text-3xl font-heading font-black text-brand-gold mb-6">{pkg.price}</div>
                <ul className="space-y-2.5 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-brand-gold flex-shrink-0 mt-0.5">✓</span>{f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={pkg.popular ? 'btn-primary w-full text-center' : 'btn-secondary w-full text-center'}>
                  Book This Coating
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-brand-darkgray">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-subheading">FAQs</p>
            <h2 className="section-heading">Ceramic Coating FAQs</h2>
            <div className="gold-divider" />
          </div>
          <div className="space-y-4">
            {[
              { q: 'Is ceramic coating worth the money?', a: 'Absolutely. A quality ceramic coating eliminates the need for regular waxing, keeps your car cleaner for longer, protects resale value, and keeps paintwork looking stunning for years. For most car owners it pays for itself in saved time and maintenance costs.' },
              { q: 'Can ceramic coating be applied to any car?', a: 'Yes — ceramic coatings can be applied to any painted surface, including plastic trim, glass, and alloy wheels. The vehicle must be in good condition and the paint must be corrected before application.' },
              { q: 'How long does ceramic coating last in Warrington\'s weather?', a: 'Professional-grade coatings like Gtechniq Crystal Serum Ultra last 9+ years even in the UK\'s wet, salt-heavy roads. The hydrophobic properties actually make the coating easier to maintain in British weather.' },
              { q: 'Does ceramic coating prevent scratches?', a: 'Ceramic coatings add significant scratch resistance (9H hardness), but they are not completely scratch-proof. They will resist light scratches and swirl marks from washing, but sharp keys or severe impacts can still damage the coating and potentially the paint.' },
              { q: 'How do I maintain a ceramic coated car?', a: 'Use a pH-neutral car shampoo, a soft wash mitt, and the two-bucket method. Avoid automated car washes with brushes. A ceramic boost spray applied every 6–12 months extends the life of the coating significantly.' },
            ].map((faq, i) => (
              <details key={i} className="card-dark group cursor-pointer">
                <summary className="flex items-center justify-between font-semibold text-brand-white list-none py-1 gap-4">
                  <span>{faq.q}</span>
                  <span className="text-brand-gold flex-shrink-0 text-xl font-light group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <p className="mt-3 text-gray-400 text-sm leading-relaxed border-t border-brand-gray pt-3">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices currentSlug="ceramic-coating" heading="Pair With Our Other Services" />
      <LocationsGrid />
      <CTASection
        title="Protect Your Paint Today"
        subtitle="Book a ceramic coating in Warrington and give your car the protection it deserves. Free quotes available."
      />
    </>
  );
}
