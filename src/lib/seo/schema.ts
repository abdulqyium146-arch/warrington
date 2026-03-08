const BASE_URL = 'https://warringtoncardetailing.co.uk';
const BUSINESS_ID = `${BASE_URL}/#business`;

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
    name: service.name,
    description: service.description,
    url: service.url,
    provider: { '@id': BUSINESS_ID },
    areaServed: {
      '@type': 'City',
      name: 'Warrington',
      '@id': 'https://www.wikidata.org/wiki/Q179537',
    },
    hasOfferCatalog: {
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
    '@type': 'LocalBusiness',
    '@id': location.url,
    name: `WCD Car Detailing — ${location.name}`,
    description: location.description,
    url: location.url,
    telephone: '+447958752513',
    address: {
      '@type': 'PostalAddress',
      addressLocality: location.name,
      postalCode: location.postcode,
      addressCountry: 'GB',
    },
    parentOrganization: { '@id': BUSINESS_ID },
    areaServed: {
      '@type': 'City',
      name: location.name,
    },
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
      name: article.authorName || 'WCD Car Detailing',
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'WCD Car Detailing',
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/images/logo.png`,
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
export function howToSchema(steps: { name: string; text: string }[], title: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    step: steps.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: step.name,
      text: step.text,
    })),
    supply: [
      { '@type': 'HowToSupply', name: 'Professional-grade car detailing products' },
      { '@type': 'HowToSupply', name: 'Mobile detailing unit' },
      { '@type': 'HowToSupply', name: 'Machine polisher' },
      { '@type': 'HowToSupply', name: 'Clay bar kit' },
    ],
  };
}
