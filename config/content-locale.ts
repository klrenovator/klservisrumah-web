import {
  answerPages,
  brandPages,
  commercialPages,
  comparisonPages,
  guidePages,
  maintenancePages,
  processPages,
  residentialPages,
  seasonalPages,
  topPages,
  type GenericContentPage,
} from "@/config/content-data";
import type { Locale } from "@/lib/i18n";
import { POD_FAMILY_BASE_PATHS, POD_LOCALE_TREES } from "@/config/pod-family-paths";

/**
 * content-locale.ts — registry + URL helpers for the real, indexable
 * MS/ZH content-pod tree (audit Part 3 finding P3-12).
 *
 * WHY THIS EXISTS
 * ---------------
 * The five-part deep audit found the ~204 generic "content pod" pages
 * (commercial / residential / brands / compare / guides / maintenance /
 * seasonal / top / answers / process) existed **only as English URLs**. The
 * MS/ZH copy was resolved client-side at the same canonical URL (the language
 * pill), so there was no crawlable `/ms/…` or `/zh/…` pod URL for a Bahasa or
 * Chinese query to land on — unlike services, problems, tools, blog and FAQ,
 * which all got real localized routes in the H3 pilot.
 *
 * This module is the single source of truth for which pod families get
 * localized routes, the EN base path each family lives at, and the
 * `{en, ms, zh}` URL triple every page emits for its hreflang cluster. It
 * keeps the SAME slug across locales (the established services/problems
 * pattern) and only changes the path prefix, exactly like
 * `/ms/services/<slug>` / `/zh/problems/<slug>`.
 *
 * Kept English-only on purpose: `clusterPages` render under `/services/…`
 * (service-cluster children, a different tree), and the `/estimate/*` share
 * links are deliberately NOINDEX.
 */

export type ContentPodFamily =
  | "answers"
  | "brands"
  | "commercial"
  | "compare"
  | "guides"
  | "guidesMaintenance"
  | "process"
  | "residential"
  | "seasonal"
  | "top";

export type PodFamilyDef = {
  /** The English base path the family lives at (`/commercial`). */
  basePath: string;
  /** Short EN label used for breadcrumbs / the EN hub title pattern. */
  enLabel: string;
  /** The family's detail pages. */
  pages: GenericContentPage[];
};

export const POD_FAMILIES: Record<ContentPodFamily, PodFamilyDef> = {
  answers: { basePath: POD_FAMILY_BASE_PATHS.answers, enLabel: "Answers", pages: answerPages },
  brands: { basePath: POD_FAMILY_BASE_PATHS.brands, enLabel: "Brands", pages: brandPages },
  commercial: { basePath: POD_FAMILY_BASE_PATHS.commercial, enLabel: "Commercial", pages: commercialPages },
  compare: { basePath: POD_FAMILY_BASE_PATHS.compare, enLabel: "Compare", pages: comparisonPages },
  guides: { basePath: POD_FAMILY_BASE_PATHS.guides, enLabel: "Guides", pages: guidePages },
  guidesMaintenance: { basePath: POD_FAMILY_BASE_PATHS.guidesMaintenance, enLabel: "Maintenance", pages: maintenancePages },
  process: { basePath: POD_FAMILY_BASE_PATHS.process, enLabel: "Process", pages: processPages },
  residential: { basePath: POD_FAMILY_BASE_PATHS.residential, enLabel: "Residential", pages: residentialPages },
  seasonal: { basePath: POD_FAMILY_BASE_PATHS.seasonal, enLabel: "Seasonal", pages: seasonalPages },
  top: { basePath: POD_FAMILY_BASE_PATHS.top, enLabel: "Top", pages: topPages },
};

export const POD_FAMILY_KEYS = Object.keys(POD_FAMILIES) as ContentPodFamily[];

/** Total detail pages across all pod families (204 at authoring time). */
export const POD_DETAIL_COUNT = POD_FAMILY_KEYS.reduce(
  (sum, key) => sum + POD_FAMILIES[key].pages.length,
  0
);

/** Look up a single pod page within a family. */
export function podPage(family: ContentPodFamily, slug: string): GenericContentPage | undefined {
  return POD_FAMILIES[family].pages.find((page) => page.slug === slug);
}

/** All slugs for a family (used by `generateStaticParams`). */
export function podStaticParams(family: ContentPodFamily): { slug: string }[] {
  return POD_FAMILIES[family].pages.map((page) => ({ slug: page.slug }));
}

/** `{en, ms, zh}` URL triple for a pod DETAIL page (the hreflang cluster). */
export function podDetailUrls(family: ContentPodFamily, slug: string): { en: string; ms: string; zh: string } {
  const en = `${POD_FAMILIES[family].basePath}/${slug}`;
  return { en, ms: `/ms${en}`, zh: `/zh${en}` };
}

/** `{en, ms, zh}` URL triple for a pod HUB (index) page. */
export function podHubUrls(family: ContentPodFamily): { en: string; ms: string; zh: string } {
  const en = POD_FAMILIES[family].basePath;
  return { en, ms: `/ms${en}`, zh: `/zh${en}` };
}

/** The path for a pod detail page under a given locale (`en` → canonical). */
export function podDetailPath(family: ContentPodFamily, slug: string, locale: Locale): string {
  return podDetailUrls(family, slug)[locale === "en" ? "en" : locale];
}

/** The hub path for a family under a given locale. */
export function podHubPath(family: ContentPodFamily, locale: Locale): string {
  return podHubUrls(family)[locale === "en" ? "en" : locale];
}

/**
 * Middleware `REAL_LOCALE_TREES` prefixes. Re-exported from
 * `config/pod-family-paths.ts` (the dependency-free single source) so the
 * middleware passthrough list and the routes that actually exist can never
 * drift apart.
 */
export { POD_LOCALE_TREES };
