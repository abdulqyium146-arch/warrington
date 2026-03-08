import Link from 'next/link';

const LOCATIONS = [
  { name: 'Warrington', slug: 'car-detailing-warrington' },
  { name: 'St Helens', slug: 'car-detailing-st-helens' },
  { name: 'Widnes', slug: 'car-detailing-widnes' },
  { name: 'Runcorn', slug: 'car-detailing-runcorn' },
  { name: 'Manchester', slug: 'car-detailing-manchester' },
  { name: 'Liverpool', slug: 'car-detailing-liverpool' },
  { name: 'Wigan', slug: 'car-detailing-wigan' },
  { name: 'Sale', slug: 'car-detailing-sale' },
  { name: 'Stockport', slug: 'car-detailing-stockport' },
  { name: 'Chester', slug: 'car-detailing-chester' },
  { name: 'Knutsford', slug: 'car-detailing-knutsford' },
  { name: 'Northwich', slug: 'car-detailing-northwich' },
  { name: 'Newton-le-Willows', slug: 'car-detailing-newton-le-willows' },
  { name: 'Lymm', slug: 'car-detailing-lymm' },
  { name: 'Great Sankey', slug: 'car-detailing-great-sankey-warrington' },
  { name: 'Stockton Heath', slug: 'car-detailing-stockton-heath-warrington' },
  { name: 'Birchwood', slug: 'car-detailing-birchwood-warrington' },
  { name: 'Padgate', slug: 'car-detailing-padgate-warrington' },
  { name: 'Grappenhall', slug: 'car-detailing-grappenhall-warrington' },
  { name: 'Westbrook', slug: 'car-detailing-westbrook-warrington' },
  { name: 'Penketh', slug: 'car-detailing-penketh-warrington' },
  { name: 'Latchford', slug: 'car-detailing-latchford-warrington' },
  { name: 'Woolston', slug: 'car-detailing-woolston-warrington' },
  { name: 'Culcheth', slug: 'car-detailing-culcheth-warrington' },
];

interface Props {
  /** Highlight one location as "current" (no link — just text) */
  currentSlug?: string;
  /** Background variant */
  dark?: boolean;
}

export default function LocationsGrid({ currentSlug, dark = false }: Props) {
  return (
    <section className={`py-16 ${dark ? 'bg-brand-black' : 'bg-brand-darkgray'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="section-subheading">We Come To You</p>
          <h2 className="section-heading">Areas We Cover</h2>
          <div className="gold-divider" />
          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm">
            WCD provides professional mobile car detailing across Warrington and the wider North West.
            No water or power supply needed — we bring everything.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {LOCATIONS.map((loc) =>
            loc.slug === currentSlug ? (
              <span
                key={loc.slug}
                className="card-dark text-center py-4 px-2 border-brand-gold/60 text-brand-gold text-sm font-bold block"
              >
                {loc.name}
              </span>
            ) : (
              <Link
                key={loc.slug}
                href={`/${loc.slug}/`}
                className="card-dark text-center py-4 px-2 hover:border-brand-gold/50 hover:text-brand-gold transition-all duration-200 text-sm font-semibold text-gray-300 block"
              >
                {loc.name}
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  );
}
