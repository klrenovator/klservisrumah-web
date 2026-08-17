"use client";

import type { Locale } from "@/lib/i18n";
import type { SmartSearchResponse } from "@/lib/smart-finder-search";

/**
 * Lazy loader for the Smart Service Finder search engine.
 *
 * WHY THIS EXISTS
 * ---------------
 * `lib/smart-finder-search.ts` statically imports `lib/smart-finder-index.ts`,
 * which in turn imports the *entire* content registry:
 *
 *   config/services-data.ts    ~470 KB source  (~429 KB emitted chunk)
 *   config/tools-i18n.ts       ~330 KB emitted chunk
 *   config/problem-data.ts     ~224 KB emitted chunk
 *   config/tools-data.ts       ~152 KB emitted chunk
 *
 * Because the finder was imported *statically* by two client components
 * (`smart-service-finder.tsx` and `hero-search-bar.tsx`), every one of those
 * registries was inlined into the first-load JavaScript of the site's most
 * important routes — `/`, `/services`, `/search`, `/ms/services`, `/zh/services`
 * — pushing them to 435–514 KB of first-load JS against a 102 KB shared
 * baseline. None of it is needed to paint the page: the finder renders results
 * only once the visitor has actually typed a query.
 *
 * Routing the engine through `import()` moves all of it into an on-demand chunk.
 * The module is warmed the moment a visitor shows search intent (focus, pointer
 * over the search box, or a pre-filled `?q=` on /search), so by the time a query
 * is complete the engine is normally already resident. The cache below
 * guarantees the network/parse cost is paid at most once per page view.
 */

type SmartSearchEngine = typeof import("@/lib/smart-finder-search");

let cachedEngine: SmartSearchEngine | null = null;
let pendingEngine: Promise<SmartSearchEngine> | null = null;

/**
 * Synchronously returns the engine if it has already been loaded in this page
 * view. Lets components initialise their state without an extra render pass
 * when the visitor has searched before (e.g. navigating `/` → `/search`).
 */
export function getLoadedSmartSearch(): SmartSearchEngine | null {
  return cachedEngine;
}

/** Loads (or returns the in-flight promise for) the search engine chunk. */
export function loadSmartSearch(): Promise<SmartSearchEngine> {
  if (cachedEngine) return Promise.resolve(cachedEngine);
  if (!pendingEngine) {
    pendingEngine = import("@/lib/smart-finder-search")
      .then((mod) => {
        cachedEngine = mod;
        return mod;
      })
      .catch((error) => {
        // Allow a later interaction to retry rather than wedging the UI on a
        // transient chunk-load failure (flaky network, cache eviction mid-deploy).
        pendingEngine = null;
        throw error;
      });
  }
  return pendingEngine;
}

/** Fire-and-forget warm-up used by focus/hover handlers. */
export function prefetchSmartSearch(): void {
  void loadSmartSearch().catch(() => {
    /* Warm-up is best-effort; the real load path surfaces errors. */
  });
}

/**
 * Neutral response shape used while the engine chunk is still in flight, so the
 * consuming components can keep rendering without null-guards everywhere.
 */
export function pendingSmartSearchResponse(query: string, locale: Locale): SmartSearchResponse {
  return {
    query,
    locale,
    results: [],
    relatedSuggestions: [],
    detectedIntents: [],
    isMultiServiceQuery: false,
  };
}

export type { SmartSearchEngine };
