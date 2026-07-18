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
    <div className="group h-full transition-all duration-300">
      {/* Card container with improved spacing and shadows */}
      <div className="card-dark h-full flex flex-col p-6 md:p-7 lg:p-8">
        {/* Icon section */}
        <div className="text-5xl md:text-6xl mb-5 md:mb-6 transform transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>

        {/* Title */}
        <h3 className="font-heading font-bold text-lg md:text-xl lg:text-2xl text-brand-white mb-3 md:mb-4 group-hover:text-brand-gold transition-colors duration-200 line-clamp-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-4 md:mb-6 flex-1">
          {shortDesc}
        </p>

        {/* Features list - improved for mobile */}
        {features && features.length > 0 && (
          <ul className="space-y-2.5 md:space-y-3 mb-6 md:mb-8">
            {features.map((f, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 md:gap-3 text-xs md:text-sm text-gray-400 group-hover:text-gray-300 transition-colors"
              >
                <span className="text-brand-gold flex-shrink-0 mt-1 text-base md:text-lg">✓</span>
                <span className="leading-relaxed">{f}</span>
              </li>
            ))}
          </ul>
        )}

        {/* CTA Link */}
        <Link
          href={`/${slug}`}
          className="inline-flex items-center gap-2 text-brand-gold font-semibold text-sm md:text-base transition-all duration-300 group-hover:text-brand-gold-light"
        >
          <span>Learn More</span>
          <svg
            className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
