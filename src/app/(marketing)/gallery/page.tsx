import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import { imageGallerySchema, breadcrumbSchema } from '@/lib/schema';
import { PHONE, PHONE_DISPLAY, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Ceramic Coating Gallery Warrington | VW Golf R, Ford Mustang, BMW — WCD Car Detailing',
  description:
    'See real ceramic coating and machine polishing results on VW Golf R, Ford Mustang GT, BMW 2 Series, Seat Cupra and more. Before & after photos from our Warrington WA5 unit. 5-star rated.',
  alternates: { canonical: `${SITE_URL}/gallery` },
  openGraph: {
    title: 'Ceramic Coating & Machine Polishing Gallery | WCD Car Detailing Warrington',
    description:
      'Real results on VW Golf R, Ford Mustang GT, BMW 2 Series & more. Ceramic coating, machine polishing and car detailing in Warrington. No filters — just real results.',
    url: `${SITE_URL}/gallery`,
    images: [
      {
        url: `${SITE_URL}/gallery/ford-mustang-gt-ceramic-coating-warrington-wcd-car-detailing.webp`,
        width: 1200,
        height: 900,
        alt: 'Ford Mustang GT ceramic coating result in Warrington — deep gloss green finish by WCD Car Detailing',
      },
    ],
  },
};

// ── GALLERY DATA ───────────────────────────────────────────────────────────────
// Ceramic Coating & Machine Polishing lead. Other services follow.

