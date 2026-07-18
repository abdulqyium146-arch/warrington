import Image from 'next/image';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import Breadcrumb from '@/components/Breadcrumb';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { PHONE, PHONE_DISPLAY, SITE_URL, TESTIMONIALS } from '@/lib/constants';
import type { CeramicCoatingLocationData } from '@/lib/data/ceramic-coating-locations';
import { allCeramicCoatingLocations } from '@/lib/data/ceramic-coating-locations';

const BUSINESS_ID = `${SITE_URL}/#business`;

const packages = [
  {
    name: 'CarPro Cquartz UK 3.0',
    price: '£250',
    priceValue: '250',
    duration: '2–3 Years',
    description: '2–3 year ceramic coating for Warrington vehicles. UK climate-optimised SiO₂ formula with strong hydrophobic performance.',
    features: [
      'SiO2 ceramic coating',
      '2–3 year durability',
      'UK climate formulated',
      'Strong hydrophobic effect',
      'Chemical resistance',
      'Single-stage polish included',
      'Aftercare guide included',
    ],
    highlight: false,
  },
  {
    name: 'Gtechniq Crystal Serum Light',
    price: '£350',
    priceValue: '350',
    duration: '3–5 Years',
    description: '3–5 year Gtechniq ceramic coating with semi-permanent covalent bond and manufacturer warranty. Comprehensive correction included.',
    features: [
      'Gtechniq CSL coating',
      '3–5 year durability',
      'Semi-permanent bond',
      'Superior hydrophobic layer',
      '9H surface hardness',
      'Comprehensive correction included',
      'Manufacturer warranty',
    ],
    highlight: true,
  },
  {
    name: 'Gtechniq Crystal Serum Ultra',
    price: '£650',
    priceValue: '650',
    duration: 'Up to 9 Years',
    description: '9-year manufacturer warranty ceramic coating. Two-layer system: flexible SiO₂ base plus ultra-hard cap. Applied by Gtechniq accredited installer.',
    features: [
      'Two-layer CSU system',
      '9-year manufacturer warranty',
      'Maximum 9H hardness',
      'Flexible base + hard cap',
      'Best stone chip resistance',
      'Multi-stage correction included',
      'Accredited installer applied',
    ],
    highlight: false,
  },
];

const process = [
  {
    step: '01',
    title: 'Paint Depth Measurement',
    desc: 'We measure clear coat depth across every panel with a digital paint depth gauge before touching the surface. This reading guides our correction approach and confirms the vehicle can safely receive the polishing stage specified in your package.',
  },
  {
    step: '02',
    title: 'Decontamination Wash',
    desc: 'Full pre-wash, snow foam, and two-bucket contact wash using pH-neutral products to remove loose surface contamination without marring the paint.',
  },
  {
    step: '03',
    title: 'Iron Fallout Removal',
    desc: 'Chemical iron decontamination spray reacts with and dissolves embedded ferrous particles — brake dust, rail dust, industrial fallout — from the clear coat surface.',
  },
  {
    step: '04',
    title: 'Clay Bar Treatment',
    desc: "A fine clay bar is passed over every panel to physically lift any remaining bonded contamination that chemical decontamination hasn't removed, leaving the surface perfectly smooth to the touch.",
  },
  {
    step: '05',
    title: 'Paint Correction',
    desc: 'Machine polishing removes swirl marks, fine scratches, water spots, and surface oxidation. Stage count — single, two, or three-stage — depends on the package chosen and the condition of the paint.',
  },
  {
    step: '06',
    title: 'IPA Panel Wipe',
    desc: 'A full wipe-down with isopropyl alcohol removes all polish oils and residue, revealing the true paint condition and providing a chemically clean surface for the ceramic coating to bond to.',
  },
  {
    step: '07',
    title: 'Ceramic Coating Application',
    desc: 'The coating is applied panel by panel under controlled conditions. Each section is levelled immediately after application and inspected under LED lighting for high spots or streaking before proceeding to the next panel.',
  },
  {
    step: '08',
    title: 'Cure, Inspection & Handover',
    desc: "The vehicle undergoes a final quality inspection under halogen lighting before collection. We walk through the full aftercare schedule with you — what to avoid in the first seven days, how to wash correctly, and what to expect during the cure period.",
  },
];

