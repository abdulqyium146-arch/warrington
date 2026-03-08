// Hardcoded HTTPS + www — never relies on env or constants
const BASE = 'https://www.warringtoncardetailing.co.uk';

const GALLERY_IMAGES = [
  {
    loc: `${BASE}/gallery/warrington-car-exterior-detailing-1.jpg`,
    title: 'Car exterior detailing in Warrington',
    caption: 'Professional exterior detailing service in Warrington by WCD Car Detailing',
  },
  {
    loc: `${BASE}/gallery/warrington-car-valeting-service-1.jpg`,
    title: 'Car valeting service in Warrington',
    caption: 'Full car valeting service in Warrington by WCD Car Detailing',
  },
  {
    loc: `${BASE}/gallery/warrington-paint-correction-swirl-removal-1.jpg`,
    title: 'Paint correction and swirl mark removal in Warrington',
    caption: 'Machine paint correction removing swirl marks in Warrington',
  },
  {
    loc: `${BASE}/gallery/warrington-ceramic-coating-application-1.jpg`,
    title: 'Ceramic coating application in Warrington',
    caption: 'Professional ceramic coating applied for long-lasting paint protection',
  },
  {
    loc: `${BASE}/gallery/warrington-interior-car-detailing-1.webp`,
    title: 'Interior car detailing in Warrington',
    caption: 'Deep interior detailing including leather conditioning and steam clean',
  },
  {
    loc: `${BASE}/gallery/warrington-mobile-car-valeting-1.jpg`,
    title: 'Mobile car valeting in Warrington',
    caption: 'Mobile car valeting service — WCD comes to your home or workplace',
  },
  {
    loc: `${BASE}/gallery/warrington-car-detailing-before-after-1.webp`,
    title: 'Before and after car detailing in Warrington',
    caption: 'Stunning before and after results from a full car detail in Warrington',
  },
  {
    loc: `${BASE}/gallery/warrington-professional-car-wash-warrington-1.webp`,
    title: 'Best car valeting service in Warrington',
    caption: 'Professional two-bucket hand wash and valet in Warrington',
  },
  {
    loc: `${BASE}/gallery/warrington-car-polish-machine-detailing-1.webp`,
    title: 'Machine polishing in Warrington',
    caption: 'Machine polishing to remove swirl marks and restore gloss in Warrington',
  },
  {
    loc: `${BASE}/gallery/warrington-car-valeting-results-warrington-1.webp`,
    title: 'Car detailing results in Warrington',
    caption: 'Showroom-quality finish after a full car detail by WCD Warrington',
  },
];

export async function GET() {
  const galleryPageUrl = `${BASE}/gallery/`;

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
>
  <url>
    <loc>${galleryPageUrl}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    ${GALLERY_IMAGES.map(
      (img) => `<image:image>
      <image:loc>${img.loc}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.caption}</image:caption>
    </image:image>`
    ).join('\n    ')}
  </url>
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=3600',
    },
  });
}
