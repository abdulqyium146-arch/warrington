/** @type {import('next').NextConfig} */
const nextConfig = {
  // Prevent these server-only packages from being bundled for the Edge runtime
  serverExternalPackages: ['pg', '@prisma/client', 'bcryptjs', '@auth/prisma-adapter', '@prisma/adapter-pg'],

  experimental: {
    optimizePackageImports: ['next/font', 'recharts', 'lucide-react', 'date-fns'],
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(self)' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/images/(.*)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' }],
      },
      {
        source: '/gallery/(.*)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' }],
      },
      {
        source: '/:file(favicon|logo|hero-bg).(jpg|png|webp|avif)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' }],
      },
    ];
  },

  async redirects() {
    return [
      // Legacy URL cleanup
      { source: '/services', destination: '/car-detailing/', permanent: true },
      { source: '/valeting', destination: '/mobile-car-valeting/', permanent: true },
      { source: '/mobile-valeting', destination: '/mobile-car-valeting/', permanent: true },
      { source: '/ceramic', destination: '/ceramic-coating/', permanent: true },
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/home', destination: '/', permanent: true },

      // Keyword alias redirects — captures alternate URL patterns users/links may use
      { source: '/car-detailing-warrington', destination: '/car-detailing/', permanent: true },
      { source: '/car-detailing-warrington/', destination: '/car-detailing/', permanent: true },
      { source: '/car-wash-warrington', destination: '/car-detailing/', permanent: true },
      { source: '/car-wash-warrington/', destination: '/car-detailing/', permanent: true },
      { source: '/valeting-warrington', destination: '/car-detailing/', permanent: true },
      { source: '/valeting-warrington/', destination: '/car-detailing/', permanent: true },
      { source: '/machine-polishing-warrington', destination: '/paint-correction/', permanent: true },
      { source: '/machine-polishing-warrington/', destination: '/paint-correction/', permanent: true },
      { source: '/paint-correction-warrington', destination: '/paint-correction/', permanent: true },
      { source: '/paint-correction-warrington/', destination: '/paint-correction/', permanent: true },
      { source: '/swirl-removal-warrington', destination: '/paint-correction/', permanent: true },
      { source: '/swirl-removal-warrington/', destination: '/paint-correction/', permanent: true },
      { source: '/paint-protection-warrington', destination: '/ceramic-coating/', permanent: true },
      { source: '/paint-protection-warrington/', destination: '/ceramic-coating/', permanent: true },
      { source: '/interior-valeting-warrington', destination: '/interior-detailing/', permanent: true },
      { source: '/interior-valeting-warrington/', destination: '/interior-detailing/', permanent: true },
      { source: '/interior-clean-warrington', destination: '/interior-detailing/', permanent: true },
      { source: '/interior-clean-warrington/', destination: '/interior-detailing/', permanent: true },
      { source: '/headlight-polish-warrington', destination: '/headlight-restoration/', permanent: true },
      { source: '/headlight-polish-warrington/', destination: '/headlight-restoration/', permanent: true },
    ];
  },

  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [75, 85],
    minimumCacheTTL: 86400,
    dangerouslyAllowSVG: false,
  },

  compiler: {
    removeConsole: false,
  },

  trailingSlash: true,
  poweredByHeader: false,
  compress: true,
};

module.exports = nextConfig;
