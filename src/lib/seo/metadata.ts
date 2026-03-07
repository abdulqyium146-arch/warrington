import type { Metadata } from 'next';

const BASE_URL = 'https://www.warringtoncardetailing.co.uk';
const DEFAULT_OG_IMAGE = '/images/og-default.jpg';

interface PageSEO {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  noIndex?: boolean;
  ogType?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  keywords?: string[];
}

export function generatePageMetadata(seo: PageSEO): Metadata {
  const ogImageUrl = seo.ogImage || DEFAULT_OG_IMAGE;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,

    alternates: {
      canonical: seo.canonical,
    },

    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.canonical,
      siteName: 'WCD Car Detailing Warrington',
      locale: 'en_GB',
      type: seo.ogType || 'website',
      images: [
        {
          url: `${BASE_URL}${ogImageUrl}`,
          width: 1200,
          height: 630,
          alt: seo.title,
          type: 'image/jpeg',
        },
      ],
      ...(seo.publishedTime && { publishedTime: seo.publishedTime }),
      ...(seo.modifiedTime && { modifiedTime: seo.modifiedTime }),
    },

    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: [`${BASE_URL}${ogImageUrl}`],
    },

    robots: seo.noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
  };
}
