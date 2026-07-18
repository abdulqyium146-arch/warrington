'use client';

import Link from 'next/link';
import { useState } from 'react';
import { PHONE, PHONE_DISPLAY } from '@/lib/constants';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: any[];
}

export default function MobileMenu({ isOpen, onClose, navLinks }: MobileMenuProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (href: string) => {
    setExpandedSection(expandedSection === href ? null : href);
  };

  return (
    <>
      {/* Mobile menu overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden top-20"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Slide-in menu */}
      <div
        className={`fixed top-20 left-0 right-0 bg-brand-darkgray border-b border-brand-gold/20 z-40 transform transition-all duration-300 lg:hidden overflow-y-auto max-h-[calc(100vh-80px)] ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <nav className="px-4 py-6 space-y-1">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.href}>
                <button
                  onClick={() => toggleSection(link.href)}
                  className="w-full flex items-center justify-between py-3 px-4 text-gray-300 hover:text-brand-gold hover:bg-brand-gray/50 rounded-lg transition-colors font-medium"
                >
                  {link.label}
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${
                      expandedSection === link.href ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown items */}
                {expandedSection === link.href && (
                  <div className="bg-brand-black/50 rounded-lg mt-1 overflow-hidden">
                    {link.children.map((child: any) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={onClose}
                        className="block px-6 py-2.5 text-sm text-gray-400 hover:text-brand-gold hover:bg-brand-gray/50 transition-colors border-l-2 border-transparent hover:border-brand-gold"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="block py-3 px-4 text-gray-300 hover:text-brand-gold hover:bg-brand-gray/50 rounded-lg transition-colors font-medium"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile menu CTA section */}
        <div className="border-t border-brand-gold/20 px-4 py-6 space-y-3">
          <a
            href={`tel:${PHONE}`}
            className="btn-primary w-full justify-center text-base py-3"
          >
            📞 Call {PHONE_DISPLAY}
          </a>
          <Link
            href="/contact"
            onClick={onClose}
            className="btn-secondary w-full justify-center text-base py-3"
          >
            Get a Free Quote
          </Link>
          <p className="text-center text-gray-500 text-xs pt-2">
            Open 24 hours, 7 days a week
          </p>
        </div>
      </div>
    </>
  );
}
