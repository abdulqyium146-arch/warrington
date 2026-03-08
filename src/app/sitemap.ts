import { MetadataRoute } from 'next';
import { allLocations } from '@/lib/data/locations';

const BASE = 'https://www.warringtoncardetailing.co.uk';

function url(
  path: string,
  priority: number,
  freq: MetadataRoute.Sitemap[0]['changeFrequency'],
) {
  return {
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: freq,
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ── HOMEPAGE
    url('/', 1.0, 'weekly'),

    // ── CORE SERVICES
    url('/car-detailing/', 0.9, 'weekly'),
    url('/mobile-car-valeting/', 0.9, 'weekly'),
    url('/ceramic-coating/', 0.9, 'weekly'),
    url('/paint-correction/', 0.9, 'weekly'),
    url('/interior-detailing/', 0.9, 'weekly'),
    url('/headlight-restoration/', 0.9, 'weekly'),

    // ── AUTHORITY PAGES
    url('/faq/', 0.8, 'monthly'),
    url('/about/', 0.8, 'monthly'),
    url('/gallery/', 0.8, 'weekly'),
    url('/contact/', 0.8, 'monthly'),
    url('/get-a-quote/', 0.9, 'monthly'),
    url('/blog/', 0.8, 'weekly'),

    // ── PRIMARY MOBILE SERVICE PAGE
    url('/mobile-car-detailing-warrington/', 0.9, 'monthly'),

    // ── BLOG POSTS
    url('/blog/how-to-choose-professional-car-detailer-manchester/', 0.65, 'monthly'),

    // ── ALL LOCATION PAGES (dynamic from data)
    ...allLocations.map((loc) => ({
      url: `${BASE}/${loc.slug}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: loc.type === 'town' ? 0.8 : 0.7,
    })),
  ];
}
