// Type-only import: `MetadataRoute` is a type, and importing it as a value
// makes this module unloadable outside the Next.js bundler (bare Node throws
// "does not provide an export named 'MetadataRoute'"). Keeping it type-only
// lets scripts import the sitemap to verify it — see scripts/generate-ai-context.ts.
import type { MetadataRoute } from "next";
import { servicesData } from "@/config/services-data";
import { areaPages } from "@/config/area-data";
import { blogPosts } from "@/config/blog-data";
import { suburbPages } from "@/config/suburb-data";
import { problemPages } from "@/config/problem-data";
import { allGenericPages, clusterPages, maintenancePages } from "@/config/content-data";
import { toolsList } from "@/config/tools-data";
import { TOOLS_INDEX_PATH, toolLocaleUrls } from "@/config/tools-i18n";
import { ESTIMATE_INDEX_PATH, estimatePath, genericEstimateSlugs } from "@/config/estimate-links";
import { slugify } from "@/lib/utils";

const baseUrl = "https://www.klservisrumah.my";

// Stable lastModified date to prevent unnecessary crawl budget waste
const SITEMAP_LAST_MODIFIED = new Date("2026-07-25T00:00:00.000Z");

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
    { path: "/services", priority: 0.8 },
    { path: "/pricing", priority: 0.82 },
    { path: "/areas", priority: 0.8 },
    { path: "/blog", priority: 0.7 },
    { path: "/faq", priority: 0.7 },
    { path: "/contact", priority: 0.8 },
    { path: "/about", priority: 0.6 },
    { path: "/projects", priority: 0.7 },
    { path: "/problems", priority: 0.75 },
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
    // Shareable per-service estimator links (`/estimate/<slug>`). Only the
    // hub and the pages that actually render here are listed — the six
    // dedicated-tool services 301-redirect to `/tools/*` at the middleware,
    // and a sitemap must never advertise a redirect.
    { path: ESTIMATE_INDEX_PATH, priority: 0.74 },
    ...genericEstimateSlugs().map((slug) => ({ path: estimatePath(slug), priority: 0.62 }))
  ];

  const serviceRoutes: Entry[] = Object.values(servicesData).flatMap((service) => [
    { path: `/services/${service.slug}`, priority: 0.95 },
    { path: `/near-me/${service.slug}`, priority: 0.86 },
    { path: `/services/${service.slug}/cost`, priority: 0.88 },
    { path: `/services/${service.slug}/emergency`, priority: 0.86 },
    ...service.subServices.map((sub) => ({ path: `/services/${service.slug}/${slugify(sub.name)}`, priority: 0.9 }))
  ]);

  const clusterRoutes: Entry[] = clusterPages.map((page) => ({ path: `/services/${page.relatedServiceSlug}/${page.slug}`, priority: 0.82 }));
  const areaRoutes: Entry[] = areaPages.flatMap((area) => [
    { path: `/areas/${area.slug}`, priority: 0.85 },
    ...Object.keys(servicesData).flatMap((serviceSlug) => [
      { path: `/areas/${area.slug}/${serviceSlug}`, priority: 0.9 },
      { path: `/areas/${area.slug}/${serviceSlug}/near-me`, priority: 0.82 }
    ])
  ]);
  // Only list suburbs that do NOT have an `/areas` twin. The 37 overlapping
  // suburbs canonicalise to `/areas/<slug>/<service>` (see
  // `app/suburbs/[slug]/[serviceSlug]/page.tsx`), and a sitemap should never
  // advertise a URL that points its canonical somewhere else — that asks Google
  // to crawl 1,036 pages only to discard them.
  const areaSlugs = new Set(areaPages.map((area) => area.slug));
  const suburbRoutes: Entry[] = suburbPages
    .filter((suburb) => !areaSlugs.has(suburb.slug))
    .flatMap((suburb) => Object.keys(servicesData).map((serviceSlug) => ({ path: `/suburbs/${suburb.slug}/${serviceSlug}`, priority: 0.85 })));
  const problemRoutes: Entry[] = problemPages.map((problem) => ({ path: `/problems/${problem.slug}`, priority: 0.8 }));
  const blogRoutes: Entry[] = blogPosts.map((post) => ({ path: `/blog/${post.slug}`, priority: 0.7, changeFrequency: "monthly" }));

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
    ...genericRoutes,
    ...maintenanceRoutes
  ].map(entry);
}
