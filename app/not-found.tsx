import type { Metadata } from "next";
import { LocaleNotFoundContent } from "@/components/locale-not-found-content";

/**
 * Metadata for the sitewide 404 boundary.
 *
 * WHY THIS EXISTS
 * ---------------
 * Without its own `metadata` export this route inherited every field from
 * `app/layout.tsx`, and a crawl of the production build showed the rendered
 * 404 document carrying:
 *
 *   • `<title>KL Servis Rumah — Fixed-Price Home Services…</title>` and the
 *     homepage meta description — i.e. a byte-identical duplicate of `/`;
 *   • `<link rel="canonical" href="https://www.klservisrumah.my">` — the 404
 *     page told Google it *was* the homepage. A canonical pointing from an
 *     error page to a real page is a classic soft-404 signal: it invites the
 *     indexer to consolidate any 404-serving URL into the homepage;
 *   • a full hreflang cluster + `og:url` all pointing at the homepage;
 *   • two conflicting `<meta name="robots">` tags — the framework's `noindex`
 *     for the not-found boundary *and* the inherited `index, follow` from the
 *     root layout. When a page ships both, crawlers apply the most restrictive
 *     directive, but shipping contradictory tags is a genuine defect and shows
 *     up as a warning in Search Console and third-party crawlers.
 *
 * Declaring metadata here overrides all of it: a distinct title/description, an
 * explicit single `noindex, follow` (follow so the recovery links are still
 * crawled), and — critically — `alternates: {}` so no canonical or hreflang is
 * emitted at all. A 404 must never canonicalise to a 200 page.
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
  // Without this the Twitter card inherited the root layout's homepage copy,
  // so a shared 404 link previewed as the homepage.
  twitter: {
    card: "summary_large_image",
    title: "Page not found — KL Servis Rumah",
    description: "This page could not be found. Browse our home services for KL & Selangor."
  }
};

export default function NotFound() {
  return <LocaleNotFoundContent />;
}
