import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  slug: string;
  shortDesc: string;
  icon: string;
  features?: string[];
}

export default function ServiceCard({
  title,
  slug,
  shortDesc,
  icon,
  features,
}: ServiceCardProps) {
  return (
    <div className="card-dark group flex flex-col h-full">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="font-heading font-bold text-xl text-brand-white mb-2 group-hover:text-brand-gold transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{shortDesc}</p>
      {features && (
        <ul className="space-y-1.5 mb-5">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-gray-400">
              <span className="text-brand-gold mt-0.5 flex-shrink-0">✓</span>
              {f}
            </li>
          ))}
        </ul>
      )}
      <Link
        href={`/${slug}`}
        className="inline-flex items-center gap-2 text-brand-gold font-semibold text-sm hover:gap-3 transition-all duration-200 mt-auto group-hover:text-brand-gold-light"
      >
        Learn More
        <span>→</span>
      </Link>
    </div>
  );
}
