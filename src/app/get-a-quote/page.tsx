import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL, PHONE, PHONE_DISPLAY, EMAIL } from '@/lib/constants';
import JsonLd from '@/components/JsonLd';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Get a Free Car Detailing Quote — WCD Warrington',
  description:
    'Get a free, no-obligation car detailing quote from WCD Car Detailing in Warrington. Tell us your vehicle, service, and location — we\'ll get back to you fast.',
  alternates: { canonical: `${SITE_URL}/get-a-quote` },
  openGraph: {
    title: 'Get a Free Car Detailing Quote — WCD Warrington',
    description:
      'Get a free, no-obligation car detailing quote from WCD Car Detailing in Warrington.',
    url: `${SITE_URL}/get-a-quote`,
    type: 'website',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Get a Quote', item: `${SITE_URL}/get-a-quote` },
  ],
};

const serviceOptions = [
  { value: 'mobile-valet', label: 'Mobile Car Valet' },
  { value: 'full-detail', label: 'Full Car Detail' },
  { value: 'ceramic-coating', label: 'Ceramic Coating' },
  { value: 'paint-correction', label: 'Paint Correction' },
  { value: 'interior-detail', label: 'Interior Detailing' },
  { value: 'headlight-restoration', label: 'Headlight Restoration' },
  { value: 'not-sure', label: 'Not Sure — Advise Me' },
];

const vehicleTypes = [
  { value: 'hatchback', label: 'Hatchback / Small Car' },
  { value: 'saloon', label: 'Saloon / Coupe' },
  { value: 'estate', label: 'Estate / Wagon' },
  { value: 'suv', label: 'SUV / 4x4' },
  { value: 'van', label: 'Van / Minivan' },
  { value: 'prestige', label: 'Prestige / Luxury Car' },
  { value: 'sports', label: 'Sports Car' },
  { value: 'other', label: 'Other' },
];

const conditionOptions = [
  { value: 'excellent', label: 'Excellent — well maintained' },
  { value: 'good', label: 'Good — minor dirt, light marks' },
  { value: 'average', label: 'Average — noticeable swirls or dirt' },
  { value: 'poor', label: 'Poor — heavy soiling, significant scratches' },
  { value: 'unknown', label: 'Not sure' },
];

const faqs = [
  {
    q: 'How quickly will I get a quote?',
    a: 'We aim to respond to all quote requests within 2–4 hours during business hours. For urgent bookings, call us directly on ' + PHONE_DISPLAY + '.',
  },
  {
    q: 'Is the quote binding?',
    a: 'Your quote is a firm estimate based on the information you provide. Final pricing may vary if the vehicle condition differs significantly from what was described, but we\'ll always discuss this with you before starting work.',
  },
  {
    q: 'Do I need to bring my car to you?',
    a: 'No — WCD Car Detailing is a fully mobile service. We come to your home, workplace, or any convenient location across Warrington and surrounding areas.',
  },
  {
    q: 'What areas do you cover?',
    a: 'We cover all WA postcodes and travel to St Helens, Widnes, Runcorn, Wigan, Sale, Knutsford, and surrounding towns. See our mobile detailing page for the full coverage map.',
  },
];

