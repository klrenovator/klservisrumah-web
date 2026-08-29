import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

export function truncateWords(input: string, maxWords: number) {
  const words = input.trim().split(/\s+/);
  if (words.length <= maxWords) return input;
  return `${words.slice(0, maxWords).join(" ")}…`;
}

export function formatCurrencyRange(startPrice: string) {
  return startPrice.replace(/\s+/g, " ").trim();
}

/**
 * Extract the human-readable "duration lead" from a warranty string.
 *
 * Warranty strings come in two shapes:
 *   - "1-Year Paint Peeling & Craftsmanship Guarantee" → lead: "1-Year"
 *   - "Up to 5-Year Written Leak-Free Guarantee"       → lead: "Up to 5-Year"
 *
 * A naive `warranty.split(" ")[0]` previously turned the second form into just
 * "Up", producing visibly broken badges ("Up Guarantee"). This helper walks the
 * leading tokens until we have a complete duration phrase, then stops.
 */
export function warrantyLead(warranty: string): string {
  const w = warranty.trim();
  
  // 1. English patterns (e.g. "Up to 5-Year", "1-Year", "30-Day")
  const matchEn = w.match(/^(Up to\s+\d+-\w+|\d+-\w+)/i);
  if (matchEn) return matchEn[1];
  
  // 2. Malay patterns (e.g. "Sehingga 5 Tahun", "1 Tahun", "30 Hari")
  const matchMs = w.match(/(sehingga\s+\d+\s+(tahun|bulan|hari|jam)|\d+\s+(tahun|bulan|hari|jam))/i);
  if (matchMs) return matchMs[1];
  
  // 3. Chinese patterns (e.g. "长达 5 年", "1 年", "30 天")
  const matchZh = w.match(/(长达\s*\d+\s*(年|个月|天|小时)|\d+\s*(年|个月|天|小时|月))/);
  if (matchZh) return matchZh[1];
  
  return w;
}

/**
 * Default date used when a content date is missing or unparseable.
 *
 * Deliberately a named, manually-maintained constant and NOT an auto-computed
 * "today": a daily-shifting `dateModified` makes every page look perpetually
 * touched, which erodes the trust signals schema dates are meant to provide.
 * Update this when a real content release ships (see SESSION_LOG.md).
 */
export const DEFAULT_CONTENT_DATE = "2026-08-16";

/**
 * Normalise a human-readable date ("July 20, 2026") into ISO-8601 ("2026-07-20").
 *
 * Schema.org `datePublished`/`dateModified` and Open Graph `article:published_time`
 * both require ISO-8601. Blog data was authored as display strings, which Google's
 * Rich Results Test rejects as invalid date values — silently costing Article rich
 * results on every post. Values already in ISO form pass through untouched.
 */
export function toIsoDate(value?: string, fallback = DEFAULT_CONTENT_DATE): string {
  if (!value) return fallback;
  const trimmed = value.trim();
  if (/^\d{4}-\d{2}-\d{2}(T.*)?$/.test(trimmed)) return trimmed;
  const parsed = new Date(trimmed);
  if (Number.isNaN(parsed.getTime())) return fallback;
  return parsed.toISOString().slice(0, 10);
}

/**
 * P2-19: per-article `dateModified`.
 *
 * The Part 2 audit found `dateModified = datePublished` on every blog post —
 * a false "never edited" signal for migrated content. Without a per-article
 * edit log, the honest stable signal is the site-wide content release/QA
 * date (`DEFAULT_CONTENT_DATE`, 2026-08-16 — the documented migration date):
 * anything published before it was last reviewed on that date; anything
 * published after it (the awning cluster) has never been edited since.
 * Always >= datePublished, so schema/OG validity holds.
 */
export function blogDateModified(date?: string): string {
  const published = toIsoDate(date);
  return published < DEFAULT_CONTENT_DATE ? DEFAULT_CONTENT_DATE : published;
}
