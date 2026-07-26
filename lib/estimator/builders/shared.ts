/**
 * Shared helpers for the deep-tool spec builders.
 *
 * Locale-free: this module must never import a content dictionary, so the
 * per-locale wizard bundles stay single-language.
 */

import type { Translator } from "../../i18n";
import type { Answers } from "../types";

/**
 * Optional string lookup. Translators resolve a missing key to the key
 * itself, which would leak "targets.ceiling.note" into the UI; this converts
 * an unresolved key back to `undefined` so optional copy can stay optional.
 */
export function opt(t: Translator, key: string, vars?: Record<string, string | number>): string | undefined {
  const value = t(key, vars);
  return value === key ? undefined : value;
}

/** Numeric answer with fallback — guards against NaN and non-positive input. */
export function num(value: unknown, fallback: number): number {
  const parsed = typeof value === "number" ? value : Number(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

/** Multi-select answers arrive as string arrays; anything else is empty. */
export function asArray(value: unknown): string[] {
  return Array.isArray(value) ? (value as string[]) : [];
}

/** Find the `add` ratio for a catalogue row value. */
export function pickAdd<T extends { value: string; add: number }>(table: T[], value: unknown): number {
  return table.find((row) => row.value === value)?.add ?? 0;
}

export type { Answers, Translator };