const trustPoints = [
  {
    icon: '🏭',
    title: 'Unit-Based Studio',
    desc: 'All work carried out at our Fairclough Mill unit — controlled environment, professional equipment, consistent results.',
  },
  {
    icon: '✅',
    title: 'Accredited Installers',
    desc: 'Gtechniq and CarPro accredited. Manufacturer warranties apply when coatings are applied by our team.',
  },
  {
    icon: '⭐',
    title: '5-Star Rated',
    desc: 'Rated 5.0 on Google with 47 reviews. Our customers come from across Warrington and the North West.',
  },
  {
    icon: '💰',
    title: 'Fixed Pricing',
    desc: 'We agree the price before we start. No hidden extras, no surprises — just the quote we gave you.',
  },
];

const universalFaqs = [
  {
    question: 'Does ceramic coating prevent scratches?',
    answer:
      'Ceramic coating at 9H hardness significantly reduces the likelihood of fine surface marring — the type caused by improper washing technique, light contact, or environmental debris. It does not make paint scratchproof. Deliberate abrasion, such as keys dragged across a panel or the brushes inside an automatic car wash, will still mark a ceramic coating. For genuine self-healing scratch resistance, Paint Protection Film (PPF) — which uses a thermoplastic urethane topcoat — is the appropriate product. Many customers apply PPF to the most vulnerable panels and ceramic coating over the rest of the vehicle.',
  },
  {
    question: 'Is ceramic coating the same as car wax?',
    answer:
      'No — they are fundamentally different products. Car wax is a natural or synthetic compound that sits on top of the paint surface and wears away within 4–8 weeks. Ceramic coating is a liquid polymer (SiO₂) that bonds covalently to the clear coat and lasts 2–9 years depending on the product. Wax provides a mild hydrophobic effect and moderate gloss enhancement. Ceramic coating provides substantially superior hardness, chemical resistance, UV protection, and hydrophobic performance — and does not require seasonal re-application.',
  },
  {
    question: 'Can I apply ceramic coating at home without a professional?',
    answer:
      'Consumer-grade ceramic coatings are available in DIY kits, but professional application produces significantly more durable results for several reasons. First, paint correction is essential before coating — any swirl marks or imperfections will be sealed in permanently beneath the coating. Second, application requires controlled temperature and humidity, LED inspection lighting, and precise technique to avoid high spots and streaks. Third, professional-grade products such as Gtechniq Crystal Serum Ultra and CarPro Cquartz UK 3.0 are only available through accredited installers. Professional application provides the correct preparation, the highest-grade products, and the manufacturer warranty that DIY kits cannot offer.',
  },
  {
    question: 'What is the difference between ceramic coating and Paint Protection Film (PPF)?',
    answer:
      "Ceramic coating is a liquid polymer that bonds chemically to the paint surface, providing hardness, hydrophobicity, and chemical resistance. Paint Protection Film (PPF) is a physical thermoplastic urethane film adhered over the paint, forming a self-healing barrier against stone chips and light scratches. Ceramic coating cannot self-heal; PPF can. PPF costs significantly more — typically £500–£3,000+ depending on coverage area. The two products are complementary: many customers apply PPF to high-impact areas (bonnet, bumper, wing mirrors) and ceramic coating over the full vehicle including the film itself. After correcting hundreds of vehicles at our Warrington unit, we regularly recommend this combination for prestige vehicles or those covering high annual mileage.",
  },
  {
    question: "Does ceramic coating improve a car's resale value?",
    answer:
      "A professionally applied ceramic coating from an accredited installer can positively affect resale value in two measurable ways. First, it preserves paint condition significantly better than an uncoated vehicle over the same period — a car with ceramic-protected paint in excellent condition commands a stronger price than one with faded, scratched, or oxidised paintwork. Second, a transferable warranty such as the 9-year Gtechniq Crystal Serum Ultra warranty is a verifiable, documented feature that prospective buyers can confirm directly with Gtechniq. In our experience, customers who coat new or nearly-new vehicles recoup a meaningful portion of the coating cost in improved resale position.",
  },
];

const comparisonData = [
  { feature: 'Durability', wax: '4–8 weeks', sealant: '3–6 months', ceramic: '2–9 years', ppf: '10+ years' },
  { feature: 'Bond type', wax: 'Physical (topcoat)', sealant: 'Weak chemical', ceramic: 'Covalent SiO₂', ppf: 'Adhesive film' },
  { feature: 'Surface hardness', wax: 'Low', sealant: 'Low–medium', ceramic: '9H pencil scale', ppf: 'Medium + self-healing' },
  { feature: 'Hydrophobic effect', wax: 'Moderate', sealant: 'Good', ceramic: 'Exceptional', ppf: 'Good' },
  { feature: 'UV protection', wax: 'Limited', sealant: 'Moderate', ceramic: 'High', ppf: 'High' },
  { feature: 'Chemical resistance', wax: 'Low', sealant: 'Low', ceramic: 'High', ppf: 'Medium' },
  { feature: 'Self-healing', wax: 'No', sealant: 'No', ceramic: 'No', ppf: 'Yes (TPU topcoat)' },
  { feature: 'Approx. cost', wax: '£10–30 DIY', sealant: '£20–80 DIY', ceramic: '£250–650 pro', ppf: '£500–3,000+' },
];