export default function GetAQuotePage() {
  return (
    <article>
      <JsonLd data={breadcrumbSchema} />

      {/* Hero */}
      <header
        className="relative pt-32 pb-20 px-4 text-center overflow-hidden"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.15) 0%, transparent 70%), #0a0a0a',
        }}
      >
        <div className="max-w-3xl mx-auto">
          <Breadcrumb
            items={[
              { name: 'Home', href: '/' },
              { name: 'Get a Quote', href: '/get-a-quote' },
            ]}
          />
          <h1 className="font-heading font-black text-4xl md:text-6xl text-brand-white mt-6 mb-6 leading-tight">
            Get a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-300">
              Free Quote
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-4">
            No obligation — tell us about your vehicle and we&apos;ll get back to you with a firm price.
          </p>
          <p className="text-gray-400">
            Prefer to talk? Call us on{' '}
            <a href={`tel:${PHONE}`} className="text-brand-gold hover:underline">
              {PHONE_DISPLAY}
            </a>{' '}
            for an instant quote.
          </p>
        </div>
      </header>

      {/* Form + Sidebar */}
      <section className="py-16 px-4 bg-brand-darkgray">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Quote Form */}
          <div className="lg:col-span-2">
            <div className="card-dark rounded-2xl p-8">
              <h2 className="font-heading font-bold text-brand-white text-2xl mb-6">
                Your Quote Request
              </h2>
              <form
                action="https://formsubmit.co/info@warringtoncardetailing.co.uk"
                method="POST"
                className="space-y-6"
              >
                <input type="hidden" name="_subject" value="New Quote Request — WCD Car Detailing" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value={`${SITE_URL}/thank-you`} />

                {/* Contact Details */}
                <fieldset>
                  <legend className="font-heading font-bold text-brand-gold text-sm uppercase tracking-widest mb-4">
                    Your Details
                  </legend>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-gray-300 text-sm mb-1">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="w-full bg-brand-black border border-brand-gray rounded-lg px-4 py-3 text-brand-white placeholder-gray-500 focus:outline-none focus:border-brand-gold transition-colors"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-gray-300 text-sm mb-1">
                        Phone Number <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        className="w-full bg-brand-black border border-brand-gray rounded-lg px-4 py-3 text-brand-white placeholder-gray-500 focus:outline-none focus:border-brand-gold transition-colors"
                        placeholder="07700 900000"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="email" className="block text-gray-300 text-sm mb-1">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full bg-brand-black border border-brand-gray rounded-lg px-4 py-3 text-brand-white placeholder-gray-500 focus:outline-none focus:border-brand-gold transition-colors"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="location" className="block text-gray-300 text-sm mb-1">
                        Your Location / Town <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="location"
                        name="location"
                        type="text"
                        required
                        className="w-full bg-brand-black border border-brand-gray rounded-lg px-4 py-3 text-brand-white placeholder-gray-500 focus:outline-none focus:border-brand-gold transition-colors"
                        placeholder="e.g. Stockton Heath, Warrington"
                      />
                    </div>
                  </div>
                </fieldset>

                {/* Vehicle Details */}
                <fieldset>
                  <legend className="font-heading font-bold text-brand-gold text-sm uppercase tracking-widest mb-4">
                    Your Vehicle
                  </legend>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="vehicle-make-model" className="block text-gray-300 text-sm mb-1">
                        Make &amp; Model <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="vehicle-make-model"
                        name="vehicle_make_model"
                        type="text"
                        required
                        className="w-full bg-brand-black border border-brand-gray rounded-lg px-4 py-3 text-brand-white placeholder-gray-500 focus:outline-none focus:border-brand-gold transition-colors"
                        placeholder="e.g. BMW 3 Series"
                      />
                    </div>
                    <div>
                      <label htmlFor="vehicle-year" className="block text-gray-300 text-sm mb-1">
                        Year
                      </label>
                      <input
                        id="vehicle-year"
                        name="vehicle_year"
                        type="text"
                        className="w-full bg-brand-black border border-brand-gray rounded-lg px-4 py-3 text-brand-white placeholder-gray-500 focus:outline-none focus:border-brand-gold transition-colors"
                        placeholder="e.g. 2021"
                      />
                    </div>
                    <div>
                      <label htmlFor="vehicle-type" className="block text-gray-300 text-sm mb-1">
                        Vehicle Type <span className="text-red-400">*</span>
                      </label>
                      <select
                        id="vehicle-type"
                        name="vehicle_type"
                        required
                        className="w-full bg-brand-black border border-brand-gray rounded-lg px-4 py-3 text-brand-white focus:outline-none focus:border-brand-gold transition-colors"
                      >
                        <option value="">Select vehicle type</option>
                        {vehicleTypes.map((v) => (
                          <option key={v.value} value={v.value}>
                            {v.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="vehicle-colour" className="block text-gray-300 text-sm mb-1">
                        Paint Colour
                      </label>
                      <input
                        id="vehicle-colour"
                        name="vehicle_colour"
                        type="text"
                        className="w-full bg-brand-black border border-brand-gray rounded-lg px-4 py-3 text-brand-white placeholder-gray-500 focus:outline-none focus:border-brand-gold transition-colors"
                        placeholder="e.g. Metallic Black"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="vehicle-condition" className="block text-gray-300 text-sm mb-1">
                        Current Condition <span className="text-red-400">*</span>
                      </label>
                      <select
                        id="vehicle-condition"
                        name="vehicle_condition"
                        required
                        className="w-full bg-brand-black border border-brand-gray rounded-lg px-4 py-3 text-brand-white focus:outline-none focus:border-brand-gold transition-colors"
                      >
                        <option value="">Select condition</option>
                        {conditionOptions.map((c) => (
                          <option key={c.value} value={c.value}>
                            {c.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </fieldset>

                {/* Service Selection */}
                <fieldset>
                  <legend className="font-heading font-bold text-brand-gold text-sm uppercase tracking-widest mb-4">
                    Service Required
                  </legend>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {serviceOptions.map((svc) => (
                      <label
                        key={svc.value}
                        className="flex items-center gap-3 p-3 rounded-lg border border-brand-gray hover:border-brand-gold/50 cursor-pointer transition-colors group"
                      >
                        <input
                          type="checkbox"
                          name="services[]"
                          value={svc.value}
                          className="w-4 h-4 accent-brand-gold"
                        />
                        <span className="text-gray-300 text-sm group-hover:text-brand-white transition-colors">
                          {svc.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                {/* Preferred Date */}
                <div>
                  <label htmlFor="preferred-date" className="block text-gray-300 text-sm mb-1">
                    Preferred Date (optional)
                  </label>
                  <input
                    id="preferred-date"
                    name="preferred_date"
                    type="date"
                    className="w-full bg-brand-black border border-brand-gray rounded-lg px-4 py-3 text-brand-white focus:outline-none focus:border-brand-gold transition-colors"
                  />
                </div>

                {/* Additional Notes */}
                <div>
                  <label htmlFor="notes" className="block text-gray-300 text-sm mb-1">
                    Additional Notes
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    className="w-full bg-brand-black border border-brand-gray rounded-lg px-4 py-3 text-brand-white placeholder-gray-500 focus:outline-none focus:border-brand-gold transition-colors resize-none"
                    placeholder="Tell us anything else — specific problem areas, interior conditions, previous work done, etc."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary text-center text-lg py-4"
                >
                  Send Quote Request
                </button>
                <p className="text-gray-500 text-xs text-center">
                  We&apos;ll respond within 2–4 hours. No spam, no obligation.
                </p>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Contact */}
            <div className="card-dark rounded-xl p-6">
              <h3 className="font-heading font-bold text-brand-white mb-4">
                Prefer to Call?
              </h3>
              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-3 text-brand-gold font-bold text-lg hover:underline mb-3"
              >
                {PHONE_DISPLAY}
              </a>
              <p className="text-gray-400 text-sm mb-4">
                Open 7 days. We can usually give an instant quote over the phone.
              </p>
              <a
                href={`mailto:${EMAIL}`}
                className="text-gray-400 hover:text-brand-gold text-sm transition-colors"
              >
                {EMAIL}
              </a>
            </div>

            {/* Why WCD */}
            <div className="card-dark rounded-xl p-6">
              <h3 className="font-heading font-bold text-brand-white mb-4">
                Why Choose WCD?
              </h3>
              <ul className="space-y-3">
                {[
                  'Fully mobile — we come to you',
                  '5.0 ★ Google rating (47 reviews)',
                  'Professional-grade products & equipment',
                  'All vehicle types accepted',
                  'Ceramic coating certified',
                  'Fully insured',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="text-brand-gold mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Services quick-links */}
            <div className="card-dark rounded-xl p-6">
              <h3 className="font-heading font-bold text-brand-white mb-4">
                Service Pages
              </h3>
              <ul className="space-y-2">
                {[
                  { href: '/car-detailing', label: 'Car Detailing' },
                  { href: '/mobile-car-valeting', label: 'Mobile Valeting' },
                  { href: '/ceramic-coating', label: 'Ceramic Coating' },
                  { href: '/paint-correction', label: 'Paint Correction' },
                  { href: '/interior-detailing', label: 'Interior Detailing' },
                  { href: '/headlight-restoration', label: 'Headlight Restoration' },
                ].map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      className="text-gray-400 hover:text-brand-gold transition-colors text-sm flex items-center gap-2"
                    >
                      <span className="text-brand-gold/60">→</span>
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" aria-label="Quote FAQs" className="py-20 px-4 bg-brand-black">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading font-black text-3xl text-brand-white mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="card-dark rounded-xl overflow-hidden group"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-brand-white hover:text-brand-gold transition-colors list-none">
                  {faq.q}
                  <span className="text-brand-gold text-xl ml-4 flex-shrink-0 group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 text-gray-400 leading-relaxed text-sm border-t border-brand-gray pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/faq" className="text-brand-gold hover:underline text-sm">
              View all FAQs →
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
