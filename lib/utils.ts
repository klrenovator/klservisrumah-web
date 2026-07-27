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
 * Normalise a human-readable date ("July 20, 2026") into ISO-8601 ("2026-07-20").
 *
 * Schema.org `datePublished`/`dateModified` and Open Graph `article:published_time`
 * both require ISO-8601. Blog data was authored as display strings, which Google's
 * Rich Results Test rejects as invalid date values — silently costing Article rich
 * results on every post. Values already in ISO form pass through untouched.
 */
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
  const tokens = warranty.trim().split(/\s+/);
  const durationLike = /\d|year|month|day|tahun|bulan|hari|年|个月|月|天|日/i;
  const take: string[] = [];
  for (const token of tokens) {
    take.push(token);
    if (durationLike.test(token)) {
      const joined = take.join(" ");
      // Stop as soon as we've captured the duration phrase. A duration token
      // that ends with a hyphenated unit (e.g. "5-Year", "90-Day") terminates
      // the phrase. If it's a bare number before "to" (e.g. "Up to 5-Year"),
      // keep going until the unit token.
      if (/\d+-(Year|Day|Month|Tahun|Bulan|Hari|年|个月|天)/i.test(joined)) {
        return joined;
      }
      if (/\d+$/i.test(token) && tokens[take.length]?.toLowerCase() === "to") {
        continue;
      }
      // If next token is the unit (e.g. "5 years" / "90 days"), include it.
      const next = tokens[take.length]?.toLowerCase();
      if (next && /^(years?|year|days?|day|months?|month|tahun|bulan|hari|年|个月|月|天|日)$/.test(next)) {
        take.push(tokens[take.length]);
      }
      return take.join(" ");
    }
    // Safety cap — never run past the first 5 tokens.
    if (take.length >= 5) break;
  }
  return take.join(" ") || warranty;
}

export function toIsoDate(value?: string, fallback = "2026-07-24"): string {
  if (!value) return fallback;
  const trimmed = value.trim();
  if (/^\d{4}-\d{2}-\d{2}(T.*)?$/.test(trimmed)) return trimmed;
  const parsed = new Date(trimmed);
  if (Number.isNaN(parsed.getTime())) return fallback;
  return parsed.toISOString().slice(0, 10);
}
