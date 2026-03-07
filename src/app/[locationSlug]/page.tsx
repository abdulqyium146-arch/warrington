import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import CTASection from '@/components/CTASection';
import Breadcrumb from '@/components/Breadcrumb';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema, serviceSchema } from '@/lib/schema';
import { PHONE, PHONE_DISPLAY, SITE_URL, TESTIMONIALS } from '@/lib/constants';
import { allLocations, getLocationBySlug } from '@/lib/data/locations';

export const dynamicParams = false;

export async function generateStaticParams() {
  return allLocations.map((loc) => ({ locationSlug: loc.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locationSlug: string }>;
}): Promise<Metadata> {
  const { locationSlug } = await params;
  const location = getLocationBySlug(locationSlug);
  if (!location) return {};
  return {
    title: location.metaTitle,
    description: location.metaDescription,
    alternates: { canonical: `${SITE_URL}/${location.slug}` },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      url: `${SITE_URL}/${location.slug}`,
      images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    },
  };
}

const coreServices = [
  { title: 'Car Detailing', slug: 'car-detailing', icon: '🚗', desc: 'Full exterior & interior detailing for a showroom finish.' },
  { title: 'Mobile Valeting', slug: 'mobile-car-valeting', icon: '🚐', desc: 'We come to your home or workplace with a complete mobile studio.' },
  { title: 'Ceramic Coating', slug: 'ceramic-coating', icon: '✨', desc: 'Long-lasting paint protection with industry-leading ceramic technology.' },
  { title: 'Paint Correction', slug: 'paint-correction', icon: '🔧', desc: 'Remove swirl marks, scratches, and oxidation with machine polishing.' },
  { title: 'Interior Detailing', slug: 'interior-detailing', icon: '🪑', desc: 'Deep clean, steam clean, and condition every surface inside your car.' },
  { title: 'Headlight Restoration', slug: 'headlight-restoration', icon: '💡', desc: 'Restore foggy, yellowed headlights to crystal-clear condition.' },
];

const benefits = [
  { icon: '📍', title: 'Mobile Service', desc: 'We travel to you — no need to drop the car off or arrange a courtesy vehicle.' },
  { icon: '⭐', title: '5-Star Rated', desc: 'Rated 5.0 on Google with 47 reviews from customers across the North West.' },
  { icon: '🕐', title: 'Open 24/7', desc: 'We work around your schedule, including evenings and weekends.' },
  { icon: '💰', title: 'Transparent Pricing', desc: 'No hidden costs. All quotes are fixed price before we start work.' },
];

