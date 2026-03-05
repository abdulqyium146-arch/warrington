'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  beforeSrc?: string;
  afterSrc?: string;
  category?: string;
}

interface ResponsiveGalleryProps {
  images: GalleryImage[];
  title?: string;
  columns?: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
}

export default function ResponsiveGallery({
  images,
  title,
  columns = { mobile: 1, tablet: 2, desktop: 3 },
}: ResponsiveGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showBefore, setShowBefore] = useState(false);

  const currentImage = images[currentIndex];

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset';
    setShowBefore(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setShowBefore(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setShowBefore(false);
  };

  // Keyboard navigation
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, images.length]);

  return (
    <>
      {/* Gallery Grid */}
      <div className="w-full">
        {title && (
          <h2 className="section-heading mb-8 md:mb-12 text-center md:text-left">{title}</h2>
        )}

        <div
          className={`grid gap-4 md:gap-6 lg:gap-8 grid-cols-${columns.mobile} md:grid-cols-${columns.tablet} lg:grid-cols-${columns.desktop}`}
        >
          {images.map((image, index) => (
            <button
              key={image.id}
              onClick={() => openLightbox(index)}
              className="group relative overflow-hidden rounded-lg md:rounded-xl h-48 md:h-56 lg:h-64 bg-brand-gray focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-brand-black transition-all"
              aria-label={`Open gallery image: ${image.alt}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />

              {/* Before/After label if applicable */}
              {image.beforeSrc && (
                <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-brand-gold text-brand-black text-xs md:text-sm font-bold px-3 py-1 md:px-4 md:py-2 rounded-full">
                  Before/After
                </div>
              )}

              {/* Category badge */}
              {image.category && (
                <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 bg-brand-black/70 text-brand-gold text-xs font-semibold px-3 py-1 md:px-4 md:py-2 rounded-full">
                  {image.category}
                </div>
              )}

              {/* Hover icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-brand-gold/90 rounded-full">
                  <svg
                    className="w-6 h-6 md:w-7 md:h-7 text-brand-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && currentImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center p-4 md:p-6"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Gallery lightbox"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 md:top-6 right-4 md:right-6 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-brand-gold/10 hover:bg-brand-gold/20 border border-brand-gold/30 rounded-full transition-all"
            aria-label="Close lightbox"
          >
            <svg className="w-6 h-6 md:w-7 md:h-7 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Main image container */}
          <div className="flex-1 flex items-center justify-center w-full max-h-[70vh] md:max-h-[80vh] my-6 md:my-8">
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 md:left-6 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-brand-gold/10 hover:bg-brand-gold/20 border border-brand-gold/30 rounded-full transition-all"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6 md:w-7 md:h-7 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Image */}
            <div className="relative w-full h-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
              <Image
                src={showBefore && currentImage.beforeSrc ? currentImage.beforeSrc : currentImage.src}
                alt={currentImage.alt}
                fill
                className="object-contain"
              />
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 md:right-6 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-brand-gold/10 hover:bg-brand-gold/20 border border-brand-gold/30 rounded-full transition-all"
              aria-label="Next image"
            >
              <svg className="w-6 h-6 md:w-7 md:h-7 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Info and controls */}
          <div className="w-full flex flex-col gap-4 md:gap-6">
            {/* Before/After toggle */}
            {currentImage.beforeSrc && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowBefore(!showBefore);
                }}
                className="btn-secondary w-full md:max-w-xs md:mx-auto justify-center text-sm md:text-base"
              >
                {showBefore ? 'View After' : 'View Before'}
              </button>
            )}

            {/* Counter and description */}
            <div className="text-center text-sm md:text-base">
              <p className="text-gray-300">
                {currentIndex + 1} of {images.length}
              </p>
              <p className="text-gray-400 text-xs md:text-sm mt-2">{currentImage.alt}</p>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3 md:gap-4 overflow-x-auto pb-2 justify-center">
              {images.map((img, index) => (
                <button
                  key={img.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(index);
                    setShowBefore(false);
                  }}
                  className={`flex-shrink-0 relative w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentIndex
                      ? 'border-brand-gold'
                      : 'border-brand-gold/30 hover:border-brand-gold/60'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                >
                  <Image src={img.src} alt={img.alt} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Keyboard help text */}
          <p className="text-xs text-gray-500 mt-4 md:mt-6 text-center">
            Use arrow keys to navigate • Press ESC to close
          </p>
        </div>
      )}
    </>
  );
}
