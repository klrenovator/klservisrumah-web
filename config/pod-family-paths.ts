/**
 * pod-family-paths.ts — the EN base path of every content-pod family.
 *
 * This is intentionally a tiny, dependency-free module: `middleware.ts` imports
 * it to decide which `/ms/…` and `/zh/…` subtrees are REAL localized pages
 * (pass-through) versus language-switching URLs that 301 to the English
 * canonical. `config/content-locale.ts` builds the full family registry on top
 * of these same strings, so the middleware passthrough list and the actual
 * routes can never drift apart. It must NOT import `config/content-data.ts`
 * (the heavy service/pod registry) — that would bloat the edge middleware
 * bundle.
 */

export const POD_FAMILY_BASE_PATHS: Record<string, string> = {
  answers: "/answers",
  brands: "/brands",
  commercial: "/commercial",
  compare: "/compare",
  guides: "/guides",
  guidesMaintenance: "/guides/maintenance",
  process: "/process",
  residential: "/residential",
  seasonal: "/seasonal",
  top: "/top",
};

/** `/ms/…` + `/zh/…` passthrough prefixes for every pod family subtree. */
export const POD_LOCALE_TREES: readonly string[] = Object.values(POD_FAMILY_BASE_PATHS).flatMap(
  (base) => [`/ms${base}`, `/zh${base}`]
);
