import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import JsonLd from '@/components/JsonLd';

// SEO Metadata Configuration
export const metadata: Metadata = {
  title: 'How to Choose a Professional Car Detailer in Manchester | SRV Detailing',
  description:
    'Expert guide to selecting a professional car detailer in Manchester. Learn how to evaluate paint correction, ceramic coating, and interior detailing services across Greater Manchester.',
  keywords: [
    'professional car detailer Manchester',
    'paint correction Manchester',
    'ceramic coating Manchester',
    'car detailing Greater Manchester',
    'paint protection film',
    'car valeting Manchester',
  ],
  alternates: {
    canonical: 'https://srvdetailing.co.uk/blog/how-to-choose-professional-car-detailer-manchester',
  },
  openGraph: {
    type: 'article',
    title: 'How to Choose a Professional Car Detailer in Manchester',
    description:
      'Expert guide to selecting a professional car detailer in Manchester for paint correction, ceramic coating, and interior detailing.',
    url: 'https://srvdetailing.co.uk/blog/how-to-choose-professional-car-detailer-manchester',
    siteName: 'SRV Detailing',
    images: [
      {
        url: 'https://srvdetailing.co.uk/og-image-detailer-manchester.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional car detailer working on paint correction',
      },
    ],
    authors: ['SRV Detailing'],
    publishedTime: '2026-03-05',
    modifiedTime: '2026-03-05',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Choose a Professional Car Detailer in Manchester',
    description:
      'Expert guide to evaluating paint correction, ceramic coating, and detailing services in Manchester.',
    images: ['https://srvdetailing.co.uk/og-image-detailer-manchester.jpg'],
  },
};

// JSON-LD Structured Data for Local Business & Article
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://srvdetailing.co.uk',
  name: 'SRV Detailing',
  description: 'Professional car detailing services in Manchester and Greater Manchester',
  url: 'https://srvdetailing.co.uk',
  telephone: '+44 161 000 0000',
  email: 'info@srvdetailing.co.uk',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Manchester',
    addressRegion: 'Greater Manchester',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '53.4808',
    longitude: '-2.2426',
  },
  service: [
    {
      '@type': 'Service',
      name: 'Paint Correction',
      description: 'Professional paint correction to remove swirl marks, scratches, and oxidation',
    },
    {
      '@type': 'Service',
      name: 'Ceramic Coating',
      description: 'Long-lasting ceramic nano coating for paint protection',
    },
    {
      '@type': 'Service',
      name: 'Interior Detailing',
      description: 'Deep interior cleaning including leather conditioning',
    },
    {
      '@type': 'Service',
      name: 'Paint Protection Film',
      description: 'Clear protective film for bumpers, bonnet, and vulnerable areas',
    },
  ],
  areaServed: [
    {
      '@type': 'City',
      name: 'Manchester',
    },
    {
      '@type': 'City',
      name: 'Stockport',
    },
    {
      '@type': 'City',
      name: 'Salford',
    },
    {
      '@type': 'City',
      name: 'Trafford',
    },
    {
      '@type': 'City',
      name: 'Bolton',
    },
    {
      '@type': 'City',
      name: 'Bury',
    },
    {
      '@type': 'City',
      name: 'Oldham',
    },
    {
      '@type': 'City',
      name: 'Rochdale',
    },
    {
      '@type': 'City',
      name: 'Tameside',
    },
  ],
  sameAs: [
    'https://www.facebook.com/srvdetailing',
    'https://www.instagram.com/srvdetailing',
  ],
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  '@id': 'https://srvdetailing.co.uk/blog/how-to-choose-professional-car-detailer-manchester',
  headline: 'How to Choose a Professional Car Detailer in Manchester',
  description:
    'Expert guide to selecting a professional car detailer in Manchester. Learn how to evaluate paint correction, ceramic coating, and interior detailing services.',
  image: 'https://srvdetailing.co.uk/og-image-detailer-manchester.jpg',
  datePublished: '2026-03-05',
  dateModified: '2026-03-05',
  author: {
    '@type': 'Organization',
    name: 'SRV Detailing',
    url: 'https://srvdetailing.co.uk',
  },
  publisher: {
    '@type': 'Organization',
    name: 'SRV Detailing',
    logo: {
      '@type': 'ImageObject',
      url: 'https://srvdetailing.co.uk/logo.png',
    },
  },
  mainEntity: {
    '@type': 'LocalBusiness',
    '@id': 'https://srvdetailing.co.uk',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between car valeting and car detailing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Car valeting is regular maintenance cleaning (washing and hoovering), while car detailing is deep restoration work that addresses paint damage, contamination, and protective coatings.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I look for in a professional car detailer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Look for proper training credentials, detailed before/after portfolios, quality products and equipment, insurance coverage, warranty guarantees, clear communication, and customer testimonials.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does Manchester climate affect car paintwork?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Manchester\'s wet climate brings road salt and industrial pollutants that bond chemically to paintwork, causing permanent etching and corrosion if left untreated.',
      },
    },
  ],
};

