﻿﻿﻿import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import JsonLd from '@/components/JsonLd';
import StoreLocator from '@/components/StoreLocator';
import { PHONE, PHONE_DISPLAY, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  // absolute bypasses the layout template — prevents duplicate brand suffix
  title: {
    absolute: 'Car Ceramic Coating & Paint Correction Warrington | Car Ceramic Coating and detailing warrington0 | 5★ Rated',
  },
  description:
    'Best professional ceramic coating & paint correction in Warrington. Car ceramic coating from £350, car polishing & paint correction from £200. 5★ rated. WA5 unit. Call 07375 759686.',
  keywords: [
    'car ceramic coating',
    'ceramic car coating',
    'ceramic coating',
    'ceramic coating car',
    'ceramic coating Warrington',
    'best professional ceramic coating',
    'car paint correction near me',
    'paint correction Warrington',
    'car polishing near me',
    'auto paint',
    'car detailing Warrington',
    'machine polishing Warrington',
    'paint correction near me',
    'car polishing Warrington',
    'auto paint Warrington',
    'best car detailer Warrington',
    'Car Ceramic Coating and detailing warrington0 car detailing',
  ],
  alternates: {
    canonical: SITE_URL + '/',
    languages: { 'en-GB': SITE_URL + '/' },
  },
  openGraph: {
    title: 'Car Ceramic Coating & Paint Correction Warrington | Car Ceramic Coating and detailing warrington0 | 5★ Rated',
    description: 'Best professional ceramic coating & paint correction in Warrington. Car ceramic coating from £350, car polishing from £200. 5★ rated. Free quote: 07375 759686.',
    url: SITE_URL + '/',
    siteName: 'Car Ceramic Coating and detailing warrington0',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/hero-bg.jpg', width: 1200, height: 630, alt: 'Car Ceramic Coating and detailing warrington0 — Ceramic Coating and Machine Polishing specialists in Warrington, Cheshire' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Car Ceramic Coating & Paint Correction Warrington | Car Ceramic Coating and detailing warrington0 | 5★ Rated',
    description: 'Best professional ceramic coating & paint correction in Warrington. Car ceramic coating from £350. Free quote: 07375 759686.',
    images: ['/hero-bg.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

// ── JSON-LD SCHEMAS ────────────────────────────────────────────────────────────

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#business`,
  name: 'Car Ceramic Coating and detailing warrington0',
  description:
    "Car Ceramic Coating and detailing warrington0 is Warrington's best professional ceramic coating and paint correction specialist. Services include car ceramic coating, paint correction, car polishing, interior detailing, headlight restoration and auto paint enhancement at our dedicated WA5 unit.",
  url: SITE_URL,
  telephone: '+44 7375 759686',
  email: 'info@wcdcardetailing.co.uk',
  priceRange: '££',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Unit 1 Fairclough Mill, Atherton\'s Quay',
    addressLocality: 'Warrington',
    addressRegion: 'Cheshire',
    postalCode: 'WA5 1AH',
    addressCountry: 'GB',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 53.3897, longitude: -2.5973 },
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: { '@type': 'GeoCoordinates', latitude: 53.3897, longitude: -2.5973 },
    geoRadius: '50000',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '47',
    bestRating: '5',
    worstRating: '1',
  },
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'James R.' },
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
      reviewBody:
        'I travelled from Bristol to Warrington after seeing the quality of work Car Ceramic Coating and detailing warrington0 produces. My BMW looks better than the day I bought it.',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Sarah M.' },
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
      reviewBody:
        'Great service and value for money. My car looks brand new. Professional, punctual, and the results speak for themselves.',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Warrington' },
    { '@type': 'City', name: 'St Helens' },
    { '@type': 'City', name: 'Widnes' },
    { '@type': 'City', name: 'Runcorn' },
    { '@type': 'City', name: 'Wigan' },
    { '@type': 'City', name: 'Manchester' },
    { '@type': 'City', name: 'Liverpool' },
    { '@type': 'City', name: 'Chester' },
    { '@type': 'City', name: 'Knutsford' },
    { '@type': 'City', name: 'Northwich' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Car Detailing Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Car Detailing', description: 'Professional full car detailing in Warrington' }, price: '80', priceCurrency: 'GBP' },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Car Ceramic Coating', description: 'Best professional ceramic coating — car ceramic coating that bonds permanently to auto paint for hydrophobic UV-resistant protection lasting years' }, price: '350', priceCurrency: 'GBP' },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Paint Correction & Car Polishing', description: 'Multi-stage paint correction and car polishing to remove swirl marks, scratches and auto paint defects' }, price: '200', priceCurrency: 'GBP' },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Interior Car Detailing', description: 'Deep interior car detailing including leather conditioning and odour removal' }, price: '80', priceCurrency: 'GBP' },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Headlight Restoration', description: 'Restore clarity to yellowed or foggy headlights' }, price: '50', priceCurrency: 'GBP' },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Auto Paint Enhancement', description: 'Professional auto paint correction, polishing and ceramic coating protection for all vehicle types' }, price: '150', priceCurrency: 'GBP' },
    ],
  },
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Car Ceramic Coating and detailing warrington0 — Professional Ceramic Coating & Machine Polishing',
  url: SITE_URL,
  description: "Warrington's #1 ceramic coating and machine polishing service.",
  inLanguage: 'en-GB',
  isPartOf: { '@type': 'WebSite', url: SITE_URL },
  about: { '@id': `${SITE_URL}/#business` },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL }],
  },
};

