import type { Metadata } from "next";
import "@/styles/globals.css";
import { SiteChrome } from "@/components/layout/site-chrome";
import { LocaleNotFoundContent } from "@/components/locale-not-found-content";

/**
 * Global 404 for URLs that match no route at all.
 *
 * WHY THIS FILE EXISTS
 * --------------------
 * The site has three root layouts (one per language tree, so each tree can
 * ship a correct server-side `<html lang>`). With multiple root layouts there
 * is no single root layout to wrap a conventional `app/not-found.tsx` — Next
 * requires every page to have a root layout, and the app-level not-found would
 * break in dev and render inside the framework's bare shell in prod.
 *
 * `global-not-found.tsx` (experimental flag `globalNotFound` in
 * next.config.mjs) is the framework's solution for exactly this architecture:
 * it bypasses normal rendering entirely and returns this page directly for
 * unmatched URLs, so it must be a complete document on its own — which is what
 * this file is. It renders the shared site chrome (navbar, footer, CTAs) and
 * the locale-aware 404 copy (the language cookie selects the message
 * language). The document defaults to English because an unmatched URL has no
 * locale context.
 *
 * Metadata is declared via the Metadata API (verified at build time to be
 * emitted — title, description, robots noindex, no canonical/hreflang).
 */
export const metadata: Metadata = {
  title: "Page not found — KL Servis Rumah",
  description:
    "This page could not be found. Browse KL Servis Rumah home services, service areas and fixed-price guides for KL & Selangor, or message us on WhatsApp.",
  robots: { index: false, follow: true },
  alternates: {},
  openGraph: {
    title: "Page not found — KL Servis Rumah",
    description: "This page could not be found. Browse our home services for KL & Selangor.",
    url: undefined,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Page not found — KL Servis Rumah",
    description: "This page could not be found. Browse our home services for KL & Selangor."
  }
};

export default function GlobalNotFound() {
  return (
    <html lang="en-MY" className="scroll-smooth">
      <head>
        {/* The Metadata API emits title/description/robots (and the framework
            adds its own noindex); only the tags the API cannot emit are kept
            explicit here. Soft-404 discipline: no canonical, no hreflang. */}
        <meta name="msvalidate.01" content="6CA0BEF9CB1FECC50C10A3F56F7ED27E" />
      </head>
      <body className="font-sans text-[#475569] bg-white min-h-screen flex flex-col justify-between antialiased">
        <SiteChrome>
          <LocaleNotFoundContent />
        </SiteChrome>
      </body>
    </html>
  );
}
