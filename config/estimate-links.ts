/**
 * Shareable estimator links — one short, stable URL per service.
 *
 * WHY THIS EXISTS
 * ---------------
 * The business owner regularly chats with customers on WhatsApp and wants to
 * send them a single link that opens *just* the cost estimator for the service
 * they asked about, so the customer can work out a ballpark price ("kitna
 * kharcha aye ga") on their own phone before anyone commits to a site visit.
 *
 * The pattern is deliberately uniform:
 *
 *     https://www.klservisrumah.my/estimate/<service-slug>
 *
 * for every one of the 28 services — easy to remember, easy to type, easy to
 * paste into WhatsApp.
 *
 *   • 22 services render the generic estimator engine directly on
 *     `/estimate/<slug>` (the same published-rate engine that powers the
 *     estimator on the service page itself).
 *   • 6 services (painting, plumbing, ceiling, plaster-ceiling, waterproofing,
 *     handyman) own a deeper, hand-built tool. Their `/estimate/<slug>` URL
 *     301-redirects to that tool (`/tools/<tool-slug>`), so the shared link
 *     still resolves to the best estimator we have for the trade — the owner
 *     never needs to know which services carry a dedicated tool.
 *
 * This module is the single source of truth for that mapping, used by the
 * routes, the sitemap, the share bar, the hub page and the test harness.
 */
import { servicesData } from "./services-data";
import { DEDICATED_TOOL_BY_SERVICE, hasServiceEstimator } from "@/lib/estimator/service-estimator";

export const ESTIMATE_INDEX_PATH = "/estimate";

export type EstimateLinkKind = "generic" | "dedicated";

export type EstimateLinkEntry = {
  /** Service slug — identical to the `/services/<slug>` slug. */
  slug: string;
  /** Published English service title (used by the hub card + metadata). */
  title: string;
  /** Published starting price, exactly as shown on the service page. */
  startPrice: string;
  /** The shareable path: always `/estimate/<slug>`. */
  path: string;
  /**
   * The final destination of the shareable path. Identical to `path` for the
   * 22 generic estimators; for the 6 dedicated-tool services it is the
   * `/tools/<tool-slug>` page their short URL 301-redirects to. Internal page
   * links (hub card CTA) should use this so crawlers never follow a needless
   * redirect, while the *displayed* and *copied* URL stays the uniform short
   * `/estimate/<slug>` the owner pastes into WhatsApp.
   */
  resolvedPath: string;
  /** How the link resolves — a direct estimator page or a redirect to a deep tool. */
  kind: EstimateLinkKind;
  /** For `dedicated` entries, the underlying `/tools/<slug>` page. */
  toolSlug?: string;
};

/** The shareable path for any service slug. */
export function estimatePath(slug: string): string {
  return `${ESTIMATE_INDEX_PATH}/${slug}`;
}

/**
 * Every service with a shareable estimator link, in catalogue order (the same
 * order the services page lists them).
 */
export function buildEstimateLinks(): EstimateLinkEntry[] {
  return Object.values(servicesData).map((service) => {
    const toolSlug = DEDICATED_TOOL_BY_SERVICE[service.slug];
    const path = estimatePath(service.slug);
    return {
      slug: service.slug,
      title: service.title,
      startPrice: service.startPrice,
      path,
      resolvedPath: toolSlug ? `/tools/${toolSlug}` : path,
      kind: toolSlug ? "dedicated" : "generic",
      ...(toolSlug ? { toolSlug } : {})
    };
  });
}

/**
 * Slugs that render the generic estimator directly on `/estimate/<slug>` —
 * i.e. every service except the ones whose link redirects to a deep tool.
 * Used by `generateStaticParams` (redirecting slugs are handled upstream) and
 * the sitemap (redirect targets must never be listed).
 */
export function genericEstimateSlugs(): string[] {
  return Object.values(servicesData)
    .map((service) => service.slug)
    .filter((slug) => !DEDICATED_TOOL_BY_SERVICE[slug] && hasServiceEstimator(slug));
}