const longevityFactors = [
  {
    factor: 'Washing method',
    impact: 'Two-bucket hand wash preserves 100% of rated life. Automatic car washes with brushes reduce longevity by 20–40% through micro-abrasion of the coating surface.',
  },
  {
    factor: 'Annual booster coat',
    impact: 'A Gtechniq Reload or CarPro Reload booster applied after a decontamination wash extends effective protection by 12–24 months per application.',
  },
  {
    factor: 'UV exposure',
    impact: 'High UV environments — south-facing parking, extended summer driving — reduce longevity by approximately 10–15% compared to garaged vehicles.',
  },
  {
    factor: 'Road contamination level',
    impact: 'Frequent motorway use increases iron fallout load on the coating. An annual iron decontamination treatment maintains coating integrity and hydrophobic performance.',
  },
  {
    factor: 'Paint correction quality',
    impact: 'Thorough paint correction before coating improves SiO₂ bond strength to the clear coat surface, directly maximising the rated durability of the product applied.',
  },
];

const maintenanceSchedule = [
  {
    period: 'Days 1–7',
    action: 'Keep the vehicle dry and away from direct rain. No washing, no pressure washer, no automatic car wash. Allow the coating to complete initial cure.',
  },
  {
    period: 'Days 8–30',
    action: 'First hand wash permitted. Use pH-neutral car shampoo, two-bucket method with grit guards. Rinse and dry with a clean microfibre towel.',
  },
  {
    period: 'Every 3–4 weeks',
    action: 'Regular two-bucket hand wash with pH-neutral shampoo. Dry with an air blower or clean microfibre. No automatic car washes — ever.',
  },
  {
    period: 'Annually',
    action: 'Maintenance detail: decontamination wash, iron fallout removal, coating inspection, and booster coat application. Extends coating life significantly.',
  },
  {
    period: 'Contamination',
    action: 'Bird lime, tree sap, or insect splatter: remove within 24–48 hours using a pH-neutral quick detailer spray. Do not allow acidic deposits to sit in warm weather.',
  },
];

