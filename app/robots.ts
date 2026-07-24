import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const allowedBots = [
    "*",
    "Googlebot",
    "Bingbot",
    "Applebot",
    "GPTBot",
    "ClaudeBot",
    "PerplexityBot",
    "Google-Extended"
  ];

  return {
    rules: allowedBots.map((userAgent) => ({
      userAgent,
      allow: "/",
      disallow: ["/api/", "/_next/", "/admin/"]
    })),
    sitemap: "https://www.klservisrumah.my/sitemap.xml",
    host: "https://www.klservisrumah.my"
  };
}
