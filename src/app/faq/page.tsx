import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { PHONE, PHONE_DISPLAY, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Car Detailing FAQ Warrington | WCD Car Detailing',
  description:
    'Answers to every question about car detailing and mobile valeting in Warrington. Pricing, process, coverage, ceramic coating and more. WCD 07958 752513.',
  alternates: { canonical: `${SITE_URL}/faq` },
  openGraph: {
    title: 'Car Detailing FAQ Warrington | WCD Car Detailing',
    description: 'Every question about car detailing and mobile valeting in Warrington answered. WCD 07958 752513.',
    url: `${SITE_URL}/faq`,
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is WCD Car Detailing and where are you based?', acceptedAnswer: { '@type': 'Answer', text: 'WCD Car Detailing is Warrington\'s premier professional car detailing and mobile valeting service. We are based at Unit 1, Fairclough Mill, Warrington, WA5 1AH. We hold a 5.0 Google rating from 47 verified reviews and have detailed over 500 vehicles.' } },
    { '@type': 'Question', name: 'How much does car detailing cost in Warrington?', acceptedAnswer: { '@type': 'Answer', text: 'WCD pricing starts from £40 for a mobile mini valet, £80 for a full mobile valet, £150 for a full car detail, £200 for paint correction, £350 for ceramic coating, and £50 for headlight restoration. All quotes are free and provided before any work begins.' } },
    { '@type': 'Question', name: 'What is the difference between car detailing and car valeting?', acceptedAnswer: { '@type': 'Answer', text: 'Car valeting is a thorough clean of your vehicle. Car detailing goes further — it involves paint decontamination, machine polishing to remove swirl marks and scratches, and application of long-term protective coatings. A valet cleans your car. A detail restores and protects it.' } },
    { '@type': 'Question', name: 'How long does ceramic coating last?', acceptedAnswer: { '@type': 'Answer', text: 'A professionally applied ceramic coating from WCD lasts between 2 and 5 years depending on product grade and maintenance. WCD uses professional-only ceramic coating products applied after full paint correction preparation.' } },
    { '@type': 'Question', name: 'Do you offer mobile car detailing in Warrington?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. WCD is a fully mobile service covering all WA1–WA5 Warrington postcodes. We also travel to St Helens, Widnes, Runcorn, Wigan, Manchester, Liverpool, Chester and the wider North West. Our mobile unit is fully self-contained — no water or power needed from your property.' } },
    { '@type': 'Question', name: 'Are you open on weekends and bank holidays?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. WCD Car Detailing is open 24 hours a day, 7 days a week, 365 days a year including all bank holidays. Call 07958 752513 any time to book.' } },
  ],
};

type FaqItem = { q: string; a: React.ReactNode };

