import { servicesData } from "@/config/services-data";
import { problemPages } from "@/config/problem-data";
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
 * Kept server-side only (imported by the `/faq` server component) so the
 * ~1,000-entry dataset never ships into a client JS bundle — the page
 * itself is rendered as static HTML with native <details>/<summary>
 * accordions, matching the CWV-safe pattern already used on service pages.
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

function buildDirectory(): FaqCategory[] {
  const categories: FaqCategory[] = [];
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
    Object.values(servicesData).flatMap((service) =>
      service.faqs.map((faq) => ({ ...faq, href: `/services/${service.slug}`, source: service.title }))
    )
  );

  addCategory(
    "problems",
    "Home Problems & Diagnostics",
    "Common symptoms Malaysian homeowners search for — causes, fixes and when to call a professional.",
    problemPages.flatMap((problem) =>
      problem.faqs.map((faq) => ({ ...faq, href: `/problems/${problem.slug}`, source: problem.title }))
    )
  );

  addCategory(
    "areas",
    "Coverage Areas",
    "Response times, neighbourhood coverage and local service questions for KL & Selangor.",
    areaPages.flatMap((area) =>
      area.faqs.map((faq) => ({ ...faq, href: `/areas/${area.slug}`, source: area.name }))
    )
  );

  addCategory(
    "suburbs",
    "Suburbs & Neighbourhoods",
    "Same-day availability, condo/JMB rules and pricing questions for individual suburbs.",
    suburbPages.flatMap((suburb) =>
      suburb.faqs.map((faq) => ({ ...faq, href: `/suburbs/${suburb.slug}/painting`, source: suburb.name }))
    )
  );

  addCategory(
    "clusters",
    "Service Deep-Dives",
    "Focused sub-topic guides within each service — interior painting, leak repair, ceiling installation and more.",
    clusterPages.flatMap((page) =>
      page.faqs.map((faq) => ({
        ...faq,
        href: page.relatedServiceSlug ? `/services/${page.relatedServiceSlug}/${page.slug}` : `/guides/${page.slug}`,
        source: page.title
      }))
    )
  );

  addCategory(
    "guides",
    "How-To Guides",
    "Practical guidance for choosing a contractor, comparing paint brands, and other decision-support topics.",
    guidePages.flatMap((page) => page.faqs.map((faq) => ({ ...faq, href: `/guides/${page.slug}`, source: page.title })))
  );

  addCategory(
    "comparisons",
    "Comparisons",
    "Side-by-side comparisons of materials and methods — PU grouting vs tile hacking, PVC vs copper pipes and more.",
    comparisonPages.flatMap((page) => page.faqs.map((faq) => ({ ...faq, href: `/compare/${page.slug}`, source: page.title })))
  );

  addCategory(
    "maintenance",
    "Maintenance Checklists",
    "Seasonal and routine maintenance schedules for condos, landed homes and rental properties.",
    maintenancePages.flatMap((page) =>
      page.faqs.map((faq) => ({ ...faq, href: `/guides/maintenance/${page.slug}`, source: page.title }))
    )
  );

  addCategory(
    "seasonal",
    "Seasonal Planning",
    "Monsoon prep, festive-season repaints and year-end renovation planning questions.",
    seasonalPages.flatMap((page) => page.faqs.map((faq) => ({ ...faq, href: `/seasonal/${page.slug}`, source: page.title })))
  );

  addCategory(
    "commercial",
    "Commercial Properties",
    "Office, retail and strata-facility scheduling and scope questions.",
    commercialPages.flatMap((page) => page.faqs.map((faq) => ({ ...faq, href: `/commercial/${page.slug}`, source: page.title })))
  );

  addCategory(
    "residential",
    "Residential Properties",
    "Condo, apartment, terrace and bungalow specific service questions.",
    residentialPages.flatMap((page) => page.faqs.map((faq) => ({ ...faq, href: `/residential/${page.slug}`, source: page.title })))
  );

  addCategory(
    "brands",
    "Brands & Materials",
    "Application questions for the paint, pipe, gypsum board and waterproofing brands we work with.",
    brandPages.flatMap((page) => page.faqs.map((faq) => ({ ...faq, href: `/brands/${page.slug}`, source: page.title })))
  );

  addCategory(
    "top",
    "Buying Considerations",
    "What to check before hiring a painter, plumber, ceiling or waterproofing contractor in KL & Selangor.",
    topPages.flatMap((page) => page.faqs.map((faq) => ({ ...faq, href: `/top/${page.slug}`, source: page.title })))
  );

  return categories;
}

export const faqDirectory: FaqCategory[] = buildDirectory();

export const faqDirectoryTotalCount = faqDirectory.reduce((sum, category) => sum + category.items.length, 0);
