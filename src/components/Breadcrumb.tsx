import Link from 'next/link';

interface BreadcrumbItem {
  name: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 max-w-7xl mx-auto">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            {i > 0 && <span className="text-gray-600">›</span>}
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-brand-gold transition-colors"
              >
                {item.name}
              </Link>
            ) : (
              <span className="text-brand-gold font-medium" aria-current="page">
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
