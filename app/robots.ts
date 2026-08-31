import { MetadataRoute } from "next";

/**
 * Explicit allow-list for every crawler that meaningfully drives traffic
 * or answer-engine surfaces (Google, Bing, Apple + all major LLM crawlers).
 * We keep /api and /_next blocked because they serve runtime-only endpoints.
 *
 * Audit P3-15: `/search` was disallowed here while `getWebsiteSchema()` emitted
 * a SearchAction targeting `/search?q={term}` on every page — Google's
 * sitelinks-searchbox eligibility (and AI-agent site search) fail against an
 * entry point the crawler cannot fetch. `/search` is now a crawlable,
 * server-rendered smart-finder tool page (indexable at its bare URL; query
 * variants carry noindex via metadata), so it is allowed for all bots.
 */
export default function robots(): MetadataRoute.Robots {
  const allowedBots = [
    "*",
    "Googlebot",
    "Googlebot-Image",
    "Googlebot-Mobile",
    "Googlebot-News",
    "Bingbot",
    "DuckDuckBot",
    "DuckAssistBot",
    "Applebot",
    "Applebot-Extended",
    // AI / answer-engine crawlers
    "GPTBot",
    "OAI-SearchBot",
    "ChatGPT-User",
    "ClaudeBot",
    "anthropic-ai",
    "Claude-Web",
    "PerplexityBot",
    "Perplexity-User",
    "Google-Extended",
    "Amazonbot",
    "cohere-ai",
    "CCBot",
    "YouBot",
    "Bytespider",
    "meta-externalagent",
    "Meta-ExternalAgent"
  ];

  return {
    rules: allowedBots.map((userAgent) => ({
      userAgent,
      allow: "/",
      // P3-15: /search is intentionally allowed — see note above.
      disallow: ["/api/", "/_next/"]
    })),
    sitemap: [
      "https://www.klservisrumah.my/sitemap.xml",
      "https://www.klservisrumah.my/sitemap-news.xml"
    ],
    host: "https://www.klservisrumah.my"
  };
}
