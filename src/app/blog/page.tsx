import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Car Detailing Blog Warrington | Tips & Advice | WCD',
  description:
    'Expert car detailing tips, guides and advice from WCD Warrington. Learn about ceramic coating, paint correction, valeting and keeping your car in top condition.',
  alternates: { canonical: 'https://warringtoncardetailing.co.uk/blog' },
};

const posts = [
  {
    slug: 'detailing-vs-valeting',
    title: "What's the Difference Between Car Detailing and Valeting?",
    excerpt: 'Many car owners use the terms interchangeably, but there are key differences. Find out which service your car actually needs.',
    date: '10 Feb 2025',
    category: 'Guide',
    image: '/gallery/warrington-car-valeting-service-1.jpg',
  },
  {
    slug: 'ceramic-coating-benefits',
    title: 'Why Ceramic Coating Is Essential for Protecting Your Paint',
    excerpt: "Ceramic coatings offer unparalleled protection against UV, bird droppings, road salt, and more. Here's why it's worth the investment.",
    date: '24 Jan 2025',
    category: 'Ceramic Coating',
    image: '/gallery/warrington-ceramic-coating-application-1.jpg',
  },
  {
    slug: 'how-often-car-detailed',
    title: 'How Often Should You Have Your Car Detailed?',
    excerpt: 'The answer depends on how you use your car, where you park, and what finish you want. We break it down simply.',
    date: '5 Jan 2025',
    category: 'Maintenance',
    image: '/gallery/warrington-car-detailing-before-after-1.webp',
  },
];

export default function BlogPage() {
  return (
    <>
      <section
        className="relative pt-32 pb-20"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, #001233 0%, #0a0a0a 60%)' }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'Blog' }]} />
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="card-dark group block hover:no-underline">
                <div className="relative rounded-lg h-48 mb-5 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <span className="text-xs text-brand-gold font-semibold uppercase tracking-widest">{post.category}</span>
                <h2 className="font-heading font-bold text-brand-white text-xl mt-2 mb-3 group-hover:text-brand-gold transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
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