const faqs = [
  {
    question: 'What is the difference between car detailing and car valeting?',
    answer:
      'Car valeting is a thorough clean of your car\'s interior and exterior — removing dirt, dust, and grime to leave it looking fresh. Car detailing goes further: it\'s a multi-stage process that includes paint decontamination, correction of swirl marks and scratches, and the application of protective coatings. At Car Ceramic Coating and detailing warrington0, we focus on professional detailing — from machine polishing to ceramic coating — at our dedicated unit in Warrington WA5.',
  },
  {
    question: 'Where is Car Ceramic Coating and detailing warrington0 based?',
    answer:
      'Car Ceramic Coating and detailing warrington0 is based at Unit 1 Fairclough Mill, Atherton\'s Quay, Warrington, WA5 1AH. Customers bring their vehicles to our unit where we carry out all our services — from machine polishing and ceramic coating to full interior detailing and headlight restoration.',
  },
  {
    question: 'How much does car detailing cost in Warrington?',
    answer:
      'Car detailing in Warrington starts from £80 for an exterior or interior detail, £200 for machine polishing, and £350 for a ceramic coating package. The exact price depends on your vehicle size and condition. Car Ceramic Coating and detailing warrington0 always provides a free, no-obligation quote before any work begins.',
  },
  {
    question: 'How long does a full car detail take?',
    answer:
      'A full car detail typically takes 4–8 hours. Machine polishing can take 4–8 hours depending on paint condition. A ceramic coating package usually requires 1–2 full days. Car Ceramic Coating and detailing warrington0 will always give you an accurate time estimate with your quote.',
  },
  {
    question: 'Is Car Ceramic Coating and detailing warrington0 open on weekends and bank holidays?',
    answer:
      'Yes — Car Ceramic Coating and detailing warrington0 is open 24 hours a day, 7 days a week, including weekends and bank holidays. You can book any time by calling 07375 759686 or using our online quote form.',
  },
  {
    question: 'Which areas of Warrington do you cover?',
    answer:
      'Car Ceramic Coating and detailing warrington0 covers the entire Warrington area including Great Sankey, Stockton Heath, Birchwood, Padgate, Latchford, Fearnhead, Grappenhall, Westbrook, Penketh, Woolston, Appleton, Culcheth, Callands, Thelwall and Lymm — plus all WA1 to WA5 postcodes.',
  },
  {
    question: 'Do you detail luxury and prestige vehicles?',
    answer:
      'Absolutely. Car Ceramic Coating and detailing warrington0 regularly details BMWs, Mercedes, Audis, Porsches, Land Rovers, Range Rovers and other prestige vehicles. We use professional-grade products appropriate for each vehicle and its finish.',
  },
  {
    question: 'What is ceramic coating and is it worth it?',
    answer:
      'Ceramic coating is a liquid polymer applied to your car\'s paintwork that bonds chemically to create a permanent protective layer. It\'s hydrophobic (water and dirt bead off), UV-resistant, and lasts years rather than weeks. For anyone who wants long-term paint protection, it\'s absolutely worth the investment.',
  },
  {
    question: 'Where can I get car ceramic coating near me in Warrington?',
    answer:
      'Car Ceramic Coating and detailing warrington0 offers professional car ceramic coating at our dedicated unit in Warrington WA5 1AH — Unit 1 Fairclough Mill, Atherton\'s Quay. We apply Gtechniq and CarPro ceramic coatings, the best professional ceramic coating products available, to cars across all WA postcodes and the wider North West. Call 07375 759686 for a free ceramic coating quote.',
  },
  {
    question: 'Where can I find paint correction or car polishing near me in Warrington?',
    answer:
      'Car Ceramic Coating and detailing warrington0 provides professional paint correction and car polishing at our Warrington WA5 unit, serving customers from all WA1, WA2, WA3, WA4 and WA5 postcodes. Our multi-stage paint correction removes swirl marks, scratches and oxidation from your auto paint. If you\'re searching for car paint correction near me or car polishing near me — Car Ceramic Coating and detailing warrington0 is your closest dedicated specialist.',
  },
  {
    question: 'What auto paint services does Car Ceramic Coating and detailing warrington0 offer?',
    answer:
      'Car Ceramic Coating and detailing warrington0 offers a full range of auto paint services in Warrington: paint correction (removing swirl marks, scratches and oxidation from your auto paint), machine polishing (restoring gloss and depth to dull paintwork), and ceramic coating (protecting your auto paint with a permanent hydrophobic layer). All services are carried out at our WA5 unit using professional-grade products.',
  },
];

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

// ── PAGE DATA ──────────────────────────────────────────────────────────────────

const services = [
  {
    title: 'Car Detailing Warrington',
    slug: '/car-detailing',
    icon: '🚗',
    copy: 'A complete exterior and interior detail that restores your car to showroom condition. Our full car detailing service covers everything from a decontamination wash and clay bar treatment to paint correction, sealant application and a full interior deep clean.',
    anchor: 'car detailing Warrington',
  },
  {
    title: 'Car Ceramic Coating Warrington',
    slug: '/ceramic-coating',
    icon: '✨',
    copy: "Protect your auto paint for years, not months. Our best professional ceramic coating forms a permanent chemical bond with your car's paintwork — a hydrophobic, UV-resistant shield against bird droppings, road salt, tree sap and everyday grime. Car ceramic coating that genuinely lasts.",
    anchor: 'car ceramic coating Warrington',
  },
  {
    title: 'Paint Correction & Car Polishing Warrington',
    slug: '/paint-correction',
    icon: '🔧',
    copy: 'Swirl marks, fine scratches, water spots, oxidation — our multi-stage paint correction and car polishing removes auto paint defects built up over years of driving, restoring true depth and clarity to your paintwork. Searching for car paint correction near me? Car Ceramic Coating and detailing warrington0 WA5 is your answer.',
    anchor: 'paint correction Warrington',
  },
  {
    title: 'Interior Car Detailing Warrington',
    slug: '/interior-detailing',
    icon: '🪑',
    copy: "Your car's interior deserves the same care as the exterior. We deep-clean and condition every surface — from leather seats and carpet fibres to dashboard plastics, air vents and door shuts — leaving the inside genuinely clean, not just sprayed and wiped.",
    anchor: 'interior car detailing Warrington',
  },
  {
    title: 'Headlight Restoration Warrington',
    slug: '/headlight-restoration',
    icon: '💡',
    copy: "Yellowed, foggy headlights don't just look bad — they reduce your visibility at night and can fail an MOT. Our headlight restoration service polishes and seals your lenses back to crystal clarity, often in under an hour.",
    anchor: 'headlight restoration Warrington',
  },
];

const whyWCDCards = [
  {
    icon: '🎯',
    title: 'Precision That Shows',
    copy: "Every detail matters to us — literally. We don't cut corners, rush jobs, or skip steps. From the initial snow foam rinse to the final panel wipe, every stage is done properly, every time.",
  },
  {
    icon: '🏭',
    title: 'Dedicated Detailing Unit',
    copy: 'Our fully-equipped detailing unit in Warrington WA5 is set up exclusively for professional car detailing. Every service is carried out in a controlled environment for the best possible results.',
  },
  {
    icon: '🌿',
    title: 'Genuinely Eco-Friendly',
    copy: 'We use water-efficient, biodegradable products that are safe for your paintwork, your family, your pets, and the environment. Professional results without the environmental cost.',
  },
  {
    icon: '💰',
    title: 'Honest Pricing, Always',
    copy: "You'll receive a clear, detailed quote before any work starts. No surprises, no add-ons you didn't ask for. Just honest pricing for exceptional work.",
  },
  {
    icon: '🕐',
    title: 'Open Any Time',
    copy: "Car detailing emergencies don't keep office hours. We're available 24 hours a day, 7 days a week — including evenings, weekends, and bank holidays.",
  },
  {
    icon: '⭐',
    title: '500+ Satisfied Customers',
    copy: "We've detailed over 500 vehicles across Warrington and the North West — from family hatchbacks to prestige sports cars. Our 5.0 Google rating tells you what our customers think.",
  },
];

