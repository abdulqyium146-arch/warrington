const BASE_URL = 'https://warringtoncardetailing.co.uk';
const BUSINESS_ID = `${BASE_URL}/#business`;
const LOGO_URL = `${BASE_URL}/logo.jpg`;

// ── BREADCRUMB
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ── SERVICE PAGE
export function serviceSchema(service: {
  name: string;
  description: string;
  url: string;
  price: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${service.url}#service`,
    name: service.name,
    serviceType: service.name,
    description: service.description,
    url: service.url,
    provider: {
      '@type': 'AutoBodyShop',
      '@id': BUSINESS_ID,
      name: 'Car Ceramic Coating and detailing warrington0',
    },
    areaServed: [
      { '@type': 'City', name: 'Warrington', '@id': 'https://www.wikidata.org/wiki/Q179537' },
      { '@type': 'City', name: 'Runcorn' },
      { '@type': 'City', name: 'Widnes' },
      { '@type': 'City', name: 'St Helens' },
      { '@type': 'City', name: 'Knutsford' },
      { '@type': 'AdministrativeArea', name: 'Cheshire' },
    ],
    offers: {
      '@type': 'Offer',
      price: service.price,
      priceCurrency: 'GBP',
      priceSpecification: {
        '@type': 'PriceSpecification',
        minPrice: service.price,
        priceCurrency: 'GBP',
        valueAddedTaxIncluded: true,
      },
      availability: 'https://schema.org/InStock',
      seller: { '@id': BUSINESS_ID },
    },
    ...(service.image && {
      image: {
        '@type': 'ImageObject',
        url: `${BASE_URL}${service.image}`,
      },
    }),
  };
}

// ── LOCATION PAGE
export function locationPageSchema(location: {
  name: string;
  url: string;
  description: string;
  postcode: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'AutoBodyShop'],
    '@id': `${location.url}#business-${location.name.toLowerCase().replace(/\s+/g, '-')}`,
    name: `Car Ceramic Coating and detailing warrington0`,
    description: location.description,
    url: location.url,
    telephone: '+44 7375 759686',
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
    parentOrganization: { '@id': BUSINESS_ID },
    areaServed: [
      { '@type': 'City', name: location.name },
      { '@type': 'City', name: 'Warrington' },
    ],
  };
}

// ── FAQ PAGE
export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
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
  };
}

// ── BLOG ARTICLE
export function articleSchema(article: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  image: string;
  authorName?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    url: article.url,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      '@type': 'Organization',
      name: article.authorName || 'Car Ceramic Coating and detailing warrington0',
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${BASE_URL}/#organization`,
      name: 'Car Ceramic Coating and detailing warrington0',
      logo: {
        '@type': 'ImageObject',
        url: LOGO_URL,
        width: 400,
        height: 100,
      },
    },
    image: {
      '@type': 'ImageObject',
      url: `${BASE_URL}${article.image}`,
      width: 1200,
      height: 630,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
    inLanguage: 'en-GB',
  };
}

// ── HOW-TO
export function howToSchema(steps: { name: string; text: string }[], title: string, description?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    ...(description && { description }),
    performer: { '@id': BUSINESS_ID },
    step: steps.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: step.name,
      text: step.text,
    })),
    tool: [
      { '@type': 'HowToTool', name: 'Dual-action machine polisher' },
      { '@type': 'HowToTool', name: 'Paint depth gauge' },
      { '@type': 'HowToTool', name: 'Clay bar decontamination kit' },
      { '@type': 'HowToTool', name: 'Professional detailing products (Koch Chemie, CarPro, Gtechniq)' },
    ],
  };
}

