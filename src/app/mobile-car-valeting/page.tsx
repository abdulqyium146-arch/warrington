import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import Breadcrumb from '@/components/Breadcrumb';
import JsonLd from '@/components/JsonLd';
import { serviceSchema, breadcrumbSchema } from '@/lib/schema';
import { PHONE, PHONE_DISPLAY, AREAS_SERVED } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Mobile Car Valeting Warrington | We Come to You | WCD',
  description:
    'Convenient mobile car valeting in Warrington. We come to your home or workplace with full professional equipment. Exterior & interior valeting, waxing and more. Book 07958 752513.',
  alternates: { canonical: 'https://warringtoncardetailing.co.uk/mobile-car-valeting' },
};

export default function MobileValetingPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema(
          'Mobile Car Valeting',
          'Professional mobile car valeting service in Warrington. We come to your location with all equipment for a complete exterior and interior valet.',
          'https://warringtoncardetailing.co.uk/mobile-car-valeting'
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: 'https://warringtoncardetailing.co.uk' },
          { name: 'Mobile Car Valeting', url: 'https://warringtoncardetailing.co.uk/mobile-car-valeting' },
        ])}
      />

      {/* Hero */}
      <section
        className="relative pt-32 pb-20"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, #001a0d 0%, #0a0a0a 60%)' }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumb
            items={[
              { name: 'Home', href: '/' },
              { name: 'Mobile Car Valeting' },
            ]}
          />
          <div className="mt-6 max-w-3xl">
            <p className="section-subheading">Doorstep Car Cleaning</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-brand-white leading-tight mb-6">
              Convenient Mobile Car Valeting{' '}
              <span className="text-gradient-gold">in Warrington</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Why take your car to us when we can come to you? Our mobile car
              valeting service brings professional equipment and expertise directly
              to your home, workplace, or anywhere convenient across Warrington and
              the North West. No more wasted journeys — we fit around your schedule.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={`tel:${PHONE}`} className="btn-primary">
                📞 Book Mobile Valet — {PHONE_DISPLAY}
              </a>
              <Link href="/contact" className="btn-secondary">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is mobile valeting */}
      <section className="py-20 bg-brand-darkgray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="section-subheading">About the Service</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-white mb-6">
                What Is Mobile Car Valeting?
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  <strong className="text-brand-white">Mobile car valeting</strong> is a
                  professional on-site car cleaning service where our fully equipped
                  van comes directly to your chosen location. Unlike a traditional car
                  wash or hand car wash, mobile valeting delivers a far more thorough
                  and personalised clean — at a time and place that suits you.
                </p>
                <p>
                  Our mobile unit carries everything required for a complete valet:
                  water supply, a generator, vacuums, steam cleaners, and a full
                  range of professional-grade cleaning products. We need only a
                  reasonable space to park alongside your vehicle.
                </p>
                <p>
                  Mobile valeting is perfect for{' '}
                  <strong className="text-brand-white">busy professionals</strong>, parents,
                  fleet operators, and anyone who wants a premium finish without
                  the inconvenience. Available across Warrington, St Helens, Widnes,
                  Runcorn, and the wider North West.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                { icon: '🏠', title: 'At Your Home', desc: 'We park on your driveway or road outside. No disruption to your day.' },
                { icon: '🏢', title: 'At Your Workplace', desc: 'Get your car valeted while you work. Ready to collect when you finish.' },
                { icon: '🎯', title: 'Any Location', desc: 'Gym, shopping centre, hotel — wherever is convenient for you.' },
              ].map((i) => (
                <div key={i.title} className="card-dark flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">{i.icon}</span>
                  <div>
                    <h3 className="font-bold text-brand-white mb-1">{i.title}</h3>
                    <p className="text-gray-400 text-sm">{i.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="section-subheading">Mobile Valeting Services</p>
            <h2 className="section-heading">What&apos;s Included</h2>
            <div className="gold-divider" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Exterior Valeting',
                icon: '🚗',
                services: [
                  'Pressure pre-rinse to loosen dirt',
                  'pH-neutral foam wash',
                  'Two-bucket hand wash method',
                  'Alloy wheel clean & tyre dress',
                  'Door shuts & jambs cleaned',
                  'Exterior glass clean',
                  'Carnauba wax or synthetic sealant',
                  'Final rinse and blow dry',
                ],
              },
              {
                title: 'Interior Valeting',
                icon: '🪑',
                services: [
                  'Full interior vacuum',
                  'Seat cleaning (fabric or leather)',
                  'Leather conditioning & protection',
                  'Dashboard & console clean & dress',
                  'Door card & armrest clean',
                  'Air vent cleaning',
                  'Carpet stain treatment',
                  'Interior glass clean',
                ],
              },
              {
                title: 'Mobile Paint Protection',
                icon: '✨',
                services: [
                  'Ceramic coating application',
                  'Carnauba wax hand application',
                  'Synthetic paint sealant',
                  'Trim dressing & protection',
                  'Tyre sealant for long-lasting shine',
                  'Glass water repellent coating',
                ],
              },
              {
                title: 'Additional Mobile Services',
                icon: '🔧',
                services: [
                  'Engine bay clean',
                  'Headlight restoration',
                  'Pet hair removal',
                  'Odour elimination',
                  'Tar & bug removal',
                  'Alloy wheel restoration',
                  'Scratch & scuff treatment',
                ],
              },
            ].map((s) => (
              <div key={s.title} className="card-dark">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{s.icon}</span>
                  <h3 className="font-heading font-bold text-xl text-brand-white">
                    {s.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {s.services.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                      <span className="text-brand-gold mt-0.5 flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-brand-darkgray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="section-subheading">Mobile Valet Packages</p>
            <h2 className="section-heading">Choose Your Package</h2>
            <div className="gold-divider" />
            <p className="text-gray-400 mt-4">Prices are guide prices. Final price based on vehicle size and condition.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Mini Valet',
                price: 'From £30',
                popular: false,
                desc: 'Quick, tidy refresh for your vehicle.',
                features: ['Exterior wash & dry', 'Interior vacuum', 'Dashboard wipe', 'Window clean', 'Tyre dress'],
              },
              {
                name: 'Full Valet',
                price: 'From £75',
                popular: true,
                desc: 'Our most popular all-in-one mobile valet.',
                features: ['Everything in Mini Valet', 'Full interior clean', 'Seat shampoo', 'Leather conditioning', 'Wax protection', 'Alloy clean'],
              },
              {
                name: 'Premium Valet',
                price: 'From £120',
                popular: false,
                desc: 'The complete mobile valeting experience.',
                features: ['Everything in Full Valet', 'Clay bar treatment', 'Machine polish', 'Ceramic wax sealant', 'Engine bay clean', 'Odour treatment'],
              },
            ].map((pkg) => (
              <div
                key={pkg.name}
                className={`relative rounded-xl border p-8 transition-all ${
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
                <h3 className="font-heading font-bold text-xl text-brand-white mb-1">{pkg.name}</h3>
                <p className="text-gray-500 text-sm mb-2">{pkg.desc}</p>
                <div className="text-3xl font-heading font-black text-brand-gold mb-6">{pkg.price}</div>
                <ul className="space-y-2 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="text-brand-gold">✓</span>{f}
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

      {/* Areas */}
      <section className="py-16 bg-brand-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="section-subheading">Coverage</p>
          <h2 className="text-3xl font-heading font-bold text-brand-white mb-4">
            Mobile Valeting Areas We Cover
          </h2>
          <p className="text-gray-400 mb-8">
            Based in Warrington — we travel across the North West. Call us to confirm coverage in your area.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {AREAS_SERVED.map((a) => (
              <span key={a} className="bg-brand-darkgray border border-brand-gray text-gray-300 px-4 py-2 rounded-full text-sm hover:border-brand-gold/40 hover:text-brand-gold transition-colors">
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Book Your Mobile Valet Today"
        subtitle="We come to you anywhere in Warrington and the North West. Book now for a free quote."
      />
    </>
  );
}
