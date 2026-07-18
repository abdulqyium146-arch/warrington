import Image from 'next/image';

interface OptimisedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
  caption?: string;
}

export default function OptimisedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  caption,
}: OptimisedImageProps) {
  if (caption) {
    return (
      <figure className="relative">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className={className}
          sizes={sizes}
          quality={85}
          style={{ width: '100%', height: 'auto' }}
        />
        <figcaption className="text-sm text-gray-400 mt-2 text-center">{caption}</figcaption>
      </figure>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={className}
      sizes={sizes}
      quality={85}
      style={{ width: '100%', height: 'auto' }}
    />
  );
}
