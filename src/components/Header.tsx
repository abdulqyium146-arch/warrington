'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PHONE_DISPLAY, PHONE } from '@/lib/constants';
import MobileMenu from './MobileMenu';

const navLinks = [
  { href: '/', label: 'Home' },
  {
    href: '/car-detailing',
    label: 'Car Detailing',
    children: [
      { href: '/car-detailing', label: 'Full Detailing' },
      { href: '/interior-detailing', label: 'Interior Detailing' },
      { href: '/paint-correction', label: 'Paint Correction' },
      { href: '/ceramic-coating', label: 'Ceramic Coating' },
      { href: '/headlight-restoration', label: 'Headlight Restoration' },
    ],
  },
  { href: '/mobile-car-valeting', label: 'Mobile Valeting' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-brand-black/95 backdrop-blur-md shadow-lg shadow-black/50'
            : 'bg-transparent'
        }`}
      >
        {/* Top bar - Desktop only */}
        <div className="bg-brand-gold/10 border-b border-brand-gold/20 hidden md:block">
          <div className="max-w-7xl mx-auto px-4 py-1.5 flex flex-col md:flex-row items-center justify-between text-xs gap-2">
            <span className="text-gray-400 text-center md:text-left">
              🏆 Warrington&apos;s Premier Car Detailing Specialists
            </span>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 md:gap-6 text-gray-400">
              <span>Open 24 Hours, 7 Days a Week</span>
              <a
                href={`tel:${PHONE}`}
                className="text-brand-gold font-semibold hover:text-brand-gold-light transition-colors whitespace-nowrap"
              >
                📞 {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>

        {/* Main navigation bar */}
        <nav className="max-w-7xl mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
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

            {/* Desktop navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.href}
                    className="relative group"
                    onMouseEnter={() => setDropdownOpen(link.href)}
                    onMouseLeave={() => setDropdownOpen(null)}
                  >
                    <button className="nav-link flex items-center gap-1 px-3 py-2">
                      {link.label}
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Dropdown menu */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-brand-darkgray border border-brand-gold/30 rounded-xl shadow-xl shadow-black/50 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-gray-300 hover:text-brand-gold hover:bg-brand-gold/10 transition-all duration-200"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link key={link.href} href={link.href} className="nav-link px-3 py-2">
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* Right side: CTA + mobile toggle */}
            <div className="flex items-center gap-3 md:gap-4">
              <a
                href={`tel:${PHONE}`}
                className="hidden md:flex btn-primary text-sm py-2.5 px-4 flex-shrink-0"
              >
                📞 Book Now
              </a>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden inline-flex flex-col items-center justify-center w-10 h-10 p-2 rounded-md hover:bg-brand-gray/30 transition-colors flex-shrink-0"
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
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
          </div>
        </nav>
      </header>

      {/* Mobile Menu Component */}
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} navLinks={navLinks} />
    </>
  );
}
