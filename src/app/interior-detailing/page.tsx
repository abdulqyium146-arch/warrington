import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import Breadcrumb from '@/components/Breadcrumb';
import JsonLd from '@/components/JsonLd';
import { serviceSchema, breadcrumbSchema } from '@/lib/schema';
import { PHONE, PHONE_DISPLAY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Interior Car Detailing Warrington | Deep Clean & Restoration | WCD',
  description:
    'Professional interior car detailing in Warrington. Deep vacuuming, fabric & leather cleaning, steam sanitising, odour removal. Book your interior detail today.',
  alternates: { canonical: 'https://warringtoncardetailing.co.uk/interior-detailing' },
};

export default function InteriorDetailingPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema(
          'Interior Car Detailing',
          'Deep interior car detailing in Warrington including upholstery cleaning, leather conditioning, steam sanitising and odour removal.',
          'https://warringtoncardetailing.co.uk/interior-detailing'
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: 'https://warringtoncardetailing.co.uk' },
          { name: 'Interior Detailing', url: 'https://warringtoncardetailing.co.uk/interior-detailing' },
        ])}
      />

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

      <CTASection title="Book Your Interior Detail" subtitle="Get a quote for interior car detailing in Warrington. We come to you or you can drop your car off." dark />
    </>
  );
}
