import { MetadataRoute } from 'next';
import { allLocations } from '@/lib/data/locations';

// ── Always HTTPS + www — never changes
const BASE = 'https://warringtoncardetailing.co.uk';

// ── Static dates: only update when content actually changes
// This prevents Google treating every deploy as a full-site update
const DATES = {
  homepage:       new Date('2026-03-08'),
  services:       new Date('2026-03-08'),
  authority:      new Date('2026-03-08'),
  mobileWarr:     new Date('2026-03-08'),
  blog:           new Date('2026-03-08'),
  blogPost:       new Date('2025-02-24'),
  locations:      new Date('2026-03-08'),
};

function url(
  path: string,
  priority: number,
  freq: MetadataRoute.Sitemap[0]['changeFrequency'],
  lastModified: Date,
) {
  return {
    url: `${BASE}${path}`,
    lastModified,
    changeFrequency: freq,
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ── HOMEPAGE
    url('/', 1.0, 'weekly', DATES.homepage),

    // ── CORE SERVICES
    url('/car-detailing/',          0.9, 'weekly',  DATES.services),
    url('/mobile-car-valeting/',    0.9, 'weekly',  DATES.services),
    url('/ceramic-coating/',        0.9, 'weekly',  DATES.services),
    url('/paint-correction/',       0.9, 'weekly',  DATES.services),
    url('/interior-detailing/',     0.9, 'weekly',  DATES.services),
    url('/headlight-restoration/',  0.9, 'weekly',  DATES.services),

    // ── AUTHORITY PAGES
    url('/faq/',          0.8, 'monthly', DATES.authority),
    url('/about/',        0.8, 'monthly', DATES.authority),
    url('/gallery/',      0.8, 'weekly',  DATES.authority),
    url('/contact/',      0.8, 'monthly', DATES.authority),
    url('/get-a-quote/',  0.9, 'monthly', DATES.authority),
    url('/blog/',         0.8, 'weekly',  DATES.blog),

    // ── PRIMARY MOBILE SERVICE PAGE
    url('/mobile-car-detailing-warrington/', 0.9, 'monthly', DATES.mobileWarr),

    // ── BLOG POSTS — date = actual publish date
    url('/blog/how-to-choose-professional-car-detailer-manchester/', 0.65, 'monthly', DATES.blogPost),

    // ── LOCATION PAGES — dynamic, static date
    ...allLocations.map((loc) => ({
      url: `${BASE}/${loc.slug}/`,
      lastModified: DATES.locations,
      changeFrequency: 'monthly' as const,
      priority: loc.type === 'town' ? 0.8 : 0.7,
    })),
  ];
}
