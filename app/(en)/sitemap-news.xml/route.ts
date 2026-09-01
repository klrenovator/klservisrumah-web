import { blogPosts } from "@/config/blog-data";
import { getLocalizedBlogPost } from "@/config/blog-i18n";

/**
 * Audit P3-16 — Google News sitemap.
 *
 * Google News sitemaps may only include articles published within the **last
 * 48 hours**; an item older than that window is ignored at best and treated as
 * a freshness signal against the site at worst. The version before this
 * rewrite was `force-static` and listed all 216 blog posts (spread across ~54
 * dates, none inside 48h of any crawl) with EN-only titles.
 *
 * This version:
 *   - emits only posts whose publication date is inside the 48-hour Google
 *     News window **as of build time** — this site ships content exclusively
 *     through rebuilds (everything is SSG; there is no runtime content path),
 *     so the build-time window is exactly when a post becomes visible anyway;
 *   - returns a valid **empty** `<urlset>` when nothing is fresh — Google
 *     explicitly accepts an empty news sitemap, and this is the normal state
 *     for a site that publishes in batches;
 *   - emits the English, Bahasa Malaysia and 中文 versions of each fresh
 *     post with the correct `<news:language>` tag and localized title;
 *   - never includes stale posts, so the feed is permanently policy-valid
 *     without manual removal when content ages.
 *
 * Why static (force-static) rather than a dynamic route handler: the dynamic
 * version ran as a Vercel serverless function that bundled the entire blog
 * corpus (~3 MB generated JSON + the full MS/ZH article copies) and
 * intermittently failed with 500s / multi-second cold starts in production
 * (2026-09-01 live probes: `/sitemap-news.xml` returned 500 and timed out
 * repeatedly while every static route served instantly). A build-time static
 * feed has identical semantics for this site (see above) and zero runtime
 * failure surface — it is a plain static file on the CDN.
 */
export const dynamic = "force-static";

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
      // Served as a static file from the CDN; the 1-hour CDN freshness lets
      // news crawlers re-fetch the feed regularly while the file itself only
      // changes when a fresh post ships in a rebuild.
      "cache-control": "public, s-maxage=3600, stale-while-revalidate=600"
    }
  });
}
