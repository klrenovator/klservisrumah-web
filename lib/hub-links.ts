/**
 * hub-links.ts — tree-native hub path resolution (shared).
 *
 * WHY THIS EXISTS
 * ---------------
 * Content hubs that have a real localized route (services, pricing, blog,
 * FAQ, problems and the content-pod families) resolve inside the active
 * language tree so MS/ZH visitors — and the localized crawl — never take a
 * 301 hop out of their tree. EN-only surfaces (areas, near-me, projects,
 * contact — no localized route exists by design) keep their canonical
 * English path, matching the navbar's chrome convention.
 *
 * Extracted from `components/ui/footer.tsx` (Fix Wave 25, P4-16) so every
 * component that renders on an MS/ZH page uses one source of truth instead
 * of hardcoding an English hub URL (the tools index/tool page and the
 * localized service pages leaked `href="/pricing"` onto /ms/* and /zh/*
 * pages — see the `audit:html` cross-tree-hub-link check).
 */

export type HubLang = "en" | "ms" | "zh";

/** Hubs with a real localized route — the English path maps to an MS and a ZH twin. */
const HUB_LOCALE_PATHS: Record<string, { ms: string; zh: string }> = {
  "/pricing": { ms: "/ms/harga", zh: "/zh/pricing" },
  "/services": { ms: "/ms/services", zh: "/zh/services" },
  "/blog": { ms: "/ms/blog", zh: "/zh/bo-ke" },
  "/faq": { ms: "/ms/soalan-lazim", zh: "/zh/chang-jian-wen-ti" },
  "/problems": { ms: "/ms/problems", zh: "/zh/problems" },
  "/answers": { ms: "/ms/answers", zh: "/zh/answers" },
  "/guides": { ms: "/ms/guides", zh: "/zh/guides" },
  "/process": { ms: "/ms/process", zh: "/zh/process" },
  "/compare": { ms: "/ms/compare", zh: "/zh/compare" },
  "/top": { ms: "/ms/top", zh: "/zh/top" },
  "/brands": { ms: "/ms/brands", zh: "/zh/brands" },
  "/residential": { ms: "/ms/residential", zh: "/zh/residential" },
  "/commercial": { ms: "/ms/commercial", zh: "/zh/commercial" },
  "/seasonal": { ms: "/ms/seasonal", zh: "/zh/seasonal" },
};

/**
 * Resolve an English hub path to the active language tree. English passes
 * through untouched; MS/ZH return the localized twin when one exists, and
 * fall back to the English path for hubs that are deliberately EN-only.
 */
export function hubPath(englishHref: string, lang: HubLang): string {
  if (lang === "en") return englishHref;
  return HUB_LOCALE_PATHS[englishHref]?.[lang] ?? englishHref;
}

/**
 * Resolve an English content link to the active language tree — exact hubs
 * (`/pricing`, `/services`, …) through `hubPath`, and deep `/services/…`
 * links by locale prefix, because service slugs are shared across all three
 * trees (`/services/painting` → `/ms/services/painting`). The `/emergency`
 * sub-routes are deliberately EN-only (no localized twin exists), so those
 * deep links keep their canonical English path. English passes through
 * untouched.
 */
export function localizeHref(englishHref: string, lang: HubLang): string {
  if (lang === "en") return englishHref;
  const twin = HUB_LOCALE_PATHS[englishHref]?.[lang];
  if (twin) return twin;
  if (englishHref.startsWith("/services/") && !/\/emergency(\/|$)/.test(englishHref)) {
    return `/${lang}${englishHref}`;
  }
  return englishHref;
}

/** Hubs that have a localized twin — used by the cross-tree link audit. */
export const LOCALIZED_HUB_PATHS = Object.keys(HUB_LOCALE_PATHS);

/**
 * Client-safe localized tools index path. Mirrors `TOOLS_INDEX_PATH` in
 * `config/tools-i18n.ts`, which is a heavy content registry that the client
 * bundle guard forbids importing from `"use client"` modules (navbar, mobile
 * drawer). The index slugs never change independently of the registry — if a
 * tool slug map is ever needed in client chrome, extend this map in lockstep
 * with `TOOL_SLUG_I18N` (server-only, single source of truth).
 */
export const TOOLS_INDEX_LOCALE: Record<HubLang, string> = {
  en: "/tools",
  ms: "/ms/alatan",
  zh: "/zh/gongju",
};

/**
 * Localized deep link for a specific tool, client-safe. Single source of
 * truth for tool slugs is `TOOL_SLUG_I18N` in `config/tools-i18n.ts`
 * (server-only); this mirrors the entries referenced from client chrome.
 */
const TOOL_SLUG_LOCALE: Record<string, { ms: string; zh: string }> = {
  "renovation-budget-calculator": { ms: "kalkulator-bajet-renovasi", zh: "装修预算计算器" },
};

/**
 * Resolve an English tool page path to the active language tree (e.g.
 * `/tools/renovation-budget-calculator` → `/ms/alatan/kalkulator-bajet-renovasi`).
 * English passes through untouched; unknown tool slugs fall back to the
 * localized tools index so a /ms or /zh visitor never lands outside their tree.
 */
export function toolHubPath(englishToolPath: string, lang: HubLang): string {
  if (lang === "en") return englishToolPath;
  const match = englishToolPath.match(/^\/tools\/([^/]+)$/);
  if (!match) return englishToolPath;
  const slug = TOOL_SLUG_LOCALE[match[1]]?.[lang];
  return slug ? `${TOOLS_INDEX_LOCALE[lang]}/${slug}` : TOOLS_INDEX_LOCALE[lang];
}
