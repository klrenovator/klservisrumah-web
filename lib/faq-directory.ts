import { servicesData } from "@/config/services-data";
import { getLocalizedService } from "@/lib/service-i18n";
import { problemPages } from "@/config/problem-data";
import { isRedirectedProblemSlug, problemPath } from "@/config/problem-canonical";
import { getLocalizedProblem } from "@/lib/problem-i18n";
import { problemFaqI18n } from "@/config/problem-faq-i18n";
import { getLocalizedArea, getLocalizedSuburb } from "@/lib/location-i18n";
import { localizeContentBody } from "@/lib/content-body-i18n";
import { faqTemplatesMs, faqTemplatesZh } from "@/config/content-body-i18n";
import { contentI18nMsFull, contentI18nZhFull } from "@/config/content-i18n";
import type { Locale } from "@/lib/i18n";
import { areaPages } from "@/config/area-data";
import { suburbPages } from "@/config/suburb-data";
import {
  clusterPages,
  guidePages,
  comparisonPages,
  maintenancePages,
  seasonalPages,
  commercialPages,
  residentialPages,
  brandPages,
  topPages
} from "@/config/content-data";

/**
 * Site-wide FAQ Directory
 * ------------------------
 * Every service, problem/diagnostic, coverage area, suburb, cluster, guide,
 * comparison, maintenance checklist, seasonal guide, commercial page,
 * residential page, brand guide and "top considerations" page carries its
 * own set of FAQs (with matching FAQPage schema on that page). This module
 * gathers all of them into one browsable, linkable index for `/faq` so a
 * visitor (or an AI crawler) can find every question the site answers from
 * a single place, then jump to the source page for full context.
 *
 * Kept server-side only (imported by the FAQ server components) so the
 * ~1,000-entry dataset never ships into a client JS bundle. Each locale hub
 * resolves the same complete directory before rendering static HTML with
 * native <details>/<summary> accordions.
 */

export type FaqEntry = {
  q: string;
  a: string;
  /** Path to the page where this question originates, for deep-linking back. */
  href: string;
  /** Human label for the source page (service name, suburb name, etc.) */
  source: string;
};

export type FaqCategory = {
  id: string;
  title: string;
  description: string;
  items: FaqEntry[];
};

/** De-duplicate by exact (question + answer) text within a single category. */
function dedupe(entries: FaqEntry[]): FaqEntry[] {
  const seen = new Set<string>();
  const out: FaqEntry[] = [];
  for (const entry of entries) {
    const key = `${entry.q}\u0000${entry.a}`;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(entry);
  }
  return out;
}

