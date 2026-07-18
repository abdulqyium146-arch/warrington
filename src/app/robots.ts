import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // ── All crawlers: allow everything except internal Next.js and API routes
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/'],
      },
      // ── Google — full access, explicit image crawling
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
      },
      // ── GoogleOther covers Google AI Overviews and Bard
      {
        userAgent: 'GoogleOther',
        allow: '/',
      },
      // ── Bing / Microsoft
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      // ── Apple (Maps, Siri, Spotlight)
      {
        userAgent: 'Applebot',
        allow: '/',
      },
      // ── DuckDuckGo
      {
        userAgent: 'DuckDuckBot',
        allow: '/',
      },
      // ── AI search engines — explicitly allow for LLM citation coverage
      { userAgent: 'GPTBot', allow: '/' },           // ChatGPT / OpenAI
      { userAgent: 'OAI-SearchBot', allow: '/' },    // OpenAI search
      { userAgent: 'anthropic-ai', allow: '/' },     // Anthropic
      { userAgent: 'ClaudeBot', allow: '/' },        // Claude
      { userAgent: 'PerplexityBot', allow: '/' },    // Perplexity
      { userAgent: 'Gemini', allow: '/' },           // Google Gemini
      { userAgent: 'Meta-ExternalAgent', allow: '/' }, // Meta AI
      { userAgent: 'cohere-ai', allow: '/' },        // Cohere
      // ── Social crawlers — for rich previews
      { userAgent: 'facebookexternalhit', allow: '/' },
      { userAgent: 'Twitterbot', allow: '/' },
      { userAgent: 'LinkedInBot', allow: '/' },
    ],
    sitemap: [
      'https://warringtoncardetailing.co.uk/sitemap.xml',
      'https://warringtoncardetailing.co.uk/sitemap-images.xml',
    ],
    host: 'https://warringtoncardetailing.co.uk',
  };
}
