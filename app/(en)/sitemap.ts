// Type-only import: `MetadataRoute` is a type, and importing it as a value
// makes this module unloadable outside the Next.js bundler (bare Node throws
// "does not provide an export named 'MetadataRoute'"). Keeping it type-only
// lets scripts import the sitemap to verify it — see scripts/generate-ai-context.ts.
import type { MetadataRoute } from "next";
import { servicesData } from "@/config/services-data";
import { areaPages } from "@/config/area-data";
import { blogPosts } from "@/config/blog-data";
import { blogI18n, localizedBlogPath } from "@/config/blog-i18n";
import { suburbPages } from "@/config/suburb-data";
import { hasAreaTwin } from "@/lib/bp1-consolidation";
import { problemLocaleUrls } from "@/config/problem-canonical";
import { indexableProblemPages } from "@/config/problem-index";
import { allGenericPages, clusterPages, maintenancePages } from "@/config/content-data";
import { toolsList } from "@/config/tools-data";
import { TOOLS_INDEX_PATH, toolLocaleUrls } from "@/config/tools-i18n";
import { slugify, DEFAULT_CONTENT_DATE } from "@/lib/utils";
import { hasSpecialtyLocaleContent } from "@/config/specialty-locale-content";

const baseUrl = "https://www.klservisrumah.my";

// Stable lastModified date, derived from the manually-maintained content
// release date (lib/utils.ts#DEFAULT_CONTENT_DATE) so the sitemap can never
// drift from the schema dateModified policy or predate newly-published pages
// (it did: /ms/services/* shipped 2026-08-07 with lastmod 2026-07-25).
// Deliberately NOT the build date: a daily-shifting lastmod churns crawl
// budget on pages that did not materially change.
const SITEMAP_LAST_MODIFIED = new Date(`${DEFAULT_CONTENT_DATE}T00:00:00.000Z`);

type Entry = {
  path: string;
  priority: number;
  changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"];
  /**
   * Real per-language URL cluster (the tools pages). When present, the entry's
   * hreflang points at the actual localised siblings instead of self-referencing.
   */
  languages?: { en: string; ms: string; zh: string };
};