const categories: { title: string; icon: string; items: FaqItem[] }[] = [
  {
    title: 'About Our Service',
    icon: '🏢',
    items: [
      { q: 'What is WCD Car Detailing and where are you based?', a: <>WCD Car Detailing is Warrington&apos;s premier professional{' '}<Link href="/car-detailing" className="text-brand-gold hover:underline">car detailing</Link>{' '}and{' '}<Link href="/mobile-car-valeting" className="text-brand-gold hover:underline">mobile car valeting</Link>{' '}service. We are based at Unit 1, Fairclough Mill, Warrington, WA5 1AH and operate a fully mobile service covering all WA postcodes and the wider North West. We hold a 5.0 Google rating from 47 verified reviews and have detailed over 500 vehicles since we opened.</> },
      { q: 'Are you a mobile service or do I need to bring my car to you?', a: 'Both options are available. Our primary service is mobile — we travel to your home, workplace, driveway or any convenient location with a fully-equipped van. We bring our own water, power, products and tools. If you prefer to drop your vehicle at our Warrington studio at Fairclough Mill WA5, that is also available. Most customers choose the mobile option for the sheer convenience.' },
      { q: 'What areas do you cover?', a: <>We cover all of Warrington including WA1, WA2, WA3, WA4 and WA5 postcodes — Great Sankey, Stockton Heath, Birchwood, Padgate, Latchford, Fearnhead, Grappenhall, Westbrook, Penketh, Woolston, Appleton, Culcheth, Callands, Thelwall and Lymm. Beyond Warrington we regularly serve{' '}<Link href="/car-detailing-st-helens" className="text-brand-gold hover:underline">St Helens</Link>,{' '}<Link href="/car-detailing-widnes" className="text-brand-gold hover:underline">Widnes</Link>,{' '}<Link href="/car-detailing-runcorn" className="text-brand-gold hover:underline">Runcorn</Link>,{' '}<Link href="/car-detailing-wigan" className="text-brand-gold hover:underline">Wigan</Link>,{' '}<Link href="/car-detailing-manchester" className="text-brand-gold hover:underline">Manchester</Link>,{' '}<Link href="/car-detailing-liverpool" className="text-brand-gold hover:underline">Liverpool</Link>{' '}and beyond.</> },
      { q: 'Are you open at weekends and on bank holidays?', a: <>Yes. WCD is open 24 hours a day, 7 days a week, 365 days a year — including all bank holidays, Christmas Eve, and New Year&apos;s Day. We work around your schedule, not ours. Call{' '}<a href={`tel:${PHONE}`} className="text-brand-gold hover:underline">{PHONE_DISPLAY}</a>{' '}at any time to book.</> },
      { q: 'Are you insured?', a: 'Yes. WCD Car Detailing carries full public liability insurance and motor trade insurance covering all vehicles in our care. You can leave your vehicle with us or have us work on it on your driveway with complete confidence.' },
      { q: 'Do you use eco-friendly products?', a: 'Yes. All WCD products are water-efficient, pH-neutral where appropriate, and biodegradable. We avoid harsh chemicals that damage paintwork, contaminate driveways, or pose a risk to children, pets, or garden plants. Professional results do not require environmentally damaging products.' },
    ],
  },
  {
    title: 'Pricing',
    icon: '💰',
    items: [
      { q: 'How much does car detailing cost in Warrington?', a: <>WCD pricing for{' '}<Link href="/car-detailing" className="text-brand-gold hover:underline">car detailing in Warrington</Link>{' '}starts from £40 for a basic mobile mini valet and ranges to £500 or more for a full ceramic coating with paint correction. Common packages: mobile mini valet from £40 · full mobile valet from £80 · full car detail from £150 · interior deep clean from £80 · paint correction from £200 · ceramic coating from £350 · headlight restoration from £50. <Link href="/get-a-quote" className="text-brand-gold hover:underline">Contact us for a free exact quote</Link>.</> },
      { q: 'Do you charge extra for larger vehicles like SUVs and vans?', a: 'Yes, larger vehicles such as SUVs, 4x4s, people carriers and vans take more time and product, so prices are slightly higher than for a standard hatchback or saloon. We always state this clearly in your quote before any work begins. There are never any surprise charges on your final invoice.' },
      { q: 'Are there any hidden fees?', a: 'No. WCD operates a strict no-hidden-fees policy. The price in your quote is the price you pay. We will always flag any additional findings before doing any extra work — you are in control at every stage.' },
      { q: 'Do you offer any discounts or packages?', a: 'We offer package deals that combine multiple services at a reduced combined rate — for example, paint correction plus ceramic coating is cheaper than booking them separately. We also offer loyalty discounts for returning customers and referral discounts. Ask about current offers when you call for your quote.' },
      { q: 'Do I pay a deposit?', a: 'For standard valet and detailing bookings we do not require a deposit. For larger jobs such as full ceramic coating packages, we ask for a 20% deposit to secure your booking slot. This is fully refundable up to 48 hours before your appointment.' },
    ],
  },
  {
    title: 'Detailing vs Valeting',
    icon: '🚗',
    items: [
      { q: 'What is the difference between car detailing and car valeting?', a: <>Car valeting is a thorough clean of your vehicle — removing dirt, debris and grime from the exterior and interior to leave it looking clean and fresh.{' '}<Link href="/car-detailing" className="text-brand-gold hover:underline">Car detailing</Link>{' '}goes significantly further. It is a multi-stage process involving paint decontamination, correction of surface defects such as swirl marks and fine scratches, and the application of long-term protective coatings. A valet cleans your car. A detail restores and protects it.</> },
      { q: 'Which service does my car actually need?', a: 'If your car is relatively new, well-maintained and you simply want it clean and fresh, a full mobile valet is usually sufficient. If your paintwork has swirl marks, scratches, faded areas, oxidation or dull finish, a paint correction detail is needed. If you want long-term protection that lasts years, ceramic coating is the right choice. When you contact WCD, we assess your vehicle and recommend exactly what it needs — never more than necessary.' },
      { q: 'What is included in a full mobile valet?', a: 'Our full mobile valet includes: exterior snow foam pre-wash, hand wash using two-bucket method, wheel and tyre cleaning, door shuts and jambs cleaned, glass cleaned inside and out, all interior surfaces wiped and dressed, seats vacuumed, carpets vacuumed, dashboard and centre console cleaned, exterior dried and finished with a spray wax.' },
      { q: 'What is included in a full car detail?', a: 'Our full car detail includes everything in the mobile valet plus: iron fallout removal, clay bar decontamination, paint inspection under LED lighting, single or multi-stage machine polishing to remove swirl marks and scratches, panel wipe with IPA solution, paint sealant or wax application, interior deep clean including leather conditioning or fabric protection, glass polished with rain repellent, and final quality inspection.' },
    ],
  },
  {
    title: 'Ceramic Coating',
    icon: '✨',
    items: [
      { q: 'What is ceramic coating?', a: <>Ceramic coating is a liquid polymer that is applied to your car&apos;s paintwork and bonds chemically with the paint surface. Once cured, it creates a permanent protective layer that is hydrophobic (water and contaminants bead off), UV-resistant, highly scratch-resistant, and self-cleaning. It is the most advanced form of paint protection currently available. <Link href="/ceramic-coating" className="text-brand-gold hover:underline">Learn more about our ceramic coating service</Link>.</> },
      { q: 'How long does ceramic coating last?', a: 'A professionally applied ceramic coating lasts between 2 and 5 years depending on the product grade and how the vehicle is maintained. Consumer-grade coatings sold in supermarkets last 3–6 months. WCD uses professional-only products not available to the public, applied under controlled conditions after full paint correction.' },
      { q: 'Does my car need paint correction before ceramic coating?', a: 'Yes, almost always. Ceramic coating locks in the current condition of your paintwork. If swirl marks, scratches or water spots are present before coating, they will be sealed in permanently. WCD will always inspect your paint under LED lighting and recommend the appropriate level of correction before any coating is applied.' },
      { q: 'How long does ceramic coating take?', a: 'A full ceramic coating package at WCD typically takes 1–2 days. Day one covers the full decontamination, paint correction and surface preparation. Day two covers coating application and initial cure time. This cannot be rushed — proper preparation is what makes the coating last.' },
      { q: 'Can I wash my car after ceramic coating?', a: 'You should avoid washing your vehicle for 7 days after coating to allow full curing. After that, your car can be washed normally using pH-neutral car shampoo. Avoid automated car washes with brushes, which can introduce swirl marks. WCD provides full aftercare guidance with every ceramic coating package.' },
      { q: 'Is ceramic coating worth the money?', a: 'Yes, for the right customer. If you own a new or well-maintained vehicle, care about your paintwork, and want to protect it for the long term, ceramic coating offers unmatched protection compared to wax or sealant. Over 2–5 years it works out significantly cheaper than annual wax treatments and dramatically reduces the effort of keeping your car clean.' },
    ],
  },
  {
    title: 'Paint Correction',
    icon: '🔧',
    items: [
      { q: 'What is paint correction?', a: <><Link href="/paint-correction" className="text-brand-gold hover:underline">Paint correction</Link>{' '}is the process of removing surface defects from your car&apos;s paintwork using machine polishers and abrasive polishing compounds. These defects include swirl marks, fine scratches, water spots, bird dropping etching, oxidation, and hologram marks. The result is paintwork that is optically clear, deep, and close to factory condition.</> },
      { q: 'What causes swirl marks on paintwork?', a: 'Swirl marks are caused by incorrect washing technique. The most common causes are: automatic car washes with brushes, wiping the car with a dry cloth or sponge, using dirty wash mitts, single-bucket washing, and wiping dust off dry paint. WCD\'s paint correction service removes existing swirl marks, and we advise on correct washing technique to prevent future damage.' },
      { q: 'What is the difference between a one-stage and two-stage paint correction?', a: 'A one-stage correction uses a single polishing stage to remove the majority of light swirl marks and improve gloss — removing approximately 50–70% of surface defects. A two-stage correction uses a heavier cutting compound followed by a finer finishing polish, removing up to 90–95% of defects. WCD recommends the appropriate stage based on your paint condition.' },
      { q: 'Will paint correction damage my car\'s paint?', a: 'No, when performed correctly by a trained detailer. Paint correction removes a microscopic amount of clear coat — typically 1–5 microns per stage, compared to a clear coat of 40–120 microns on most modern vehicles. WCD measures paint thickness before and after correction to ensure safe working levels at all times.' },
    ],
  },
  {
    title: 'Interior Detailing',
    icon: '🪑',
    items: [
      { q: 'What does an interior detail include?', a: <><Link href="/interior-detailing" className="text-brand-gold hover:underline">WCD&apos;s interior detailing service</Link>{' '}includes: full vacuum of all carpets, mats, seats, and boot; steam cleaning of all fabric surfaces; leather cleaning and conditioning; cleaning of dashboard, door cards, centre console and steering wheel; air vent cleaning; door shut cleaning; glass cleaned inside; odour treatment; and UV protectant applied to all plastics and leather.</> },
      { q: 'Can you remove pet hair from car interiors?', a: 'Yes. Pet hair is one of our most common requests. We use specialist tools including rubber brushes, compressed air and professional extraction equipment to remove embedded pet hair from seats, carpets and boot liners. For heavily affected vehicles, this takes additional time which is reflected in the quote.' },
      { q: 'Can you remove bad smells from a car?', a: 'Yes. WCD offers full odour elimination using ozone treatment and enzyme-based odour neutralisers for persistent smells including cigarette smoke, pet odour, food, mould and damp. Air fresheners mask smells temporarily — our treatment eliminates the source. Results are permanent when the source of the odour has been removed.' },
      { q: 'Can you remove stains from fabric seats and carpets?', a: 'Yes in most cases. Fresh stains have a very high success rate. Old or set stains can be significantly improved in most cases. We use professional hot water extraction, enzyme treatments and fabric spot removers. We will always be honest with you before we start about the likely outcome for any stubborn stain.' },
    ],
  },
  {
    title: 'Mobile Service',
    icon: '🚐',
    items: [
      { q: 'How does your mobile car detailing service work?', a: <>You call or{' '}<Link href="/get-a-quote" className="text-brand-gold hover:underline">contact us for a quote</Link>, choose a date and time, and confirm your location. A WCD detailer arrives in our fully-equipped mobile van at the agreed time with everything needed — pressure washer, water tank, generator, all products and tools. You do not need to provide water or power. We work on your driveway or any suitable flat surface and leave the area tidy when we finish.</> },
      { q: 'Do you need water or electricity at my property?', a: 'No. Our mobile unit is completely self-contained. We carry our own pure water tank, generator and all equipment needed. You do not need to connect us to anything at your property.' },
      { q: 'What if it rains on the day of my booking?', a: 'Light rain does not affect most of our services. For ceramic coating application and some paint correction work, dry conditions are required. If the weather is unsuitable for the booked service, we will contact you in advance to reschedule at no charge.' },
      { q: 'Can you come to my workplace?', a: 'Yes. We regularly work in office car parks, business premises and commercial sites. If you require a site assessment first or have specific access requirements, let us know when booking and we will accommodate.' },
    ],
  },
  {
    title: 'Vehicle Types',
    icon: '🏎️',
    items: [
      { q: 'Do you detail luxury and prestige vehicles?', a: 'Yes. WCD regularly details BMW, Mercedes-Benz, Audi, Porsche, Land Rover, Range Rover, Bentley, Ferrari, Maserati and other prestige vehicles. We understand the specific requirements of high-end paintwork, soft-close mechanisms, delicate leather grades and sensitive electronic systems. Every prestige vehicle is treated with the care it deserves.' },
      { q: 'Do you detail vans and commercial vehicles?', a: 'Yes. We offer full valeting and detailing for vans, minibuses, light commercial vehicles and fleet cars. Fleet packages for businesses are available — contact us to discuss requirements and frequency.' },
      { q: 'Can you protect a brand new car?', a: 'Absolutely — and we strongly recommend it. New vehicles from the factory and from dealerships are often already contaminated and may have light wash marks. A new car protection package includes a full decontamination wash, paint inspection, light polish if needed, and either a paint sealant or ceramic coating to protect the new finish from day one.' },
      { q: 'Do you detail motorbikes?', a: 'Yes. WCD offers motorcycle detailing and ceramic coating. The process is adapted for two-wheeled vehicles and includes frame cleaning, exhaust polishing, wheel detailing, and paint or tank protection. All motorcycle work is priced individually — contact us for a quote.' },
    ],
  },
];

