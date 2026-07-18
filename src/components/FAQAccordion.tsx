'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  title?: string;
}

export default function FAQAccordion({ items, title = 'Frequently Asked Questions' }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {title && <h2 className="section-heading mb-8 md:mb-12 text-center md:text-left">{title}</h2>}

      <div className="space-y-3 md:space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="group border border-brand-gold/20 rounded-lg md:rounded-xl overflow-hidden transition-all duration-300 hover:border-brand-gold/50"
          >
            {/* Accordion header */}
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full px-4 md:px-6 py-4 md:py-5 flex items-center justify-between gap-3 bg-brand-darkgray hover:bg-brand-gray/30 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-inset"
              aria-expanded={openIndex === index}
            >
              <h3 className="text-left text-base md:text-lg font-heading font-semibold text-brand-white group-hover:text-brand-gold transition-colors duration-200">
                {item.question}
              </h3>

              {/* Arrow icon */}
              <svg
                className={`w-5 h-5 md:w-6 md:h-6 flex-shrink-0 text-brand-gold transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Accordion content */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div className="px-4 md:px-6 py-3 md:py-4 bg-brand-black/50 border-t border-brand-gold/10">
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Schema.org markup for FAQs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: items.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
              },
            })),
          }),
        }}
      />
    </div>
  );
}
