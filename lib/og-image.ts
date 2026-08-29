/**
 * Raster OG-image URLs (audit P5-13 / P5-14).
 *
 * WHY THIS EXISTS
 * ---------------
 * Part 5 P5-13 (HIGH) found og:image pointing at SVGs (`hero-*.svg`,
 * blog cover SVGs) on ~2,200+ pages. WhatsApp, Facebook, Telegram and
 * iMessage refuse SVG previews — for a WhatsApp-first business that means
 * every shared link renders as a bare URL card. P5-14 found the same SVGs
 * in schema `image` fields (Service.image, BlogPosting.image), which
 * Google's structured-data pipeline also skips.
 *
 * `app/og-image/route.tsx` renders a 1200×630 PNG on demand with
 * `next/og` (satori), so every page gets a unique raster preview carrying
 * its real title — no image assets to maintain, no third-party requests.
 *
 * These helpers centralise the decision: SVG images are replaced by the
 * raster template URL; raster images (webp/jpg/png) pass through untouched
 * (tools already use raster heroes; `/logo/og-image.jpg` is the fallback).
 */

export type OgTemplate =
  | "default"
  | "service"
  | "area"
  | "blog"
  | "tool"
  | "problem"
  | "cost"
  | "pod";

/** Drops control characters (kept as a function so ESLint's
    no-control-regex rule stays happy while the route stays sanitising). */
function stripControlChars(value: string): string {
  let out = "";
  for (const ch of value) {
    const code = ch.charCodeAt(0);
    if (code >= 0x20 && code !== 0x7f) out += ch;
  }
  return out;
}

/** Returns the raster template URL for a title (absolute path form). */
export function ogImageUrl(title: string, template: OgTemplate = "default"): string {
  const clean = stripControlChars(title)
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 160);
  const params = new URLSearchParams({
    title: clean || "Home services in KL & Selangor",
    t: template,
  });
  return `/og-image?${params.toString()}`;
}

export function isSvgImage(url: string): boolean {
  return /\.svg($|\?)/i.test(url);
}

/**
 * P5-13/P5-14 — SVG images are unusable as og:image / schema image.
 * Returns a raster URL (the next/og template) for SVGs, or the original
 * image untouched for raster formats.
 */
export function rasterOgFor(
  image: string,
  title: string,
  template: OgTemplate = "default"
): string {
  return isSvgImage(image) ? ogImageUrl(title, template) : image;
}
