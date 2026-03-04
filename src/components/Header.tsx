'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PHONE_DISPLAY, PHONE } from '@/lib/constants';

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
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-black/95 backdrop-blur-md shadow-lg shadow-black/50'
          : 'bg-transparent'
      }`}
    >
      {/* Top bar */}
      <div className="bg-brand-gold/10 border-b border-brand-gold/20 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 py-1.5 flex items-center justify-between text-xs">
          <span className="text-gray-400">
            🏆 Warrington&apos;s Premier Car Detailing Specialists
          </span>
          <div className="flex items-center gap-6 text-gray-400">
            <span>Open 24 Hours, 7 Days a Week</span>
            <a
              href={`tel:${PHONE}`}
              className="text-brand-gold font-semibold hover:text-brand-gold-light transition-colors"
            >
              📞 {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.jpg"
              alt="WCD Car Detailing Warrington Logo"
              width={44}
              height={44}
              className="rounded-lg object-cover"
              priority
            />
            <div className="leading-tight">
              <div className="font-heading font-black text-brand-white text-lg tracking-tight">
                WCD
              </div>
              <div className="text-brand-gold text-xs font-semibold tracking-widest">
                CAR DETAILING
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button className="nav-link flex items-center gap-1">
                    {link.label}
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-52 bg-brand-darkgray border border-brand-gray rounded-xl shadow-xl shadow-black/50 py-2 z-50">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-gray-300 hover:text-brand-gold hover:bg-brand-gray/50 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={link.href} href={link.href} className="nav-link">
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a href={`tel:${PHONE}`} className="hidden md:flex btn-primary text-sm py-2.5 px-4">
              Book Now
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-brand-white p-2"
              aria-label="Toggle menu"
            >
              <div className="space-y-1.5">
                <span
                  className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${
                    menuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-current transition-opacity duration-300 ${
                    menuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${
                    menuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden mt-4 border-t border-brand-gray pt-4 pb-2 space-y-1">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2.5 text-gray-300 hover:text-brand-gold hover:bg-brand-gray/30 rounded-lg transition-colors font-medium"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="ml-4 space-y-0.5">
                    {link.children.slice(1).map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMenuOpen(false)}
                        className="block px-3 py-2 text-sm text-gray-400 hover:text-brand-gold transition-colors"
                      >
                        → {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-brand-gray">
              <a href={`tel:${PHONE}`} className="btn-primary w-full text-center">
                📞 Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
