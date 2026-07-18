# Example Page Implementations

This file shows how to use the new components and styling improvements in your existing pages.

## Updated Homepage with Improved Components

Save this as a reference for updating `src/app/page.tsx`:

```typescript
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ServiceCard from '@/components/ServiceCard';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import FAQAccordion from '@/components/FAQAccordion';
import JsonLd from '@/components/JsonLd';
import { faqSchema } from '@/lib/schema';
import { SERVICES, PHONE, PHONE_DISPLAY, AREAS_SERVED } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Car Detailing Warrington | Professional Valeting & Ceramic Coating',
  description:
    'Top-rated car detailing in Warrington. Professional mobile valeting, ceramic coating, paint correction & interior detailing. Open 24/7.',
  alternates: { canonical: 'https://warringtoncardetailing.co.uk' },
};

const faqs = [
  {
    question: 'What is the difference between car detailing and car valeting?',
    answer:
      'Car valeting focuses on cleaning and presenting your vehicle, while car detailing is a deeper, more thorough process that includes paint correction, ceramic coating, engine bay cleaning, and restoring every surface to like-new condition.',
  },
  {
    question: 'Do you offer mobile car detailing in Warrington?',
    answer:
      'Yes! Our mobile car valeting service covers Warrington and all surrounding areas including St Helens, Widnes, Runcorn, and beyond. We come to your home or workplace with all equipment needed.',
  },
  {
    question: 'How long does a full car detail take?',
    answer:
      'A full car detail typically takes 4–8 hours depending on the vehicle size and condition. Paint correction and ceramic coating can take 1–2 days for best results.',
  },
  {
    question: 'How much does car detailing cost in Warrington?',
    answer:
      'Prices vary by service and vehicle size. We offer free no-obligation quotes. Contact us on 07958 752513 or fill in our online form for a personalised price.',
  },
  {
    question: 'How often should I get my car detailed?',
    answer:
      'For most drivers we recommend a full detail every 6–12 months, with a maintenance wash every 4–6 weeks. Ceramic coated vehicles require less frequent full details.',
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />

      {/* ── HERO SECTION ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24">
        {/* Background image */}
        <Image
          src="/hero-bg.jpg"
          alt="Professional car detailing in Warrington"
          fill
          priority
          quality={85}
          className="object-cover object-center"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/65" aria-hidden="true" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 60% 50%, rgba(201,168,76,0.12) 0%, transparent 70%)' }}
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-32 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/30 rounded-full px-4 py-1.5 text-brand-gold text-xs md:text-sm font-semibold mb-6 md:mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse-slow" />
            Warrington&apos;s #1 Rated Car Detailing
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black text-brand-white leading-tight mb-4 md:mb-6">
            Professional{' '}
            <span className="text-gradient-gold">Car Detailing</span>
            <br className="hidden sm:block" />
            in Warrington
          </h1>

          {/* Subheading */}
          <p className="text-gray-300 text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed">
            From mobile car valeting to ceramic coating and full paint correction — we restore and protect your vehicle to showroom condition.
          </p>

          {/* CTAs - IMPROVED: Full width on mobile */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12">
            <a
              href={`tel:${PHONE}`}
              className="btn-primary text-base md:text-lg py-4 md:py-5 px-6 md:px-10 w-full sm:w-auto justify-center"
            >
              📞 Book Now — {PHONE_DISPLAY}
            </a>
            <Link
              href="/contact"
              className="btn-secondary text-base md:text-lg py-4 md:py-5 px-6 md:px-10 w-full sm:w-auto justify-center"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-4 md:gap-6 justify-center text-xs md:text-sm text-gray-300 mt-8">
            <div className="flex items-center gap-2">
              <span>✓ 5-Star Rated</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✓ 24/7 Available</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✓ Mobile Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES SECTION ── */}
      <section className="py-12 md:py-16 lg:py-20 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <p className="section-subheading">What We Offer</p>
            <h2 className="section-heading">Professional Car Detailing Services</h2>
          </div>

          {/* IMPROVED: Better responsive grid with 3-column layout on desktop, 2 on tablet, 1 on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                slug={service.slug}
                shortDesc={service.shortDesc}
                icon={service.icon}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US SECTION ── */}
      <section className="py-12 md:py-16 lg:py-20 bg-brand-darkgray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: '⭐', title: '5-Star Rated', desc: 'Trusted by hundreds of customers' },
              { icon: '🚗', title: 'Mobile Service', desc: 'We come to your location' },
              { icon: '💰', title: 'Best Prices', desc: 'No hidden fees or surprises' },
              { icon: '🏆', title: 'Expert Team', desc: 'Trained detailing professionals' },
            ].map((item, i) => (
              <div key={i} className="card-dark p-6 md:p-8 text-center">
                <div className="text-4xl md:text-5xl mb-4">{item.icon}</div>
                <h3 className="font-heading font-bold text-lg md:text-xl mb-2 text-brand-white">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS SECTION ── */}
      <section className="py-12 md:py-16 lg:py-20 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <TestimonialsSection />
        </div>
      </section>

      {/* ── FAQ SECTION - NEW COMPONENT ── */}
      <section className="py-12 md:py-16 lg:py-20 bg-brand-darkgray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FAQAccordion items={faqs} title="Your Questions Answered" />
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <CTASection
        title="Ready to Book Your Car Detailing?"
        subtitle="Professional car detailing and mobile valeting across Warrington and the North West. Get in touch today for a free quote."
      />
    </>
  );
}
```

