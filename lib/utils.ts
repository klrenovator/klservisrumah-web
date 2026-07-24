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
