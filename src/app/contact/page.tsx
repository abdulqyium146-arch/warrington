import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { PHONE, PHONE_DISPLAY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact WCD Car Detailing Warrington | Free Quote',
  description:
    'Get in touch with WCD Car Detailing Warrington. Call 07958 752513 for a free no-obligation quote on mobile valeting, ceramic coating, paint correction and more.',
  alternates: { canonical: 'https://warringtoncardetailing.co.uk/contact' },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: 'https://warringtoncardetailing.co.uk' },
          { name: 'Contact', url: 'https://warringtoncardetailing.co.uk/contact' },
        ])}
      />

      {/* Hero */}
      <section
        className="relative pt-32 pb-20"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, #001233 0%, #0a0a0a 60%)' }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'Contact' }]} />
          <div className="mt-6 max-w-3xl">
            <p className="section-subheading">Get In Touch</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-brand-white leading-tight mb-6">
              Book Your <span className="text-gradient-gold">Free Quote</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Ready to transform your vehicle? Call us directly or fill in the form below
              and we&apos;ll get back to you with a no-obligation quote tailored to your car.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-brand-darkgray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <p className="section-subheading">Contact Details</p>
                <h2 className="text-3xl font-heading font-bold text-brand-white mb-6">
                  Reach Us Directly
                </h2>
              </div>

              {[
                {
                  icon: '📞',
                  label: 'Phone',
                  value: PHONE_DISPLAY,
                  href: `tel:${PHONE}`,
                  sub: 'Call or WhatsApp — Open 24/7',
                },
                {
                  icon: '📍',
                  label: 'Address',
                  value: 'Unit 1, Fairclough Mill, Warrington, WA5 1AH',
                  href: 'https://maps.google.com/?q=WCD+Car+Detailing+Warrington',
                  sub: 'Mobile service also available across the North West',
                },
                {
                  icon: '🕐',
                  label: 'Hours',
                  value: 'Open 24/7',
                  href: null,
                  sub: 'Flexible scheduling including evenings & weekends',
                },
              ].map((item) => (
                <div key={item.label} className="card-dark flex gap-5 items-start">
                  <span className="text-3xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <p className="text-xs text-brand-gold font-semibold uppercase tracking-widest mb-1">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-brand-white font-semibold hover:text-brand-gold transition-colors text-lg"
                        {...(item.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-brand-white font-semibold text-lg">{item.value}</p>
                    )}
                    <p className="text-gray-400 text-sm mt-1">{item.sub}</p>
                  </div>
                </div>
              ))}

              <div className="rounded-xl overflow-hidden border border-brand-gray/40">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2379.5417653250815!2d-2.6091053!3d53.387248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b02f1411910b1%3A0xc33d71d560ff8164!2sWCD%20-%20Car%20Detailing%20Warrington!5e0!3m2!1sen!2s!4v1772646635859!5m2!1sen!2s"
                  width="100%"
                  height="280"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="WCD Car Detailing Warrington location"
                />
              </div>
            </div>

            {/* Quote Form */}
            <div className="card-dark">
              <h2 className="text-2xl font-heading font-bold text-brand-white mb-2">Request a Free Quote</h2>
              <p className="text-gray-400 text-sm mb-8">We&apos;ll respond within a few hours.</p>

              <form
                action="https://formsubmit.co/info@warringtoncardetailing.co.uk"
                method="POST"
                className="space-y-5"
              >
                <input type="hidden" name="_subject" value="New Quote Request — WCD Warrington" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://warringtoncardetailing.co.uk/contact?sent=true" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-brand-gold font-semibold uppercase tracking-widest mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="John Smith"
                      className="w-full bg-brand-black border border-brand-gray rounded-lg px-4 py-3 text-brand-white placeholder-gray-600 focus:outline-none focus:border-brand-gold transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-brand-gold font-semibold uppercase tracking-widest mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="07700 900000"
                      className="w-full bg-brand-black border border-brand-gray rounded-lg px-4 py-3 text-brand-white placeholder-gray-600 focus:outline-none focus:border-brand-gold transition-colors text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-brand-gold font-semibold uppercase tracking-widest mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    className="w-full bg-brand-black border border-brand-gray rounded-lg px-4 py-3 text-brand-white placeholder-gray-600 focus:outline-none focus:border-brand-gold transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs text-brand-gold font-semibold uppercase tracking-widest mb-2">
                    Service Required *
                  </label>
                  <select
                    name="service"
                    required
                    className="w-full bg-brand-black border border-brand-gray rounded-lg px-4 py-3 text-brand-white focus:outline-none focus:border-brand-gold transition-colors text-sm"
                  >
                    <option value="" disabled>Select a service…</option>
                    <option>Mobile Car Valeting</option>
                    <option>Full Car Detailing</option>
                    <option>Ceramic Coating</option>
                    <option>Paint Correction</option>
                    <option>Interior Detailing</option>
                    <option>Headlight Restoration</option>
                    <option>Not sure — need advice</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-brand-gold font-semibold uppercase tracking-widest mb-2">
                    Vehicle (Make &amp; Model)
                  </label>
                  <input
                    type="text"
                    name="vehicle"
                    placeholder="e.g. BMW 3 Series, Ford Focus"
                    className="w-full bg-brand-black border border-brand-gray rounded-lg px-4 py-3 text-brand-white placeholder-gray-600 focus:outline-none focus:border-brand-gold transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs text-brand-gold font-semibold uppercase tracking-widest mb-2">
                    Additional Details
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your vehicle's condition, any specific concerns, or preferred dates…"
                    className="w-full bg-brand-black border border-brand-gray rounded-lg px-4 py-3 text-brand-white placeholder-gray-600 focus:outline-none focus:border-brand-gold transition-colors text-sm resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full text-center">
                  Send Quote Request
                </button>

                <p className="text-gray-500 text-xs text-center">
                  Or call us directly:{' '}
                  <a href={`tel:${PHONE}`} className="text-brand-gold hover:underline">
                    {PHONE_DISPLAY}
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
