import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';
import RelatedServices from '@/components/RelatedServices';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Car Detailing Blog Warrington | Tips & Advice | WCD',
  description:
    'Expert car detailing tips, guides and advice from WCD Warrington. Learn about ceramic coating, paint correction, valeting and keeping your car in top condition.',
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: 'Car Detailing Blog Warrington | Tips & Advice | WCD',
    description:
      'Expert car detailing tips, guides and advice from WCD Warrington. Ceramic coating, paint correction, valeting and more.',
    url: `${SITE_URL}/blog`,
    type: 'website',
  },
};

// Only list posts that have a real page file — ghost links create 404s which hurt crawl budget
const posts = [
  {
    slug: 'how-to-choose-professional-car-detailer-manchester',
    title: 'How to Choose a Professional Car Detailer in the Manchester Area',
    excerpt:
      'Not all detailers are equal. Learn what to look for — qualifications, products, equipment, and guarantees — when choosing a professional car detailer near you.',
    date: '24 Feb 2025',
    category: 'Guide',
    image: '/gallery/warrington-car-detailing-before-after-1.webp',
  },
];

export default function BlogPage() {
  const [featured] = posts;

  return (
    <>
      <section
        className="relative pt-32 pb-20"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.12) 0%, #0a0a0a 60%)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'Blog', href: '/blog' }]} />
          <div className="mt-6 max-w-3xl">
            <p className="section-subheading">Expert Advice</p>
            <h1 className="text-4xl md:text-5xl font-heading font-black text-brand-white leading-tight mb-6">
              Car Detailing <span className="text-gradient-gold">Tips &amp; Guides</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Practical advice from Warrington&apos;s professional detailers — helping you keep your car looking its best.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-darkgray">
        <div className="max-w-7xl mx-auto px-4">

          {/* Featured post */}
          <Link
            href={`/blog/${featured.slug}`}
            className="card-dark group block hover:no-underline mb-12 grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden rounded-2xl"
          >
            <div className="relative h-56 md:h-auto overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span className="text-xs text-brand-gold font-semibold uppercase tracking-widest mb-3">
                {featured.category} — Featured
              </span>
              <h2 className="font-heading font-bold text-brand-white text-2xl mb-3 group-hover:text-brand-gold transition-colors leading-snug">
                {featured.title}
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{featured.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{featured.date}</span>
                <span className="text-brand-gold">Read Article →</span>
              </div>
            </div>
          </Link>

          {/* More posts coming — service links in the meantime */}
          <div className="card-dark text-center py-12">
            <p className="section-subheading mb-2">More Guides Coming Soon</p>
            <h2 className="font-heading font-bold text-brand-white text-2xl mb-4">
              In the Meantime, Explore Our Services
            </h2>
            <div className="gold-divider mb-6" />
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <Link href="/car-detailing/" className="btn-secondary">Car Detailing</Link>
              <Link href="/ceramic-coating/" className="btn-secondary">Ceramic Coating</Link>
              <Link href="/paint-correction/" className="btn-secondary">Paint Correction</Link>
              <Link href="/interior-detailing/" className="btn-secondary">Interior Detailing</Link>
              <Link href="/headlight-restoration/" className="btn-secondary">Headlight Restoration</Link>
              <Link href="/mobile-car-valeting/" className="btn-secondary">Mobile Valeting</Link>
            </div>
            <p className="text-gray-400 text-sm mt-6">
              Questions? Check our <Link href="/faq/" className="text-brand-gold hover:underline">FAQ page</Link> or{' '}
              <Link href="/contact/" className="text-brand-gold hover:underline">contact us</Link> directly.
            </p>
          </div>
        </div>
      </section>

      <RelatedServices currentSlug="" heading="Our Detailing Services in Warrington" />
    </>
  );
}