const warringtonAreaLinks = [
  { name: 'Great Sankey', slug: 'car-detailing-great-sankey-warrington' },
  { name: 'Stockton Heath', slug: 'car-detailing-stockton-heath-warrington' },
  { name: 'Birchwood', slug: 'car-detailing-birchwood-warrington' },
  { name: 'Padgate', slug: 'car-detailing-padgate-warrington' },
  { name: 'Latchford', slug: 'car-detailing-latchford-warrington' },
  { name: 'Fearnhead', slug: 'car-detailing-fearnhead-warrington' },
  { name: 'Grappenhall', slug: 'car-detailing-grappenhall-warrington' },
  { name: 'Westbrook', slug: 'car-detailing-westbrook-warrington' },
  { name: 'Penketh', slug: 'car-detailing-penketh-warrington' },
  { name: 'Woolston', slug: 'car-detailing-woolston-warrington' },
  { name: 'Appleton', slug: 'car-detailing-appleton-warrington' },
  { name: 'Callands', slug: 'car-detailing-callands-warrington' },
  { name: 'Culcheth', slug: 'car-detailing-culcheth-warrington' },
  { name: 'Thelwall', slug: 'car-detailing-thelwall-warrington' },
  { name: 'Lymm', slug: 'car-detailing-lymm' },
];

const surroundingTownLinks = [
  { name: 'St Helens', slug: 'car-detailing-st-helens', anchor: 'car detailing St Helens' },
  { name: 'Widnes', slug: 'car-detailing-widnes', anchor: 'car detailing Widnes' },
  { name: 'Runcorn', slug: 'car-detailing-runcorn', anchor: 'car detailing Runcorn' },
  { name: 'Wigan', slug: 'car-detailing-wigan', anchor: 'car detailing Wigan' },
  { name: 'Newton-le-Willows', slug: 'car-detailing-newton-le-willows', anchor: 'car detailing Newton-le-Willows' },
  { name: 'Sale', slug: 'car-detailing-sale', anchor: 'car detailing Sale' },
  { name: 'Knutsford', slug: 'car-detailing-knutsford', anchor: 'car detailing Knutsford' },
  { name: 'Northwich', slug: 'car-detailing-northwich', anchor: 'car detailing Northwich' },
  { name: 'Stockport', slug: 'car-detailing-stockport', anchor: 'car detailing Stockport' },
  { name: 'Chester', slug: 'car-detailing-chester', anchor: 'car detailing Chester' },
  { name: 'Manchester', slug: 'car-detailing-manchester', anchor: 'car detailing Manchester' },
  { name: 'Liverpool', slug: 'car-detailing-liverpool', anchor: 'car detailing Liverpool' },
];

const reviews = [
  { name: 'James R.', location: 'Warrington', service: 'Full Detail & Ceramic Coating', text: "I travelled from Bristol to Warrington after seeing the quality of work Car Ceramic Coating and detailing warrington0 produces. Absolutely worth every mile. My BMW looks better than the day I bought it." },
  { name: 'Sarah M.', location: 'Warrington', service: 'Machine Polishing & Ceramic Coating', text: "Incredible results on my VW Golf. The machine polishing removed every swirl mark and the ceramic coating makes it look brand new. Worth every penny." },
  { name: 'David K.', location: 'St Helens', service: 'Machine Polishing', text: "Used Car Ceramic Coating and detailing warrington0 for machine polishing and the results were stunning — every swirl mark completely gone. The difference is night and day. Highly recommend to anyone in the Warrington area." },
  { name: 'Emma T.', location: 'Warrington', service: 'Interior Detailing', text: "Booked a full interior detail and was blown away. The attention to detail is incredible. My leather seats look and feel brand new again. Worth every penny." },
  { name: 'Mark H.', location: 'Widnes', service: 'Headlight Restoration', text: "Headlight restoration was fantastic. From cloudy and dull to crystal clear. The difference in visibility at night is remarkable — and it only took an hour." },
];

const vehicleTypes = [
  { title: 'Luxury & Prestige Cars', icon: '🏎️', copy: 'BMWs, Mercedes, Audis, Porsches — your pride and joy gets the respect it deserves.', slug: '/car-detailing' },
  { title: 'SUVs & 4x4s', icon: '🚙', copy: 'Land Rovers, Range Rovers, Discoveries — we handle size without compromise on quality.', slug: '/car-detailing' },
  { title: 'New Cars', icon: '✨', copy: 'Protect your new car from day one with a full decontamination and ceramic coating package.', slug: '/ceramic-coating' },
  { title: 'Pre-Sale Preparation', icon: '🏷️', copy: "Maximise your car's value before selling — professionally detailed cars sell faster and for more money.", slug: '/car-detailing' },
  { title: 'Motorcycles', icon: '🏍️', copy: 'Full detailing and ceramic coating for motorcycles — the same standard, just two wheels.', slug: '/car-detailing' },
];

const pricingRows = [
  { service: 'Full Car Detail', price: 'From £150', duration: '4–6 hours' },
  { service: 'Interior Deep Clean', price: 'From £80', duration: '2–4 hours' },
  { service: 'Paint Correction — Stage 1 (Car Polishing)', price: 'From £200', duration: '4–8 hours' },
  { service: 'Paint Correction — Stage 2 (Multi-Stage)', price: 'From £350', duration: 'Full day' },
  { service: 'Car Ceramic Coating', price: 'From £350', duration: '1–2 days' },
  { service: 'Headlight Restoration', price: 'From £50', duration: '45–90 mins' },
];

