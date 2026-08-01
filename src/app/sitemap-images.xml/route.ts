// Hardcoded HTTPS + www — never relies on env or constants
const BASE = 'https://warringtoncardetailing.co.uk';

const GALLERY_IMAGES = [
  {
    loc: `${BASE}/gallery/bmw-3-series-m-sport-ceramic-coating-warrington-wcd.webp`,
    title: 'BMW 3 Series M Sport G20 ceramic coating in Warrington — WCD Car Detailing',
    caption: 'BMW 3 Series M Sport (G20) Alpine White ceramic coating at WCD Car Detailing, Fairclough Mill, Warrington WA5. Professional paint protection, deep gloss finish.',
  },
  {
    loc: `${BASE}/gallery/honda-crv-ceramic-coating-warrington-wcd-front.webp`,
    title: 'Honda CR-V ceramic coating Warrington — WCD Car Detailing',
    caption: 'Honda CR-V Crystal Black Pearl full ceramic coating at WCD Car Detailing, Warrington WA5. Decontamination wash, clay bar, machine polish prep and ceramic coating applied.',
  },
  {
    loc: `${BASE}/gallery/honda-crv-ceramic-coating-warrington-wcd-side-gloss.webp`,
    title: 'Honda CR-V ceramic coating side gloss — Warrington WCD',
    caption: 'Honda CR-V ceramic coating side panel showing deep mirror-like gloss reflection at WCD Car Detailing, Warrington. Hydrophobic paint protection result.',
  },
  {
    loc: `${BASE}/gallery/honda-crv-ceramic-coating-warrington-wcd-rear-quarter.webp`,
    title: 'Honda CR-V ceramic coating rear quarter — Warrington WCD',
    caption: 'Honda CR-V ceramic coating rear three-quarter view at WCD Car Detailing, Warrington WA5. Gloss black paint protection result.',
  },
  {
    loc: `${BASE}/gallery/honda-crv-ceramic-coating-warrington-wcd-fender-detail.webp`,
    title: 'Honda CR-V ceramic coating fender detail — Warrington WCD',
    caption: 'Honda CR-V fender and wheel arch ceramic coating detail at WCD Car Detailing, Warrington. Deep paint protection with hydrophobic coating applied.',
  },
  {
    loc: `${BASE}/gallery/honda-crv-ceramic-coating-warrington-wcd-tailgate.webp`,
    title: 'Honda CR-V ceramic coating tailgate CR-V badge — Warrington WCD',
    caption: 'Honda CR-V AWD ceramic coating tailgate result showing badge detail at WCD Car Detailing, Warrington WA5. Full exterior ceramic protection.',
  },
  {
    loc: `${BASE}/gallery/honda-crv-ceramic-coating-warrington-wcd-rear-gloss.webp`,
    title: 'Honda CR-V ceramic coating rear gloss — Warrington WCD',
    caption: 'Honda CR-V rear ceramic coating gloss result at WCD Car Detailing, Warrington. Deep gloss hydrophobic protection on all exterior panels.',
  },
  {
    loc: `${BASE}/gallery/paint-inspection-work-lights-warrington-wcd-machine-polishing.webp`,
    title: 'Paint inspection before machine polishing Warrington — WCD Car Detailing',
    caption: 'Specialist paint defect inspection under work lights before machine polishing at WCD Car Detailing, Warrington WA5. Professional pre-polishing assessment of swirl marks and scratches.',
  },
  {
    loc: `${BASE}/gallery/swirl-marks-before-machine-polishing-warrington-wcd.webp`,
    title: 'Swirl marks before machine polishing Warrington — WCD Car Detailing',
    caption: 'Close-up of swirl marks and paint defects on dark paintwork before machine polishing at WCD Car Detailing, Warrington. Before paint correction result.',
  },
  {
    loc: `${BASE}/gallery/ford-mustang-gt-ceramic-coating-warrington-wcd-car-detailing.webp`,
    title: 'Ford Mustang GT ceramic coating in Warrington — WCD Car Detailing',
    caption: 'Ford Mustang GT treated with professional ceramic coating at WCD Car Detailing, Fairclough Mill, Warrington WA5. Deep gloss green finish, hydrophobic protection.',
  },
  {
    loc: `${BASE}/gallery/bmw-2-series-ceramic-coating-warrington-wcd-car-detailing.webp`,
    title: 'BMW 2 Series ceramic coating in Warrington — WCD Car Detailing',
    caption: 'BMW 2 Series Misano Blue ceramic coating result at WCD Car Detailing, Warrington WA5. Hydrophobic paint protection, UV resistant, years of gloss.',
  },
  {
    loc: `${BASE}/gallery/ceramic-coating-seat-cupra-warrington-wcd-car-detailing.jpg`,
    title: 'Seat Cupra ceramic coating in Warrington — WCD Car Detailing',
    caption: 'Seat Cupra ceramic coating at WCD Car Detailing, Fairclough Mill, Warrington WA5. Mirror gloss hydrophobic finish.',
  },
  {
    loc: `${BASE}/gallery/volkswagen-golf-r-ceramic-coating-warrington-wcd-car-detailing.jpg`,
    title: 'VW Golf R ceramic coating in Warrington — WCD Car Detailing',
    caption: 'Volkswagen Golf R Lapiz Blue ceramic coating by WCD Car Detailing, Warrington WA5. Paint sealed and protected with long-lasting hydrophobic coating.',
  },
  {
    loc: `${BASE}/gallery/warrington-ceramic-coating-application-1.jpg`,
    title: 'Ceramic coating application in Warrington',
    caption: 'Professional ceramic coating being applied at WCD Car Detailing, Warrington. Long-lasting hydrophobic paint protection.',
  },
  {
    loc: `${BASE}/gallery/warrington-car-valeting-results-warrington-1.webp`,
    title: 'Ceramic coating result in Warrington — deep gloss finish',
    caption: 'Showroom deep gloss result after ceramic coating at WCD Car Detailing, Warrington WA5.',
  },
  {
    loc: `${BASE}/gallery/warrington-paint-correction-swirl-removal-1.jpg`,
    title: 'Machine polishing and swirl mark removal in Warrington',
    caption: 'Machine paint correction removing swirl marks, scratches and oxidation at WCD Car Detailing, Warrington WA5.',
  },
  {
    loc: `${BASE}/gallery/warrington-car-polish-machine-detailing-1.webp`,
    title: 'Multi-stage machine polishing in Warrington',
    caption: 'Multi-stage machine polishing to restore paint depth and clarity at WCD Car Detailing, Warrington.',
  },
  {
    loc: `${BASE}/gallery/warrington-car-detailing-before-after-1.webp`,
    title: 'Before and after car detailing in Warrington — WCD Car Detailing',
    caption: 'Dramatic before and after transformation — machine polish and ceramic coating by WCD Car Detailing, Warrington WA5.',
  },
  {
    loc: `${BASE}/gallery/warrington-car-exterior-detailing-1.jpg`,
    title: 'Exterior car detailing in Warrington',
    caption: 'Professional exterior detailing including decontamination wash and clay bar at WCD Car Detailing, Warrington.',
  },
  {
    loc: `${BASE}/gallery/warrington-car-valeting-service-1.jpg`,
    title: 'Full car detailing service in Warrington',
    caption: 'Full exterior car detail — showroom finish at WCD Car Detailing, Fairclough Mill, Warrington WA5.',
  },
  {
    loc: `${BASE}/gallery/warrington-mobile-car-valeting-1.jpg`,
    title: 'Professional car detailing at WCD unit, Warrington WA5',
    caption: 'Car detailing in progress at WCD Car Detailing unit, Fairclough Mill, Warrington WA5.',
  },
  {
    loc: `${BASE}/gallery/warrington-interior-car-detailing-1.webp`,
    title: 'Interior car detailing in Warrington',
    caption: 'Interior detailing including leather conditioning, steam clean and deep clean at WCD Car Detailing, Warrington.',
  },
  {
    loc: `${BASE}/gallery/warrington-professional-car-wash-warrington-1.webp`,
    title: 'Safe two-bucket hand wash in Warrington — pre-detail prep',
    caption: 'Two-bucket safe hand wash before machine polishing at WCD Car Detailing, Warrington WA5.',
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

