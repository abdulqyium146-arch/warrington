import type { Metadata, Viewport } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import Script from 'next/script';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';

function ToasterComponent() {
  return <Toaster />;
}

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://warringtoncardetailing.co.uk'),

  title: {
    default: 'Car Ceramic Coating and detailing warrington0 | Ceramic Coating & Machine Polishing | 5★ Rated',
    template: '%s | Car Ceramic Coating and detailing warrington0',
  },

  description:
    "Warrington's #1 ceramic coating & machine polishing specialists. Professional car detailing at our WA5 unit. Open 24/7. Call 07482 225323 for a free quote.",

  keywords: [
    'car detailing Warrington',
    'machine polishing Warrington',
    'ceramic coating Warrington',
    'paint correction Warrington',
    'car valeting Warrington',
    'interior car detailing Warrington',
    'headlight restoration Warrington',
    'car detailing Cheshire',
    'ceramic coating Cheshire',
    'Car Ceramic Coating and detailing warrington0 car detailing',
  ],

  authors: [{ name: 'Car Ceramic Coating and detailing warrington0', url: 'https://warringtoncardetailing.co.uk' }],
  creator: 'Car Ceramic Coating and detailing warrington0',
  publisher: 'Car Ceramic Coating and detailing warrington0',

  alternates: {
    canonical: 'https://warringtoncardetailing.co.uk/',
    languages: { 'en-GB': 'https://warringtoncardetailing.co.uk/' },
  },

  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://warringtoncardetailing.co.uk/',
    siteName: 'Car Ceramic Coating and detailing warrington0',
    title: 'Car Ceramic Coating and detailing warrington0 | Ceramic Coating & Machine Polishing | 5★ Rated',
    description:
      "Warrington's #1 ceramic coating & machine polishing specialists. Professional car detailing at our WA5 unit. Open 24/7. Free quote: 07482 225323.",
    images: [
      {
        url: '/hero-bg.jpg',
        width: 1200,
        height: 630,
        alt: 'Car Ceramic Coating and detailing warrington0 — Professional Ceramic Coating and Machine Polishing in Warrington, Cheshire',
        type: 'image/jpeg',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Car Ceramic Coating and detailing warrington0 | Ceramic Coating & Machine Polishing | 5★ Rated',
    description:
      "Warrington's #1 ceramic coating & machine polishing specialists. Open 24/7. Free quote: 07482 225323.",
    images: ['/hero-bg.jpg'],
    creator: '@WCDdetailing',
    site: '@WCDdetailing',
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  verification: {
    google: 'gJo2pXOPasXNvSlPwGHgZk-nVH_WmYfbn4-5QUmmNRw',
    ...(process.env.NEXT_PUBLIC_BING_VERIFICATION && {
      other: { 'msvalidate.01': process.env.NEXT_PUBLIC_BING_VERIFICATION },
    }),
  },

  applicationName: 'Car Ceramic Coating and detailing warrington0',
  referrer: 'origin-when-cross-origin',
  category: 'automotive',

  icons: {
    icon: '/favicon.jpg',
    shortcut: '/favicon.jpg',
    apple: '/favicon.jpg',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' },
    { media: '(prefers-color-scheme: light)', color: '#C9A84C' },
  ],
};

const BASE = 'https://warringtoncardetailing.co.uk';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${BASE}/#organization`,
  name: 'Car Ceramic Coating and detailing warrington0',
  alternateName: 'Car Ceramic Coating and detailing warrington0 Car Detailing',
  url: BASE,
  logo: {
    '@type': 'ImageObject',
    url: `${BASE}/logo.jpg`,
    width: 400,
    height: 100,
  },
  image: `${BASE}/hero-bg.jpg`,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+44 7482 225323',
    contactType: 'customer service',
    availableLanguage: 'English',
    hoursAvailable: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  },
  sameAs: [
    'https://www.facebook.com/WCDCarDetailing',
    'https://www.instagram.com/WCDCarDetailing',
    'https://www.google.com/maps?q=Unit+1+Fairclough+Mill+Warrington+WA5+1AH',
  ],
  knowsAbout: [
    'Car Detailing',
    'Ceramic Coating',
    'Machine Polishing',
    'Paint Correction',
    'Interior Car Detailing',
    'Headlight Restoration',
  ],
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'AutoBodyShop'],
  '@id': `${BASE}/#business`,
  name: 'Car Ceramic Coating and detailing warrington0',
  alternateName: 'Car Ceramic Coating and detailing warrington0 Car Detailing',
  description:
    "Warrington's premier ceramic coating and machine polishing specialists. Professional car detailing, paint correction, interior detailing and headlight restoration at our dedicated unit in Warrington WA5 1AH.",
  url: BASE,
  telephone: '+44 7482 225323',
  email: 'info@carceramiccoatingwarrington0.co.uk',
  priceRange: '££',
  currenciesAccepted: 'GBP',
  paymentAccepted: 'Cash, Credit Card, Debit Card, Bank Transfer',
  address: {
    '@type': 'PostalAddress',
    streetAddress: "Unit 1 Fairclough Mill, Atherton's Quay",
    addressLocality: 'Warrington',
    addressRegion: 'Cheshire',
    postalCode: 'WA5 1AH',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 53.3897,
    longitude: -2.5973,
  },
  hasMap: 'https://maps.google.com/?q=Unit+1+Fairclough+Mill+Warrington+WA5+1AH',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '47',
    bestRating: '5',
    worstRating: '1',
  },
  areaServed: [
    { '@type': 'City', name: 'Warrington' },
    { '@type': 'City', name: 'Runcorn' },
    { '@type': 'City', name: 'Widnes' },
    { '@type': 'City', name: 'St Helens' },
    { '@type': 'City', name: 'Northwich' },
    { '@type': 'City', name: 'Knutsford' },
    { '@type': 'City', name: 'Wigan' },
    { '@type': 'City', name: 'Sale' },
    { '@type': 'City', name: 'Newton-le-Willows' },
    { '@type': 'AdministrativeArea', name: 'Cheshire' },
  ],
  parentOrganization: { '@id': `${BASE}/#organization` },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Car Detailing & Paint Protection Services in Warrington',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Car Detailing Warrington' }, price: '80', priceCurrency: 'GBP' },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ceramic Coating Warrington' }, price: '250', priceCurrency: 'GBP' },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Machine Polishing Warrington' }, price: '150', priceCurrency: 'GBP' },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Interior Car Detailing Warrington' }, price: '80', priceCurrency: 'GBP' },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Headlight Restoration Warrington' }, price: '50', priceCurrency: 'GBP' },
    ],
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE}/#website`,
  name: 'Car Ceramic Coating and detailing warrington0',
  url: BASE,
  description: "Warrington's #1 rated car detailing, ceramic coating and machine polishing service.",
  publisher: { '@id': `${BASE}/#organization` },
  inLanguage: 'en-GB',
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: `${BASE}/?s={search_term_string}` },
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//maps.googleapis.com" />
        <meta name="geo.region" content="GB-CHE" />
        <meta name="geo.placename" content="Warrington, Cheshire" />
        <meta name="geo.position" content="53.3897;-2.5973" />
        <meta name="ICBM" content="53.3897, -2.5973" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');`,
            }}
          />
        )}
      </head>
      <body className="font-sans bg-brand-black text-brand-white antialiased">
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}

        {children}

        <ToasterComponent />

        {process.env.NEXT_PUBLIC_GA4_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA4_ID}', {
                  page_path: window.location.pathname,
                  anonymize_ip: true
                });
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