const GALLERY_IMAGES = [
  // ── CERAMIC COATING ──────────────────────────────────────────────────────────
  {
    src: '/gallery/ford-mustang-gt-ceramic-coating-warrington-wcd-car-detailing.webp',
    alt: 'Ford Mustang GT ceramic coating in Warrington — deep gloss green paint protection by WCD Car Detailing, Fairclough Mill WA5',
    caption: 'Ford Mustang GT — ceramic coating, deep gloss finish, Warrington',
    category: 'Ceramic Coating',
    featured: true,
    width: 1200,
    height: 900,
  },
  {
    src: '/gallery/bmw-2-series-ceramic-coating-warrington-wcd-car-detailing.webp',
    alt: 'BMW 2 Series ceramic coating in Warrington — Misano Blue hydrophobic paint protection at WCD Car Detailing WA5',
    caption: 'BMW 2 Series — ceramic coating, Misano Blue gloss, Warrington',
    category: 'Ceramic Coating',
    featured: true,
    width: 1200,
    height: 900,
  },
  {
    src: '/gallery/ceramic-coating-seat-cupra-warrington-wcd-car-detailing.jpg',
    alt: 'Seat Cupra ceramic coating in Warrington — deep gloss hydrophobic finish by WCD Car Detailing, unit at Fairclough Mill WA5',
    caption: 'Seat Cupra — ceramic coating, mirror gloss & hydrophobic protection, Warrington',
    category: 'Ceramic Coating',
    featured: true,
    width: 1080,
    height: 1080,
  },
  {
    src: '/gallery/volkswagen-golf-r-ceramic-coating-warrington-wcd-car-detailing.jpg',
    alt: 'Volkswagen Golf R ceramic coating in Warrington — Lapiz Blue paint sealed and protected by WCD Car Detailing WA5',
    caption: 'VW Golf R — ceramic coating, Lapiz Blue protected, Warrington',
    category: 'Ceramic Coating',
    featured: false,
    width: 1080,
    height: 720,
  },
  {
    src: '/gallery/warrington-ceramic-coating-application-1.jpg',
    alt: 'Ceramic coating application process in Warrington — hydrophobic paint protection being applied by WCD Car Detailing',
    caption: 'Ceramic coating application — permanent paint protection, Warrington',
    category: 'Ceramic Coating',
    featured: true,
    width: 1080,
    height: 1080,
  },
  {
    src: '/gallery/warrington-car-valeting-results-warrington-1.webp',
    alt: 'Ceramic coated car gleaming in Warrington — mirror finish result by WCD Car Detailing at Fairclough Mill',
    caption: 'Ceramic coating result — deep gloss mirror finish, Warrington',
    category: 'Ceramic Coating',
    featured: false,
    width: 1080,
    height: 1080,
  },
  // ── MACHINE POLISHING ────────────────────────────────────────────────────────
  {
    src: '/gallery/warrington-paint-correction-swirl-removal-1.jpg',
    alt: 'Machine polishing and swirl mark removal in Warrington — paint correction result by WCD Car Detailing WA5',
    caption: 'Machine polishing — swirl marks & scratches removed, Warrington',
    category: 'Machine Polishing',
    featured: true,
    width: 1080,
    height: 1080,
  },
  {
    src: '/gallery/warrington-car-polish-machine-detailing-1.webp',
    alt: 'Multi-stage machine polishing in Warrington — paint defects removed, clarity restored by WCD Car Detailing',
    caption: 'Multi-stage machine polish — paint clarity restored, Warrington',
    category: 'Machine Polishing',
    featured: true,
    width: 1080,
    height: 1080,
  },
  // ── BEFORE & AFTER ───────────────────────────────────────────────────────────
  {
    src: '/gallery/warrington-car-detailing-before-after-1.webp',
    alt: 'Before and after machine polishing in Warrington — dramatic paint transformation by WCD Car Detailing at Fairclough Mill WA5',
    caption: 'Before & after — machine polish + ceramic coating, Warrington',
    category: 'Before & After',
    featured: false,
    width: 1080,
    height: 1080,
  },
  // ── CAR DETAILING ────────────────────────────────────────────────────────────
  {
    src: '/gallery/warrington-car-exterior-detailing-1.jpg',
    alt: 'Professional exterior car detailing in Warrington — decontamination wash and clay bar treatment by WCD Car Detailing',
    caption: 'Exterior detailing — decontamination & prep, Warrington',
    category: 'Car Detailing',
    featured: false,
    width: 1080,
    height: 1080,
  },
  {
    src: '/gallery/warrington-car-valeting-service-1.jpg',
    alt: 'Professional car detailing in Warrington — full exterior treatment and showroom finish by WCD Car Detailing WA5',
    caption: 'Full exterior car detail — showroom finish, Warrington',
    category: 'Car Detailing',
    featured: false,
    width: 1080,
    height: 1080,
  },
  {
    src: '/gallery/warrington-mobile-car-valeting-1.jpg',
    alt: 'Car detailing in progress at WCD Car Detailing unit, Fairclough Mill, Warrington WA5 — professional results',
    caption: 'Car detailing at our Warrington WA5 unit — professional results',
    category: 'Car Detailing',
    featured: false,
    width: 1080,
    height: 1080,
  },
  // ── INTERIOR ─────────────────────────────────────────────────────────────────
  {
    src: '/gallery/warrington-interior-car-detailing-1.webp',
    alt: 'Interior car detailing in Warrington — leather conditioning, steam clean and deep clean by WCD Car Detailing WA5',
    caption: 'Interior detail — leather conditioning & deep clean, Warrington',
    category: 'Interior Detailing',
    featured: false,
    width: 1080,
    height: 1080,
  },
  {
    src: '/gallery/warrington-professional-car-wash-warrington-1.webp',
    alt: 'Pre-detail two-bucket hand wash in Warrington — safe wash method before machine polishing by WCD Car Detailing',
    caption: 'Pre-detail wash prep — safe foundation for machine polishing',
    category: 'Car Detailing',
    featured: false,
    width: 1080,
    height: 1080,
  },
] as const;

const CATEGORIES = ['All', 'Ceramic Coating', 'Machine Polishing', 'Before & After', 'Car Detailing', 'Interior Detailing'];

const schemaImages = GALLERY_IMAGES.map((img) => ({
  url: `${SITE_URL}${img.src}`,
  caption: img.caption,
  name: img.alt,
}));

const featuredImages = GALLERY_IMAGES.filter((img) => img.featured);
const allImages = GALLERY_IMAGES;

