import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { DEDICATED_TOOL_BY_SERVICE } from "@/lib/estimator/service-estimator";
import { PROBLEM_CANONICAL_REDIRECTS } from "@/config/problem-canonical";
import { bp1RedirectTarget } from "@/lib/bp1-consolidation";
import { RETIRED_EMERGENCY_SERVICE_SLUGS } from "@/config/emergency-services";
import { POD_LOCALE_TREES } from "@/config/pod-family-paths";

const SUPPORTED_LOCALES = ["ms", "zh"] as const;

/**
 * Shareable estimator links (`/estimate/<service-slug>`).
 *
 * Every service has one uniform short URL the owner can paste into a customer
 * WhatsApp chat. Twenty-two of them render a real static estimator page at
 * `/estimate/<slug>`; the six services below own a deeper hand-built tool, so
 * their shareable URL 301-redirects to it. A genuine HTTP redirect (rather
 * than a redirect page) means the shared link lands on the full tool with zero
 * client-side hop, and those six slugs never need a static page at all.
 */
const ESTIMATE_TOOL_REDIRECTS: Record<string, string> = Object.fromEntries(
  Object.entries(DEDICATED_TOOL_BY_SERVICE).map(([serviceSlug, toolSlug]) => [
    `/estimate/${serviceSlug}`,
    `/tools/${toolSlug}`
  ])
);

/**
 * Locale-prefixed subtrees that serve REAL, fully-localised, indexable pages
 * (the free-tools cluster). These pass through untouched instead of
 * redirecting to English — everything else locale-prefixed still redirects,
 * because those pages switch language client-side at the same URL.
 */
// Real, fully-localised, indexable subtrees. Extended with the H3 pilot
// service directories (`/ms/services`, `/zh/services`) — every URL under
// these prefixes is server-rendered in the target language and must pass
// through untouched instead of redirecting to English.
const REAL_LOCALE_TREES = [
  "/ms/alatan",
  "/zh/gongju",
  "/ms/blog",
  "/zh/bo-ke",
  "/ms/soalan-lazim",
  "/zh/chang-jian-wen-ti",
  "/ms/services",
  "/zh/services",
  "/ms/problems",
  "/zh/problems",
  "/ms/notis-privasi",
  "/ms/terma",
  "/zh/yin-si-sheng-ming",
  "/zh/tiao-kuan",
  // Audit P3-12 — the real localized content-pod trees (answers, brands,
  // commercial, compare, guides + guides/maintenance, process, residential,
  // seasonal, top). Derived from `config/pod-family-paths.ts` so this list
  // always matches the routes that exist.
  ...POD_LOCALE_TREES,
  // Audit P3-15 — the localized Smart Service Finder pages. These render a
  // real in-tree page (server-rendered, indexable at the bare URL), so they
  // must NOT be 301-redirected to the English tree like locale-prefixed EN
  // paths are.
  "/ms/search",
  "/zh/search",
  // Audit §5.4-B1 — the localized pricing hubs. NOT whitelisting them made
  // the edge 301-strip `/ms/harga` → `/harga` (404!) and `/zh/pricing` →
  // `/pricing` (EN) even though both pages are built, sitemap-listed and
  // footer-linked (`hubPath()`). Found live on 2026-08-31 (Fix Wave 28);
  // permanently guarded by `audit:locale-trees`.
  "/ms/harga",
  "/zh/pricing",
] as const;

const PROBLEM_REDIRECTS: Record<string, string> = Object.fromEntries(
  Object.entries(PROBLEM_CANONICAL_REDIRECTS).flatMap(([from, to]) => [
    [`/problems/${from}`, `/problems/${to}`],
    [`/ms/problems/${from}`, `/ms/problems/${to}`],
    [`/zh/problems/${from}`, `/zh/problems/${to}`],
  ]),
);

/**
 * P2-03 / P2-17 (Fix Wave 6) — retired emergency pages.
 *
 * `/services/<svc>/emergency` is kept only for the 12 services with real
 * emergency semantics (plumbing, electrical, water-heater, locksmith,
 * roof-repair, window-repair, door, autogate, cctv, waterproofing, ceiling,
 * glass-aluminium). The other 17 ("Urgent Complete House Renovation",
 * "Urgent Epoxy Flooring", "Urgent Skim Coat"…) are keyword-slot fillers with
 * near-zero genuine emergency demand, so they 301 here to the service page —
 * the same real-301 pattern as BP-1 phase 1 — and are no longer generated.
 */
const RETIRED_EMERGENCY_REDIRECTS: Record<string, string> = Object.fromEntries(
  RETIRED_EMERGENCY_SERVICE_SLUGS.map((slug) => [
    `/services/${slug}/emergency`,
    `/services/${slug}`
  ])
);

/**
 * Middleware for locale-prefixed URL handling.
 *
 * Since language switching is client-side (React context + localStorage),
 * locale-prefixed URLs like /ms/services or /zh/contact are handled as follows:
 *
 * - /ms and /zh (bare) → allowed through to the scaffold landing page
 *   which sets the locale and auto-redirects to /
 * - /ms/alatan/* and /zh/gongju/* → real localised pages, pass through
 * - /ms/* and /zh/* (deep) → 301 redirect to the English URL with the
 *   locale cookie set, so the user sees translated content at the canonical URL
 *
 * This ensures shared/bookmarked locale URLs always resolve to real content.
 */
