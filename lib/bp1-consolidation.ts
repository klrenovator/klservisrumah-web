/**
 * BP-1 phase 1 — programmatic URL consolidation.
 *
 * WHAT CHANGED
 * ------------
 * Part 1 of the deep audit found the single biggest architecture problem on the
 * site: **2,581 indexable EN URLs served by one template**, of which 2,146 were
 * pure duplication.
 *
 *   • 1,073 `/areas/<area>/<svc>/near-me` pages whose only difference from their
 *     parent `/areas/<area>/<svc>` page was the word "near" (Part 1 Critical #2).
 *   • 1,073 `/suburbs/<twin>/<svc>` pages for the 37 suburbs that are also
 *     coverage areas — same place, same service, same offer as
 *     `/areas/<twin>/<svc>` (Part 1 Critical #1).
 *
 * Both sets are now **301-redirected to their parent/canonical URL instead of
 * generated at all**. The redirect lives in `middleware.ts` (which imports only
 * the tiny generated slug list), and this module is the single source of truth
 * for "which path is retired, and where does it go" — used by middleware, the
 * page templates, the internal-link emitters and `scripts/bp1-consolidation-audit.ts`.
 *
 * WHAT WAS DELIBERATELY KEPT
 * --------------------------
 *   • `/near-me` and `/near-me/<svc>` (30 pages) — genuine geo-intent hubs.
 *   • The 15 suburbs with no `/areas` twin (435 pages) — real unique content.
 *   • `/areas/<area>/<svc>` (1,073 pages) — the canonical local pair pages.
 */
import {
  AREA_SLUGS,
  SERVICE_SLUGS,
  SUBURB_TWIN_SLUGS,
} from "@/config/suburb-twin-slugs.generated";

const TWIN_SET = new Set(SUBURB_TWIN_SLUGS);
const AREA_SET = new Set(AREA_SLUGS);
const SERVICE_SET = new Set(SERVICE_SLUGS);

/** True when this suburb slug is also published as a coverage area. */
export function hasAreaTwin(suburbSlug: string): boolean {
  return TWIN_SET.has(suburbSlug);
}

/**
 * Canonical URL for a suburb × service pair.
 *
 * Every internal link on the site must go through this helper. Linking straight
 * at `/suburbs/<slug>/<svc>` for a twin suburb sends a user (and a crawler)
 * through a 301 to reach a page we link to from a sibling — a wasted hop that
 * also dilutes the equity the link was meant to pass.
 */
export function suburbServicePath(suburbSlug: string, serviceSlug: string): string {
  return hasAreaTwin(suburbSlug)
    ? `/areas/${suburbSlug}/${serviceSlug}`
    : `/suburbs/${suburbSlug}/${serviceSlug}`;
}

/**
 * Parent of a retired `/areas/<area>/<svc>/near-me` URL, or `null` if the
 * pathname is not a near-me pair page.
 *
 * Both segments are validated against the real slug lists. The near-me route was
 * generated for every *real* area × service combination, so a matching shape is
 * only a retired page when the slugs are real too. An invented URL such as
 * `/areas/not-a-place/painting/near-me` must fall through to a plain 404 —
 * answering it with 301 → `/areas/not-a-place/painting` → 404 redirects a
 * crawler onto a soft-404, which is strictly worse than the 404 the route
 * returned before BP-1.
 */
export function nearMeParentPath(pathname: string): string | null {
  const match = /^\/areas\/([^/]+)\/([^/]+)\/near-me\/?$/.exec(pathname);
  if (!match) return null;
  const [areaSlug, serviceSlug] = match.slice(1);
  if (!AREA_SET.has(areaSlug) || !SERVICE_SET.has(serviceSlug)) return null;
  return `/areas/${areaSlug}/${serviceSlug}`;
}

/**
 * Redirect target for a retired `/suburbs/<twin>/<svc>` URL, or `null` when the
 * suburb keeps its own page (or the path is not a suburb × service pair).
 *
 * The suburb side is validated by the twin set; the service side is validated
 * against the real service list for the same reason as `nearMeParentPath` —
 * `/suburbs/cheras/not-a-service` must 404, not 301 onto a 404.
 */
export function suburbTwinRedirectTarget(pathname: string): string | null {
  const match = /^\/suburbs\/([^/]+)\/([^/]+)\/?$/.exec(pathname);
  if (!match) return null;
  const [suburbSlug, serviceSlug] = match.slice(1);
  if (!hasAreaTwin(suburbSlug) || !SERVICE_SET.has(serviceSlug)) return null;
  return `/areas/${suburbSlug}/${serviceSlug}`;
}

/**
 * Resolve a pathname to its BP-1 301 target, or `null` if the path is live.
 *
 * Used by `middleware.ts`. Deliberately returns a *path* (not a URL) so the
 * caller keeps the original host — the redirect must never move a visitor
 * between www and non-www.
 */
export function bp1RedirectTarget(pathname: string): string | null {
  return nearMeParentPath(pathname) ?? suburbTwinRedirectTarget(pathname);
}

/** True when this exact pathname is a page BP-1 retired (used by the audits). */
export function isRetiredProgrammaticPath(pathname: string): boolean {
  return bp1RedirectTarget(pathname) !== null;
}
