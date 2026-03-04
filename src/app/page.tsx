import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ServiceCard from '@/components/ServiceCard';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import { faqSchema } from '@/lib/schema';
import { SERVICES, PHONE, PHONE_DISPLAY, AREAS_SERVED } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Car Detailing Warrington | Professional Valeting & Ceramic Coating',
  description:
    'Top-rated car detailing in Warrington. Professional mobile valeting, ceramic coating, paint correction & interior detailing. Open 24/7. Call 07958 752513.',
  alternates: { canonical: 'https://warringtoncardetailing.co.uk' },
};

const faqs = [
  {
    question: 'What is the difference between car detailing and car valeting?',
    answer:
      'Car valeting focuses on cleaning and presenting your vehicle, while car detailing is a deeper, more thorough process that includes paint correction, ceramic coating, engine bay cleaning, and restoring every surface to like-new condition.',
  },
  {
    question: 'Do you offer mobile car detailing in Warrington?',
    answer:
      'Yes! Our mobile car valeting service covers Warrington and all surrounding areas including St Helens, Widnes, Runcorn, and beyond. We come to your home or workplace with all equipment needed.',
  },
  {
    question: 'How long does a full car detail take?',
    answer:
      'A full car detail typically takes 4–8 hours depending on the vehicle size and condition. Paint correction and ceramic coating can take 1–2 days for best results.',
  },
  {
    question: 'How much does car detailing cost in Warrington?',
    answer:
      'Prices vary by service and vehicle size. We offer free no-obligation quotes. Contact us on 07958 752513 or fill in our online form for a personalised price.',
  },
  {
    question: 'How often should I get my car detailed?',
    answer:
      'For most drivers we recommend a full detail every 6–12 months, with a maintenance wash every 4–6 weeks. Ceramic coated vehicles require less frequent full details.',
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <Image
          src="/hero-bg.jpg"
          alt="WCD Car Detailing — Land Rover Defender professionally detailed in Warrington"
          fill
          priority
          quality={85}
          className="object-cover object-center"
        />
        {/* Dark overlay to keep text readable */}
        <div className="absolute inset-0 bg-black/65" aria-hidden="true" />
        {/* Gold tint overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 60% 50%, rgba(201,168,76,0.12) 0%, transparent 70%)' }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 py-32 md:py-40 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/30 rounded-full px-4 py-1.5 text-brand-gold text-sm font-semibold mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse-slow" />
            Warrington&apos;s #1 Rated Car Detailing Specialists
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black text-brand-white leading-tight mb-6">
            Professional{' '}
            <span className="text-gradient-gold">Car Detailing</span>
            <br />
            in Warrington
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            From mobile car valeting to ceramic coating and full paint correction —
            we restore and protect your vehicle to showroom condition. Serving
            Warrington and the North West.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <a href={`tel:${PHONE}`} className="btn-primary text-base py-4 px-8 text-lg">
              📞 Book Now — {PHONE_DISPLAY}
            </a>
            <Link href="/contact" className="btn-secondary text-base py-4 px-8 text-lg">
              Get a Free Quote
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400">
            {[
              { icon: '★★★★★', text: '5.0 Google Rating' },
              { icon: '🏆', text: '500+ Cars Detailed' },
              { icon: '📍', text: 'Warrington Based' },
              { icon: '🕐', text: 'Open 24/7' },
            ].map((b) => (
              <div key={b.text} className="flex items-center gap-2">
                <span>{b.icon}</span>
                <span>{b.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 text-xs animate-bounce">
          <span>Scroll</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-20 bg-brand-darkgray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="section-subheading">Why WCD?</p>
            <h2 className="section-heading">
              Warrington&apos;s Trusted Detailing Experts
            </h2>
            <div className="gold-divider" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🎯',
                title: 'Precision Detailing',
                desc: 'Every inch of your vehicle is treated with professional-grade products and techniques used by the best detailers in the UK.',
              },
              {
                icon: '🚐',
                title: 'Mobile Service',
                desc: 'We come to you — at home, work, or anywhere convenient. Our mobile units carry everything needed for a perfect finish.',
              },
              {
                icon: '🌿',
                title: 'Eco-Friendly',
                desc: 'We use water-efficient, environmentally responsible products that are safe for your vehicle, your family, and the planet.',
              },
              {
                icon: '💰',
                title: 'Transparent Pricing',
                desc: 'No hidden costs. We provide detailed quotes upfront so you always know exactly what you\'re paying for.',
              },
            ].map((f) => (
              <div key={f.title} className="card-dark text-center">
                <div className="text-5xl mb-4">{f.icon}</div>
                <h3 className="font-heading font-bold text-brand-white text-lg mb-2">
                  {f.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="section-subheading">Our Services</p>
            <h2 className="section-heading">
              Complete Car Detailing &amp; Valeting Services
            </h2>
            <div className="gold-divider" />
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              From a quick mobile valet to a full multi-stage paint correction and
              ceramic coating — we have a service for every car and every budget.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <ServiceCard
                key={s.slug}
                title={s.title}
                slug={s.slug}
                shortDesc={s.shortDesc}
                icon={s.icon}
                features={undefined}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-20 bg-brand-darkgray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="section-subheading">How It Works</p>
            <h2 className="section-heading">Simple 4-Step Process</h2>
            <div className="gold-divider" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Get a Quote', desc: 'Call or fill in our online form. We\'ll give you a free, no-obligation quote tailored to your vehicle.' },
              { step: '02', title: 'Book a Time', desc: 'Choose a date and time that suits you. We offer flexible scheduling including evenings and weekends.' },
              { step: '03', title: 'We Do the Work', desc: 'Our expert detailers get to work, treating every surface with professional-grade products and care.' },
              { step: '04', title: 'Drive Away Proud', desc: 'Collect your car looking immaculate. We guarantee you\'ll be delighted with the results.' },
            ].map((s) => (
              <div key={s.step} className="relative card-dark text-center">
                <div className="text-5xl font-heading font-black text-brand-gold/20 mb-2 leading-none">
                  {s.step}
                </div>
                <h3 className="font-heading font-bold text-brand-white text-lg mb-2">
                  {s.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <TestimonialsSection />

      {/* ── AREAS ── */}
      <section className="py-20 bg-brand-darkgray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="section-subheading">Coverage Area</p>
            <h2 className="section-heading">
              Mobile Car Detailing Across the North West
            </h2>
            <div className="gold-divider" />
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Based in Warrington, WA5 1AH — we travel across Cheshire, Merseyside
              and Greater Manchester to bring professional car detailing directly to you.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {AREAS_SERVED.map((a) => (
              <span
                key={a}
                className="bg-brand-gray border border-brand-gray/60 text-gray-300 px-4 py-2 rounded-full text-sm hover:border-brand-gold/40 hover:text-brand-gold transition-colors"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-brand-black">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="section-subheading">FAQs</p>
            <h2 className="section-heading">Frequently Asked Questions</h2>
            <div className="gold-divider" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="card-dark group cursor-pointer"
              >
                <summary className="flex items-center justify-between font-semibold text-brand-white list-none py-1 gap-4">
                  <span>{faq.question}</span>
                  <span className="text-brand-gold flex-shrink-0 text-xl font-light group-open:rotate-45 transition-transform duration-200">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-gray-400 text-sm leading-relaxed border-t border-brand-gray pt-3">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG PREVIEW ── */}
      <section className="py-20 bg-brand-darkgray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="section-subheading">Expert Advice</p>
            <h2 className="section-heading">Latest From Our Blog</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                slug: 'detailing-vs-valeting',
                title: "What's the Difference Between Car Detailing and Valeting?",
                excerpt:
                  'Many car owners use the terms interchangeably, but there are key differences. Find out which service your car actually needs.',
                date: '10 Feb 2025',
                category: 'Guide',
                image: '/gallery/warrington-car-valeting-service-1.jpg',
              },
              {
                slug: 'ceramic-coating-benefits',
                title: 'Why Ceramic Coating Is Essential for Protecting Your Paint',
                excerpt:
                  'Ceramic coatings offer unparalleled protection against UV, bird droppings, road salt, and more. Here\'s why it\'s worth the investment.',
                date: '24 Jan 2025',
                category: 'Ceramic Coating',
                image: '/gallery/warrington-ceramic-coating-application-1.jpg',
              },
              {
                slug: 'how-often-car-detailed',
                title: 'How Often Should You Have Your Car Detailed?',
                excerpt:
                  'The answer depends on how you use your car, where you park, and what finish you want. We break it down simply.',
                date: '5 Jan 2025',
                category: 'Maintenance',
                image: '/gallery/warrington-car-detailing-before-after-1.webp',
              },
            ].map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card-dark group block hover:no-underline"
              >
                <div className="relative rounded-lg h-40 mb-4 overflow-hidden">
                  <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <span className="text-xs text-brand-gold font-semibold uppercase tracking-widest">
                  {post.category}
                </span>
                <h3 className="font-heading font-bold text-brand-white text-lg mt-2 mb-2 group-hover:text-brand-gold transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-3 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{post.date}</span>
                  <span className="text-brand-gold group-hover:gap-2 transition-all">
                    Read More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/blog" className="btn-secondary">
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* ── FIND US / GMB MAP ── */}
      <section className="py-20 bg-brand-black" aria-label="Our location in Warrington">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-subheading">Find Us</p>
            <h2 className="section-heading">
              Visit Our Car Detailing Studio in Warrington
            </h2>
            <div className="gold-divider" />
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Conveniently located at Fairclough Mill, Warrington — drop in or book
              your mobile detail and we&apos;ll come to you anywhere across the North West.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
            {/* NAP + info card */}
            <div className="lg:col-span-2 flex flex-col gap-6 justify-center">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  label: 'Address',
                  value: 'Unit 1, Fairclough Mill, Warrington, WA5 1AH',
                  href: 'https://maps.google.com/?q=WCD+Car+Detailing+Warrington',
                },
                {
                  icon: (
                    <svg className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  label: 'Phone',
                  value: '07958 752513',
                  href: `tel:${PHONE}`,
                },
                {
                  icon: (
                    <svg className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  label: 'Hours',
                  value: 'Open 24/7 — Book Any Time',
                  href: null,
                },
                {
                  icon: (
                    <svg className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  ),
                  label: 'Plus Code',
                  value: '99PR+V9 Warrington, United Kingdom',
                  href: 'https://maps.google.com/?q=99PR%2BV9+Warrington',
                },
              ].map((item) => (
                <div key={item.label} className="card-dark flex gap-4">
                  {item.icon}
                  <div>
                    <p className="text-xs text-brand-gold font-semibold uppercase tracking-widest mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-gray-300 hover:text-brand-gold transition-colors text-sm leading-relaxed"
                        {...(item.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-300 text-sm leading-relaxed">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <a
                href={`tel:${PHONE}`}
                className="btn-primary text-center mt-2"
              >
                Book Your Detail Now
              </a>
            </div>

            {/* Google Maps embed */}
            <div className="lg:col-span-3 rounded-xl overflow-hidden border border-brand-gray/40 min-h-[380px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2379.5417653250815!2d-2.6091053!3d53.387248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b02f1411910b1%3A0xc33d71d560ff8164!2sWCD%20-%20Car%20Detailing%20Warrington!5e0!3m2!1sen!2s!4v1772646635859!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px', display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="WCD Car Detailing Warrington — Unit 1, Fairclough Mill, WA5 1AH"
              />
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
