import type { Metadata, Viewport } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

// ── FONTS via next/font — no layout shift, no extra request, no @import needed
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

// ── SITE-WIDE DEFAULT METADATA
export const metadata: Metadata = {
  metadataBase: new URL('https://warringtoncardetailing.co.uk'),

  title: {
    default: 'WCD Car Detailing Warrington | Mobile Valeting | 5★ Rated',
    template: '%s | WCD Car Detailing Warrington',
  },

  description:
    "Warrington's #1 car detailing & mobile valeting specialists. Ceramic coating, paint correction & full valet. Open 24/7. Call 07958 752513 for a free quote.",

  keywords: [
    'car detailing Warrington',
    'mobile car valeting Warrington',
    'ceramic coating Warrington',
    'paint correction Warrington',
    'mobile valeting WA5',
    'car detailing near me Warrington',
    'professional car detailing Warrington',
    'interior car detailing Warrington',
    'headlight restoration Warrington',
  ],

  authors: [{ name: 'WCD Car Detailing', url: 'https://warringtoncardetailing.co.uk' }],
  creator: 'WCD Car Detailing',
  publisher: 'WCD Car Detailing',

  alternates: {
    canonical: 'https://warringtoncardetailing.co.uk/',
  },

  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://warringtoncardetailing.co.uk/',
    siteName: 'WCD Car Detailing Warrington',
    title: 'WCD Car Detailing Warrington | Mobile Valeting | 5★ Rated',
    description:
      "Warrington's #1 car detailing & mobile valeting. Ceramic coating, paint correction & full valet. Open 24/7. Free quote: 07958 752513.",
    images: [
      {
        url: '/hero-bg.jpg',
        width: 1200,
        height: 630,
        alt: 'WCD Car Detailing Warrington — Professional Car Detailing and Mobile Valeting',
        type: 'image/jpeg',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'WCD Car Detailing Warrington | Mobile Valeting | 5★ Rated',
    description:
      "Warrington's #1 car detailing & mobile valeting. Open 24/7. Free quote: 07958 752513.",
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

  ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION && {
    verification: {
      google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
      ...(process.env.NEXT_PUBLIC_BING_VERIFICATION && {
        other: { 'msvalidate.01': process.env.NEXT_PUBLIC_BING_VERIFICATION },
      }),
    },
  }),

  applicationName: 'WCD Car Detailing',
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

// ── GLOBAL SCHEMAS — injected on every page
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://warringtoncardetailing.co.uk/#organization',
  name: 'WCD Car Detailing',
  url: 'https://warringtoncardetailing.co.uk',
  logo: {
    '@type': 'ImageObject',
    url: 'https://warringtoncardetailing.co.uk/logo.jpg',
    width: 400,
    height: 100,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+447958752513',
    contactType: 'customer service',
    availableLanguage: 'English',
    hoursAvailable: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  },
  sameAs: [
    'https://www.facebook.com/wcdcardetailing',
    'https://www.instagram.com/wcdcardetailing',
  ],
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'AutoRepair'],
  '@id': 'https://warringtoncardetailing.co.uk/#business',
  name: 'WCD Car Detailing',
  alternateName: 'Warrington Car Detailing',
  description:
    "Warrington's premier car detailing and mobile valeting specialists. Professional ceramic coating, paint correction, interior detailing and mobile valet services across WA1–WA5 and the wider North West.",
  url: 'https://warringtoncardetailing.co.uk',
  telephone: '+447958752513',
  email: 'info@wcdcardetailing.co.uk',
  priceRange: '££',
  currenciesAccepted: 'GBP',
  paymentAccepted: 'Cash, Credit Card, Debit Card, Bank Transfer',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Unit 1, Fairclough Mill',
    addressLocality: 'Warrington',
    addressRegion: 'Cheshire',
    postalCode: 'WA5 1AH',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 53.39,
    longitude: -2.597,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '47',
    bestRating: '5',
    worstRating: '1',
  },
  areaServed: [
    { '@type': 'City', name: 'Warrington' },
    { '@type': 'City', name: 'St Helens' },
    { '@type': 'City', name: 'Widnes' },
    { '@type': 'City', name: 'Runcorn' },
    { '@type': 'City', name: 'Sale' },
    { '@type': 'City', name: 'Knutsford' },
    { '@type': 'City', name: 'Manchester' },
    { '@type': 'City', name: 'Liverpool' },
    { '@type': 'City', name: 'Chester' },
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://warringtoncardetailing.co.uk/#website',
  name: 'WCD Car Detailing Warrington',
  url: 'https://warringtoncardetailing.co.uk',
  publisher: { '@id': 'https://warringtoncardetailing.co.uk/#organization' },
  inLanguage: 'en-GB',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-GB"
      className={`${inter.variable} ${montserrat.variable}`}
    >
      <head>
        <link rel="dns-prefetch" href="//maps.googleapis.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="preconnect" href="https://maps.googleapis.com" crossOrigin="anonymous" />
        {/* Global JSON-LD */}
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

        {/* Google Tag Manager — set NEXT_PUBLIC_GTM_ID in .env.local */}
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
        {/* GTM noscript — only renders when GTM ID is set */}
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

        {/* Skip to main — accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-brand-gold focus:text-brand-black focus:px-4 focus:py-2 focus:rounded focus:font-bold"
        >
          Skip to main content
        </a>

        <Header />

        <main id="main-content" tabIndex={-1}>
          {children}
        </main>

        <Footer />

        {/* GA4 — set NEXT_PUBLIC_GA4_ID in .env.local */}
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
