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
export function toIsoDate(value?: string, fallback = "2026-07-24"): string {
  if (!value) return fallback;
  const trimmed = value.trim();
  if (/^\d{4}-\d{2}-\d{2}(T.*)?$/.test(trimmed)) return trimmed;
  const parsed = new Date(trimmed);
  if (Number.isNaN(parsed.getTime())) return fallback;
  return parsed.toISOString().slice(0, 10);
}
