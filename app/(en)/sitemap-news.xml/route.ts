import { blogPosts } from "@/config/blog-data";
import { getLocalizedBlogPost } from "@/config/blog-i18n";

/**
 * Audit P3-16 — Google News sitemap.
 *
 * Google News sitemaps may only include articles published within the **last
 * 48 hours**; an item older than that window is ignored at best and treated as
 * a freshness signal against the site at worst. The previous version was
 * `force-static` and listed all 216 blog posts (spread across ~54 dates, none
 * inside 48h of any crawl) with EN-only titles.
 *
 * This version:
 *   - is a **dynamic** feed (revalidated hourly) that emits only posts whose
 *     publication date is inside the 48-hour Google News window;
 *   - returns a valid **empty** `<urlset>` when nothing is fresh — Google
 *     explicitly accepts an empty news sitemap, and this is the normal state
 *     for a site that publishes in batches;
 *   - emits the English, Bahasa Malaysia and 中文 versions of each fresh
 *     post with the correct `<news:language>` tag and localized title;
 *   - never includes stale posts, so the feed is permanently policy-valid
 *     without manual removal when content ages.
 */
export const revalidate = 3600; // 1 hour — a post becomes eligible within an hour of publication
export const dynamic = "force-dynamic";

const NEWS_WINDOW_MS = 48 * 60 * 60 * 1000;

const LOCALES = [
  { code: "en", pathPrefix: "/blog/", title: (slug: string) => blogPosts.find((p) => p.slug === slug)?.title },
  {
    code: "ms",
    pathPrefix: "/ms/blog/",
    title: (slug: string) => getLocalizedBlogPost(slug, "ms")?.title
  },
  {
    code: "zh",
    pathPrefix: "/zh/bo-ke/",
    title: (slug: string) => getLocalizedBlogPost(slug, "zh")?.title
  }
] as const;

/** Escape text for safe inclusion in XML text nodes. */
function xmlEscape(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export function GET() {
  const baseUrl = "https://www.klservisrumah.my";
  const cutoff = Date.now() - NEWS_WINDOW_MS;

  // Google News keys freshness on the ORIGINAL publication date (datePublished),
  // not dateModified — use the post's published date for the 48h window.
  const fresh = blogPosts.filter((post) => {
    const published = new Date(post.date).getTime();
    return Number.isFinite(published) && published >= cutoff;
  });

  const urls = fresh
    .flatMap((post) =>
      LOCALES.map((locale) => {
        const localizedTitle = locale.title(post.slug);
        if (!localizedTitle) return null;
        return `  <url>
    <loc>${baseUrl}${locale.pathPrefix}${post.slug}</loc>
    <news:news>
      <news:publication><news:name>KL Servis Rumah Blog</news:name><news:language>${locale.code}</news:language></news:publication>
      <news:publication_date>${new Date(post.date).toISOString()}</news:publication_date>
      <news:title>${xmlEscape(localizedTitle)}</news:title>
    </news:news>
  </url>`;
      })
    )
    .filter((block): block is string => block !== null)
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      "content-type": "application/xml; charset=utf-8",
      // News crawlers re-fetch this feed regularly; keep the 48h window
      // accurate rather than serving a cached empty/stale copy.
      "cache-control": "public, s-maxage=3600, stale-while-revalidate=600"
    }
  });
}