function buildDirectory(locale: Locale = "en"): FaqCategory[] {
  const categories: FaqCategory[] = [];
  const localize = locale !== "en";
  const localizedPageTitle = (page: (typeof clusterPages)[number]) =>
    localize ? ((locale === "ms" ? contentI18nMsFull[page.slug] : contentI18nZhFull[page.slug])?.title ?? page.title) : page.title;
  const localizedFallbackFaqs = (count: number, title: string) => {
    const templates = locale === "ms" ? faqTemplatesMs : faqTemplatesZh;
    return Array.from({ length: count }, (_, index) => {
      const template = templates[index % templates.length];
      return { q: template.q.replace("{topic}", title), a: template.a };
    });
  };
  const localizedGeneric = (page: (typeof clusterPages)[number]) => {
    if (!localize) return page.faqs;
    const faqs = localizeContentBody(page, locale, localizedPageTitle(page)).faqs;
    return faqs.some((faq, index) => faq.q !== page.faqs[index]?.q || faq.a !== page.faqs[index]?.a)
      ? faqs
      : localizedFallbackFaqs(page.faqs.length, localizedPageTitle(page));
  };
  const globalSeen = new Set<string>();

  const addCategory = (id: string, title: string, description: string, raw: FaqEntry[]) => {
    const deduped = dedupe(raw).filter((entry) => {
      const key = `${entry.q}\u0000${entry.a}`;
      if (globalSeen.has(key)) return false;
      globalSeen.add(key);
      return true;
    });
    if (deduped.length) categories.push({ id, title, description, items: deduped });
  };

  addCategory(
    "services",
    "Services",
    "Pricing, materials, process and warranty questions for every service we offer.",
    Object.values(servicesData).flatMap((service) => {
      const localized = localize ? getLocalizedService(service, locale) : service;
      // Localized hubs must deep-link to the localized service URL so the
      // crawl stays within the active language tree (MS/ZH service routes are
      // real indexable pages under /ms/services and /zh/services).
      const href = localize
        ? locale === "ms"
          ? `/ms/services/${service.slug}`
          : `/zh/services/${service.slug}`
        : `/services/${service.slug}`;
      return localized.faqs.map((faq) => ({ ...faq, href, source: localized.title }));
    })
  );

  addCategory(
    "problems",
    "Home Problems & Diagnostics",
    "Common symptoms Malaysian homeowners search for — causes, fixes and when to call a professional.",
    problemPages.filter((problem) => !isRedirectedProblemSlug(problem.slug)).flatMap((problem) => {
      const localized = localize ? getLocalizedProblem(problem, locale) : problem;
      // 34 problems carry no full native override in problemI18n; for those,
      // the translated fallback templates must not interpolate the raw ENGLISH
      // title into the localized hubs. problemFaqI18n supplies a native
      // display title (source label) and a grammar-correct topic phrase.
      const faqOverride = localize ? problemFaqI18n[problem.slug]?.[locale as "ms" | "zh"] : undefined;
      const sourceLabel = faqOverride?.title ?? localized.title;
      const faqs = localize && localized.faqs.every((faq, index) => faq.q === problem.faqs[index]?.q && faq.a === problem.faqs[index]?.a)
        ? localizedFallbackFaqs(problem.faqs.length, faqOverride?.topic ?? localized.title)
        : localized.faqs;
      return faqs.map((faq) => ({ ...faq, href: problemPath(problem.slug, locale), source: sourceLabel }));
    })
  );

  addCategory(
    "areas",
    "Coverage Areas",
    "Response times, neighbourhood coverage and local service questions for KL & Selangor.",
    areaPages.flatMap((area) => {
      const localized = localize ? getLocalizedArea(area, locale) : area;
      return localized.faqs.map((faq) => ({ ...faq, href: `/areas/${area.slug}`, source: localized.name }));
    })
  );

  addCategory(
    "suburbs",
    "Suburbs & Neighbourhoods",
    "Same-day availability, condo/JMB rules and pricing questions for individual suburbs.",
    suburbPages.flatMap((suburb) => {
      const localized = localize ? getLocalizedSuburb(suburb, locale) : suburb;
      return localized.faqs.map((faq) => ({ ...faq, href: `/suburbs/${suburb.slug}/painting`, source: localized.name }));
    })
  );

  addCategory(
    "clusters",
    "Service Deep-Dives",
    "Focused sub-topic guides within each service — interior painting, leak repair, ceiling installation and more.",
    clusterPages.flatMap((page) =>
      localizedGeneric(page).map((faq) => ({
        ...faq,
        href: page.relatedServiceSlug ? `/services/${page.relatedServiceSlug}/${page.slug}` : `/guides/${page.slug}`,
        source: localizedPageTitle(page)
      }))
    )
  );

  addCategory(
    "guides",
    "How-To Guides",
    "Practical guidance for choosing a contractor, comparing paint brands, and other decision-support topics.",
    guidePages.flatMap((page) => localizedGeneric(page).map((faq) => ({ ...faq, href: `/guides/${page.slug}`, source: localizedPageTitle(page) })))
  );

  addCategory(
    "comparisons",
    "Comparisons",
    "Side-by-side comparisons of materials and methods — PU grouting vs tile hacking, PVC vs copper pipes and more.",
    comparisonPages.flatMap((page) => localizedGeneric(page).map((faq) => ({ ...faq, href: `/compare/${page.slug}`, source: localizedPageTitle(page) })))
  );

  addCategory(
    "maintenance",
    "Maintenance Checklists",
    "Seasonal and routine maintenance schedules for condos, landed homes and rental properties.",
    maintenancePages.flatMap((page) =>
      localizedGeneric(page).map((faq) => ({ ...faq, href: `/guides/maintenance/${page.slug}`, source: localizedPageTitle(page) }))
    )
  );

  addCategory(
    "seasonal",
    "Seasonal Planning",
    "Monsoon prep, festive-season repaints and year-end renovation planning questions.",
    seasonalPages.flatMap((page) => localizedGeneric(page).map((faq) => ({ ...faq, href: `/seasonal/${page.slug}`, source: localizedPageTitle(page) })))
  );

  addCategory(
    "commercial",
    "Commercial Properties",
    "Office, retail and strata-facility scheduling and scope questions.",
    commercialPages.flatMap((page) => localizedGeneric(page).map((faq) => ({ ...faq, href: `/commercial/${page.slug}`, source: localizedPageTitle(page) })))
  );

  addCategory(
    "residential",
    "Residential Properties",
    "Condo, apartment, terrace and bungalow specific service questions.",
    residentialPages.flatMap((page) => localizedGeneric(page).map((faq) => ({ ...faq, href: `/residential/${page.slug}`, source: localizedPageTitle(page) })))
  );

  addCategory(
    "brands",
    "Brands & Materials",
    "Application questions for the paint, pipe, gypsum board and waterproofing brands we work with.",
    brandPages.flatMap((page) => localizedGeneric(page).map((faq) => ({ ...faq, href: `/brands/${page.slug}`, source: localizedPageTitle(page) })))
  );

  addCategory(
    "top",
    "Buying Considerations",
    "What to check before hiring a painter, plumber, ceiling or waterproofing contractor in KL & Selangor.",
    topPages.flatMap((page) => localizedGeneric(page).map((faq) => ({ ...faq, href: `/top/${page.slug}`, source: localizedPageTitle(page) })))
  );

  return categories;
}

export const faqDirectory: FaqCategory[] = buildDirectory("en");

/** Build the same complete directory with every FAQ resolved for a locale. */
export function getFaqDirectory(locale: Locale): FaqCategory[] {
  return locale === "en" ? faqDirectory : buildDirectory(locale);
}

export const faqDirectoryTotalCount = faqDirectory.reduce((sum, category) => sum + category.items.length, 0);