// ── SERVICE STATS ──────────────────────────────────────────────────────────────
const stats = [
  { value: '500+', label: 'Vehicles Detailed' },
  { value: '5.0★', label: 'Google Rating' },
  { value: '47', label: 'Verified Reviews' },
  { value: '24/7', label: 'Open All Week' },
];

// ── PROCESS STEPS ─────────────────────────────────────────────────────────────
const ceramicProcess = [
  { step: '1', title: 'Decontamination Wash', desc: 'Iron fallout remover, tar dissolve, and a full two-bucket hand wash to create a perfectly clean surface.' },
  { step: '2', title: 'Clay Bar Treatment', desc: 'Clay bar decontamination removes bonded surface contaminants invisible to the naked eye.' },
  { step: '3', title: 'Machine Polish', desc: 'Paint correction by machine polishing removes swirls and scratches before coating is applied.' },
  { step: '4', title: 'Ceramic Coating', desc: 'Professional-grade ceramic coating bonded chemically to the paint — hydrophobic and UV-resistant for years.' },
];

const polishProcess = [
  { step: '1', title: 'Paint Inspection', desc: 'Full paintwork inspection under specialist lighting to identify swirl marks, scratches and oxidation.' },
  { step: '2', title: 'Wash & Decontaminate', desc: 'Thorough wash and iron fallout removal before any abrasive contact with the paint.' },
  { step: '3', title: 'Stage Machine Polish', desc: 'Single or multi-stage machine polishing matched to your paint condition — cutting compound, polish and finish.' },
  { step: '4', title: 'Protect & Seal', desc: 'Paint sealant or ceramic coating applied after polishing to lock in the results.' },
];

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={imageGallerySchema(schemaImages)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: SITE_URL },
          { name: 'Gallery', url: `${SITE_URL}/gallery` },
        ])}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'WCD Car Detailing Warrington — Ceramic Coating & Machine Polishing Gallery',
          description: 'Real results from WCD Car Detailing in Warrington. Ceramic coating on VW Golf R, Ford Mustang GT, BMW 2 Series, Seat Cupra. Machine polishing and car detailing before and after photos.',
          numberOfItems: GALLERY_IMAGES.length,
          itemListElement: GALLERY_IMAGES.map((img, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: img.caption,
            image: `${SITE_URL}${img.src}`,
          })),
        }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section
        className="relative pt-32 pb-20"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, #1a1200 0%, #0a0a0a 60%)' }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'Gallery' }]} />
          <div className="mt-6 max-w-3xl">
            <p className="section-subheading">Real Results — No Filters</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-brand-white leading-tight mb-6">
              Ceramic Coating &{' '}
              <span className="text-gradient-gold">Machine Polishing</span>{' '}
              Gallery
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Every photo below is a real result from our unit at Fairclough Mill, Warrington WA5. No
              stock images, no filters. VW Golf R, Ford Mustang GT, BMW 2 Series, Seat Cupra and more —
              ceramic coating that lasts years, machine polishing that eliminates swirl marks completely.
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

      {/* ── STATS BAR ─────────────────────────────────────────────────────────── */}
      <section className="bg-brand-gold/10 border-y border-brand-gold/20">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl md:text-3xl font-heading font-black text-brand-gold">{s.value}</div>
                <div className="text-gray-400 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED: CERAMIC COATING ─────────────────────────────────────────── */}
      <section className="py-20 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="section-subheading">Primary Service</p>
              <h2 className="text-3xl md:text-4xl font-heading font-black text-brand-white mb-4">
                Ceramic Coating{' '}
                <span className="text-gradient-gold">Warrington</span>
              </h2>
              <div className="gold-divider mb-6" />
              <p className="text-gray-300 leading-relaxed mb-6">
                Our ceramic coating service bonds chemically with your paintwork to create a
                permanent hydrophobic shield. Resistant to UV, bird droppings, road salt, and
                everyday grime — it&apos;s the last paint protection you&apos;ll ever need.
                Results last <strong className="text-brand-white">3–7 years</strong> with
                proper maintenance.
              </p>
              <ul className="space-y-2 mb-8">
                {['Hydrophobic — water and dirt bead off instantly', 'UV-resistant — no paint fade or oxidation', 'Chemical-resistant — bird drops, tar, road salt', 'Deep gloss that intensifies paint colour', 'From £350 — free quote before any work begins'].map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="text-brand-gold mt-0.5 flex-shrink-0">✓</span>
                    {pt}
                  </li>
                ))}
              </ul>
              <Link href="/ceramic-coating" className="btn-primary">
                View Ceramic Coating →
              </Link>
            </div>
            {/* Ceramic coating process */}
            <div className="grid grid-cols-2 gap-4">
              {ceramicProcess.map((p) => (
                <div key={p.step} className="card-dark p-4">
                  <div className="w-7 h-7 rounded-full bg-brand-gold text-brand-black font-black text-sm flex items-center justify-center mb-3">
                    {p.step}
                  </div>
                  <div className="font-heading font-bold text-brand-white text-sm mb-1">{p.title}</div>
                  <div className="text-gray-400 text-xs leading-relaxed">{p.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Ceramic Coating gallery strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {featuredImages.filter((img) => img.category === 'Ceramic Coating').map((img, idx) => (
              <figure
                key={img.src}
                className="group relative overflow-hidden rounded-xl bg-brand-darkgray border border-brand-gold/30 hover:border-brand-gold transition-all duration-300"
              >
                <div className="relative aspect-video">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading={idx === 0 ? 'eager' : 'lazy'}
                    priority={idx === 0}
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-brand-gold text-brand-black text-xs font-bold px-2.5 py-1 rounded-full">
                      Ceramic Coating
                    </span>
                  </div>
                </div>
                <figcaption className="px-4 py-3 text-sm text-gray-300 font-medium">{img.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED: MACHINE POLISHING ───────────────────────────────────────── */}
      <section className="py-20 bg-brand-darkgray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Machine polishing gallery strip — left on this section */}
            <div className="grid grid-cols-2 gap-4 order-2 lg:order-1">
              {featuredImages.filter((img) => img.category === 'Machine Polishing').map((img) => (
                <figure
                  key={img.src}
                  className="group relative overflow-hidden rounded-xl bg-brand-black border border-brand-gray/40 hover:border-brand-gold/40 transition-all duration-300"
                >
                  <div className="relative aspect-square">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      quality={85}
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-brand-gold/90 text-brand-black text-xs font-bold px-2.5 py-1 rounded-full">
                        Machine Polishing
                      </span>
                    </div>
                  </div>
                  <figcaption className="px-3 py-2 text-xs text-gray-400">{img.caption}</figcaption>
                </figure>
              ))}
            </div>
            <div className="order-1 lg:order-2">
              <p className="section-subheading">Primary Service</p>
              <h2 className="text-3xl md:text-4xl font-heading font-black text-brand-white mb-4">
                Machine Polishing{' '}
                <span className="text-gradient-gold">Warrington</span>
              </h2>
              <div className="gold-divider mb-6" />
              <p className="text-gray-300 leading-relaxed mb-6">
                Machine polishing is the only way to permanently remove swirl marks, fine
                scratches, water spots and oxidation from paintwork. Our multi-stage polishing
                process uses professional dual-action and rotary polishers matched to your
                paint type — restoring true depth and clarity to the finish.
              </p>
              <ul className="space-y-2 mb-8">
                {['Removes swirl marks, scratches & water spots permanently', 'Multi-stage: cutting, polishing and finishing stages', 'Safe on all paint types including soft European finishes', 'Results visible immediately — no waiting', 'From £200 — free quote, fixed price before start'].map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="text-brand-gold mt-0.5 flex-shrink-0">✓</span>
                    {pt}
                  </li>
                ))}
              </ul>
              <Link href="/paint-correction" className="btn-primary">
                View Machine Polishing →
              </Link>
            </div>
          </div>

          {/* Machine polishing process */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {polishProcess.map((p) => (
              <div key={p.step} className="bg-brand-black border border-brand-gray/30 rounded-xl p-4">
                <div className="w-7 h-7 rounded-full bg-brand-gold text-brand-black font-black text-sm flex items-center justify-center mb-3">
                  {p.step}
                </div>
                <div className="font-heading font-bold text-brand-white text-sm mb-1">{p.title}</div>
                <div className="text-gray-400 text-xs leading-relaxed">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FULL GALLERY GRID ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-brand-black" aria-label="Full car detailing photo gallery">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-subheading">All Results</p>
            <h2 className="section-heading">Full Gallery</h2>
            <div className="gold-divider" />
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Every image is a real result from our Warrington unit. Ceramic coating,
              machine polishing, car detailing and interior detailing — all done to the
              same uncompromising standard.
            </p>
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {CATEGORIES.map((cat) => (
              <span
                key={cat}
                className="bg-brand-darkgray border border-brand-gray/60 text-gray-300 px-4 py-2 rounded-full text-sm select-none"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {allImages.map((img, idx) => (
              <figure
                key={img.src}
                className="group relative overflow-hidden rounded-xl bg-brand-darkgray border border-brand-gray/30 hover:border-brand-gold/40 transition-all duration-300"
              >
                <div className="relative aspect-square">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading={idx < 4 ? 'eager' : 'lazy'}
                    priority={idx < 4}
                    quality={82}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 left-3">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                      img.category === 'Ceramic Coating' || img.category === 'Machine Polishing'
                        ? 'bg-brand-gold text-brand-black'
                        : 'bg-brand-black/70 text-brand-gold border border-brand-gold/40'
                    }`}>
                      {img.category}
                    </span>
                  </div>
                </div>
                <figcaption className="px-4 py-3 text-sm text-gray-400 font-medium">
                  {img.caption}
                </figcaption>
              </figure>
            ))}
          </div>

          {/* CTA under grid */}
          <div className="mt-16 text-center">
            <p className="text-gray-300 text-xl font-heading font-bold mb-2">
              Ready to see these results on your car?
            </p>
            <p className="text-gray-500 mb-8">
              Free quote, fixed price, no obligation. Call or WhatsApp us now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${PHONE}`} className="btn-primary text-lg py-4 px-10">
                📞 {PHONE_DISPLAY}
              </a>
              <Link href="/get-a-quote" className="btn-secondary text-lg py-4 px-10">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES PROMO ────────────────────────────────────────────────────── */}
      <section className="py-16 bg-brand-darkgray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="section-subheading">Our Services</p>
            <h2 className="section-heading">Explore What We Offer</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Featured two services — larger cards */}
            {[
              { label: 'Ceramic Coating', href: '/ceramic-coating', icon: '✨', desc: 'From £350 — years of protection', featured: true },
              { label: 'Machine Polishing', href: '/paint-correction', icon: '🔧', desc: 'From £200 — swirls gone permanently', featured: true },
              { label: 'Car Detailing', href: '/car-detailing', icon: '🚗', desc: 'From £80 — full interior & exterior', featured: false },
              { label: 'Interior Detailing', href: '/interior-detailing', icon: '🪑', desc: 'From £80 — deep clean & condition', featured: false },
              { label: 'Headlight Restoration', href: '/headlight-restoration', icon: '💡', desc: 'From £50 — crystal clear lenses', featured: false },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className={`group rounded-xl border p-5 transition-all duration-200 hover:border-brand-gold/60 ${
                  s.featured
                    ? 'bg-brand-gold/10 border-brand-gold/40 sm:col-span-1'
                    : 'bg-brand-black border-brand-gray/30'
                }`}
              >
                <div className="text-3xl mb-3">{s.icon}</div>
                <div className={`font-heading font-bold text-sm mb-1 group-hover:text-brand-gold transition-colors ${s.featured ? 'text-brand-gold' : 'text-brand-white'}`}>
                  {s.label}
                </div>
                <div className="text-gray-500 text-xs">{s.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection dark />
    </>
  );
}

