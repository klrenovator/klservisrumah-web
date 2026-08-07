import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { DEDICATED_TOOL_BY_SERVICE } from "@/lib/estimator/service-estimator";
import { verifyAdminTokenEdge } from "@/lib/admin-auth-edge";

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
const REAL_LOCALE_TREES = ["/ms/alatan", "/zh/gongju", "/ms/blog", "/zh/bo-ke", "/ms/soalan-lazim", "/zh/chang-jian-wen-ti"] as const;

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
 * Admin area gate.
 *
 * Every `/admin/*` URL except the login screen requires the signed, expiring,
 * httpOnly session cookie issued by `/api/admin/login`. Verification happens
 * here (edge) AND again in the server component that renders the dashboard —
 * defense in depth, and unauthenticated visitors never receive the dashboard
 * markup even if one layer is bypassed or misconfigured.
 */
const ADMIN_LOGIN_PATH = "/admin/login";
const ADMIN_PREFIX = "/admin";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith(`${ADMIN_PREFIX}/`) || pathname === ADMIN_PREFIX) {
    if (pathname !== ADMIN_LOGIN_PATH) {
      const token = request.cookies.get("kl_admin_session")?.value;
      if (!(await verifyAdminTokenEdge(token))) {
        const loginUrl = request.nextUrl.clone();
        loginUrl.pathname = ADMIN_LOGIN_PATH;
        loginUrl.search = "";
        return NextResponse.redirect(loginUrl, 307);
      }
    }
    return NextResponse.next();
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
     * - IndexNow key file e7492c...txt
     */
    "/((?!_next/static|_next/image|favicon|sitemap|robots|logo|icons|hero-|manifest|sw\\.js|site-summary|llms|aeo|BingSiteAuth|e7492c81).*)",
  ],
};