function entry({ path, priority, changeFrequency = "weekly", languages }: Entry): MetadataRoute.Sitemap[number] {
  const cleanPath = path === "/" ? "" : path;
  const pageUrl = `${baseUrl}${cleanPath}`;
  // Self-referencing hreflang. Language switching is client-side, so all three
  // locales are served from this one URL. The previous /ms and /zh alternates
  // 301-redirected back here — and Google discards hreflang clusters whose
  // targets redirect, which silently invalidated the annotations sitewide.
  const langs = languages
    ? {
        "en-MY": `${baseUrl}${languages.en}`,
        "ms-MY": `${baseUrl}${languages.ms}`,
        "zh-MY": `${baseUrl}${languages.zh}`,
        "x-default": `${baseUrl}${languages.en}`
      }
    : {
        "en-MY": pageUrl,
        "ms-MY": pageUrl,
        "zh-MY": pageUrl,
        "x-default": pageUrl
      };
  return {
    url: pageUrl,
    lastModified: SITEMAP_LAST_MODIFIED,
    changeFrequency,
    priority,
    alternates: {
      languages: langs
    }
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: Entry[] = [
    { path: "/", priority: 1.0 },
    {
      path: "/services",
      priority: 0.8,
      languages: { en: "/services", ms: "/ms/services", zh: "/zh/services" },
    },
    { path: "/pricing", priority: 0.82 },
    { path: "/areas", priority: 0.8 },
    { path: "/blog", priority: 0.7 },
    { path: "/faq", priority: 0.7 },
    { path: "/contact", priority: 0.8 },
    { path: "/about", priority: 0.6 },
    { path: "/privacy", priority: 0.35, changeFrequency: "yearly", languages: { en: "/privacy", ms: "/ms/notis-privasi", zh: "/zh/yin-si-sheng-ming" } },
    { path: "/ms/notis-privasi", priority: 0.3, changeFrequency: "yearly", languages: { en: "/privacy", ms: "/ms/notis-privasi", zh: "/zh/yin-si-sheng-ming" } },
    { path: "/zh/yin-si-sheng-ming", priority: 0.3, changeFrequency: "yearly", languages: { en: "/privacy", ms: "/ms/notis-privasi", zh: "/zh/yin-si-sheng-ming" } },
    { path: "/terms", priority: 0.35, changeFrequency: "yearly", languages: { en: "/terms", ms: "/ms/terma", zh: "/zh/tiao-kuan" } },
    { path: "/ms/terma", priority: 0.3, changeFrequency: "yearly", languages: { en: "/terms", ms: "/ms/terma", zh: "/zh/tiao-kuan" } },
    { path: "/zh/tiao-kuan", priority: 0.3, changeFrequency: "yearly", languages: { en: "/terms", ms: "/ms/terma", zh: "/zh/tiao-kuan" } },
    { path: "/projects", priority: 0.7 },
    { path: "/problems", priority: 0.75, languages: { en: "/problems", ms: "/ms/problems", zh: "/zh/problems" } },
    { path: "/near-me", priority: 0.78 },
    { path: "/guides", priority: 0.74 },
    { path: "/guides/maintenance", priority: 0.7 },
    { path: "/compare", priority: 0.72 },
    { path: "/brands", priority: 0.66 },
    { path: "/top", priority: 0.66 },
    { path: "/answers", priority: 0.76 },
    { path: "/process", priority: 0.72 },
    { path: "/commercial", priority: 0.72 },
    { path: "/residential", priority: 0.72 },
    { path: "/seasonal", priority: 0.68 },
    // The free-tools cluster exists in three languages at three real URLs —
    // every member entry carries the full hreflang cluster so the annotations
    // resolve both ways (Google drops clusters that only link one way).
    {
      path: TOOLS_INDEX_PATH.en,
      priority: 0.8,
      languages: { en: TOOLS_INDEX_PATH.en, ms: TOOLS_INDEX_PATH.ms, zh: TOOLS_INDEX_PATH.zh }
    },
    { path: TOOLS_INDEX_PATH.ms, priority: 0.8, languages: { en: TOOLS_INDEX_PATH.en, ms: TOOLS_INDEX_PATH.ms, zh: TOOLS_INDEX_PATH.zh } },
    { path: TOOLS_INDEX_PATH.zh, priority: 0.8, languages: { en: TOOLS_INDEX_PATH.en, ms: TOOLS_INDEX_PATH.ms, zh: TOOLS_INDEX_PATH.zh } },
    // Derived from the tool registry so a new estimator is never missed.
    ...toolsList.flatMap((tool) => {
      const urls = toolLocaleUrls(tool.slug);
      return [
        { path: urls.en, priority: 0.82, languages: urls },
        { path: urls.ms, priority: 0.82, languages: urls },
        { path: urls.zh, priority: 0.82, languages: urls }
      ];
    }),
    // CF-4: `/estimate` + `/estimate/<slug>` are the owner's WhatsApp share
    // links — live and crawlable but NOINDEX (they are index-thin duplicates
    // of the tools, and the canonical money pages are `/services/<slug>/cost`).
    // A sitemap must never advertise a URL that answers with `noindex`.
  ];

  // The main service page is the head of a REAL three-URL hreflang cluster
  // (`/services/<slug>` + `/ms/services/<slug>` + `/zh/services/<slug>`, the
  // H3 pilot) — every member carries the full cluster so the annotations
  // resolve both ways. The /cost, /emergency and sub-service pages stay
  // English-only and keep self-referencing hreflang.
  const serviceRoutes: Entry[] = Object.values(servicesData).flatMap((service) => [
    {
      path: `/services/${service.slug}`,
      priority: 0.95,
      languages: {
        en: `/services/${service.slug}`,
        ms: `/ms/services/${service.slug}`,
        zh: `/zh/services/${service.slug}`,
      },
    },
    { path: `/ms/services/${service.slug}`, priority: 0.9, languages: { en: `/services/${service.slug}`, ms: `/ms/services/${service.slug}`, zh: `/zh/services/${service.slug}` } },
    { path: `/zh/services/${service.slug}`, priority: 0.9, languages: { en: `/services/${service.slug}`, ms: `/ms/services/${service.slug}`, zh: `/zh/services/${service.slug}` } },
    { path: `/near-me/${service.slug}`, priority: 0.86 },
    { path: `/services/${service.slug}/cost`, priority: 0.88 },
    { path: `/services/${service.slug}/emergency`, priority: 0.86 },
    ...service.subServices.map((sub) => {
      const subSlug = slugify(sub.name);
      // Priority tranche specialties have real MS/ZH twins — emit the full
      // three-URL hreflang cluster for EN + the two localized members.
      const hasLocale = hasSpecialtyLocaleContent(service.slug, subSlug, "ms");
      const languages = hasLocale
        ? {
            en: `/services/${service.slug}/${subSlug}`,
            ms: `/ms/services/${service.slug}/${subSlug}`,
            zh: `/zh/services/${service.slug}/${subSlug}`,
          }
        : undefined;
      return { path: `/services/${service.slug}/${subSlug}`, priority: 0.9, languages };
    }),
    // Localized members of the priority specialty hreflang clusters.
    ...service.subServices.flatMap((sub) => {
      const subSlug = slugify(sub.name);
      if (!hasSpecialtyLocaleContent(service.slug, subSlug, "ms")) return [];
      const languages = {
        en: `/services/${service.slug}/${subSlug}`,
        ms: `/ms/services/${service.slug}/${subSlug}`,
        zh: `/zh/services/${service.slug}/${subSlug}`,
      };
      return [
        { path: `/ms/services/${service.slug}/${subSlug}`, priority: 0.86, languages },
        { path: `/zh/services/${service.slug}/${subSlug}`, priority: 0.86, languages },
      ];
    }),
  ]);

  const clusterRoutes: Entry[] = clusterPages.map((page) => ({ path: `/services/${page.relatedServiceSlug}/${page.slug}`, priority: 0.82 }));
  // BP-1 phase 1: `/areas/<area>/<svc>/near-me` is gone. Those 1,073 URLs were
  // literal duplicates of their own parent (only the word "near" differed) and
  // are now 301-redirected to `/areas/<area>/<svc>` — see
  // `lib/bp1-consolidation.ts`. Listing them here would ask Google to crawl a
  // thousand pages that answer with a redirect.
  const areaRoutes: Entry[] = areaPages.flatMap((area) => [
    { path: `/areas/${area.slug}`, priority: 0.85 },
    ...Object.keys(servicesData).map((serviceSlug) => ({ path: `/areas/${area.slug}/${serviceSlug}`, priority: 0.9 }))
  ]);
  // Only list suburbs that do NOT have an `/areas` twin. The 37 overlapping
  // suburbs 301 to `/areas/<slug>/<service>` (BP-1 phase 1 — they are no longer
  // generated at all), and a sitemap should never advertise a URL that answers
  // with a redirect. `hasAreaTwin` is the same predicate the route's
  // `generateStaticParams` and the middleware redirect use, so the three can
  // never disagree.
  const suburbRoutes: Entry[] = suburbPages
    .filter((suburb) => !hasAreaTwin(suburb.slug))
    .flatMap((suburb) => Object.keys(servicesData).map((serviceSlug) => ({ path: `/suburbs/${suburb.slug}/${serviceSlug}`, priority: 0.85 })));
  const problemRoutes: Entry[] = indexableProblemPages().flatMap((problem) => {
    const languages = problemLocaleUrls(problem.slug);
    return [
      { path: languages.en, priority: 0.8, languages },
      { path: languages.ms, priority: 0.76, languages },
      { path: languages.zh, priority: 0.76, languages },
    ];
  });
  const blogRoutes: Entry[] = blogPosts.map((post) => ({ path: `/blog/${post.slug}`, priority: 0.7, changeFrequency: "monthly" }));

  // Locale blog and FAQ routes — only include posts that have full translations
  const localeBlogRoutes: Entry[] = [];
  for (const post of blogPosts) {
    const i18n = blogI18n[post.slug];
    if (i18n?.ms) localeBlogRoutes.push({ path: localizedBlogPath("ms", i18n.ms.slug), priority: 0.65, changeFrequency: "monthly" });
    if (i18n?.zh) localeBlogRoutes.push({ path: localizedBlogPath("zh", i18n.zh.slug), priority: 0.65, changeFrequency: "monthly" });
  }
  const localeFaqRoutes: Entry[] = [
    { path: "/ms/soalan-lazim", priority: 0.7 },
    { path: "/zh/chang-jian-wen-ti", priority: 0.7 },
    { path: "/ms/blog", priority: 0.65 },
    { path: "/zh/bo-ke", priority: 0.65 },
    // H3 pilot: the localized services directories are the hubs of the new
    // real MS/ZH service tree (the per-service pages are emitted above with
    // their full hreflang clusters).
    { path: "/ms/services", priority: 0.78, languages: { en: "/services", ms: "/ms/services", zh: "/zh/services" } },
    { path: "/zh/services", priority: 0.78, languages: { en: "/services", ms: "/ms/services", zh: "/zh/services" } },
    // Localized problem hubs. Every MS/ZH problem page breadcrumbs up to these,
    // and before they existed those crumbs pointed at a 404 (/ms/problems) and
    // a soft-404 (/zh/problems, served by the Chinese catch-all).
    { path: "/ms/problems", priority: 0.7, languages: { en: "/problems", ms: "/ms/problems", zh: "/zh/problems" } },
    { path: "/zh/problems", priority: 0.7, languages: { en: "/problems", ms: "/ms/problems", zh: "/zh/problems" } },
  ];

  const genericRoutes: Entry[] = allGenericPages
    .filter((page) => !clusterPages.some((cluster) => cluster.slug === page.slug) && !maintenancePages.some((maintenance) => maintenance.slug === page.slug))
    .map((page) => {
      if (page.category === "Comparison") return { path: `/compare/${page.slug}`, priority: 0.7 };
      if (page.category === "Seasonal") return { path: `/seasonal/${page.slug}`, priority: 0.65 };
      if (page.category === "Commercial") return { path: `/commercial/${page.slug}`, priority: 0.72 };
      if (page.category === "Residential") return { path: `/residential/${page.slug}`, priority: 0.72 };
      if (page.category === "Brand Guide") return { path: `/brands/${page.slug}`, priority: 0.66 };
      if (page.category === "Top Considerations") return { path: `/top/${page.slug}`, priority: 0.64 };
      if (page.category === "AI Answer Guide") return { path: `/answers/${page.slug}`, priority: 0.8 };
      if (page.category === "Process") return { path: `/process/${page.slug}`, priority: 0.74 };
      return { path: `/guides/${page.slug}`, priority: 0.7 };
    });
  const maintenanceRoutes: Entry[] = maintenancePages.map((page) => ({ path: `/guides/maintenance/${page.slug}`, priority: 0.68 }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...clusterRoutes,
    ...areaRoutes,
    ...suburbRoutes,
    ...problemRoutes,
    ...blogRoutes,
    ...localeBlogRoutes,
    ...localeFaqRoutes,
    ...genericRoutes,
    ...maintenanceRoutes
  ].map(entry);
}