export default function FAQPage() {
  const allItems = categories.flatMap((c) => c.items);

  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: SITE_URL },
          { name: 'FAQs', url: `${SITE_URL}/faq` },
        ])}
      />

      {/* Hero */}
      <section
        className="relative pt-32 pb-20"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, #1a1200 0%, #0a0a0a 60%)' }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'FAQs' }]} />
          <div className="mt-6 max-w-3xl">
            <p className="section-subheading">Questions &amp; Answers</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-brand-white leading-tight mb-6">
              Car Detailing FAQs —{' '}
              <span className="text-gradient-gold">Everything You Need to Know</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              WCD Car Detailing answers every common question about professional{' '}
              <Link href="/car-detailing" className="text-brand-gold hover:underline">
                car detailing
              </Link>{' '}
              and{' '}
              <Link href="/mobile-car-valeting" className="text-brand-gold hover:underline">
                mobile car valeting
              </Link>{' '}
              in Warrington. From pricing and process to ceramic coating and coverage — if
              you&apos;re wondering, the answer is here.
            </p>
            <p className="text-gray-400 text-base">
              Still not sure? Call us on{' '}
              <a href={`tel:${PHONE}`} className="text-brand-gold font-bold hover:underline">
                {PHONE_DISPLAY}
              </a>{' '}
              any time, 24 hours a day.
            </p>
          </div>
        </div>
      </section>

      {/* Category navigation */}
      <section className="py-8 bg-brand-darkgray border-b border-brand-gray sticky top-16 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <a
                key={cat.title}
                href={`#${cat.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-xs font-semibold text-gray-400 hover:text-brand-gold transition-colors bg-brand-gray px-3 py-1.5 rounded-full"
              >
                {cat.icon} {cat.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 bg-brand-black">
        <div className="max-w-4xl mx-auto px-4 space-y-16">
          {categories.map((cat) => (
            <div key={cat.title} id={cat.title.toLowerCase().replace(/\s+/g, '-')}>
              <div className="flex items-center gap-3 mb-8">
                <span className="text-3xl" aria-hidden="true">{cat.icon}</span>
                <h2 className="text-2xl font-heading font-bold text-brand-white">{cat.title}</h2>
              </div>
              <div className="space-y-3">
                {cat.items.map((item, i) => (
                  <details key={i} className="card-dark group cursor-pointer">
                    <summary className="flex items-center justify-between gap-4 list-none py-1">
                      <h3 className="font-semibold text-brand-white text-sm md:text-base">
                        {item.q}
                      </h3>
                      <span
                        className="text-brand-gold flex-shrink-0 text-xl font-light group-open:rotate-45 transition-transform duration-200"
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </summary>
                    <div className="mt-3 text-gray-400 text-sm leading-relaxed border-t border-brand-gray pt-3">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-darkgray">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-white mb-4">
            Still Have a Question?
          </h2>
          <p className="text-gray-400 mb-8">
            Call us on{' '}
            <a href={`tel:${PHONE}`} className="text-brand-gold font-bold hover:underline">
              {PHONE_DISPLAY}
            </a>{' '}
            — open 24 hours, 7 days a week. Or{' '}
            <Link href="/get-a-quote" className="text-brand-gold hover:underline">
              get a free quote
            </Link>{' '}
            and we&apos;ll answer everything specific to your vehicle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${PHONE}`} className="btn-primary">
              📞 Call {PHONE_DISPLAY}
            </a>
            <Link href="/get-a-quote" className="btn-secondary">
              Get a Free Quote
            </Link>
          </div>
          <p className="mt-8 text-xs text-gray-600">
            <Link href="/car-detailing" className="hover:text-brand-gold transition-colors">car detailing Warrington</Link>
            {' · '}
            <Link href="/mobile-car-valeting" className="hover:text-brand-gold transition-colors">mobile car valeting Warrington</Link>
            {' · '}
            <Link href="/ceramic-coating" className="hover:text-brand-gold transition-colors">ceramic coating</Link>
            {' · '}
            <Link href="/paint-correction" className="hover:text-brand-gold transition-colors">paint correction</Link>
            {' · '}
            <Link href="/interior-detailing" className="hover:text-brand-gold transition-colors">interior detailing</Link>
            {' · '}
            <Link href="/headlight-restoration" className="hover:text-brand-gold transition-colors">headlight restoration</Link>
            {' · '}
            <Link href="/mobile-car-detailing-warrington" className="hover:text-brand-gold transition-colors">mobile car detailing Warrington</Link>
          </p>
        </div>
      </section>

      {/* Count */}
      <div className="hidden" aria-hidden="true" data-faq-count={allItems.length} />
    </>
  );
}
