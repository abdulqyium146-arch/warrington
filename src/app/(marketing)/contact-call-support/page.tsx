﻿﻿﻿﻿import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import JsonLd from '@/components/JsonLd';
import { SITE_URL, SITE_NAME, EMAIL } from '@/lib/constants';

// ── Page-specific phone constants ──────────────────────────────────────────────
const SUPPORT_PHONE = '+44 7375 759686';
const SUPPORT_PHONE_DISPLAY = '+44 7375 759686';
const SUPPORT_PHONE_DISPLAY_LOCAL = '07375 759686';

// ── SEO Metadata ───────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Call Us: +44 7375 759686 | Car Ceramic Coating and detailing warrington0',
  description:
    'Call Car Ceramic Coating and detailing warrington0 on +44 7375 759686. Expert ceramic coating & machine polishing in Warrington. Open 24/7 — free no-obligation quote in minutes.',
  alternates: {
    canonical: `${SITE_URL}/contact-call-support`,
  },
  openGraph: {
    title: 'Call Car Ceramic Coating and detailing warrington0 — +44 7375 759686 | 24/7 Support',
    description:
      'Speak directly with our detailing experts. Call +44 7375 759686 now for a free quote on ceramic coating, machine polishing & car detailing in Warrington.',
    url: `${SITE_URL}/contact-call-support`,
    type: 'website',
    images: [
      {
        url: '/hero-bg.jpg',
        width: 1200,
        height: 630,
        alt: 'Car Ceramic Coating and detailing warrington0 — Call +44 7375 759686',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Call Car Ceramic Coating and detailing warrington0 — +44 7375 759686',
    description:
      'Open 24/7. Call +44 7375 759686 for a free quote on ceramic coating, machine polishing & car detailing in Warrington.',
    images: ['/hero-bg.jpg'],
  },
};

// ── Structured Data ────────────────────────────────────────────────────────────
const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Call Car Ceramic Coating and detailing warrington0 — Customer Support Line',
  url: `${SITE_URL}/contact-call-support`,
  description:
    'Dedicated customer support and booking line for Car Ceramic Coating and detailing warrington0. Call +44 7375 759686 for a free quote.',
  mainEntity: {
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#business`,
    name: SITE_NAME,
    telephone: SUPPORT_PHONE,
    email: EMAIL,
    url: SITE_URL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Unit 1 Fairclough Mill, Atherton\'s Quay',
      addressLocality: 'Warrington',
      addressRegion: 'Cheshire',
      postalCode: 'WA5 1AH',
      addressCountry: 'GB',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: SUPPORT_PHONE,
        contactType: 'customer support',
        contactOption: ['TollFree', 'HearingImpairedSupported'],
        availableLanguage: { '@type': 'Language', name: 'English' },
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday', 'Tuesday', 'Wednesday', 'Thursday',
            'Friday', 'Saturday', 'Sunday',
          ],
          opens: '00:00',
          closes: '23:59',
        },
      },
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday',
        'Friday', 'Saturday', 'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '47',
      bestRating: '5',
    },
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: `${SITE_URL}/contact` },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Call Support',
      item: `${SITE_URL}/contact-call-support`,
    },
  ],
};

// ── Trust Signals ──────────────────────────────────────────────────────────────
const trustSignals = [
  { icon: '⏰', label: 'Available 24/7', detail: 'Call any time — we always answer' },
  { icon: '⚡', label: 'Instant Quotes', detail: 'Free no-obligation estimate in minutes' },
  { icon: '★', label: '5-Star Rated', detail: '47 verified Google reviews' },
  { icon: '🏭', label: 'Unit Based', detail: 'Visit our unit at Fairclough Mill, Atherton\'s Quay, Warrington WA5' },
];

// ── Services List ──────────────────────────────────────────────────────────────
const services = [
  { name: 'Full Car Detailing', href: '/car-detailing' },
  { name: 'Ceramic Coating', href: '/ceramic-coating' },
  { name: 'Paint Correction', href: '/paint-correction' },
  { name: 'Interior Detailing', href: '/interior-detailing' },
  { name: 'Headlight Restoration', href: '/headlight-restoration' },
];