const blogPosts = [
  {
    slug: '/blog/detailing-vs-valeting',
    title: 'Car Detailing vs Car Valeting: What\'s the Difference?',
    category: 'Guide',
    date: '10 Feb 2025',
    excerpt: 'Many drivers use the terms interchangeably — but they\'re not the same thing. We explain exactly what each involves so you can choose the right service.',
    image: '/gallery/warrington-car-valeting-service-1.jpg',
  },
  {
    slug: '/blog/how-to-choose-professional-car-detailer-manchester',
    title: 'How Much Does Car Detailing Cost in Warrington? (2026)',
    category: 'Pricing',
    date: '15 Jan 2025',
    excerpt: 'Prices vary widely. We break down exactly what you should expect to pay for a valet, a full detail, ceramic coating and paint correction in Warrington.',
    image: '/gallery/warrington-ceramic-coating-application-1.jpg',
  },
  {
    slug: '/blog/ceramic-coating-benefits',
    title: 'Why Ceramic Coating Is Worth the Investment',
    category: 'Ceramic Coating',
    date: '24 Jan 2025',
    excerpt: 'Ceramic coating costs more than a wax or sealant — but it lasts years, not weeks. Here\'s why it\'s worth every penny if you care about your paintwork.',
    image: '/gallery/warrington-car-detailing-before-after-1.webp',
  },
];

