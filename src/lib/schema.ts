export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'CarRepair',
  name: 'WCD Car Detailing Warrington',
  description:
    'Professional car detailing services in Warrington, including exterior, interior cleaning, ceramic coating, paint correction, and mobile valeting.',
  url: 'https://warringtoncardetailing.co.uk',
  logo: 'https://warringtoncardetailing.co.uk/logo.png',
  image: 'https://warringtoncardetailing.co.uk/og-image.jpg',
  priceRange: '££',
  currenciesAccepted: 'GBP',
  paymentAccepted: 'Cash, Credit Card, Bank Transfer',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Unit 1, Fairclough Mill',
    addressLocality: 'Warrington',
    addressRegion: 'Cheshire',
    addressPostalCode: 'WA5 1AH',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '53.3900',
    longitude: '-2.5970',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+44 7958 752513',
    contactType: 'Customer Service',
    areaServed: 'GB',
    availableLanguage: 'English',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '00:00',
    closes: '23:59',
  },
  sameAs: [
    'https://www.facebook.com/WCDCarDetailing',
    'https://www.instagram.com/WCDCarDetailing',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Car Detailing Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Full Car Detailing',
          description:
            'Complete interior and exterior car detailing service in Warrington',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Mobile Car Valeting',
          description: 'Professional mobile car valeting at your location in Warrington',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Ceramic Coating',
          description: 'Long-lasting ceramic coating protection for your vehicle',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Paint Correction',
          description:
            'Remove scratches, swirl marks and oxidation with professional paint correction',
        },
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
    'Before and after photos of professional car detailing, mobile valeting, ceramic coating, and paint correction services in Warrington.',
  url: 'https://warringtoncardetailing.co.uk/gallery',
  author: {
    '@type': 'Organization',
    name: 'WCD Car Detailing Warrington',
    url: 'https://warringtoncardetailing.co.uk',
  },
  image: images.map((img) => ({
    '@type': 'ImageObject',
    url: img.url,
    name: img.name,
    caption: img.caption,
    contentUrl: img.url,
    creditText: 'WCD Car Detailing Warrington',
    acquireLicensePage: 'https://warringtoncardetailing.co.uk/gallery',
  })),
});

export const serviceSchema = (
  name: string,
  description: string,
  url: string
) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: name,
  provider: {
    '@type': 'CarRepair',
    name: 'WCD Car Detailing Warrington',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Warrington',
      addressCountry: 'GB',
    },
  },
  areaServed: {
    '@type': 'City',
    name: 'Warrington',
  },
  description,
  url,
});
