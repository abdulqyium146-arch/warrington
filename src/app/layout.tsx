import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { localBusinessSchema } from '@/lib/schema';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Professional Car Detailing & Mobile Valeting`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Top-rated car detailing services in Warrington. We specialise in paint correction, ceramic coating, mobile valeting, interior detailing and more. Book now!',
  keywords: [
    'car detailing Warrington',
    'mobile car valeting Warrington',
    'ceramic coating Warrington',
    'paint correction Warrington',
    'car valeting Warrington',
    'interior car detailing',
    'exterior car detailing',
    'WCD car detailing',
    'mobile detailing Warrington',
    'professional car cleaning Warrington',
  ],
  authors: [{ name: 'WCD Car Detailing Warrington' }],
  creator: 'WCD Car Detailing Warrington',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Professional Car Detailing & Mobile Valeting`,
    description:
      'Top-rated car detailing in Warrington. Paint correction, ceramic coating, mobile valeting. Book now!',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'WCD Car Detailing Warrington — Professional Car Detailing Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Car Detailing Warrington`,
    description: 'Professional car detailing & mobile valeting in Warrington.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual code from Google Search Console
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: '/favicon.jpg',
    shortcut: '/favicon.jpg',
    apple: '/favicon.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <head>
        <JsonLd data={localBusinessSchema} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');`,
          }}
        />
      </head>
      <body>
        {/* GTM noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