// ── COMPONENT ──────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={webPageSchema} />
      <JsonLd data={faqPageSchema} />

      <article>
        {/* ── HERO ────────────────────────────────────────────────────────────── */}
        <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <Image
            src="/hero-bg.jpg"
            alt="Car Ceramic Coating and detailing warrington0 — professional ceramic coating and machine polishing in Warrington, Cheshire"
            fill
            priority
            fetchPriority="high"
            quality={85}
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/65" aria-hidden="true" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 60% 50%, rgba(201,168,76,0.12) 0%, transparent 70%)' }}
            aria-hidden="true"
          />

          <div className="relative max-w-7xl mx-auto px-4 py-32 md:py-40 text-center">
            <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/30 rounded-full px-4 py-1.5 text-brand-gold text-sm font-semibold mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse-slow" aria-hidden="true" />
              Warrington&apos;s #1 Rated Car Detailing Specialists
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black text-brand-white leading-tight mb-4">
              Car{' '}
              <span className="text-gradient-gold">Ceramic Coating</span>
              {' '}&amp; Paint Correction
              <br className="hidden sm:block" />
              {' '}in Warrington
            </h1>

            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-4 leading-relaxed">
              From multi-stage paint correction to a full car ceramic coating —
              Car Ceramic Coating and detailing warrington0 is Warrington&apos;s best professional ceramic coating and car polishing specialist,
              operating from our dedicated unit at WA5.
            </p>

            {/* AIO answer block — entity-rich intro paragraph */}
            <p className="text-gray-400 text-base max-w-2xl mx-auto mb-10 leading-relaxed">
              Car Ceramic Coating and detailing warrington0 is Warrington&apos;s premier{' '}
              <strong className="text-gray-300">car ceramic coating</strong> and{' '}
              <strong className="text-gray-300">paint correction</strong> specialist, based at
              Unit 1 Fairclough Mill, Atherton&apos;s Quay, WA5 1AH. With a 5.0 Google rating from
              47 verified reviews and over 500 vehicles detailed, Car Ceramic Coating and detailing warrington0 is the closest dedicated
              car polishing and ceramic coating unit for all WA postcodes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
              <a
                href={`tel:${PHONE}`}
                className="btn-primary text-lg py-4 px-8"
                aria-label="Call Car Ceramic Coating and detailing warrington0 on 07375 759686"
              >
                📞 Call {PHONE_DISPLAY}
              </a>
              <Link
                href="/contact"
                className="btn-secondary text-lg py-4 px-8"
                aria-label="Get a free car detailing quote from Car Ceramic Coating and detailing warrington0"
              >
                Get a Free Quote
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm text-gray-400">
              {[
                { icon: '★★★★★', text: '5.0 Google Rating · 47 Reviews' },
                { icon: '🏆', text: '500+ Cars Detailed' },
                { icon: '📍', text: 'Warrington WA5 1AH' },
                { icon: '🕐', text: 'Open 24 Hours, 7 Days' },
              ].map((b) => (
                <div key={b.text} className="flex items-center gap-2">
                  <span aria-hidden="true">{b.icon}</span>
                  <span>{b.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 text-xs animate-bounce" aria-hidden="true">
            <span>Scroll</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </header>

        {/* ── ABOUT / ENTITY ESTABLISHMENT ─────────────────────────────────── */}
        <section id="about-Car Ceramic Coating and detailing warrington0" className="py-20 bg-brand-darkgray">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <div>
                <p className="section-subheading">About Car Ceramic Coating and detailing warrington0</p>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-white mb-6">
                  What Makes Car Ceramic Coating and detailing warrington0&apos;s Most Trusted Car Detailers?
                </h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    We&apos;re not a chain, a franchise, or a drive-through car wash.{' '}
                    <strong className="text-brand-white">Car Ceramic Coating and detailing warrington0</strong> is a locally
                    owned Warrington business with one goal: to make your car look genuinely
                    outstanding.
                  </p>
                  <p>
                    Every vehicle we work on — whether it&apos;s a daily BMW, a cherished Land
                    Rover, or a family SUV — gets the same obsessive level of care and attention.
                    We use the same professional-grade products and multi-stage techniques — from
                    clay bar decontamination and iron fallout removal to ceramic coating application
                    and multi-stage paint correction — used by the best detailers in the UK.
                  </p>
                  {/* AIO answer block */}
                  <p className="text-gray-400 text-sm p-4 rounded-lg border border-brand-gold/20 bg-brand-gold/5">
                    Car Ceramic Coating and detailing warrington0 operates from our dedicated unit at Unit 1 Fairclough Mill, Atherton\'s Quay,
                    Warrington WA5 1AH. Customers bring their vehicles to us for professional
                    ceramic coating, machine polishing, and full car detailing services.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 mt-8">
                  <Link
                    href="/ceramic-coating"
                    className="text-brand-gold font-semibold text-sm hover:underline"
                    aria-label="Learn more about ceramic coating Warrington"
                  >
                    ceramic coating Warrington →
                  </Link>
                  <Link
                    href="/car-detailing"
                    className="text-brand-gold font-semibold text-sm hover:underline"
                    aria-label="View all car detailing services"
                  >
                    all car detailing services →
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '500+', label: 'Vehicles Detailed' },
                  { value: '5.0 ★', label: 'Google Rating' },
                  { value: '47', label: 'Verified Reviews' },
                  { value: '24/7', label: 'Available' },
                ].map((stat) => (
                  <div key={stat.label} className="card-dark text-center py-10">
                    <div className="text-4xl font-heading font-black text-brand-gold mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICES ─────────────────────────────────────────────────────── */}
        <section
          id="services"
          className="py-20 bg-brand-black"
          aria-label="Car Ceramic Coating and detailing warrington0 Services"
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-14">
              <p className="section-subheading">Our Services</p>
              <h2 className="section-heading">
                Our Car Detailing Services in Warrington
              </h2>
              <div className="gold-divider" />
              <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                Whether you need{' '}
                <Link href="/paint-correction" className="text-brand-gold hover:underline">
                  paint correction &amp; car polishing
                </Link>
                {' '}to remove swirl marks, or the long-term protection of a{' '}
                <Link href="/ceramic-coating" className="text-brand-gold hover:underline">
                  car ceramic coating
                </Link>
                , Car Ceramic Coating and detailing warrington0 has the service. Best professional ceramic coating and auto paint
                services in Warrington WA5.
              </p>
              {/* AIO answer */}
              <p className="text-gray-500 text-sm mt-3 max-w-2xl mx-auto">
                Car detailing involves a thorough multi-stage cleaning and restoration of your
                vehicle&apos;s paintwork, interior and glass — going far beyond a standard car wash.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={s.slug}
                  className="card-dark p-6 hover:border-brand-gold/50 hover:bg-brand-gold/5 transition-all duration-300 group block"
                  aria-label={s.anchor}
                >
                  <div className="text-4xl mb-4" aria-hidden="true">{s.icon}</div>
                  <h3 className="font-heading font-bold text-brand-white text-lg mb-3 group-hover:text-brand-gold transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{s.copy}</p>
                  <span className="text-brand-gold text-sm font-semibold">
                    {s.anchor} →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY Car Ceramic Coating and detailing warrington0 ──────────────────────────────────────────────────────── */}
        <section id="why-Car Ceramic Coating and detailing warrington0" className="py-20 bg-brand-darkgray">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-14">
              <p className="section-subheading">Why Choose Car Ceramic Coating and detailing warrington0?</p>
              <h2 className="section-heading">Why Warrington Drivers Choose Car Ceramic Coating and detailing warrington0</h2>
              <div className="gold-divider" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyWCDCards.map((c) => (
                <div key={c.title} className="card-dark">
                  <div className="text-4xl mb-4" aria-hidden="true">{c.icon}</div>
                  <h3 className="font-heading font-bold text-brand-white text-lg mb-3">{c.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{c.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
        <section id="how-it-works" className="py-20 bg-brand-black">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-14">
              <p className="section-subheading">Simple Process</p>
              <h2 className="section-heading">How to Book Your Car Detail in Warrington</h2>
              <div className="gold-divider" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: '1',
                  title: 'Get Your Free Quote',
                  copy: "Call 07375 759686 or fill in our quick online form. Tell us your vehicle, what you need, and where you're located in Warrington. We'll give you a clear, upfront quote — no obligation, no pressure.",
                },
                {
                  step: '2',
                  title: 'Pick a Time That Suits You',
                  copy: 'We fit around your schedule, not the other way round. Early morning, late evening, weekends, bank holidays — if it works for you, it works for us.',
                },
                {
                  step: '3',
                  title: 'Bring Your Car to Us',
                  copy: 'Drop your vehicle at our unit at Unit 1 Fairclough Mill, Atherton\'s Quay, Warrington WA5 1AH. Our team gets straight to work in our fully-equipped, controlled environment.',
                },
                {
                  step: '4',
                  title: 'Drive Away Proud',
                  copy: "We don't finish until you're delighted. Every job is completed to the same high standard, whether it's a full car detail or a full ceramic coating package.",
                },
              ].map((s) => (
                <div key={s.step} className="card-dark text-center relative">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center font-heading font-black text-brand-black text-xl mx-auto mb-5">
                    {s.step}
                  </div>
                  <h3 className="font-heading font-bold text-brand-white text-base mb-3">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{s.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COVERAGE ─────────────────────────────────────────────────────── */}
        <section
          id="coverage"
          className="py-20 bg-brand-darkgray"
          aria-label="Coverage Areas"
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="section-subheading">Service Coverage</p>
              <h2 className="section-heading">
                Car Detailing Serving All of Warrington &amp; the North West
              </h2>
              <div className="gold-divider" />
              <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
                Car Ceramic Coating and detailing warrington0 is based at Unit 1 Fairclough Mill, Atherton\'s Quay, WA5 1AH — right in the
                heart of Warrington. Customers travel to our unit from across all WA postcodes —
                WA1, WA2, WA3, WA4 and WA5 — and from across the North West.
              </p>
            </div>

            {/* Warrington areas grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-3 mb-12">
              {warringtonAreaLinks.map((area) => (
                <Link
                  key={area.slug}
                  href={`/${area.slug}`}
                  className="card-dark p-3 text-center hover:border-brand-gold/50 hover:bg-brand-gold/5 transition-all duration-200 group"
                  aria-label={`Car detailing in ${area.name}, Warrington`}
                >
                  <div className="text-xs text-gray-300 group-hover:text-brand-gold transition-colors font-medium leading-tight">
                    {area.name}
                  </div>
                </Link>
              ))}
            </div>

            {/* Surrounding towns */}
            <div className="rounded-xl border border-brand-gray p-8">
              <p className="text-center section-subheading mb-4">Also Covering the North West</p>
              <p className="text-gray-400 text-sm text-center mb-6 max-w-2xl mx-auto">
                We also welcome customers from across St Helens, Widnes,
                Runcorn, Wigan, Newton-le-Willows, Sale, Knutsford, Northwich, Stockport,
                Chester, Manchester and Liverpool — all travelling to our Warrington WA5 unit.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {surroundingTownLinks.map((town) => (
                  <Link
                    key={town.slug}
                    href={`/${town.slug}`}
                    className="bg-brand-gray hover:bg-brand-gold/10 hover:border-brand-gold/40 border border-transparent text-gray-300 hover:text-brand-gold px-4 py-2 rounded-full text-sm transition-all duration-200"
                    aria-label={town.anchor}
                  >
                    {town.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── NEAR ME / MAP PACK TARGETING ─────────────────────────────────── */}
        <section id="near-me" className="py-20 bg-brand-black">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="section-subheading">Closest to You</p>
              <h2 className="section-heading">
                Car Ceramic Coating &amp; Paint Correction Near Me — Warrington WA5
              </h2>
              <div className="gold-divider" />
              <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
                If you&apos;re searching for{' '}
                <strong className="text-brand-white">car ceramic coating near me</strong>,{' '}
                <strong className="text-brand-white">paint correction near me</strong>, or{' '}
                <strong className="text-brand-white">car polishing near me</strong> in
                Warrington — Car Ceramic Coating and detailing warrington0 is your closest dedicated professional detailing unit,
                serving all WA postcodes from WA5 1AH.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {[
                {
                  title: 'Car Ceramic Coating Near Me',
                  icon: '✨',
                  copy: 'Professional car ceramic coating applied in our controlled WA5 unit. Gtechniq and CarPro certified. Best professional ceramic coating results in Warrington — ceramic coating that bonds permanently to your auto paint.',
                  link: '/ceramic-coating',
                  anchor: 'View Ceramic Coating',
                },
                {
                  title: 'Paint Correction Near Me',
                  icon: '🔧',
                  copy: 'Multi-stage paint correction and car polishing — eliminating swirl marks, scratches and auto paint oxidation. Serving all Warrington WA postcodes from our dedicated unit at WA5 1AH. Car paint correction near me, solved.',
                  link: '/paint-correction',
                  anchor: 'View Paint Correction',
                },
                {
                  title: 'Auto Paint Specialist Warrington',
                  icon: '🎨',
                  copy: 'Car Ceramic Coating and detailing warrington0 is Warrington\'s dedicated auto paint specialist — correcting, enhancing and protecting auto paint with professional-grade machine polishing and ceramic coating. From swirl removal to full ceramic car coating.',
                  link: '/paint-correction',
                  anchor: 'View Auto Paint Services',
                },
              ].map((card) => (
                <div key={card.title} className="card-dark text-center">
                  <div className="text-4xl mb-4" aria-hidden="true">{card.icon}</div>
                  <h3 className="font-heading font-bold text-brand-white text-base mb-3">{card.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">{card.copy}</p>
                  <Link href={card.link} className="text-brand-gold text-sm font-semibold hover:underline">
                    {card.anchor} →
                  </Link>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-brand-gold/30 bg-brand-gold/5 p-8 text-center">
              <p className="text-brand-white font-semibold mb-2">
                Car Ceramic Coating and detailing warrington0 — Unit 1 Fairclough Mill, Atherton&apos;s Quay, Warrington WA5 1AH
              </p>
              <p className="text-gray-400 text-sm mb-5 max-w-2xl mx-auto">
                10 minutes from Warrington town centre. Serving WA1, WA2, WA3, WA4 &amp; WA5 postcodes.
                Customers travel from across the North West for car ceramic coating, paint correction
                and auto paint services at our dedicated Warrington unit.
              </p>
              <div className="flex flex-wrap justify-center gap-5 text-sm text-gray-400">
                {[
                  'Car ceramic coating Warrington',
                  'Paint correction Warrington',
                  'Car polishing near me',
                  'Best professional ceramic coating',
                  'Auto paint specialist Warrington',
                  'Ceramic coating car WA5',
                ].map((kw) => (
                  <span key={kw} className="flex items-center gap-1.5">
                    <span className="text-brand-gold text-xs" aria-hidden="true">✓</span>{kw}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── REVIEWS ──────────────────────────────────────────────────────── */}
        <section
          id="reviews"
          className="py-20 bg-brand-darkgray"
          aria-label="Customer Reviews"
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-14">
              <p className="section-subheading">Customer Reviews</p>
              <h2 className="section-heading">
                What Warrington Drivers Say About Car Ceramic Coating and detailing warrington0
              </h2>
              <div className="gold-divider" />
              <p className="text-gray-400 mt-4">
                We let our results do the talking — but our customers say it better than we ever could.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {reviews.map((r) => (
                <div key={r.name} className="card-dark p-6 flex flex-col">
                  <div role="img" aria-label={`5 out of 5 stars`} className="flex gap-1 mb-3">
                    <span className="text-brand-gold" aria-hidden="true">★★★★★</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 italic flex-1">
                    &ldquo;{r.text}&rdquo;
                  </p>
                  <div>
                    <div className="font-semibold text-brand-white text-sm">{r.name}</div>
                    <div className="text-brand-gold text-xs">{r.service} · {r.location}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-brand-gold font-heading font-bold text-lg mb-3">
                ★★★★★ 5.0 / 5.0 · 47 verified Google reviews
              </p>
              <p className="text-gray-500 text-sm mb-5">
                Car Ceramic Coating and detailing warrington0 is Warrington&apos;s best-rated car detailing specialist
              </p>
              <a
                href="https://share.google/Srfz4m37t6oxFsNHX"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
                aria-label="Leave a Google review for Car Ceramic Coating and detailing warrington0"
              >
                Leave Us a Review on Google
              </a>
            </div>
          </div>
        </section>

        {/* ── RECENT PROJECTS ───────────────────────────────────────────────── */}
        <section id="recent-projects" className="py-20 bg-brand-black" aria-label="Recent ceramic coating and car detailing projects in Warrington">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="section-subheading">Real Results — No Filters</p>
              <h2 className="section-heading">Recent Projects in Warrington</h2>
              <div className="gold-divider" />
              <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                Honda CR-V, BMW 3 Series M Sport, Ford Mustang GT and more — every photo is taken at our
                Fairclough Mill unit, Warrington WA5. No stock images, no editing.
              </p>
            </div>

            {/* Hero project — Honda CR-V full ceramic coating */}
            <div className="mb-6 rounded-xl overflow-hidden border border-brand-gold/30 bg-brand-darkgray group">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                <div className="relative lg:col-span-2 aspect-video lg:aspect-auto lg:min-h-[360px]">
                  <Image
                    src="/gallery/honda-crv-ceramic-coating-warrington-wcd-front.webp"
                    alt="Honda CR-V full ceramic coating in Warrington — Crystal Black Pearl, deep gloss hydrophobic finish by WCD Car Detailing WA5"
                    fill
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover"
                    priority={false}
                    quality={88}
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-brand-gold text-brand-black text-xs font-bold px-3 py-1.5 rounded-full">Featured Project</span>
                  </div>
                </div>
                <div className="p-6 lg:p-8 flex flex-col justify-between">
                  <div>
                    <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-2">Ceramic Coating · Warrington</p>
                    <h3 className="font-heading font-black text-brand-white text-xl mb-3">Honda CR-V — Full Ceramic Coating</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      Crystal Black Pearl Honda CR-V brought in for a full exterior ceramic coating package.
                      Decontamination wash, clay bar, machine polish prep, then professional ceramic coating
                      applied to all painted surfaces. Deep gloss hydrophobic finish that repels water, dirt
                      and UV damage for years.
                    </p>
                    <ul className="space-y-1.5 mb-6">
                      {['Decontamination wash & clay bar', 'Machine polish prep stage', 'Full ceramic coating applied', 'Hydrophobic — water beads off instantly'].map((pt) => (
                        <li key={pt} className="flex items-start gap-2 text-gray-300 text-xs">
                          <span className="text-brand-gold mt-0.5 flex-shrink-0">✓</span>{pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href="/ceramic-coating" className="btn-primary text-sm py-3 px-6 text-center">
                    View Ceramic Coating →
                  </Link>
                </div>
              </div>
              {/* CR-V detail shots strip */}
              <div className="grid grid-cols-3 gap-px bg-brand-gray/30 border-t border-brand-gold/20">
                {[
                  { src: '/gallery/honda-crv-ceramic-coating-warrington-wcd-side-gloss.webp', alt: 'Honda CR-V ceramic coating side gloss reflection' },
                  { src: '/gallery/honda-crv-ceramic-coating-warrington-wcd-tailgate.webp', alt: 'Honda CR-V ceramic coating tailgate AWD badge detail' },
                  { src: '/gallery/honda-crv-ceramic-coating-warrington-wcd-rear-gloss.webp', alt: 'Honda CR-V ceramic coating rear gloss Warrington' },
                ].map((img) => (
                  <div key={img.src} className="relative aspect-video">
                    <Image src={img.src} alt={img.alt} fill sizes="33vw" className="object-cover" quality={82} />
                  </div>
                ))}
              </div>
            </div>

            {/* 3-col grid — other recent projects */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {[
                {
                  src: '/gallery/bmw-3-series-m-sport-ceramic-coating-warrington-wcd.webp',
                  alt: 'BMW 3 Series G20 M Sport ceramic coating Warrington — Alpine White deep gloss by WCD Car Detailing',
                  caption: 'BMW 3 Series M Sport — ceramic coating, Alpine White',
                  badge: 'Ceramic Coating',
                },
                {
                  src: '/gallery/ford-mustang-gt-ceramic-coating-warrington-wcd-car-detailing.webp',
                  alt: 'Ford Mustang GT ceramic coating Warrington — Need for Green gloss result by WCD Car Detailing',
                  caption: 'Ford Mustang GT — ceramic coating, full gloss finish',
                  badge: 'Ceramic Coating',
                },
                {
                  src: '/gallery/paint-inspection-work-lights-warrington-wcd-machine-polishing.webp',
                  alt: 'Paint defect inspection under specialist work lights at WCD Car Detailing Warrington — machine polishing assessment',
                  caption: 'Paint inspection — specialist lighting before machine polish',
                  badge: 'Machine Polishing',
                },
              ].map((img) => (
                <figure key={img.src} className="group relative overflow-hidden rounded-xl bg-brand-darkgray border border-brand-gray/30 hover:border-brand-gold/50 transition-all duration-300">
                  <div className="relative aspect-video">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      quality={82}
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-brand-gold/90 text-brand-black text-xs font-bold px-2.5 py-1 rounded-full">{img.badge}</span>
                    </div>
                  </div>
                  <figcaption className="px-4 py-3 text-xs text-gray-400 font-medium">{img.caption}</figcaption>
                </figure>
              ))}
            </div>

            <div className="text-center">
              <Link href="/gallery" className="btn-secondary inline-flex items-center gap-2">
                View Full Gallery →
              </Link>
            </div>
          </div>
        </section>

        {/* ── VEHICLE TYPES ─────────────────────────────────────────────────── */}
        <section id="vehicle-types" className="py-20 bg-brand-black">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-14">
              <p className="section-subheading">All Vehicles Welcome</p>
              <h2 className="section-heading">
                We Detail All Types of Vehicle in Warrington
              </h2>
              <div className="gold-divider" />
              <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                No vehicle is too big, too small, or too precious. Car Ceramic Coating and detailing warrington0 has detailed everything
                from daily commuter cars to prestige marques — BMWs, Mercedes, Audis, Porsches,
                Land Rovers, Range Rovers and more.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
              {vehicleTypes.map((v) => (
                <Link
                  key={v.title}
                  href={v.slug}
                  className="card-dark p-5 text-center hover:border-brand-gold/50 hover:bg-brand-gold/5 transition-all duration-200 group"
                >
                  <div className="text-3xl mb-3" aria-hidden="true">{v.icon}</div>
                  <h3 className="font-heading font-bold text-brand-white text-xs group-hover:text-brand-gold transition-colors mb-2 leading-tight">
                    {v.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-tight hidden lg:block">{v.copy}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING ──────────────────────────────────────────────────────── */}
        <section id="pricing" className="py-20 bg-brand-black">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-14">
              <p className="section-subheading">Pricing Guide</p>
              <h2 className="section-heading">
                Transparent Car Detailing Prices in Warrington
              </h2>
              <div className="gold-divider" />
              <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                We believe in honest, upfront pricing. No surprises. No hidden extras.
              </p>
              {/* AIO pricing answer */}
              <p className="text-gray-500 text-sm mt-3">
                Car detailing in Warrington starts from £80 for an exterior or interior detail,
                £200 for machine polishing, and £350 for a ceramic coating package.
              </p>
            </div>

            {/* Mobile-friendly card layout */}
            <div className="space-y-3 mb-8 md:hidden">
              {pricingRows.map((row) => (
                <div key={row.service} className="card-dark flex items-center justify-between gap-4 py-4">
                  <div>
                    <div className="font-semibold text-brand-white text-sm">{row.service}</div>
                    <div className="text-gray-400 text-xs">{row.duration}</div>
                  </div>
                  <div className="text-brand-gold font-heading font-bold text-base flex-shrink-0">
                    {row.price}
                  </div>
                </div>
              ))}
            </div>

            {/* Table for desktop */}
            <div className="hidden md:block card-dark overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-brand-gray">
                    <th className="text-left text-brand-gold font-semibold uppercase tracking-widest text-xs py-4 px-6">
                      Service
                    </th>
                    <th className="text-center text-brand-gold font-semibold uppercase tracking-widest text-xs py-4 px-4">
                      Duration
                    </th>
                    <th className="text-right text-brand-gold font-semibold uppercase tracking-widest text-xs py-4 px-6">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pricingRows.map((row, i) => (
                    <tr
                      key={row.service}
                      className={`border-b border-brand-gray/40 hover:bg-brand-gold/3 transition-colors ${
                        i === pricingRows.length - 1 ? 'border-none' : ''
                      }`}
                    >
                      <td className="py-4 px-6 font-medium text-brand-white">{row.service}</td>
                      <td className="py-4 px-4 text-center text-gray-400">{row.duration}</td>
                      <td className="py-4 px-6 text-right font-heading font-bold text-brand-gold text-base">
                        {row.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-center text-gray-400 text-xs mt-4 mb-8">
              Prices vary by vehicle size and condition. Contact us for a personalised quote — it&apos;s always free.
            </p>
            <div className="text-center">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2"
                aria-label="Get a free car detailing quote"
              >
                Get Your Free Quote
              </Link>
            </div>
          </div>
        </section>

        {/* ── BLOG ─────────────────────────────────────────────────────────── */}
        <section id="blog" className="py-20 bg-brand-darkgray">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-14">
              <p className="section-subheading">Expert Advice</p>
              <h2 className="section-heading">Car Detailing Advice from the Car Ceramic Coating and detailing warrington0 Team</h2>
              <div className="gold-divider" />
              <p className="text-gray-400 mt-4">
                We share honest, practical advice on keeping your car in the best possible
                condition — no jargon, no sales pitch, just straight answers.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={post.slug}
                  className="card-dark group block hover:no-underline"
                  aria-label={`Read article: ${post.title}`}
                >
                  <div className="relative rounded-lg h-40 mb-4 overflow-hidden bg-brand-gray">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <span className="text-xs text-brand-gold font-semibold uppercase tracking-widest">
                    {post.category}
                  </span>
                  <h3 className="font-heading font-bold text-brand-white text-base mt-2 mb-2 group-hover:text-brand-gold transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{post.date}</span>
                    <span className="text-brand-gold">Read article →</span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                href="/blog"
                className="btn-secondary"
                aria-label="Read all car detailing articles"
              >
                Read All Articles
              </Link>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────────── */}
        <section
          id="faq"
          className="py-20 bg-brand-black"
          aria-label="Frequently Asked Questions"
        >
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-14">
              <p className="section-subheading">Common Questions</p>
              <h2 className="section-heading">
                Frequently Asked Questions About Car Detailing in Warrington
              </h2>
              <div className="gold-divider" />
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="card-dark group cursor-pointer"
                >
                  <summary className="flex items-center justify-between font-semibold text-brand-white list-none py-1 gap-4">
                    <h3 className="font-semibold text-brand-white text-sm md:text-base">
                      {faq.question}
                    </h3>
                    <span
                      className="text-brand-gold flex-shrink-0 text-xl font-light group-open:rotate-45 transition-transform duration-200"
                      aria-hidden="true"
                    >
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

        {/* ── FIND US / MAP ─────────────────────────────────────────────────── */}
        <StoreLocator />

        {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
        <section id="contact-cta" className="py-20 bg-brand-black">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="section-subheading">Book Today</p>
            <h2 className="section-heading">
              Ready to Book Your Car Detail in Warrington?
            </h2>
            <div className="gold-divider" />
            <p className="text-gray-300 text-lg leading-relaxed mt-6 mb-4">
              Whether you need machine polishing to restore your paintwork or a full ceramic coating
              package for your pride and joy, the Car Ceramic Coating and detailing warrington0 team is ready to help — any time, any day.
            </p>
            <p className="text-gray-400 mb-8">
              Call us on{' '}
              <a href={`tel:${PHONE}`} className="text-brand-gold font-bold hover:underline">
                07375 759686
              </a>{' '}
              or fill in our quick quote form and we&apos;ll get back to you fast.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href={`tel:${PHONE}`}
                className="btn-primary text-lg py-4 px-8"
                aria-label="Call Car Ceramic Coating and detailing warrington0"
              >
                📞 Call {PHONE_DISPLAY}
              </a>
              <Link
                href="/contact"
                className="btn-secondary text-lg py-4 px-8"
                aria-label="Get a free car detailing quote"
              >
                Get a Free Quote
              </Link>
            </div>

            {/* Trust signals */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
              {[
                'Based in Warrington WA5 1AH',
                'Open 24 hours, 7 days',
                'Free quotes — no obligation',
                '5.0 Google rating',
                '500+ cars detailed',
                'Fully insured & professional',
                'Eco-friendly products',
                'No hidden fees',
              ].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm text-gray-400">
                  <span className="text-brand-gold flex-shrink-0">✓</span>
                  {t}
                </div>
              ))}
            </div>

            {/* SEO internal links footer */}
            <div className="border-t border-brand-gray pt-8 text-xs text-gray-600 space-y-2">
              <p>
                <Link href="/car-detailing" className="hover:text-brand-gold transition-colors">car detailing Warrington</Link>
                {' · '}
                <Link href="/ceramic-coating" className="hover:text-brand-gold transition-colors">car ceramic coating Warrington</Link>
                {' · '}
                <Link href="/ceramic-coating" className="hover:text-brand-gold transition-colors">ceramic coating car Warrington</Link>
                {' · '}
                <Link href="/ceramic-coating" className="hover:text-brand-gold transition-colors">best professional ceramic coating</Link>
                {' · '}
                <Link href="/paint-correction" className="hover:text-brand-gold transition-colors">paint correction Warrington</Link>
                {' · '}
                <Link href="/paint-correction" className="hover:text-brand-gold transition-colors">car polishing near me</Link>
                {' · '}
                <Link href="/paint-correction" className="hover:text-brand-gold transition-colors">car paint correction near me</Link>
              </p>
              <p>
                <Link href="/interior-detailing" className="hover:text-brand-gold transition-colors">interior car detailing Warrington</Link>
                {' · '}
                <Link href="/headlight-restoration" className="hover:text-brand-gold transition-colors">headlight restoration Warrington</Link>
                {' · '}
                <Link href="/car-detailing-st-helens" className="hover:text-brand-gold transition-colors">car detailing St Helens</Link>
                {' · '}
                <Link href="/car-detailing-widnes" className="hover:text-brand-gold transition-colors">car detailing Widnes</Link>
                {' · '}
                <Link href="/car-detailing-runcorn" className="hover:text-brand-gold transition-colors">car detailing Runcorn</Link>
                {' · '}
                <Link href="/car-detailing-manchester" className="hover:text-brand-gold transition-colors">car detailing Manchester</Link>
                {' · '}
                <Link href="/car-detailing-liverpool" className="hover:text-brand-gold transition-colors">car detailing Liverpool</Link>
              </p>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}

