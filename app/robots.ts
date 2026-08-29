import { MetadataRoute } from "next";

/**
 * Explicit allow-list for every crawler that meaningfully drives traffic
 * or answer-engine surfaces (Google, Bing, Apple + all major LLM crawlers).
 * We keep /api, /_next and /search blocked because they either serve
 * runtime-only endpoints or expose internal tooling.
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
      disallow: ["/api/", "/_next/", "/search"]
    })),
    sitemap: [
      "https://www.klservisrumah.my/sitemap.xml",
      "https://www.klservisrumah.my/sitemap-news.xml"
    ],
    host: "https://www.klservisrumah.my"
  };
}
