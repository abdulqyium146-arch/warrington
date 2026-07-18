const BASE_URL = 'https://warringtoncardetailing.co.uk';
const BUSINESS_ID = `${BASE_URL}/#business`;

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'AutoBodyShop'],
  '@id': BUSINESS_ID,
  name: 'Car Ceramic Coating and detailing warrington0',
  alternateName: 'Car Ceramic Coating and detailing warrington0 Car Detailing',
  description:
    'Professional car detailing services in Warrington, Cheshire. Specialising in ceramic coating, machine polishing, paint correction, interior detailing and headlight restoration at our dedicated WA5 unit.',
  url: BASE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${BASE_URL}/logo.jpg`,
    width: 400,
    height: 100,
  },
  image: `${BASE_URL}/hero-bg.jpg`,
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
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+44 7375 759686',
    contactType: 'customer service',
    areaServed: 'GB',
    availableLanguage: 'English',
  },
  telephone: '+44 7375 759686',
  email: 'info@wcdcardetailing.co.uk',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Warrington' },
    { '@type': 'City', name: 'Runcorn' },
    { '@type': 'City', name: 'Widnes' },
    { '@type': 'City', name: 'St Helens' },
    { '@type': 'City', name: 'Northwich' },
    { '@type': 'City', name: 'Knutsford' },
    { '@type': 'City', name: 'Wigan' },
    { '@type': 'City', name: 'Sale' },
    { '@type': 'AdministrativeArea', name: 'Cheshire' },
    { '@type': 'AdministrativeArea', name: 'North West England' },
  ],
  sameAs: [
    'https://www.facebook.com/WCDCarDetailing',
    'https://www.instagram.com/WCDCarDetailing',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Car Detailing & Paint Protection Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Car Detailing Warrington',
          description: 'Professional full car detailing in Warrington from £80. Exterior and interior.',
        },
        price: '80',
        priceCurrency: 'GBP',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Ceramic Coating Warrington',
          description: 'Professional ceramic coating in Warrington from £250. Gtechniq and CarPro accredited.',
        },
        price: '250',
        priceCurrency: 'GBP',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Machine Polishing Warrington',
          description: 'Multi-stage machine polishing and paint correction in Warrington from £150.',
        },
        price: '150',
        priceCurrency: 'GBP',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Interior Car Detailing Warrington',
          description: 'Deep interior car detailing in Warrington from £80.',
        },
        price: '80',
        priceCurrency: 'GBP',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Headlight Restoration Warrington',
          description: 'Professional headlight restoration in Warrington from £50.',
        },
        price: '50',
        priceCurrency: 'GBP',
      },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '47',
    bestRating: '5',
    worstRating: '1',
  },
};

export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

export const breadcrumbSchema = (
  items: { name: string; url: string }[]
) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const imageGallerySchema = (
  images: { url: string; caption: string; name: string }[]
) => ({
  '@context': 'https://schema.org',
  '@type': 'ImageGallery',
  name: 'Car Detailing & Valeting Gallery — Warrington',
  description:
    'Before and after photos of professional car detailing, ceramic coating, machine polishing, and interior detailing services in Warrington.',
  url: 'https://warringtoncardetailing.co.uk/gallery',
  author: {
    '@type': 'Organization',
    name: 'Car Ceramic Coating and detailing warrington0',
    url: 'https://warringtoncardetailing.co.uk',
  },
  image: images.map((img) => ({
    '@type': 'ImageObject',
    url: img.url,
    name: img.name,
    caption: img.caption,
    contentUrl: img.url,
    creditText: 'Car Ceramic Coating and detailing warrington0',
    acquireLicensePage: 'https://warringtoncardetailing.co.uk/gallery',
  })),
});

export const serviceSchema = (
  name: string,
  description: string,
  url: string,
  priceFrom?: string
) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${url}#service`,
  name,
  serviceType: name,
  description,
  url,
  provider: {
    '@type': 'AutoBodyShop',
    '@id': BUSINESS_ID,
    name: 'Car Ceramic Coating and detailing warrington0',
    telephone: '+44 7375 759686',
    address: {
      '@type': 'PostalAddress',
      streetAddress: "Unit 1 Fairclough Mill, Atherton's Quay",
      addressLocality: 'Warrington',
      addressRegion: 'Cheshire',
      postalCode: 'WA5 1AH',
      addressCountry: 'GB',
    },
  },
  areaServed: [
    { '@type': 'City', name: 'Warrington', '@id': 'https://www.wikidata.org/wiki/Q179537' },
    { '@type': 'City', name: 'Runcorn' },
    { '@type': 'City', name: 'Widnes' },
    { '@type': 'City', name: 'St Helens' },
    { '@type': 'City', name: 'Knutsford' },
    { '@type': 'AdministrativeArea', name: 'Cheshire' },
  ],
  ...(priceFrom && {
    offers: {
      '@type': 'Offer',
      priceCurrency: 'GBP',
      price: priceFrom,
      priceSpecification: {
        '@type': 'PriceSpecification',
        minPrice: priceFrom,
        priceCurrency: 'GBP',
        valueAddedTaxIncluded: true,
      },
      availability: 'https://schema.org/InStock',
      seller: { '@id': BUSINESS_ID },
    },
  }),
});

