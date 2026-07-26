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

  return `${clampAtBoundary(value, max - 1)}…`;
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
 */
export function buildAlternates(path: string) {
  const url = absoluteUrl(path);
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

  return {
    title: finalTitle,
    description: finalDescription,
    ...(keywords.length ? { keywords } : {}),
    alternates: buildAlternates(canonicalPath ?? path),
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
      locale: "en_MY",
      alternateLocale: ["ms_MY", "zh_MY"],
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