---

## Updated Gallery Page with ResponsiveGallery Component

Example for `src/app/gallery/page.tsx`:

```typescript
import type { Metadata } from 'next';
import ResponsiveGallery from '@/components/ResponsiveGallery';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Before & After Gallery | Car Detailing Warrington',
  description:
    'See the stunning before and after results of our professional car detailing work in Warrington. Paint correction, ceramic coating, and full detailing transformations.',
};

// Example gallery data - replace with your actual images
const galleryImages = [
  {
    id: 'detail-1',
    src: '/gallery/detail-1.jpg',
    alt: 'Full exterior car detail',
    category: 'Full Detail',
  },
  {
    id: 'paint-1',
    src: '/gallery/paint-after-1.jpg',
    alt: 'Paint correction results',
    beforeSrc: '/gallery/paint-before-1.jpg',
    category: 'Paint Correction',
  },
  {
    id: 'ceramic-1',
    src: '/gallery/ceramic-1.jpg',
    alt: 'Ceramic coating finish',
    category: 'Ceramic Coating',
  },
  {
    id: 'interior-1',
    src: '/gallery/interior-1.jpg',
    alt: 'Interior detailing',
    category: 'Interior Detail',
  },
  {
    id: 'headlight-1',
    src: '/gallery/headlight-after.jpg',
    alt: 'Headlight restoration',
    beforeSrc: '/gallery/headlight-before.jpg',
    category: 'Headlight Restoration',
  },
  {
    id: 'valeting-1',
    src: '/gallery/valeting-1.jpg',
    alt: 'Mobile car valeting',
    category: 'Mobile Valeting',
  },
  // Add more images...
];

export default function GalleryPage() {
  return (
    <main>
      {/* Hero */}
      <section className="min-h-64 md:min-h-80 pt-20 md:pt-24 pb-12 md:pb-16 bg-brand-darkgray flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="section-subheading">Gallery</p>
          <h1 className="section-heading">Before & After Transformations</h1>
          <p className="text-gray-400 mt-4 text-base md:text-lg max-w-2xl mx-auto">
            See the results of our professional car detailing work across Warrington
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 md:py-16 lg:py-20 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ResponsiveGallery
            images={galleryImages}
            columns={{
              mobile: 1,
              tablet: 2,
              desktop: 3,
            }}
          />
        </div>
      </section>

      {/* CTA */}
      <CTASection title="Impress With Your Car's Appearance" />
    </main>
  );
}
```

---

## How to Update Tailwind Config (Already Improved)

Your `tailwind.config.ts` is well-structured. Here are the improvements made:

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#0a0a0a',
          darkgray: '#1a1a1a',
          gray: '#2d2d2d',
          gold: '#c9a84c',
          'gold-light': '#e8c96b',
          'gold-dark': '#a8872d',
          white: '#f5f5f5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #c9a84c 0%, #e8c96b 50%, #a8872d 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      // NEW: Add responsive spacing improvements
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## Component Usage Summary

### In Your Pages

```tsx
// Import components at top of your page file
import Header from '@/components/Header';
import ServiceCard from '@/components/ServiceCard';
import CTASection from '@/components/CTASection';
import ResponsiveGallery from '@/components/ResponsiveGallery';
import FAQAccordion from '@/components/FAQAccordion';
import MobileMenu from '@/components/MobileMenu'; // Auto-used in Header

// Use in your JSX
<Section className="py-12 md:py-16 lg:py-20 bg-brand-black">
  <ResponsiveGallery images={images} />
</Section>

<FAQAccordion items={faqs} />

<CTASection title="Your Custom Title" />
```

---

## Mobile Testing Tips

### iOS Safari Specific Testing
- Test with actual devices or use BrowserStack
- Check safe areas for notches/home indicators
- Test with keyboard in Web Developer Mode

### Android Chrome Testing
- Test landscape and portrait modes
- Check with 100% zoom and zoomed views
- Verify touch targets (44x44px minimum)

### Viewport Testing
```html
<!-- Ensure this is in your layout.tsx -->
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

### DevTools Quick Check
```javascript
// Run in console on mobile viewport:
// Checks if buttons are accessible
document.querySelectorAll('button').forEach(btn => {
  const rect = btn.getBoundingClientRect();
  if (rect.width < 44 || rect.height < 44) {
    console.warn('Small button:', btn);
  }
});
```

---

Generated: March 5, 2026
