import Link from 'next/link';
import { SERVICES } from '@/lib/constants';

interface Props {
  currentSlug: string;
  /** Optional override title — defaults to "Explore Our Services" */
  heading?: string;
}

export default function RelatedServices({ currentSlug, heading }: Props) {
  const related = SERVICES.filter((s) => s.slug !== currentSlug);

  return (
    <section className="py-16 bg-brand-darkgray">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="section-subheading">Explore More</p>
          <h2 className="section-heading">{heading ?? 'Explore Our Services'}</h2>
          <div className="gold-divider" />
          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm">
            WCD offers a full range of professional car detailing and valeting services across Warrington and the North West.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {related.map((s) => (
            <Link
              key={s.slug}
              href={`/${s.slug}/`}
              className="card-dark group flex flex-col items-center text-center p-6 hover:border-brand-gold/50 transition-all duration-200"
            >
              <span className="text-4xl mb-3" aria-hidden="true">{s.icon}</span>
              <h3 className="font-heading font-bold text-brand-white text-sm mb-2 group-hover:text-brand-gold transition-colors leading-snug">
                {s.title}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">{s.shortDesc}</p>
              <span className="mt-4 text-brand-gold text-xs font-semibold group-hover:underline">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