/**
 * Admin area gate (REMOVED 2026-08-27 by owner decision).
 *
 * The former `/admin/login` + `/admin/tools` owner dashboard (calculators
 * directory), its `/api/admin/*` routes and `lib/admin-auth*` were removed —
 * the owner confirmed the internal admin page is no longer needed. There is
 * no `/admin` surface left to protect; `ADMIN_PASSWORD` is obsolete.
 */
/**
 * BP-1 phase 1 — programmatic consolidation 301s.
 *
 * Part 1 of the deep audit found the site's biggest architecture problem was
 * silent index bloat: 2,581 indexable EN URLs from one template, of which
 * 2,146 were duplication rather than coverage.
 *
 *   1,073  `/areas/<area>/<svc>/near-me`  — identical to their own parent
 *          `/areas/<area>/<svc>` except for the word "near". Textbook
 *          self-cannibalisation inside a single template.
 *   1,073  `/suburbs/<twin>/<svc>`        — the 37 suburbs that are also
 *          coverage areas published the same place × service × offer as
 *          `/areas/<twin>/<svc>`. A `rel=canonical` hint was already in place,
 *          but a canonical still asks Google to crawl, render and store a page
 *          it is then told to discard, and every internal link into a twin
 *          spent equity on a page with no independent existence.
 *
 * Both sets are now 301-redirected here and are **no longer generated at all**
 * (the near-me route file is deleted; the suburb route filters its
 * `generateStaticParams` to the 15 suburbs with no `/areas` twin). A real 301
 * — not a canonical — is what actually consolidates the ranking signal.
 *
 * The redirect target is derived from the tiny generated slug list in
 * `config/suburb-twin-slugs.generated.ts`; `lib/bp1-consolidation.ts` holds the
 * matching logic so the audit script and the templates share one definition.
 *
 * Kept on purpose: `/near-me` + `/near-me/<svc>` (30 genuine geo-intent hubs)
 * and the 435 `/suburbs/<slug>/<svc>` pages for suburbs with no area twin.
 *
 * `scripts/bp1-consolidation-audit.ts` fails the build if any of this regresses.
 */
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Retired programmatic duplicate → its canonical parent. Path-only target so
  // the redirect never moves a visitor between www and non-www.
  const bp1Target = bp1RedirectTarget(pathname);
  if (bp1Target) {
    const targetUrl = request.nextUrl.clone();
    targetUrl.pathname = bp1Target;
    targetUrl.search = "";
    return NextResponse.redirect(targetUrl, 301);
  }

  const problemTarget = PROBLEM_REDIRECTS[pathname];
  if (problemTarget) {
    const targetUrl = request.nextUrl.clone();
    targetUrl.pathname = problemTarget;
    return NextResponse.redirect(targetUrl, 301);
  }

  // Retired emergency page → its service page (P2-03). Path-only target so the
  // redirect never moves a visitor between www and non-www.
  const emergencyTarget = RETIRED_EMERGENCY_REDIRECTS[pathname];
  if (emergencyTarget) {
    const targetUrl = request.nextUrl.clone();
    targetUrl.pathname = emergencyTarget;
    targetUrl.search = "";
    return NextResponse.redirect(targetUrl, 301);
  }

  // Shareable estimator link for a service that owns a deep tool → 301 to it.
  const toolTarget = ESTIMATE_TOOL_REDIRECTS[pathname];
  if (toolTarget) {
    const targetUrl = request.nextUrl.clone();
    targetUrl.pathname = toolTarget;
    targetUrl.search = "";
    return NextResponse.redirect(targetUrl, 301);
  }

  // Check if URL starts with a supported locale prefix
  for (const locale of SUPPORTED_LOCALES) {
    const prefix = `/${locale}`;

    if (pathname === prefix) {
      // Bare /ms or /zh → let through to scaffold page
      // The scaffold sets locale and auto-redirects
      const response = NextResponse.next();
      response.cookies.set("klservisrumah-lang", locale, {
        path: "/",
        maxAge: 31536000,
        sameSite: "lax"
      });
      return response;
    }

    if (pathname.startsWith(`${prefix}/`)) {
      // Genuine localised subtree (the tools cluster) → straight through,
      // cookie set so the client-side language context agrees with the URL.
      if (REAL_LOCALE_TREES.some((tree) => pathname === tree || pathname.startsWith(`${tree}/`))) {
        const response = NextResponse.next();
        response.cookies.set("klservisrumah-lang", locale, {
          path: "/",
          maxAge: 31536000,
          sameSite: "lax"
        });
        return response;
      }

      // Deep locale URL like /ms/services → redirect to /services with cookie set
      const targetPath = pathname.slice(prefix.length) || "/";
      const targetUrl = request.nextUrl.clone();
      targetUrl.pathname = targetPath;
      targetUrl.search = request.nextUrl.search;

      const redirect = NextResponse.redirect(targetUrl, 301);
      redirect.cookies.set("klservisrumah-lang", locale, {
        path: "/",
        maxAge: 31536000,
        sameSite: "lax"
      });
      return redirect;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all paths except:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico, sitemap.xml, robots.txt
     * - logo, icons, hero SVGs
     * - manifest.json, sw.js
     * - BingSiteAuth.xml (Bing Webmaster verification file)
     * - IndexNow key file 2427f8...txt
     */
    "/((?!_next/static|_next/image|favicon|sitemap|robots|logo|icons|hero-|manifest|sw\\.js|site-summary|llms|aeo|BingSiteAuth|2427f86a83154e488745beb379b3eec8).*)",
  ],
};