export default async function LocationPage({
  params,
}: {
  params: Promise<{ locationSlug: string }>;
}) {
  const { locationSlug } = await params;
  const location = getLocationBySlug(locationSlug);
  if (!location) notFound();

  const isTown = location.type === 'town';
  const isWarringtonArea = location.type === 'warrington-area';

  const breadcrumbItems = isTown
    ? [
        { name: 'Home', href: '/' },
        { name: `Car Detailing ${location.name}` },
      ]
    : [
        { name: 'Home', href: '/' },
        { name: 'Car Detailing Warrington', href: '/car-detailing-warrington' },
        { name: location.name },
      ];

  const faqItems = isTown
    ? [
        {
          question: `Do you offer mobile car detailing in ${location.name}?`,
          answer: `Yes — WCD Car Detailing provides a fully mobile service in ${location.name} (${location.postcode}). Our van is equipped with everything needed to deliver a full professional detail at your home, workplace, or any convenient location. There is no need to bring your vehicle to us.`,
        },
        {
          question: `How far do you travel from Warrington to ${location.name}?`,
          answer: `Our Warrington base is ${location.distance} from ${location.name}. We regularly make this journey and do not charge a travel surcharge for locations within our standard coverage zone.`,
        },
        {
          question: `What detailing services are available in ${location.name}?`,
          answer: `We offer our full service range in ${location.name}, including car detailing, mobile valeting, ceramic coating, paint correction, interior detailing, and headlight restoration. All services are carried out to the same standard as our Warrington studio.`,
        },
        {
          question: `How much does car detailing cost in ${location.name}?`,
          answer: `Prices start from £40 for a mobile valet, £80 for an exterior or interior detail, £200 for paint correction, and £350 for ceramic coating. Final prices depend on vehicle size and condition. Contact us for a free, no-obligation quote specific to your vehicle.`,
        },
        {
          question: `Can you detail my car at my workplace in ${location.name}?`,
          answer: `Absolutely. Workplace detailing is one of our most popular options in ${location.name}. You park at your office or site, we detail the car while you work, and you leave at the end of the day in a transformed vehicle. Just let us know the address when you book.`,
        },
      ]
    : [
        {
          question: `Do you offer mobile car detailing in ${location.name}, Warrington?`,
          answer: `Yes — WCD Car Detailing covers ${location.name} (${location.postcode}) as part of our Warrington-wide mobile service. We come to your home or driveway and deliver the same professional standard as our main studio.`,
        },
        {
          question: `Which services do you offer in ${location.name}?`,
          answer: `We offer the full range including car detailing, mobile valeting, ceramic coating, paint correction, interior detailing, and headlight restoration. All services are available in ${location.name}.`,
        },
        {
          question: `How do I book a car detail in ${location.name}?`,
          answer: `Simply call us on ${PHONE_DISPLAY} or fill in our online quote form at /contact. Let us know your vehicle, your address in ${location.name}, and what service you're interested in and we'll get back to you with a fixed-price quote.`,
        },
        {
          question: `Do you need access to water for the mobile service?`,
          answer: `For most services we can use your outdoor tap, but we also carry a water supply for locations where this isn't possible. Just let us know when you book and we'll plan accordingly.`,
        },
        {
          question: `Can you detail more than one car in ${location.name} in a single visit?`,
          answer: `Yes — we're happy to detail multiple vehicles in one visit. This is popular with households in ${location.name} where two or more cars need attention. Combined bookings also offer better value.`,
        },
      ];

  const nearbyLocationObjects = location.nearbyLocations
    .map((slug) => allLocations.find((l) => l.slug === slug))
    .filter(Boolean) as (typeof allLocations)[0][];

  const relatedReviews = TESTIMONIALS.slice(0, 3);

  return (
    <>
      <JsonLd
        data={serviceSchema(
          `Car Detailing ${location.name}`,
          `Professional mobile car detailing and valeting in ${location.name}. WCD Car Detailing serves ${location.postcode} with a fully-equipped mobile studio.`,
          `${SITE_URL}/${location.slug}`
        )}
      />
      <JsonLd
        data={breadcrumbSchema(
          breadcrumbItems.map((item) => ({
            name: item.name,
            url: item.href ? `${SITE_URL}${item.href}` : `${SITE_URL}/${location.slug}`,
          }))
        )}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqItems.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
          })),
        }}
      />

      {/* Hero */}
      <section
        className="relative pt-32 pb-20"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, #1a1200 0%, #0a0a0a 60%)' }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumb items={breadcrumbItems} />
          <div className="mt-6 max-w-3xl">
            <p className="section-subheading">
              {isWarringtonArea ? `Warrington ${location.postcode}` : `Mobile Service — ${location.postcode}`}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-brand-white leading-tight mb-6">
              {location.h1.split('in ')[0]}in{' '}
              <span className="text-gradient-gold">{location.name}</span>
              {isWarringtonArea && ', Warrington'}
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              WCD Car Detailing provides professional{' '}
              <Link href="/car-detailing" className="text-brand-gold hover:underline">
                car detailing
              </Link>{' '}
              and{' '}
              <Link href="/mobile-car-valeting" className="text-brand-gold hover:underline">
                mobile car valeting
              </Link>{' '}
              in {location.name}
              {isWarringtonArea ? `, Warrington ${location.postcode}` : ` (${location.postcode})`}
              . Our fully-equipped mobile unit comes to you — delivering showroom-quality results at
              your home, workplace, or any convenient location.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={`tel:${PHONE}`} className="btn-primary">
                📞 Book Now — {PHONE_DISPLAY}
              </a>
              <Link href="/contact" className="btn-secondary">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Local Intro */}
      <section className="py-20 bg-brand-darkgray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="section-subheading">
                {isWarringtonArea ? `Part of Warrington` : `Serving ${location.name}`}
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-white mb-6">
                {isTown
                  ? `Professional Car Detailing in ${location.name}`
                  : `Your Local Warrington Detailers`}
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>{location.intro}</p>
                {isTown && (
                  <p>
                    Based at{' '}
                    <strong className="text-brand-white">Unit 1, Fairclough Mill, Warrington WA5 1AH</strong>
                    , we travel {location.distance} to reach {location.name} customers. Our mobile
                    unit carries professional-grade detailing equipment, machine polishers, steam
                    cleaners, and a full product selection from CarPro, Koch Chemie, and Gtechniq.
                    You get the same studio-standard results — delivered to your door.
                  </p>
                )}
                {isWarringtonArea && (
                  <p>
                    {location.whyWCD} As part of our{' '}
                    <Link
                      href="/car-detailing-warrington"
                      className="text-brand-gold hover:underline"
                    >
                      Warrington-wide coverage
                    </Link>
                    , {location.name} residents benefit from fast response times and the convenience
                    of a truly mobile service that comes to your driveway.
                  </p>
                )}
              </div>
              {isTown && (
                <div className="mt-6 p-4 rounded-lg border border-brand-gold/30 bg-brand-gold/5">
                  <p className="text-sm text-brand-gold font-semibold mb-1">Coverage Info</p>
                  <p className="text-sm text-gray-300">
                    Based in Warrington WA5 — {location.distance} to {location.name} ({location.postcode})
                  </p>
                </div>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((b) => (
                <div key={b.title} className="card-dark p-5">
                  <div className="text-2xl mb-3">{b.icon}</div>
                  <div className="font-heading font-bold text-brand-white text-sm mb-2">
                    {b.title}
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-20 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="section-subheading">What We Offer</p>
            <h2 className="section-heading">
              Services Available in {location.name}
            </h2>
            <div className="gold-divider" />
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Our full range of professional detailing services is available in {location.name}
              {isWarringtonArea ? `, Warrington` : ''} — all delivered by our mobile team at your location.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((service) => (
              <Link
                key={service.slug}
                href={`/${service.slug}`}
                className="card-dark p-6 hover:border-brand-gold/50 hover:bg-brand-gold/5 transition-all duration-300 group"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="font-heading font-bold text-brand-white text-lg mb-2 group-hover:text-brand-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">{service.desc}</p>
                <span className="text-brand-gold text-sm font-semibold">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why WCD */}
      <section className="py-20 bg-brand-darkgray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="section-subheading">Why Choose Us</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-white mb-6">
                Why {location.name} Chooses WCD
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">{location.whyWCD}</p>
              <div className="space-y-3">
                {[
                  'Fully mobile — we come to you in ' + location.name,
                  'Professional-grade products: CarPro, Koch Chemie, Gtechniq',
                  '5-star rated on Google (47 reviews)',
                  'Transparent fixed-price quotes before we start',
                  'Open 24/7 — evenings & weekends available',
                  'All vehicle types: hatchbacks to prestige & exotic',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3 text-sm text-gray-300">
                    <span className="text-brand-gold flex-shrink-0 mt-0.5">✓</span>
                    {point}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Cars Detailed', value: '500+' },
                { label: 'Google Rating', value: '5.0 ★' },
                { label: 'Years Experience', value: '10+' },
                { label: 'Satisfaction', value: '98%' },
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

      {/* Reviews */}
      <section className="py-20 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="section-subheading">Customer Reviews</p>
            <h2 className="section-heading">What Our Customers Say</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedReviews.map((review) => (
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

      {/* Nearby Areas */}
      {nearbyLocationObjects.length > 0 && (
        <section className="py-20 bg-brand-darkgray">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="section-subheading">Coverage Map</p>
              <h2 className="section-heading">
                {isWarringtonArea
                  ? 'Other Warrington Areas We Cover'
                  : 'Nearby Areas We Also Serve'}
              </h2>
              <div className="gold-divider" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {nearbyLocationObjects.map((nearby) => (
                <Link
                  key={nearby.slug}
                  href={`/${nearby.slug}`}
                  className="card-dark p-4 text-center hover:border-brand-gold/50 hover:bg-brand-gold/5 transition-all duration-200 group"
                >
                  <div className="text-xs text-brand-gold font-semibold mb-1">{nearby.postcode}</div>
                  <div className="text-sm text-gray-300 group-hover:text-brand-white transition-colors font-medium">
                    {nearby.name}
                  </div>
                </Link>
              ))}
              {isWarringtonArea && (
                <Link
                  href="/car-detailing-warrington"
                  className="card-dark p-4 text-center hover:border-brand-gold/50 hover:bg-brand-gold/5 transition-all duration-200 group border-brand-gold/20"
                >
                  <div className="text-xs text-brand-gold font-semibold mb-1">WA1–WA5</div>
                  <div className="text-sm text-gray-300 group-hover:text-brand-white transition-colors font-medium">
                    All Warrington
                  </div>
                </Link>
              )}
            </div>
            {isTown && (
              <div className="mt-10 text-center">
                <p className="text-gray-400 text-sm mb-4">
                  Also covering all Warrington postcodes:
                </p>
                <Link
                  href="/car-detailing-warrington"
                  className="text-brand-gold hover:underline text-sm font-semibold"
                >
                  View our full Warrington coverage →
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="py-20 bg-brand-black">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="section-subheading">Common Questions</p>
            <h2 className="section-heading">
              FAQs — Car Detailing in {location.name}
            </h2>
            <div className="gold-divider" />
          </div>
          <div className="space-y-4">
            {faqItems.map((faq) => (
              <div key={faq.question} className="card-dark p-6">
                <h3 className="font-heading font-bold text-brand-white text-base mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-16 bg-brand-darkgray">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-heading font-bold text-brand-white text-xl mb-6">
            Related Services &amp; Areas
          </h2>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/" className="text-brand-gold hover:underline">
              car detailing Warrington
            </Link>
            <span className="text-gray-600">·</span>
            <Link href="/car-detailing" className="text-gray-400 hover:text-brand-gold transition-colors">
              professional car detailing
            </Link>
            <span className="text-gray-600">·</span>
            <Link href="/mobile-car-valeting" className="text-gray-400 hover:text-brand-gold transition-colors">
              mobile car valeting
            </Link>
            <span className="text-gray-600">·</span>
            <Link href="/ceramic-coating" className="text-gray-400 hover:text-brand-gold transition-colors">
              ceramic coating
            </Link>
            <span className="text-gray-600">·</span>
            <Link href="/paint-correction" className="text-gray-400 hover:text-brand-gold transition-colors">
              paint correction
            </Link>
            <span className="text-gray-600">·</span>
            <Link href="/interior-detailing" className="text-gray-400 hover:text-brand-gold transition-colors">
              interior detailing
            </Link>
            <span className="text-gray-600">·</span>
            <Link href="/headlight-restoration" className="text-gray-400 hover:text-brand-gold transition-colors">
              headlight restoration
            </Link>
            <span className="text-gray-600">·</span>
            <Link href="/car-detailing-warrington" className="text-gray-400 hover:text-brand-gold transition-colors">
              car detailing in Warrington
            </Link>
            {nearbyLocationObjects.slice(0, 3).map((nearby) => (
              <span key={nearby.slug} className="contents">
                <span className="text-gray-600">·</span>
                <Link
                  href={`/${nearby.slug}`}
                  className="text-gray-400 hover:text-brand-gold transition-colors"
                >
                  car detailing {nearby.name}
                </Link>
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTASection dark />
    </>
  );
}
