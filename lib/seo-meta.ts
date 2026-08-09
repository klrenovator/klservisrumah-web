/**
 * seo-meta.ts — single source of truth for page metadata.
 *
 * WHY THIS EXISTS
 * ---------------
 * Before this module, metadata was assembled ad-hoc in ~55 route files. A crawl of
 * the production build surfaced four systemic defects:
 *
 *   1. `app/layout.tsx` declared `title.template = "%s | KL Servis Rumah"` while most
 *      pages already ended their own title with "| KL Servis Rumah" — producing
 *      "… | KL Servis Rumah | KL Servis Rumah" on 26 pages and pushing 425 of 437
 *      titles past the ~60 char SERP truncation point.
 *   2. Sixteen pages declared no `alternates` block at all, so they silently
 *      inherited the root canonical ("/") — i.e. they told Google they were
 *      duplicates of the homepage.
 *   3. `/services` and all five `/tools/*` pages canonicalised to the homepage.
 *   4. hreflang pointed `ms-MY`/`zh-MY` at `/ms/*` and `/zh/*`, which 301-redirect
 *      back to the English URL. hreflang must never target a redirect.
 *
 * Every route now builds metadata through `buildMetadata()`, which normalises all
 * four concerns in one place and is unit-checkable by `scripts/seo-audit.ts`.
 */

import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const SITE_URL = "https://www.klservisrumah.my";
export const BRAND = siteConfig.name;

/** SERP pixel budgets. Google truncates around 580px ≈ 60 chars for titles. */
export const TITLE_MAX = 60;
export const TITLE_MIN = 30;
/** Descriptions: Google renders ~155–160 chars on desktop. */
export const DESC_MAX = 158;
export const DESC_MIN = 110;

const CJK_RE = /[\u4e00-\u9fff]/;
/** CJK glyphs are ~2x the width of a latin char, so the char budget is halved. */
const CJK_TITLE_MAX = 34;
const CJK_DESC_MAX = 80;

/** Separators we prefer to cut on, longest first, so we never split mid-phrase. */
const SEPARATORS = [" — ", " – ", " | ", " · ", " - ", ": "];

function isCjk(text: string): boolean {
  return CJK_RE.test(text);
}

/**
 * Trim `text` to `max` characters, preferring a separator boundary, then a word
 * boundary, and only hard-cutting as a last resort. Never leaves dangling
 * punctuation.
 */
export function clampAtBoundary(text: string, max: number): string {
  const value = text.trim().replace(/\s+/g, " ");
  if (value.length <= max) return value;

  for (const separator of SEPARATORS) {
    const index = value.lastIndexOf(separator, max);
    // Only accept a separator cut that keeps the title substantive.
    if (index > max * 0.55) return tidyTail(value.slice(0, index));
  }

  const space = value.lastIndexOf(" ", max);
  const cut = space > max * 0.5 ? value.slice(0, space) : value.slice(0, max);
  return tidyTail(cut);
}

/**
 * Strip trailing punctuation and dangling connector words left behind by a cut,
 * so we never ship a title ending in "… KL &" or "… Cost in".
 */
const DANGLING_WORDS = new Set([
  "and", "&", "or", "in", "for", "the", "to", "of", "with", "a", "an", "at",
  "on", "by", "from", "your", "our", "is", "are",
]);

function tidyTail(text: string): string {
  let value = text.trim().replace(/[,;:·\-–—|&]+$/, "").trim();
  let words = value.split(" ");
  while (words.length > 1 && DANGLING_WORDS.has(words[words.length - 1].toLowerCase())) {
    words = words.slice(0, -1);
    value = words.join(" ").replace(/[,;:·\-–—|&]+$/, "").trim();
    words = value.split(" ");
  }
  return value;
}

/**
 * Remove every occurrence of the brand from the tail of a title so the caller can
 * re-append exactly one. Handles "| Brand", "— Brand", "- Brand" and bare "Brand".
 */
