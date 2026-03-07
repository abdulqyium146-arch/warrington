'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PHONE_DISPLAY, PHONE } from '@/lib/constants';
import MobileMenu from './MobileMenu';

const navLinks = [
  { href: '/', label: 'Home' },
  {
    href: '/car-detailing',
    label: 'Services',
    children: [
      { href: '/car-detailing', label: 'Car Detailing' },
      { href: '/mobile-car-valeting', label: 'Mobile Valeting' },
      { href: '/interior-detailing', label: 'Interior Detailing' },
      { href: '/paint-correction', label: 'Paint Correction' },
      { href: '/ceramic-coating', label: 'Ceramic Coating' },
      { href: '/headlight-restoration', label: 'Headlight Restoration' },
    ],
  },
  {
    href: '/car-detailing-warrington',
    label: 'Areas',
    children: [
      { href: '/car-detailing-warrington', label: 'Warrington' },
      { href: '/car-detailing-st-helens', label: 'St Helens' },
      { href: '/car-detailing-widnes', label: 'Widnes' },
      { href: '/car-detailing-runcorn', label: 'Runcorn' },
      { href: '/car-detailing-manchester', label: 'Manchester' },
      { href: '/car-detailing-liverpool', label: 'Liverpool' },
    ],
  },
  { href: '/gallery', label: 'Gallery' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-brand-black/95 backdrop-blur-md shadow-lg shadow-black/50'
            : 'bg-transparent'
        }`}
      >
        {/* Top bar — desktop only */}
        <div className="bg-brand-gold/10 border-b border-brand-gold/20 hidden md:block">
          <div className="max-w-7xl mx-auto px-4 py-1.5 flex items-center justify-between text-xs">
            <span className="text-gray-400">
              Warrington&apos;s Premier Car Detailing Specialists
            </span>
            <div className="flex items-center gap-6 text-gray-400">
              <span>Open 24 Hours, 7 Days a Week</span>
              <a
                href={`tel:${PHONE}`}
                className="text-brand-gold font-semibold hover:text-brand-gold-light transition-colors"
                aria-label={`Call WCD Car Detailing on ${PHONE_DISPLAY}`}
              >
                📞 {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>

        {/* Main nav */}
        <nav
          role="navigation"
          aria-label="Main navigation"
          className="max-w-7xl mx-auto px-4 py-3 md:py-4"
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              aria-label="WCD Car Detailing Warrington — Home"
              className="flex items-center gap-2 flex-shrink-0"
            >
              <div className="w-10 h-10 md:w-11 md:h-11 bg-gradient-gold rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-brand-black font-heading font-black text-lg md:text-xl">W</span>
              </div>
              <div className="leading-tight">
                <div className="font-heading font-black text-brand-white text-base md:text-lg tracking-tight">
                  WCD
                </div>
                <div className="text-brand-gold text-xs font-semibold tracking-widest">
                  DETAILING
                </div>
              </div>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.href} className="relative group">
                    <Link
                      href={link.href}
                      aria-current={pathname === link.href ? 'page' : undefined}
                      className={`nav-link flex items-center gap-1 px-3 py-2 ${
                        pathname.startsWith(link.href) && link.href !== '/'
                          ? 'text-brand-gold'
                          : ''
                      }`}
                    >
                      {link.label}
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Link>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-brand-darkgray border border-brand-gold/30 rounded-xl shadow-xl shadow-black/50 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          aria-current={pathname === child.href ? 'page' : undefined}
                          className="block px-4 py-2.5 text-sm text-gray-300 hover:text-brand-gold hover:bg-brand-gold/10 transition-all duration-200"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={pathname === link.href ? 'page' : undefined}
                    className={`nav-link px-3 py-2 ${
                      pathname === link.href ? 'text-brand-gold' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${PHONE}`}
                className="btn-primary text-sm py-2.5 px-4"
                aria-label={`Call WCD Car Detailing on ${PHONE_DISPLAY}`}
              >
                📞 {PHONE_DISPLAY}
              </a>
              <Link href="/get-a-quote" className="btn-secondary text-sm py-2.5 px-4">
                Free Quote
              </Link>
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden inline-flex flex-col items-center justify-center w-10 h-10 p-2 rounded-md hover:bg-brand-gray/30 transition-colors flex-shrink-0"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <div className="space-y-1.5 w-5 h-4 flex flex-col justify-between">
                <span
                  className={`block w-full h-0.5 bg-brand-gold rounded-full transition-all duration-300 origin-center ${
                    menuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span
                  className={`block w-full h-0.5 bg-brand-gold rounded-full transition-opacity duration-300 ${
                    menuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`block w-full h-0.5 bg-brand-gold rounded-full transition-all duration-300 origin-center ${
                    menuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} navLinks={navLinks} />

      {/* Mobile sticky bottom CTA bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-brand-black border-t border-brand-gray">
        <div className="flex items-center h-14">
          <a
            href={`tel:${PHONE}`}
            className="flex-1 flex items-center justify-center gap-2 bg-green-700 text-white font-semibold h-full text-sm"
            aria-label="Call WCD Car Detailing Warrington"
          >
            📞 Call Now
          </a>
          <Link
            href="/get-a-quote"
            className="flex-1 flex items-center justify-center bg-brand-gold text-brand-black font-semibold h-full text-sm"
          >
            Free Quote
          </Link>
        </div>
      </div>
    </>
  );
}
