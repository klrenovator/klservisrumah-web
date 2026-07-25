import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SUPPORTED_LOCALES = ["ms", "zh"] as const;

/**
 * Middleware for locale-prefixed URL handling.
 *
 * Since language switching is client-side (React context + localStorage),
 * locale-prefixed URLs like /ms/services or /zh/contact are handled as follows:
 *
 * - /ms and /zh (bare) → allowed through to the scaffold landing page
 *   which sets the locale and auto-redirects to /
 * - /ms/* and /zh/* (deep) → 301 redirect to the English URL with the
 *   locale cookie set, so the user sees translated content at the canonical URL
 *
 * This ensures shared/bookmarked locale URLs always resolve to real content.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

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
     */
    "/((?!_next/static|_next/image|favicon|sitemap|robots|logo|icons|hero-|manifest|sw\\.js|site-summary|llms|aeo).*)",
  ],
};
