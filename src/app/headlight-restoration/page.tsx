import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import Breadcrumb from '@/components/Breadcrumb';
import JsonLd from '@/components/JsonLd';
import RelatedServices from '@/components/RelatedServices';
import { serviceSchema, breadcrumbSchema } from '@/lib/schema';
import { PHONE, PHONE_DISPLAY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Headlight Restoration Warrington | Fix Cloudy Headlights | WCD',
  description:
    'Professional headlight restoration in Warrington. We restore yellowed, cloudy or hazy headlights to crystal clarity. Improves appearance and night visibility. From £40.',
  alternates: { canonical: 'https://warringtoncardetailing.co.uk/headlight-restoration/' },
};

export default function HeadlightRestorationPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema(
          'Headlight Restoration',
          'Professional headlight restoration in Warrington. Restore yellowed, cloudy or hazy headlights to crystal clear condition.',
          'https://warringtoncardetailing.co.uk/headlight-restoration'
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: 'https://warringtoncardetailing.co.uk' },
          { name: 'Headlight Restoration', url: 'https://warringtoncardetailing.co.uk/headlight-restoration' },
        ])}
      />

      {/* Hero */}
      <section
        className="relative pt-32 pb-20"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, #1a1500 0%, #0a0a0a 60%)' }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'Headlight Restoration' }]} />
          <div className="mt-6 max-w-3xl">
            <p className="section-subheading">See Clearly Again</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-brand-white leading-tight mb-6">
              Headlight Restoration{' '}
              <span className="text-gradient-gold">in Warrington</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Yellowed, cloudy, or hazed headlights are not just an eyesore — they
              significantly reduce your night-time visibility and can even result in an
              MOT failure. Our professional headlight restoration service removes
              oxidation and UV damage, returning your lenses to factory-clear condition
              at a fraction of the cost of replacement.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <a href={`tel:${PHONE}`} className="btn-primary">
                📞 Book Restoration — {PHONE_DISPLAY}
              </a>
              <Link href="/contact" className="btn-secondary">
                Get a Quote
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              {['From £40 per pair', 'Takes ~1.5 hours', 'UV sealant included', 'MOT pass guarantee'].map((b) => (
                <div key={b} className="flex items-center gap-2">
                  <span className="text-brand-gold">✓</span>{b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why headlights yellow */}
      <section className="py-20 bg-brand-darkgray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="section-subheading">The Problem</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-white mb-6">
                Why Do Headlights Go Yellow & Cloudy?
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Modern car headlights are made from polycarbonate plastic rather than
                  glass. This is lighter and more impact-resistant, but over time it is
                  affected by{' '}
                  <strong className="text-brand-white">UV radiation</strong> from the sun,
                  which breaks down the outer protective coating and oxidises the plastic
                  beneath.
                </p>
                <p>
                  The result is the familiar yellow, hazy, or milky appearance that affects
                  millions of vehicles. Cloudy headlights can reduce light output by up to{' '}
                  <strong className="text-brand-white">80%</strong> — a serious road safety
                  issue, and a common reason for MOT failure.
                </p>
                <p>
                  Our multi-stage restoration process removes the oxidised layer by wet
                  sanding through multiple grits, machine polishing to optical clarity,
                  and applying a{' '}
                  <strong className="text-brand-white">UV-resistant sealant</strong> to
                  protect against future yellowing.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '☀️', title: 'UV Oxidation', desc: 'The primary cause — sunlight degrades polycarbonate plastic over time.' },
                { icon: '🚗', title: 'Road Debris', desc: 'Stone chips and grit scratch the lens surface, accelerating haze.' },
                { icon: '🌧️', title: 'Weather Exposure', desc: 'Rain, salt, and moisture penetrate micro-cracks in the protective layer.' },
                { icon: '⏳', title: 'Age', desc: 'Most vehicles start showing lens yellowing from around 3–5 years old.' },
              ].map((c) => (
                <div key={c.title} className="card-dark">
                  <div className="text-3xl mb-2">{c.icon}</div>
                  <h3 className="font-semibold text-brand-white text-sm mb-1">{c.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-brand-black">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="section-subheading">How It Works</p>
            <h2 className="section-heading">Our Restoration Process</h2>
            <div className="gold-divider" />
          </div>
          <div className="space-y-5">
            {[
              { step: '01', title: 'Masking & Preparation', desc: 'We carefully mask off the surrounding paintwork and trim to protect it during the sanding process.' },
              { step: '02', title: 'Multi-Stage Wet Sanding', desc: 'Working through progressively finer grits (from 400 to 3000), we wet sand the entire lens surface to remove all oxidation and yellowing.' },
              { step: '03', title: 'Machine Polishing', desc: 'A machine polisher with finishing compound restores optical clarity, removing all sanding marks and haziness.' },
              { step: '04', title: 'UV Sealant Application', desc: 'A professional-grade UV-resistant sealant is applied to protect the restored lens from future oxidation — critical for a lasting result.' },
              { step: '05', title: 'Final Inspection', desc: 'We inspect the lenses under bright light and take before/after photos so you can see the dramatic transformation.' },
            ].map((s) => (
              <div key={s.step} className="flex gap-5 items-start card-dark">
                <div className="text-2xl font-heading font-black text-brand-gold/30 flex-shrink-0 w-10 text-center">{s.step}</div>
                <div>
                  <h3 className="font-heading font-bold text-brand-white mb-1">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-brand-darkgray">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-subheading">Pricing</p>
            <h2 className="section-heading">Headlight Restoration Prices</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { name: 'Single Headlight', price: 'From £25', desc: 'One lens restored to clarity with UV sealant.' },
              { name: 'Pair of Headlights', price: 'From £40', desc: 'Both front headlights restored. Most popular.' },
              { name: 'Full Restoration', price: 'From £65', desc: 'Front + rear lenses + fog lights all restored.' },
            ].map((p, i) => (
              <div key={p.name} className={`rounded-xl border p-6 text-center ${i === 1 ? 'border-brand-gold bg-brand-gold/5' : 'border-brand-gray bg-brand-gray/20'}`}>
                <h3 className="font-heading font-bold text-brand-white mb-2">{p.name}</h3>
                <div className="text-2xl font-black text-brand-gold mb-2">{p.price}</div>
                <p className="text-gray-400 text-xs">{p.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">Prices may vary depending on condition. All restorations include UV sealant.</p>
          <div className="text-center mt-8">
            <Link href="/contact" className="btn-primary">Book Headlight Restoration</Link>
          </div>
        </div>
      </section>

      <RelatedServices currentSlug="headlight-restoration" heading="Explore Our Other Detailing Services" />
      <CTASection title="Restore Your Headlights Today" subtitle="Improve visibility, pass your MOT, and make your car look years younger. Book in Warrington today." />
    </>
  );
}