// ── Page Component ─────────────────────────────────────────────────────────────
export default function ContactCallSupportPage() {
  return (
    <>
      <JsonLd data={contactPageSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="hero-heading"
        className="relative pt-32 pb-20"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.14) 0%, #0a0a0a 65%)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumb
            items={[
              { name: 'Home', href: '/' },
              { name: 'Contact', href: '/contact' },
              { name: 'Call Support', href: '/contact-call-support' },
            ]}
          />

          <div className="mt-8 max-w-3xl">
            <p className="section-subheading">Customer Support Line</p>

            {/* H1 — includes phone number for on-page SEO */}
            <h1
              id="hero-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-brand-white leading-tight mb-6"
            >
              Call Us Now on{' '}
              <a
                href={`tel:${SUPPORT_PHONE}`}
                aria-label={`Call Car Ceramic Coating and detailing warrington0 customer support on ${SUPPORT_PHONE_DISPLAY}`}
                className="text-gradient-gold hover:opacity-80 transition-opacity whitespace-nowrap"
              >
                {SUPPORT_PHONE_DISPLAY_LOCAL}
              </a>
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
              Speak directly with our Warrington car detailing experts. Whether you need a quick
              quote, want to book a service, or have a question about your vehicle — our team is
              ready to help around the clock.
            </p>

            {/* Primary CTA — large, prominent phone link */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${SUPPORT_PHONE}`}
                aria-label={`Call our customer support number ${SUPPORT_PHONE_DISPLAY} now`}
                className="btn-primary inline-flex items-center justify-center gap-3 text-xl py-5 px-10"
              >
                <span aria-hidden="true">📞</span>
                <span>{SUPPORT_PHONE_DISPLAY}</span>
              </a>
              <Link
                href="/get-a-quote"
                className="inline-flex items-center justify-center gap-2 border-2 border-brand-gold text-brand-gold font-bold py-5 px-8 rounded-md hover:bg-brand-gold hover:text-brand-black transition-colors text-base"
              >
                Prefer a Form? Get a Free Quote →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Signals ─────────────────────────────────────────────────── */}
      <section aria-label="Why call us" className="py-14 bg-brand-darkgray border-y border-brand-gray/30">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-6" role="list">
            {trustSignals.map(({ icon, label, detail }) => (
              <li key={label} className="card-dark text-center p-6">
                <span className="text-4xl block mb-3" aria-hidden="true">{icon}</span>
                <p className="font-heading font-bold text-brand-white text-base mb-1">{label}</p>
                <p className="text-gray-400 text-sm leading-snug">{detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Main Content ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Left — Call info & persuasion copy */}
            <div className="space-y-10">

              {/* H2 — secondary keyword placement */}
              <div>
                <p className="section-subheading">Direct Phone Number</p>
                <h2 className="text-3xl font-heading font-bold text-brand-white mb-4">
                  Your Fastest Route to a Spotless Car
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Skip the back-and-forth emails. A single call to our customer support number
                  gets you a tailored quote, an available date, and answers to any questions —
                  all in under five minutes. Our Warrington team serves the entire North West
                  and is passionate about delivering showroom-quality results at our Warrington unit.
                </p>
              </div>

              {/* Contact card — phone number front and centre */}
              <address className="not-italic space-y-4">
                <div
                  className="card-dark flex gap-5 items-center p-6 border border-brand-gold/30"
                  role="group"
                  aria-label="Phone contact details"
                >
                  <span className="text-5xl flex-shrink-0" aria-hidden="true">📞</span>
                  <div>
                    <p className="text-xs text-brand-gold font-semibold uppercase tracking-widest mb-1">
                      Customer Support Number
                    </p>
                    <a
                      href={`tel:${SUPPORT_PHONE}`}
                      aria-label={`Call Car Ceramic Coating and detailing warrington0 on ${SUPPORT_PHONE_DISPLAY}`}
                      className="text-brand-white font-black text-3xl hover:text-brand-gold transition-colors font-heading block"
                    >
                      {SUPPORT_PHONE_DISPLAY}
                    </a>
                    <p className="text-gray-400 text-sm mt-1">
                      Call or WhatsApp — open 24 hours, 7 days a week
                    </p>
                  </div>
                </div>

                <div className="card-dark flex gap-5 items-start">
                  <span className="text-3xl flex-shrink-0" aria-hidden="true">✉</span>
                  <div>
                    <p className="text-xs text-brand-gold font-semibold uppercase tracking-widest mb-1">Email</p>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="text-brand-white font-semibold hover:text-brand-gold transition-colors text-lg"
                    >
                      {EMAIL}
                    </a>
                    <p className="text-gray-400 text-sm mt-1">We reply within 2–4 hours</p>
                  </div>
                </div>
              </address>

              {/* H3 — tertiary heading with keyword */}
              <div>
                <h3 className="text-xl font-heading font-bold text-brand-white mb-4">
                  What to Expect When You Call
                </h3>
                <ol className="space-y-3 list-none" role="list">
                  {[
                    'Tell us your vehicle make, model, and current condition.',
                    'We recommend the right service — no upselling, just honest advice.',
                    'We confirm availability and agree a convenient date and location.',
                    'Visit our unit at Fairclough Mill, Atherton\'s Quay, Warrington WA5 1AH — open 24/7.',
                  ].map((step, i) => (
                    <li key={i} className="flex gap-4 items-start text-gray-300 text-sm leading-relaxed">
                      <span
                        className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-gold text-brand-black font-black text-xs flex items-center justify-center"
                        aria-hidden="true"
                      >
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Right — Services + Quick-call panel */}
            <div className="space-y-8">

              {/* Sticky call panel */}
              <div
                className="card-dark p-8 text-center border border-brand-gold/20"
                aria-label="Quick call panel"
              >
                <p className="section-subheading mb-2">Ready to Book?</p>
                <h3 className="text-2xl font-heading font-black text-brand-white mb-2">
                  Call Now for a Free Quote
                </h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  No commitment. No hidden charges. Just honest pricing and expert advice
                  from Warrington&apos;s top-rated detailing team.
                </p>

                <a
                  href={`tel:${SUPPORT_PHONE}`}
                  aria-label={`Tap to call Car Ceramic Coating and detailing warrington0 on ${SUPPORT_PHONE_DISPLAY}`}
                  className="btn-primary w-full flex items-center justify-center gap-3 text-lg py-5 mb-4"
                >
                  <span aria-hidden="true">📞</span>
                  <span>{SUPPORT_PHONE_DISPLAY}</span>
                </a>

                <p className="text-gray-500 text-xs">
                  Lines open 24 / 7 · Typical wait: under 30 seconds
                </p>

                <div className="mt-6 pt-6 border-t border-brand-gray/40">
                  <p className="text-gray-400 text-sm mb-4">Prefer not to call right now?</p>
                  <div className="flex flex-col gap-3">
                    <Link
                      href="/get-a-quote"
                      className="inline-flex items-center justify-center gap-2 border border-brand-gold text-brand-gold text-sm font-semibold py-3 px-6 rounded-md hover:bg-brand-gold hover:text-brand-black transition-colors"
                    >
                      Request a Callback via Form
                    </Link>
                    <Link
                      href="/contact"
                      className="text-gray-400 hover:text-brand-gold text-sm transition-colors"
                    >
                      View all contact options →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Services we handle over the phone */}
              <div className="card-dark p-6">
                <h3 className="font-heading font-bold text-brand-white mb-4">
                  Services You Can Book by Phone
                </h3>
                <ul className="space-y-2" role="list">
                  {services.map(({ name, href }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="flex items-center gap-3 text-gray-300 hover:text-brand-gold text-sm transition-colors group"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0 group-hover:scale-150 transition-transform"
                          aria-hidden="true"
                        />
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Social Proof Strip ────────────────────────────────────────────── */}
      <section
        aria-label="Customer reviews"
        className="py-14 bg-brand-darkgray border-t border-brand-gray/30"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="section-subheading mb-2">Real Customers. Real Results.</p>
          <h2 className="text-2xl font-heading font-bold text-brand-white mb-10">
            Thousands of Happy Drivers Across the North West
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                quote:
                  'Called the number, got a quote in 3 minutes and they came the next morning. Incredible service.',
                name: 'James R.',
                location: 'Warrington',
              },
              {
                quote:
                  'Rang to ask about ceramic coating — they explained everything clearly and the result was stunning.',
                name: 'Sarah M.',
                location: 'Widnes',
              },
              {
                quote:
                  'So easy to book over the phone. The team arrived on time and the car looks brand new.',
                name: 'David K.',
                location: 'St Helens',
              },
            ].map(({ quote, name, location }) => (
              <blockquote
                key={name}
                className="card-dark p-6 text-left"
                cite={`${SITE_URL}/contact-call-support`}
              >
                <p className="text-yellow-400 text-lg mb-3" aria-label="5 star rating">★★★★★</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 italic">&ldquo;{quote}&rdquo;</p>
                <footer className="text-xs text-brand-gold font-semibold">
                  {name} — <span className="text-gray-500 font-normal">{location}</span>
                </footer>
              </blockquote>
            ))}
          </div>

          {/* Final CTA with phone number repeated */}
          <div className="max-w-xl mx-auto">
            <p className="text-gray-400 mb-4">
              Join hundreds of satisfied customers across Warrington, Widnes, St Helens, and beyond.
              Your transformation starts with one call.
            </p>
            <a
              href={`tel:${SUPPORT_PHONE}`}
              aria-label={`Call Car Ceramic Coating and detailing warrington0 now on ${SUPPORT_PHONE_DISPLAY}`}
              className="btn-primary inline-flex items-center justify-center gap-3 text-lg py-4 px-10"
            >
              <span aria-hidden="true">📞</span>
              Call {SUPPORT_PHONE_DISPLAY} Now
            </a>
          </div>
        </div>
      </section>

      {/* ── Internal Links ────────────────────────────────────────────────── */}
      <section aria-label="Explore our services" className="py-16 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-heading font-bold text-brand-white mb-8 text-center">
            Explore Our Services
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {services.map(({ name, href }) => (
              <Link
                key={href}
                href={href}
                className="card-dark p-4 text-center text-sm text-gray-300 hover:text-brand-gold hover:border-brand-gold/40 border border-transparent transition-colors rounded-lg"
              >
                {name}
              </Link>
            ))}
          </div>
          <div className="text-center mt-10 space-x-6">
            <Link href="/" className="text-brand-gold hover:underline text-sm">Home</Link>
            <Link href="/about" className="text-brand-gold hover:underline text-sm">About Car Ceramic Coating and detailing warrington0</Link>
            <Link href="/faq" className="text-brand-gold hover:underline text-sm">FAQs</Link>
            <Link href="/gallery" className="text-brand-gold hover:underline text-sm">Gallery</Link>
          </div>
        </div>
      </section>
    </>
  );
}

