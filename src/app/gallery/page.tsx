import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import { imageGallerySchema, breadcrumbSchema } from '@/lib/schema';
import { PHONE, PHONE_DISPLAY, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Car Detailing Gallery Warrington | Before & After Photos | WCD',
  description:
    'Browse our gallery of professional car detailing, mobile valeting, ceramic coating, and paint correction results in Warrington. Real before & after photos from WCD.',
  alternates: { canonical: `${SITE_URL}/gallery` },
  openGraph: {
    title: 'Car Detailing Gallery Warrington | WCD',
    description:
      'See real results from WCD — car detailing, mobile valeting, ceramic coating & paint correction in Warrington.',
    url: `${SITE_URL}/gallery`,
    images: [
      {
        url: `${SITE_URL}/gallery/warrington-car-exterior-detailing-1.jpg`,
        width: 1200,
        height: 800,
        alt: 'Professional car exterior detailing in Warrington by WCD',
      },
    ],
  },
};

const GALLERY_IMAGES = [
  {
    src: '/gallery/warrington-car-exterior-detailing-1.jpg',
    alt: 'Car exterior detailing in Warrington — professional wash, clay bar and wax by WCD',
    caption: 'Exterior detailing in Warrington',
    category: 'Exterior Detailing',
    width: 1080,
    height: 1080,
  },
  {
    src: '/gallery/warrington-car-valeting-service-1.jpg',
    alt: 'Car valeting in Warrington — full valet service by WCD Car Detailing',
    caption: 'Full car valeting service in Warrington',
    category: 'Car Valeting',
    width: 1080,
    height: 1080,
  },
  {
    src: '/gallery/warrington-paint-correction-swirl-removal-1.jpg',
    alt: 'Paint correction and swirl mark removal in Warrington — machine polish by WCD',
    caption: 'Paint correction & swirl mark removal in Warrington',
    category: 'Paint Correction',
    width: 1080,
    height: 1080,
  },
  {
    src: '/gallery/warrington-ceramic-coating-application-1.jpg',
    alt: 'Ceramic coating application in Warrington — long-lasting paint protection by WCD',
    caption: 'Ceramic coating application in Warrington',
    category: 'Ceramic Coating',
    width: 1080,
    height: 1080,
  },
  {
    src: '/gallery/warrington-interior-car-detailing-1.webp',
    alt: 'Interior car detailing in Warrington — deep clean, leather conditioning and steam clean by WCD',
    caption: 'Interior detailing in Warrington',
    category: 'Interior Detailing',
    width: 1080,
    height: 1080,
  },
  {
    src: '/gallery/warrington-mobile-car-valeting-1.jpg',
    alt: 'Mobile car valeting in Warrington — we come to your home or workplace',
    caption: 'Mobile car valeting in Warrington',
    category: 'Mobile Valeting',
    width: 1080,
    height: 1080,
  },
  {
    src: '/gallery/warrington-car-detailing-before-after-1.webp',
    alt: 'Before and after car detailing in Warrington — showroom finish by WCD',
    caption: 'Before & after — full car detail in Warrington',
    category: 'Before & After',
    width: 1080,
    height: 1080,
  },
  {
    src: '/gallery/warrington-professional-car-wash-warrington-1.webp',
    alt: 'Best car valeting service in Warrington — professional two-bucket hand wash by WCD',
    caption: 'Professional car wash & valet in Warrington',
    category: 'Car Valeting',
    width: 1080,
    height: 1080,
  },
  {
    src: '/gallery/warrington-car-polish-machine-detailing-1.webp',
    alt: 'Machine polishing and paint correction in Warrington — swirl removal by WCD',
    caption: 'Machine polish & paint correction in Warrington',
    category: 'Paint Correction',
    width: 1080,
    height: 1080,
  },
  {
    src: '/gallery/warrington-car-valeting-results-warrington-1.webp',
    alt: 'Car detailing results in Warrington — gleaming finish after full detail by WCD',
    caption: 'Showroom finish after full detail in Warrington',
    category: 'Exterior Detailing',
    width: 1080,
    height: 1080,
  },
] as const;

const schemaImages = GALLERY_IMAGES.map((img) => ({
  url: `${SITE_URL}${img.src}`,
  caption: img.caption,
  name: img.alt,
}));

const CATEGORIES = ['All', ...Array.from(new Set(GALLERY_IMAGES.map((i) => i.category)))];

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

      {/* Page Hero */}
      <section
        className="relative pt-32 pb-20"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, #1a1200 0%, #0a0a0a 60%)' }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumb
            items={[
              { name: 'Home', href: '/' },
              { name: 'Gallery' },
            ]}
          />
          <div className="mt-6 max-w-3xl">
            <p className="section-subheading">Our Work</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-brand-white leading-tight mb-6">
              Car Detailing Gallery{' '}
              <span className="text-gradient-gold">in Warrington</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Browse real before and after results from WCD — professional car valeting,
              exterior detailing, interior cleaning, ceramic coating, and paint correction
              services across Warrington and the North West.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={`tel:${PHONE}`} className="btn-primary">
                📞 Book a Detail — {PHONE_DISPLAY}
              </a>
              <Link href="/contact" className="btn-secondary">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Category Pills */}
      <section className="py-8 bg-brand-darkgray border-b border-brand-gray/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <span
                key={cat}
                className="bg-brand-gray border border-brand-gray/60 text-gray-300 px-4 py-2 rounded-full text-sm cursor-default select-none"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-brand-black" aria-label="Car detailing photo gallery">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {GALLERY_IMAGES.map((img, idx) => (
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
                    loading={idx < 3 ? 'eager' : 'lazy'}
                    priority={idx < 3}
                    quality={80}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-brand-gold/90 text-brand-black text-xs font-bold px-2.5 py-1 rounded-full">
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
          <div className="mt-14 text-center">
            <p className="text-gray-400 mb-6 text-lg">
              Like what you see? Get your car looking this good.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${PHONE}`} className="btn-primary text-lg py-4 px-8">
                📞 Book Now — {PHONE_DISPLAY}
              </a>
              <Link href="/contact" className="btn-secondary text-lg py-4 px-8">
                Request a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services promo */}
      <section className="py-16 bg-brand-darkgray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="section-subheading">Our Services</p>
            <h2 className="section-heading">What You See Is What We Do</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { label: 'Car Detailing', href: '/car-detailing', icon: '🚗' },
              { label: 'Mobile Valeting', href: '/mobile-car-valeting', icon: '🚐' },
              { label: 'Ceramic Coating', href: '/ceramic-coating', icon: '✨' },
              { label: 'Paint Correction', href: '/paint-correction', icon: '🔧' },
              { label: 'Interior Detailing', href: '/interior-detailing', icon: '🪑' },
              { label: 'Headlight Restoration', href: '/headlight-restoration', icon: '💡' },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="card-dark text-center group hover:border-brand-gold/40 transition-colors"
              >
                <div className="text-3xl mb-2">{s.icon}</div>
                <span className="text-sm text-gray-300 group-hover:text-brand-gold transition-colors font-medium">
                  {s.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection dark />
    </>
  );
}
