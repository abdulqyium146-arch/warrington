import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';
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
      "Ceramic coatings offer unparalleled protection against UV, bird droppings, road salt, and more. Here's why it's worth the investment.",
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
  {
    slug: 'paint-correction-guide',
    title: 'Paint Correction Explained: Swirls, Scratches, and What Can Be Fixed',
    excerpt:
      'Paint correction removes swirl marks, light scratches, water spots, and oxidation from your car\'s paint. Here\'s what\'s possible — and what isn\'t.',
    date: '15 Dec 2024',
    category: 'Paint Correction',
    image: '/gallery/warrington-paint-correction-detail-1.jpg',
  },
  {
    slug: 'interior-detailing-guide',
    title: 'The Complete Guide to Professional Interior Car Detailing',
    excerpt:
      'A professional interior detail goes far beyond vacuuming. We cover every step — extraction, sanitisation, leather treatment, and odour removal.',
    date: '1 Dec 2024',
    category: 'Interior',
    image: '/gallery/warrington-interior-car-detailing-1.jpg',
  },
  {
    slug: 'mobile-car-valeting-warrington',
    title: 'Mobile Car Valeting in Warrington: What to Expect',
    excerpt:
      'Our mobile valet service comes to you — at home or work. Here\'s exactly what\'s included, how long it takes, and how to prepare.',
    date: '18 Nov 2024',
    category: 'Mobile Valeting',
    image: '/gallery/warrington-mobile-car-valeting-1.jpg',
  },
  {
    slug: 'headlight-restoration-guide',
    title: 'Headlight Restoration: Why Yellow Headlights Are a Safety Risk',
    excerpt:
      'Oxidised headlights reduce light output by up to 80%. Learn how professional restoration works and when to book it.',
    date: '5 Nov 2024',
    category: 'Headlight Restoration',
    image: '/gallery/warrington-headlight-restoration-1.jpg',
  },
  {
    slug: 'how-to-maintain-ceramic-coating',
    title: 'How to Maintain Your Ceramic Coating (And Make It Last Longer)',
    excerpt:
      'A ceramic coating is only as good as the maintenance that follows. We share the correct wash method, products to avoid, and annual maintenance tips.',
    date: '20 Oct 2024',
    category: 'Ceramic Coating',
    image: '/gallery/warrington-ceramic-coating-application-1.jpg',
  },
  {
    slug: 'new-car-detailing-warrington',
    title: 'Should You Detail a Brand New Car? Yes — Here\'s Why',
    excerpt:
      'New cars leave the factory with paint defects, transport film residue, and unprotected clear coat. A new car detail fixes all of this before the damage compounds.',
    date: '8 Oct 2024',
    category: 'New Car',
    image: '/gallery/warrington-car-detailing-before-after-1.webp',
  },
];

export default function BlogPage() {
  const [featured, ...rest] = posts;

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

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card-dark group block hover:no-underline"
              >
                <div className="relative rounded-lg h-48 mb-5 overflow-hidden">
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
                <h2 className="font-heading font-bold text-brand-white text-xl mt-2 mb-3 group-hover:text-brand-gold transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{post.date}</span>
                  <span className="text-brand-gold">Read More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