export default function CeramicCoatingLocationPage({
  location,
}: {
  location: CeramicCoatingLocationData;
}) {
  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Ceramic Coating', href: '/ceramic-coating/' },
    { name: location.name },
  ];

  const nearbyLocationObjects = location.nearbyAreas
    .map((slug) => allCeramicCoatingLocations.find((l) => l.slug === slug))
    .filter(Boolean) as CeramicCoatingLocationData[];

  const relatedReviews = TESTIMONIALS.slice(0, 3);

  // Trailing slash required — trailingSlash: true in next.config.js means
  // the canonical URL has the slash; schema @id values must match canonical.
  const pageUrl = `${SITE_URL}/${location.slug}/`;

  // ── 1. SERVICE SCHEMA — 3 Offers + hasCredential
  // aggregateRating intentionally omitted: Service is not an eligible type
  // for Google's Review Snippets rich result. Having it here causes GSC to
  // count it as an invalid review snippet item on every location page.
  // The rating lives on the AutoBodyShop in itemReviewed inside each Review.
  const serviceSchemaData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${pageUrl}#service`,
    name: `Ceramic Coating ${location.name}`,
    serviceType: 'Ceramic Coating',
    description: `Professional ceramic coating in ${location.name}, Warrington. Gtechniq Crystal Serum and CarPro Cquartz applied by accredited installers at our WA5 unit. From £250.`,
    url: pageUrl,
    provider: {
      '@type': 'AutoBodyShop',
      '@id': BUSINESS_ID,
      name: 'Car Ceramic Coating and detailing warrington0',
      telephone: '+44 7375 759686',
      address: {
        '@type': 'PostalAddress',
        streetAddress: "Unit 1 Fairclough Mill, Atherton's Quay",
        addressLocality: 'Warrington',
        addressRegion: 'Cheshire',
        postalCode: 'WA5 1AH',
        addressCountry: 'GB',
      },
      hasCredential: [
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'certification',
          name: 'Gtechniq Accredited Installer',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'certification',
          name: 'CarPro Accredited Installer',
        },
      ],
    },
    areaServed: {
      '@type': 'City',
      name: location.name,
    },
    offers: packages.map((pkg) => ({
      '@type': 'Offer',
      name: pkg.name,
      description: pkg.description,
      price: pkg.priceValue,
      priceCurrency: 'GBP',
      priceSpecification: {
        '@type': 'PriceSpecification',
        minPrice: pkg.priceValue,
        priceCurrency: 'GBP',
        valueAddedTaxIncluded: true,
      },
      availability: 'https://schema.org/InStock',
      seller: { '@id': BUSINESS_ID },
    })),
  };

  // ── 2. BREADCRUMB SCHEMA
  // Spread-add @id so the WebPage schema's breadcrumb: { @id: "#breadcrumb" }
  // reference resolves correctly. Without @id on the BreadcrumbList, Google
  // finds an orphan reference and cannot associate the list with the page.
  const breadcrumbSchemaData = {
    ...breadcrumbSchema(
      breadcrumbItems.map((item, i) => ({
        name: item.name,
        url:
          i === breadcrumbItems.length - 1
            ? pageUrl
            : (item as { name: string; href?: string }).href
            ? `${SITE_URL}${(item as { name: string; href?: string }).href}`
            : SITE_URL,
      }))
    ),
    '@id': `${pageUrl}#breadcrumb`,
  };

  // ── 3. FAQ SCHEMA — location-specific + universal questions
  const allFaqs = [...location.faqs, ...universalFaqs];
  const faqSchemaData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  // ── 4. WEBPAGE SCHEMA — with speakable + mainEntity reference
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: location.metaTitle,
    description: location.metaDescription,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': BUSINESS_ID },
    breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
    mainEntity: { '@id': `${pageUrl}#service` },
    inLanguage: 'en-GB',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', '.section-subheading', '.faq-answer'],
    },
  };

  // ── 5. HOWTO SCHEMA — 8-stage process
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    '@id': `${pageUrl}#howto`,
    name: `How We Apply Ceramic Coating — ${location.name}`,
    description: `The 8-stage professional ceramic coating process used by Car Ceramic Coating and detailing warrington0 at Fairclough Mill, Warrington WA5. Every vehicle goes through the same stages regardless of package chosen.`,
    totalTime: 'PT8H',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'GBP',
      minValue: '250',
      maxValue: '650',
    },
    supply: [
      { '@type': 'HowToSupply', name: 'pH-neutral car shampoo' },
      { '@type': 'HowToSupply', name: 'Iron fallout decontamination spray' },
      { '@type': 'HowToSupply', name: 'Clay bar and lubricant' },
      { '@type': 'HowToSupply', name: 'Machine polishing compounds (cutting, refining)' },
      { '@type': 'HowToSupply', name: 'Isopropyl alcohol (IPA) panel wipe' },
      { '@type': 'HowToSupply', name: 'Gtechniq Crystal Serum or CarPro Cquartz ceramic coating' },
      { '@type': 'HowToSupply', name: 'Ceramic coating applicator blocks and suede pads' },
    ],
    tool: [
      { '@type': 'HowToTool', name: 'Digital paint depth gauge' },
      { '@type': 'HowToTool', name: 'Dual-action machine polisher' },
      { '@type': 'HowToTool', name: 'LED and halogen inspection lighting' },
      { '@type': 'HowToTool', name: 'Pressure washer and foam lance' },
      { '@type': 'HowToTool', name: 'Two-bucket wash system with grit guards' },
    ],
    step: process.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.title,
      text: s.desc,
      url: `${pageUrl}#step-${s.step}`,
    })),
  };

  // ── 6. REVIEW SCHEMAS — one per testimonial shown on page
  // itemReviewed is fully self-contained (name + url + telephone + image +
  // address) so Google can validate on this page without fetching the homepage.
  // aggregateRating is NOT included here: nesting it causes GSC to count 3
  // extra AggregateRating nodes (one per review) as additional review snippet
  // items, inflating the count and generating "invalid" flags.
  const reviewSchemas = relatedReviews.map((review) => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: String(review.rating),
      bestRating: '5',
      worstRating: '1',
    },
    author: {
      '@type': 'Person',
      name: review.name,
    },
    reviewBody: review.text,
    itemReviewed: {
      '@type': 'AutoBodyShop',
      '@id': BUSINESS_ID,
      name: 'Car Ceramic Coating and detailing warrington0',
      url: SITE_URL,
      telephone: '+44 7375 759686',
      image: `${SITE_URL}/hero-bg.jpg`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: "Unit 1 Fairclough Mill, Atherton's Quay",
        addressLocality: 'Warrington',
        addressRegion: 'Cheshire',
        postalCode: 'WA5 1AH',
        addressCountry: 'GB',
      },
    },
  }));

  // ── 7. ITEMLIST SCHEMA — ceramic coating packages
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${pageUrl}#packages`,
    name: `Ceramic Coating Packages — ${location.name}`,
    description: `Three ceramic coating protection levels available for ${location.name} vehicles at Car Ceramic Coating and detailing warrington0's Warrington WA5 unit. Fixed pricing, accredited installers.`,
    numberOfItems: packages.length,
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    itemListElement: packages.map((pkg, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: pkg.name,
      description: pkg.description,
      url: `${pageUrl}#packages`,
    })),
  };

  return (
    <>
      <JsonLd data={serviceSchemaData} />
      <JsonLd data={breadcrumbSchemaData} />
      <JsonLd data={faqSchemaData} />
      <JsonLd data={webPageSchema} />
      <JsonLd data={howToSchema} />
      {reviewSchemas.map((schema, i) => (
        <JsonLd key={i} data={schema} />
      ))}
      <JsonLd data={itemListSchema} />

      {/* ── HERO ───────────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <Image
          src="/hero-bg.jpg"
          alt={`Professional ceramic coating in ${location.name}, ${location.postcode} — Car Ceramic Coating and detailing warrington0 Warrington`}
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
        <div className="relative max-w-7xl mx-auto px-4">
          <Breadcrumb items={breadcrumbItems} />
          <div className="mt-6 max-w-3xl">
            <p className="section-subheading">Ceramic Coating — {location.postcode}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-brand-white leading-tight mb-6">
              Ceramic Coating in{' '}
              <span className="text-gradient-gold">{location.name}</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Car Ceramic Coating and detailing warrington0 applies professional{' '}
              <Link href="/ceramic-coating" className="text-brand-gold hover:underline">
                ceramic coating
              </Link>{' '}
              for {location.name} ({location.postcode}) vehicles at our dedicated unit in Warrington
              WA5. Gtechniq Crystal Serum and CarPro Cquartz from £250 — applied by accredited
              installers with fixed pricing.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={`tel:${PHONE}`} className="btn-primary">
                📞 Book Now — {PHONE_DISPLAY}
              </a>
              <Link href="/get-a-quote" className="btn-secondary">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── ENTITY DEFINITION ─────────────────────────────────────────────────── */}
      <section className="py-16 bg-brand-black border-t border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="section-subheading text-center">The Short Answer</p>
            <h2 className="section-heading text-center">What Is Ceramic Coating?</h2>
            <div className="gold-divider mx-auto mb-8" />
            <div className="bg-brand-darkgray border border-brand-gold/20 rounded-lg p-6 mb-8">
              <p className="text-brand-gold text-xs font-semibold uppercase tracking-wider mb-3">
                Definition
              </p>
              <p className="text-brand-white text-lg leading-relaxed">
                Ceramic coating is a liquid polymer — primarily silicon dioxide (SiO₂) — applied to a
                vehicle&apos;s clear coat by hand. It bonds covalently to the hydroxyl groups in the
                clear coat surface, creating a semi-permanent protective layer that is harder, more
                hydrophobic, and more chemically resistant than bare paint, wax, or polymer sealant.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { label: 'Hardness Rating', value: '9H', note: 'Pencil hardness scale' },
                { label: 'Water Contact Angle', value: '<20°', note: 'Hydrophobic beading' },
                { label: 'Bond Type', value: 'Covalent', note: 'To clear coat surface' },
                { label: 'UV Resistance', value: 'High', note: 'Slows oxidation' },
              ].map((stat) => (
                <div key={stat.label} className="card-dark p-4 text-center">
                  <div className="text-brand-gold font-heading font-black text-2xl mb-1">
                    {stat.value}
                  </div>
                  <div className="text-brand-white text-xs font-semibold mb-1">{stat.label}</div>
                  <div className="text-gray-500 text-xs">{stat.note}</div>
                </div>
              ))}
            </div>
            <p className="text-gray-300 leading-relaxed">
              Unlike car wax — which sits on top of the paint and wears away within weeks — a properly
              applied ceramic coating bonds permanently to the clear coat and lasts years, not seasons.
              The cured surface causes water to bead and roll off, prevents brake dust and road
              contamination from bonding, blocks UV degradation, and resists chemical etching from bird
              lime, tree sap, and road chemicals. In our experience applying ceramic coatings at our
              Warrington WA5 unit, the visual improvement on a well-prepared surface is immediate: deeper
              gloss, more vibrant colour, and a beading behaviour that is obvious on the first drive home
              in rain.
            </p>
          </div>
        </div>
      </section>

      {/* ── INTRO & TRUST ──────────────────────────────────────────────────────── */}
      <section className="py-20 bg-brand-darkgray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="section-subheading">Why {location.name} Drivers Choose Car Ceramic Coating and detailing warrington0</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-white mb-6">
                Ceramic Coating for {location.name} Vehicles
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed text-base">
                {location.intro.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {trustPoints.map((t) => (
                <div key={t.title} className="card-dark p-5">
                  <div className="text-2xl mb-3">{t.icon}</div>
                  <div className="font-heading font-bold text-brand-white text-sm mb-2">
                    {t.title}
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── LOCAL CONTEXT ─────────────────────────────────────────────────────── */}
      <section className="py-20 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="section-subheading">Local Knowledge</p>
            <h2 className="section-heading">Why Ceramic Coating Matters in {location.name}</h2>
            <div className="gold-divider mx-auto" />
            <div className="mt-8 text-gray-300 leading-relaxed text-base text-left space-y-4">
              {location.localContext.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PACKAGES ──────────────────────────────────────────────────────────── */}
      <section id="packages" className="py-20 bg-brand-darkgray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="section-subheading">Ceramic Coating Packages</p>
            <h2 className="section-heading">Choose Your Protection Level</h2>
            <div className="gold-divider mx-auto" />
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              All packages include full decontamination, clay bar treatment, paint correction, and
              precision coating application at our Warrington WA5 unit. Fixed pricing — no hidden
              extras.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`card-dark p-8 flex flex-col relative ${
                  pkg.highlight ? 'border-brand-gold/50 bg-brand-gold/5' : ''
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-brand-gold text-brand-black text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="font-heading font-bold text-brand-white text-lg mb-1">
                    {pkg.name}
                  </h3>
                  <div className="flex items-end gap-2 mt-3">
                    <span className="text-4xl font-heading font-black text-brand-gold">
                      {pkg.price}
                    </span>
                    <span className="text-gray-400 text-sm mb-1">from</span>
                  </div>
                  <p className="text-brand-gold text-sm font-semibold mt-1">
                    {pkg.duration} Protection
                  </p>
                </div>
                <ul className="space-y-2 flex-grow mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-brand-gold flex-shrink-0 mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href={`tel:${PHONE}`} className="btn-primary text-center text-sm">
                  Book This Package
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-subheading">Choosing the Right Protection</p>
            <h2 className="section-heading">Ceramic Coating vs Wax vs Sealant vs PPF</h2>
            <div className="gold-divider mx-auto" />
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Understanding the differences between paint protection options helps you choose the right
              level for your vehicle, driving habits, and budget.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-brand-gold/30">
                  <th className="text-left py-3 px-4 text-brand-gold font-heading font-bold">
                    Feature
                  </th>
                  <th className="text-left py-3 px-4 text-gray-400 font-heading">Car Wax</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-heading">
                    Polymer Sealant
                  </th>
                  <th className="text-left py-3 px-4 text-brand-white font-heading bg-brand-gold/10 border-x border-brand-gold/20">
                    Ceramic Coating ✓
                  </th>
                  <th className="text-left py-3 px-4 text-gray-400 font-heading">PPF</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-white/5 ${i % 2 === 0 ? 'bg-white/[0.02]' : ''}`}
                  >
                    <td className="py-3 px-4 text-brand-white font-semibold text-sm">
                      {row.feature}
                    </td>
                    <td className="py-3 px-4 text-gray-500 text-sm">{row.wax}</td>
                    <td className="py-3 px-4 text-gray-500 text-sm">{row.sealant}</td>
                    <td className="py-3 px-4 text-gray-100 text-sm font-medium bg-brand-gold/5 border-x border-brand-gold/10">
                      {row.ceramic}
                    </td>
                    <td className="py-3 px-4 text-gray-500 text-sm">{row.ppf}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-xs mt-4 text-center">
            PPF = Paint Protection Film (thermoplastic urethane). Can be combined with ceramic coating
            for maximum paint protection on high-impact areas.
          </p>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-brand-darkgray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="section-subheading">How It Works</p>
            <h2 className="section-heading">Our 8-Stage Ceramic Coating Process</h2>
            <div className="gold-divider mx-auto" />
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Every vehicle goes through the same eight stages. No shortcuts — each step exists because
              skipping it compromises the final result. After applying ceramic coatings to hundreds of
              vehicles at our Warrington unit, this sequence is non-negotiable.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step) => (
              <div key={step.step} id={`step-${step.step}`} className="card-dark p-6">
                <div className="text-brand-gold font-heading font-black text-3xl mb-4">
                  {step.step}
                </div>
                <h3 className="font-heading font-bold text-brand-white text-base mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT CERAMIC COATING WON'T DO ────────────────────────────────────── */}
      <section className="py-20 bg-brand-black">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-subheading">Honest Assessment</p>
            <h2 className="section-heading">What Ceramic Coating Cannot Protect Against</h2>
            <div className="gold-divider mx-auto" />
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              One misconception we encounter regularly is that ceramic coating is an invisible armour
              that prevents all paint damage. It is not — and we believe in being direct about what it
              does and does not do before you commit to a package.
            </p>
          </div>
          <div className="space-y-4">
            {[
              {
                title: 'Large stone chip impacts',
                desc: "A direct stone strike at motorway speed will penetrate a ceramic coating, just as it would wax or bare clear coat. The 9H hardness rating reduces the frequency and depth of fine chips from gravel and grit, but ceramic coating is not a physical barrier. For genuine stone chip protection on the bonnet and front bumper, Paint Protection Film (PPF) is the correct product — and it can be applied beneath or alongside a ceramic coating.",
              },
              {
                title: 'Key scratches and abrasive damage',
                desc: "Ceramic coating does not make paint impervious to scratches. A key dragged across a panel, or the abrasive brushes inside an automatic car wash, will still mark the coating. The 9H hardness makes fine micro-marring from washing less likely, but deliberate or aggressive abrasion will mark any coating regardless of product or application quality.",
              },
              {
                title: 'Self-healing capability',
                desc: "Unlike Paint Protection Film made from thermoplastic urethane (TPU), ceramic coatings do not self-heal. A scratch in the coating is permanent. PPF's TPU topcoat can close minor surface scratches when exposed to heat — silicon dioxide cannot.",
              },
              {
                title: 'Maintenance-free ownership',
                desc: "Ceramic coating dramatically reduces the effort and frequency of maintenance — but it does not eliminate it. A two-bucket hand wash every three to four weeks remains necessary. Leaving a ceramic-coated vehicle unwashed for months degrades the coating's performance over time. The coating reduces the work and extends the window; it does not remove the requirement entirely.",
              },
              {
                title: 'Acidic deposits left for extended periods',
                desc: "Bird lime, tree sap, and insect splatter are acidic. Ceramic coating gives you a significantly wider window to remove these deposits safely compared to bare paint — but if left for weeks in warm weather, they can still etch the coating surface. Remove contamination within 24–48 hours using a pH-neutral quick detailer spray, not at the next scheduled wash.",
              },
            ].map((item, i) => (
              <div key={item.title} className="card-dark p-6 flex gap-5">
                <div className="text-brand-gold font-heading font-black text-xl flex-shrink-0 w-7 pt-0.5">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-brand-white mb-2 text-base">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LONGEVITY & MAINTENANCE ───────────────────────────────────────────── */}
      <section className="py-20 bg-brand-darkgray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="section-subheading">Protecting Your Investment</p>
            <h2 className="section-heading">
              How Long Ceramic Coating Lasts — and How to Extend It
            </h2>
            <div className="gold-divider mx-auto" />
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              In our experience, vehicles whose owners follow a consistent maintenance schedule
              regularly reach or exceed the manufacturer-rated protection period. The maintenance
              requirement is modest — but it is not optional.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="font-heading font-bold text-brand-white text-xl mb-6">
                Factors That Affect Coating Longevity
              </h3>
              <div className="space-y-3">
                {longevityFactors.map((row) => (
                  <div key={row.factor} className="card-dark p-4">
                    <div className="text-brand-gold font-semibold text-sm mb-2">{row.factor}</div>
                    <p className="text-gray-400 text-sm leading-relaxed">{row.impact}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-heading font-bold text-brand-white text-xl mb-6">
                Recommended Maintenance Schedule
              </h3>
              <div className="space-y-3">
                {maintenanceSchedule.map((item) => (
                  <div key={item.period} className="card-dark p-4 flex gap-4">
                    <div className="text-brand-gold text-xs font-bold flex-shrink-0 w-24 pt-0.5 uppercase tracking-wide leading-tight">
                      {item.period}
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{item.action}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 border border-brand-gold/20 rounded-lg bg-brand-gold/5">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <span className="text-brand-gold font-semibold">Car Ceramic Coating and detailing warrington0 tip: </span>
                  The single biggest factor in extending coating longevity is the annual maintenance
                  detail. A booster coat applied after a full decontamination wash adds 12–24 months to
                  the effective life of any ceramic coating — at a fraction of the cost of a full
                  re-application.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────────────────────── */}
      <section className="py-20 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="section-subheading">Customer Reviews</p>
            <h2 className="section-heading">What Our Customers Say</h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedReviews.map((review) => (
              <div key={review.name} className="card-dark p-6">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i} className="text-brand-gold text-sm">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 italic faq-answer">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div>
                  <div className="font-semibold text-brand-white text-sm">{review.name}</div>
                  <div className="text-brand-gold text-xs">
                    {review.service} · {review.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQS ──────────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-brand-darkgray">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="section-subheading">Common Questions</p>
            <h2 className="section-heading">
              FAQs — Ceramic Coating in {location.name}
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div>
            <p className="font-heading font-semibold text-brand-gold text-xs uppercase tracking-wider mb-5">
              {location.name}-Specific Questions
            </p>
            <div className="space-y-4 mb-10">
              {location.faqs.map((faq) => (
                <div key={faq.question} className="card-dark p-6">
                  <h3 className="font-heading font-bold text-brand-white text-base mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed faq-answer">{faq.answer}</p>
                </div>
              ))}
            </div>
            <p className="font-heading font-semibold text-brand-gold text-xs uppercase tracking-wider mb-5">
              General Ceramic Coating Questions
            </p>
            <div className="space-y-4">
              {universalFaqs.map((faq) => (
                <div key={faq.question} className="card-dark p-6">
                  <h3 className="font-heading font-bold text-brand-white text-base mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed faq-answer">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── NEARBY CERAMIC COATING AREAS ─────────────────────────────────────── */}
      {nearbyLocationObjects.length > 0 && (
        <section className="py-20 bg-brand-black">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="section-subheading">Coverage Map</p>
              <h2 className="section-heading">Nearby Ceramic Coating Areas</h2>
              <div className="gold-divider mx-auto" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {nearbyLocationObjects.map((nearby) => (
                <Link
                  key={nearby.slug}
                  href={`/${nearby.slug}`}
                  className="card-dark p-5 text-center hover:border-brand-gold/50 hover:bg-brand-gold/5 transition-all duration-200 group"
                >
                  <div className="text-xs text-brand-gold font-semibold mb-1">
                    {nearby.postcode}
                  </div>
                  <div className="text-sm font-heading font-bold text-brand-white group-hover:text-brand-gold transition-colors mb-1">
                    Ceramic Coating
                  </div>
                  <div className="text-sm text-gray-300 group-hover:text-brand-white transition-colors">
                    {nearby.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── INTERNAL LINKS ────────────────────────────────────────────────────── */}
      <section className="py-16 bg-brand-darkgray">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-heading font-bold text-brand-white text-xl mb-6">
            Related Services &amp; Pages
          </h2>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/ceramic-coating" className="text-brand-gold hover:underline">
              ceramic coating Warrington
            </Link>
            <span className="text-gray-600">·</span>
            <Link
              href="/paint-correction"
              className="text-gray-400 hover:text-brand-gold transition-colors"
            >
              paint correction
            </Link>
            <span className="text-gray-600">·</span>
            <Link
              href="/car-detailing"
              className="text-gray-400 hover:text-brand-gold transition-colors"
            >
              car detailing
            </Link>
            <span className="text-gray-600">·</span>
            <Link
              href="/interior-detailing"
              className="text-gray-400 hover:text-brand-gold transition-colors"
            >
              interior detailing
            </Link>
            <span className="text-gray-600">·</span>
            <Link
              href="/headlight-restoration"
              className="text-gray-400 hover:text-brand-gold transition-colors"
            >
              headlight restoration
            </Link>
            <span className="text-gray-600">·</span>
            <Link
              href="/get-a-quote"
              className="text-gray-400 hover:text-brand-gold transition-colors"
            >
              get a quote
            </Link>
            {nearbyLocationObjects.map((nearby) => (
              <span key={nearby.slug} className="contents">
                <span className="text-gray-600">·</span>
                <Link
                  href={`/${nearby.slug}`}
                  className="text-gray-400 hover:text-brand-gold transition-colors"
                >
                  ceramic coating {nearby.name}
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