export default function CarDetailerManchesterPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, #001233 0%, #0a0a0a 60%)' }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumb
            items={[
              { name: 'Home', href: '/' },
              { name: 'Blog', href: '/blog' },
              { name: 'How to Choose a Professional Car Detailer in Manchester' },
            ]}
          />
          <div className="mt-6 max-w-3xl">
            <p className="section-subheading">Professional Detailing Guide</p>
            <h1 className="text-4xl md:text-5xl font-heading font-black text-brand-white leading-tight mb-6">
              How to Choose a Professional Car Detailer in{' '}
              <span className="text-gradient-gold">Manchester</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
              Your car&apos;s paintwork is under constant attack. Between motorway pollution, Manchester&apos;s unpredictable weather, and daily grime, finding the right professional detailer makes all the difference.
            </p>
            <div className="flex gap-4 mt-8 flex-wrap">
              <span className="text-sm text-gray-400">Published: 5 March 2026</span>
              <span className="text-sm text-gray-400">•</span>
              <span className="text-sm text-gray-400">Reading time: 8 minutes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-20 bg-brand-darkgray">
        <div className="max-w-3xl mx-auto px-4">
          <section className="prose prose-invert max-w-none mb-12">
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              If you&apos;re driving around Stockport, Didsbury, Altrincham, or anywhere across Greater Manchester, you&apos;ve likely noticed how
              quickly your car&apos;s finish deteriorates. That&apos;s exactly why choosing an experienced, qualified detailing specialist matters far more
              than most car owners realise.
            </p>
          </section>

          {/* Section: Understanding Professional Car Detailing */}
          <section className="mb-12">
            <h2 className="text-3xl font-heading font-bold text-brand-white mb-6">
              Understanding Professional Car Detailing vs. Valeting
            </h2>

            <div className="mb-8">
              <h3 className="text-2xl font-heading font-bold text-brand-white mb-4">
                The Difference Between Valeting and Detailing
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong className="text-brand-white">Car valeting</strong> is the foundation. A valet cleans the exterior and interior of your car—washing, hoovering, and polishing the visible surfaces. It&apos;s regular maintenance and should happen monthly or quarterly, depending on your driving conditions around Manchester and the North West.
              </p>
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-brand-white">Car detailing</strong>, by contrast, is deep restoration work. Detailing addresses underlying paint damage, contamination bonded to the paintwork, and protective coating applications. A professional detailer works on problems that regular washing simply cannot resolve.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-heading font-bold text-brand-white mb-4">
                Types of Professional Detailing Services
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                When you&apos;re evaluating detailers in Manchester, you&apos;ll encounter several core services:
              </p>
              <ul className="space-y-3 text-gray-300 mb-6">
                <li className="flex gap-3">
                  <span className="text-brand-gold font-bold flex-shrink-0">•</span>
                  <span>
                    <strong className="text-brand-white">Paint Correction:</strong> Removes swirl marks, fine scratches, and oxidation through machine polishing with progressive abrasive pads
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold font-bold flex-shrink-0">•</span>
                  <span>
                    <strong className="text-brand-white">Ceramic Coating:</strong> Applies a protective nano-ceramic layer that bonds to clear coat, providing durability against environmental contamination
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold font-bold flex-shrink-0">•</span>
                  <span>
                    <strong className="text-brand-white">Interior Detailing:</strong> Deep cleaning of leather, fabric, carpets, and trim using professional-grade equipment and conditioning products
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold font-bold flex-shrink-0">•</span>
                  <span>
                    <strong className="text-brand-white">Paint Protection Film:</strong> Clear protective layer applied to vulnerable areas (bonnet, bumpers, door handles) to prevent damage from stone chips and road debris
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold font-bold flex-shrink-0">•</span>
                  <span>
                    <strong className="text-brand-white">Machine Polishing:</strong> Uses rotary or dual-action machines with varying wool pads and polishing compounds to restore clarity and depth to faded paint
                  </span>
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                Each service requires different expertise, equipment, and training.
              </p>
            </div>
          </section>

          {/* Section: Manchester Conditions */}
          <section className="mb-12">
            <h2 className="text-3xl font-heading font-bold text-brand-white mb-6">
              Why Manchester&apos;s Conditions Demand Professional Care
            </h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              Living in Greater Manchester means your car faces specific environmental challenges that accelerate paint deterioration.
            </p>

            <div className="mb-8">
              <h3 className="text-2xl font-heading font-bold text-brand-white mb-4">
                Rain, Salt, and Road Contamination
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Manchester&apos;s climate is notoriously wet. That constant rain, especially during autumn and winter, brings road salt and industrial pollutants that bond chemically to your paintwork. If left untreated, these contaminants cause permanent etching and corrosion. Drivers across Salford, Trafford, and Wythenshawe face identical challenges—it&apos;s simply the nature of the North West climate.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Regular washing with a hose only removes loose dirt. Salt deposits and industrial fallout require professional iron contamination removal, which uses chemical treatments and specialist tools that most car owners don&apos;t possess.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-heading font-bold text-brand-white mb-4">
                Urban Driving and Swirl Marks
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Daily commuting around Manchester city centre, Bolton, Bury, and the surrounding areas adds another layer of wear. Stop-and-start driving, high-density parking, and automatic car washes create swirl marks—fine, hair-like scratches that compound over time. Paint correction is the only reliable way to restore a smooth, reflective finish.
              </p>
            </div>
          </section>

          {/* Section: Key Factors */}
          <section className="mb-12">
            <h2 className="text-3xl font-heading font-bold text-brand-white mb-6">
              Key Factors When Choosing Your Detailer
            </h2>

            <div className="mb-10">
              <h3 className="text-2xl font-heading font-bold text-brand-white mb-4">
                1. Credentials, Training, and Experience
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-brand-gold font-bold flex-shrink-0">→</span>
                  <span>
                    <strong className="text-brand-white">Ask questions about training.</strong> A professional detailer should have completed formal training in paint correction, ceramic coating application, and product chemistry. Look for qualifications from recognised detailing training providers.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold font-bold flex-shrink-0">→</span>
                  <span>
                    <strong className="text-brand-white">Check their experience level.</strong> How many years have they been working with cars? More importantly, can they demonstrate experience with your specific vehicle type and paint condition? A detailer experienced in ceramic coating applications should understand surface preparation, coating thickness measurement, and long-term maintenance protocols.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold font-bold flex-shrink-0">→</span>
                  <span>
                    <strong className="text-brand-white">Ask about insurance and guarantees.</strong> Professional detailers carry public liability insurance. Any ceramic coating worth its price should come with a warranty—typically 2 to 5 years depending on the product tier.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mb-10">
              <h3 className="text-2xl font-heading font-bold text-brand-white mb-4">
                2. Portfolio and Before-and-After Evidence
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Professional detailers maintain detailed portfolios. You should expect to see:
              </p>
              <ul className="space-y-3 text-gray-300 mb-4">
                <li className="flex gap-3">
                  <span className="text-brand-gold font-bold flex-shrink-0">•</span>
                  <span>
                    <strong className="text-brand-white">Before and after photos</strong> of paint correction work showing actual swirl mark removal and rotary polishing results
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold font-bold flex-shrink-0">•</span>
                  <span>
                    <strong className="text-brand-white">Ceramic coating transformations</strong> demonstrating beading and water behaviour
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold font-bold flex-shrink-0">•</span>
                  <span>
                    <strong className="text-brand-white">Interior detailing examples</strong> showing deep cleaning results on leather and fabric
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold font-bold flex-shrink-0">•</span>
                  <span>
                    <strong className="text-brand-white">Customer testimonials</strong> with genuine reviews, ideally from verified customers
                  </span>
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                Be sceptical of detailers without substantial portfolio evidence. Legitimate specialists—whether based in Oldham, Rochdale, Tameside, or Manchester city centre—maintain documented records of their work.
              </p>
            </div>

            <div className="mb-10">
              <h3 className="text-2xl font-heading font-bold text-brand-white mb-4">
                3. Quality of Products and Equipment
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-brand-gold font-bold flex-shrink-0">→</span>
                  <span>
                    <strong className="text-brand-white">Understand the tools they use.</strong> Professional paint correction requires dual-action or rotary polishing machines, quality wool pads, and progressive compound systems. Detailers using budget polishing kits or hand-polishing alone won&apos;t achieve professional results.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold font-bold flex-shrink-0">→</span>
                  <span>
                    <strong className="text-brand-white">Know your ceramic coatings.</strong> Not all ceramic coatings are equal. Premium coatings (such as IGL Coatings, Gtechniq, or CarPro products) cost more but offer superior durability and hydrophobic performance. Budget alternatives may provide minimal protection.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold font-bold flex-shrink-0">→</span>
                  <span>
                    <strong className="text-brand-white">Ask about pre-treatment products.</strong> Before applying any coating, professional detailers use clay bar treatments or iron contamination removers. This step determines whether your ceramic coating bonds properly to the paint.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-heading font-bold text-brand-white mb-4">
                4. Communication and Transparency
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                A trustworthy detailer explains their process:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-brand-gold font-bold flex-shrink-0">•</span>
                  <span>They inspect your paintwork under bright lighting to identify issues and explain what they&apos;ll address</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold font-bold flex-shrink-0">•</span>
                  <span>They discuss the limitations of what detailing can achieve (some deep scratches may not be fully correctible)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold font-bold flex-shrink-0">•</span>
                  <span>They explain recommended maintenance after ceramic coating or paint protection film</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold font-bold flex-shrink-0">•</span>
                  <span>They provide realistic timelines and pricing breakdowns</span>
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                If a detailer can&apos;t clearly explain what they&apos;re doing or why, that&apos;s a red flag.
              </p>
            </div>
          </section>

          {/* Section: Common Mistakes */}
          <section className="mb-12">
            <h2 className="text-3xl font-heading font-bold text-brand-white mb-6">
              Common Mistakes to Avoid
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-heading font-bold text-brand-white mb-3">
                  Choosing Based on Price Alone
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  The cheapest detailer in Manchester isn&apos;t necessarily the best value. Paint correction with inadequate technique can cause more damage than it corrects. Ceramic coating applied over a poorly prepared surface will fail prematurely.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold text-brand-white mb-3">
                  Ignoring the Inspection Process
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Professional detailers always perform a thorough pre-work inspection under bright lights. They&apos;ll discuss paintwork condition, depth of defects, and realistic outcomes with you. If someone skips this step, they&apos;re not being professional.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold text-brand-white mb-3">
                  Trusting Reviews Without Context
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Online reviews are helpful, but they need context. A 5-star review from someone who got a basic wash is different from a detailed review of a complex ceramic coating installation. Read reviews that specifically describe the service performed.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold text-brand-white mb-3">
                  Overlooking Aftercare Guidance
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  A detailer&apos;s job doesn&apos;t end when your car leaves their location. Professional ceramic coating requires specific aftercare—typically a 7-day cure period, pH-neutral maintenance washing, and regular maintenance coatings. If your detailer doesn&apos;t explain this, they may not have applied it correctly.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Conclusion */}
          <section className="mb-12 pb-8 border-b border-gray-700">
            <h2 className="text-3xl font-heading font-bold text-brand-white mb-6">
              Making Your Final Decision
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              By the time you&apos;ve evaluated experience, examined portfolios, confirmed product quality, and assessed communication style, you&apos;ll have a clear picture of who can deliver professional results.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Whether you&apos;re based in Sale, Prestwich, Chorlton or anywhere across Greater Manchester, the process remains the same: prioritise expertise and transparency over convenience and cost. Your car&apos;s paintwork is one of your vehicle&apos;s most visible and valuable assets—it deserves professional care from someone who understands both the technical requirements and the specific environmental challenges facing Manchester drivers.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When you&apos;re ready to move forward, ensure your chosen detailer provides a clear quote, genuine warranty coverage, and documented before-and-after results. That&apos;s the foundation of a professional relationship built on trust and expertise.
            </p>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-brand-gold/10 to-transparent p-8 rounded-lg border border-brand-gold/20">
            <h3 className="text-2xl font-heading font-bold text-brand-white mb-3">
              Looking for a professional car detailer in Manchester?
            </h3>
            <p className="text-gray-300 mb-6">
              SRV Detailing brings professional expertise to paint correction, ceramic coating, and interior detailing across Manchester and Greater Manchester.{' '}
              <Link href="/contact" className="text-brand-gold font-semibold hover:text-brand-gold/80 transition-colors">
                Get in touch
              </Link>
              {' '}for a consultation.
            </p>
          </section>

          {/* Internal Links */}
          <section className="mt-12">
            <h3 className="text-lg font-heading font-bold text-brand-white mb-4">
              Related Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/paint-correction" className="text-brand-gold hover:text-brand-gold/80 transition-colors">
                  ← Paint Correction Services in Manchester
                </Link>
              </li>
              <li>
                <Link href="/ceramic-coating" className="text-brand-gold hover:text-brand-gold/80 transition-colors">
                  ← Ceramic Coating Protection
                </Link>
              </li>
              <li>
                <Link href="/interior-detailing" className="text-brand-gold hover:text-brand-gold/80 transition-colors">
                  ← Interior Detailing Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-brand-gold hover:text-brand-gold/80 transition-colors">
                  ← Back to Blog
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </article>
    </>
  );
}
