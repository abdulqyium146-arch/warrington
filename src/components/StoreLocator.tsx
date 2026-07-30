'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import Link from 'next/link';
import { PHONE, PHONE_DISPLAY, ADDRESS } from '@/lib/constants';

declare global {
  interface Window {
    CONFIGURATION: object;
  }
  namespace JSX {
    interface IntrinsicElements {
      'gmpx-api-loader': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        key?: string;
        'solution-channel'?: string;
      }, HTMLElement>;
      'gmpx-store-locator': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        'map-id'?: string;
      }, HTMLElement>;
    }
  }
}

const WCD_CONFIGURATION = {
  locations: [
    {
      title: 'Car Ceramic Coating and detailing warrington0',
      address1: 'Unit 1 Fairclough Mill, Atherton\'s Quay',
      address2: 'Warrington, WA5 1AH, UK',
      coords: { lat: 53.387248, lng: -2.6091053 },
      placeId: 'ChIJ1RCRQfEKekgRZID_YGHXPcM',
    },
  ],
  mapOptions: {
    center: { lat: 53.387248, lng: -2.6091053 },
    fullscreenControl: true,
    mapTypeControl: false,
    streetViewControl: true,
    zoom: 16,
    zoomControl: true,
    maxZoom: 19,
    mapId: '',
  },
  mapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? '',
  capabilities: {
    input: true,
    autocomplete: true,
    directions: true,
    distanceMatrix: true,
    details: true,
    actions: true,
  },
};

const CONFIG_JSON = JSON.stringify(WCD_CONFIGURATION);

export default function StoreLocator() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // IntersectionObserver: only mount the map widget when the section
    // enters the viewport. This defers the ~300 KB ECL module entirely
    // for users who never scroll this far.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.CONFIGURATION = WCD_CONFIGURATION;
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-brand-black">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8 text-center">
        <p className="section-subheading">Find Us</p>
        <h2 className="section-heading">Visit Our Warrington Unit</h2>
        <div className="gold-divider mb-4" />
        <p className="text-gray-400 max-w-xl mx-auto text-sm">
          Enter your postcode or town below to get directions and an estimated drive
          time to our unit at Fairclough Mill, Warrington WA5.
        </p>
      </div>

      {/* Info strip */}
      <div className="max-w-7xl mx-auto px-4 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              label: 'Our Address',
              value: ADDRESS,
              href: 'https://maps.google.com/?q=Unit+1+Fairclough+Mill+Warrington+WA5+1AH',
            },
            {
              label: 'Call Ahead',
              value: PHONE_DISPLAY,
              href: `tel:${PHONE}`,
            },
            {
              label: 'Opening Hours',
              value: 'Open 24 hours · 7 days a week',
              href: null,
            },
          ].map((item) => (
            <div key={item.label} className="flex items-start gap-3 bg-brand-darkgray border border-brand-gray/30 rounded-xl px-4 py-3">
              <div>
                <p className="text-xs text-brand-gold font-semibold uppercase tracking-widest mb-0.5">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="text-brand-white text-sm hover:text-brand-gold transition-colors font-medium">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-brand-white text-sm font-medium">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Map — only rendered + scripted once the section enters the viewport */}
      {isVisible && (
        <>
          <script
            dangerouslySetInnerHTML={{ __html: `window.CONFIGURATION=${CONFIG_JSON};` }}
          />
          <Script
            src="https://ajax.googleapis.com/ajax/libs/@googlemaps/extended-component-library/0.6.11/index.min.js"
            type="module"
            strategy="lazyOnload"
          />
          <style>{`
            gmpx-store-locator {
              --gmpx-color-surface: #1a1a1a;
              --gmpx-color-on-surface: #f5f5f5;
              --gmpx-color-on-surface-variant: #9ca3af;
              --gmpx-color-primary: #c9a84c;
              --gmpx-color-outline: #374151;
              --gmpx-color-on-primary: #0a0a0a;
              --gmpx-font-family-base: 'Inter', sans-serif;
              --gmpx-font-family-headings: 'Montserrat', sans-serif;
              --gmpx-font-size-base: 14px;
              --gmpx-hours-color-open: #4ade80;
              --gmpx-rating-color: #c9a84c;
              --gmpx-rating-color-empty: #374151;
            }
            gmpx-store-locator::part(container) { border-radius: 0; }
          `}</style>
          <div className="w-full" style={{ height: '560px' }}>
            <gmpx-api-loader solution-channel="GMP_QB_locatorplus_v11_cABD" />
            <gmpx-store-locator map-id="DEMO_MAP_ID" />
          </div>
        </>
      )}

      {/* Placeholder shown until map becomes visible — reserves height, prevents CLS */}
      {!isVisible && (
        <div
          className="w-full bg-brand-darkgray border-y border-brand-gray/30"
          style={{ height: '560px' }}
          aria-hidden="true"
        />
      )}

      {/* Quick action buttons */}
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="https://maps.google.com/?q=Unit+1+Fairclough+Mill+Warrington+WA5+1AH&dirflg=d"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-center"
        >
          Get Directions on Google Maps
        </a>
        <a
          href={`https://wa.me/447482225323?text=${encodeURIComponent('Hi, I\'d like to get directions / book an appointment.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary text-center"
        >
          WhatsApp for Directions Help
        </a>
        <Link href="/get-a-quote" className="btn-secondary text-center">
          Book Online
        </Link>
      </div>
    </section>
  );
}