function stripTrailingBrand(title: string): string {
  let value = title.trim();
  const pattern = new RegExp(`\\s*[|\\-–—·:]\\s*${escapeRegExp(BRAND)}\\s*$`, "i");
  // Loop because the double-suffix bug produced the brand twice in a row.
  while (pattern.test(value)) value = value.replace(pattern, "").trim();
  if (value.toLowerCase().endsWith(BRAND.toLowerCase())) {
    value = value.slice(0, value.length - BRAND.length).trim().replace(/[|\-–—·:]+$/, "").trim();
  }
  return value;
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Produce a SERP-safe `<title>`.
 *
 * - Strips any brand already present so it is never duplicated.
 * - Appends " | KL Servis Rumah" only when the result still fits the budget,
 *   because a truncated brand is worse than no brand.
 * - Titles that are already brand-led (the homepage) keep their leading brand.
 */
export function optimizeTitle(rawTitle: string, options: { appendBrand?: boolean } = {}): string {
  const { appendBrand = true } = options;
  const cjk = isCjk(rawTitle);
  const max = cjk ? CJK_TITLE_MAX : TITLE_MAX;

  const bare = stripTrailingBrand(rawTitle);
  // A title that opens with the brand (homepage) does not need it appended again.
  const brandLed = bare.toLowerCase().startsWith(BRAND.toLowerCase());

  if (!appendBrand || brandLed) return clampAtBoundary(bare, max);

  const suffix = ` | ${BRAND}`;
  const room = max - suffix.length;

  // 1. Best case — the full descriptive title AND the brand both fit.
  if (bare.length <= room) return `${bare}${suffix}`;

  // 2. The brand does not fit, but the descriptive title does. Ship it without the
  //    brand. A complete, meaningful title outranks a truncated one carrying a
  //    brand the user already sees in the URL and breadcrumb — truncating
  //    "…Repair Kuala Lumpur & Selangor" down to "…Repair Kuala" to make room for
  //    the brand actively destroys the keyword.
  if (bare.length <= max) return bare;

  // 3. Genuinely too long either way — clamp the descriptive part on a boundary.
  return clampAtBoundary(bare, max);
}

/** Clamp a meta description to the SERP budget on a sentence or word boundary. */
export function optimizeDescription(rawDescription: string): string {
  const value = rawDescription.trim().replace(/\s+/g, " ");
  const max = isCjk(value) ? CJK_DESC_MAX : DESC_MAX;
  if (value.length <= max) return value;

  // Prefer ending on a complete sentence — but only when the surviving text
  // still fills the SERP snippet. Cutting at the first sentence break used to
  // discard the trailing value proposition on 51 sub-service pages, leaving
  // ~96-char descriptions well under the 110-char floor (e.g. "Kitchen
  // splashback, bathroom wall … patterns." dropped the pricing, insurance and
  // booking clause). Requiring `>= DESC_MIN` keeps the sentence cut only when
  // it produces a description that is actually long enough to be useful.
  const minKeep = isCjk(value) ? Math.floor(CJK_DESC_MAX * 0.7) : DESC_MIN;
  const sentenceEnd = Math.max(
    value.lastIndexOf(". ", max),
    value.lastIndexOf("! ", max),
    value.lastIndexOf("? ", max),
  );
  if (sentenceEnd >= minKeep) return value.slice(0, sentenceEnd + 1).trim();

  // Do not write a literal ellipsis into the source description. Search engines
  // apply device-specific truncation themselves; an authored "…" makes the
  // snippet look incomplete even when the full meta tag is displayed.
  return `${clampAtBoundary(value, max - 1).replace(/[.!?]+$/, "")}.`;
}

/** Normalise any path into a leading-slash, no-trailing-slash form. */
export function normalizePath(path: string): string {
  if (!path || path === "/") return "/";
  const withLeading = path.startsWith("/") ? path : `/${path}`;
  return withLeading.length > 1 && withLeading.endsWith("/")
    ? withLeading.slice(0, -1)
    : withLeading;
}

/** Absolute URL for a site-relative path. */
export function absoluteUrl(path: string): string {
  const normalized = normalizePath(path);
  return normalized === "/" ? SITE_URL : `${SITE_URL}${normalized}`;
}

/**
 * Build the `alternates` block.
 *
 * Language switching on this site is client-side (React context + localStorage) and
 * every locale is served from the SAME URL. hreflang must therefore be
 * self-referencing. Pointing `ms-MY` at `/ms/...` was actively harmful: those URLs
 * 301-redirect to the English path, and Google drops hreflang clusters whose
 * targets redirect.
 *
 * `omitLanguages` strips the `languages` field and ships `canonical` only. This
 * is the correct shape for a page that canonicalises to another URL — Google's
 * hreflang docs are explicit: "If page A points to page B via `rel=canonical`,
 * the canonical tag overrides hreflang on page A." So the canonicalised page
 * must NOT emit hreflang (the canonical page does). Every 1,036 suburb pages
 * and 28 cost pages were emitting a 4-lang hreflang cluster pointing at their
 * canonical, which Google silently dropped from the cluster and which
 * third-party hreflang validators flag as a defect.
 */
export function buildAlternates(path: string, omitLanguages = false) {
  const url = absoluteUrl(path);
  if (omitLanguages) {
    return { canonical: url };
  }
  return {
    canonical: url,
    languages: {
      "en-MY": url,
      "ms-MY": url,
      "zh-MY": url,
      "x-default": url,
    },
  };
}

export type BuildMetadataInput = {
  /** Descriptive title WITHOUT the brand suffix — the brand is appended for you. */
  title: string;
  description: string;
  /** Site-relative path, e.g. "/services/painting". */
  path: string;
  /**
   * Point the canonical (and hreflang cluster) at a *different* URL.
   *
   * Only for genuine duplicates: the 37 suburbs that are also coverage areas
   * publish the same service page under both `/suburbs/<x>/<svc>` and
   * `/areas/<x>/<svc>`. Consolidating them onto the `/areas` URL — which carries
   * the fuller content — stops the two versions competing for the same query.
   * Defaults to `path` so every other route stays self-canonical.
   */
  canonicalPath?: string;
  /**
   * Real per-language URLs for a genuine multilingual cluster (the tool pages).
   *
   * When provided, hreflang stops being self-referencing and instead links the
   * three sibling URLs — `/tools/<slug>`, `/ms/alatan/<slug>`, `/zh/gongju/<slug>`
   * — with `x-default` on the English one. Only use this when each URL serves
   * fully localised, indexable content (hreflang targets must never redirect).
   */
  languageUrls?: { en: string; ms: string; zh: string };
  /**
   * og:locale for this page; the other two locales are emitted as
   * og:locale:alternate. Defaults to the English site-wide values.
   */
  ogLocale?: string;
  ogAlternateLocales?: [string, string];
  image?: string;
  type?: "website" | "article";
  keywords?: string[];
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
  /** Set false for the homepage, whose title already leads with the brand. */
  appendBrand?: boolean;
};

/**
 * The one function every route should use to declare metadata.
 * Guarantees: a self-canonical, self-referencing hreflang, a ≤60 char title with
 * exactly one brand mention, a ≤158 char description, and complete OG/Twitter cards.
 */
export function buildMetadata({
  title,
  description,
  path,
  canonicalPath,
  languageUrls,
  ogLocale = "en_MY",
  ogAlternateLocales = ["ms_MY", "zh_MY"],
  image = siteConfig.defaultOgImage,
  type = "website",
  keywords = [],
  publishedTime,
  modifiedTime,
  noIndex = false,
  appendBrand = true,
}: BuildMetadataInput): Metadata {
  const finalTitle = optimizeTitle(title, { appendBrand });
  const finalDescription = optimizeDescription(description);
  // og:url should agree with the canonical, otherwise the two signals conflict.
  const url = absoluteUrl(canonicalPath ?? path);
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image.startsWith("/") ? image : `/${image}`}`;

  // A genuine multilingual cluster (the MS/ZH tool pages) links its three
  // sibling URLs. A page that points its canonical at a different URL must
  // NOT emit hreflang at all (Google: canonical overrides hreflang, and
  // emitting both creates a cluster the canonical does not reciprocate).
  // Every other route keeps the self-referencing cluster because its
  // languages share one URL.
  const alternates = languageUrls
    ? {
        canonical: url,
        languages: {
          "en-MY": absoluteUrl(languageUrls.en),
          "ms-MY": absoluteUrl(languageUrls.ms),
          "zh-MY": absoluteUrl(languageUrls.zh),
          "x-default": absoluteUrl(languageUrls.en),
        },
      }
    : buildAlternates(
        canonicalPath ?? path,
        // Omit hreflang when this page is canonicalised to a different URL.
        // The canonical page is responsible for the multilingual cluster.
        canonicalPath != null && canonicalPath !== path
      );

  return {
    title: finalTitle,
    description: finalDescription,
    ...(keywords.length ? { keywords } : {}),
    alternates,
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph: {
      title: finalTitle,
      description: finalDescription,
      url,
      siteName: BRAND,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: finalTitle }],
      locale: ogLocale,
      alternateLocale: [...ogAlternateLocales],
      type,
      ...(type === "article" ? { publishedTime, modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: finalTitle,
      description: finalDescription,
      images: [imageUrl],
    },
  };
}
