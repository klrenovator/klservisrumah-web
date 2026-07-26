/**
 * Estimator pricing accessors.
 *
 * The numbers live in `rate-book.generated.ts`, which is regenerated from the
 * website's published pricing on every build by `scripts/generate-rate-book.ts`:
 *
 *   1. `config/services-data.ts`  → `startPrice` + `subServices[].price`
 *   2. `config/market-rates.ts`   → `publishedRate` + `marketRange`
 *
 * Importing the generated file rather than the source configs keeps the client
 * bundle small — `services-data.ts` alone is ~3,300 lines of trilingual copy
 * that pulled a 436 KB chunk into every tool page. Nothing here re-states a
 * price as a literal; the only constants are *ratios* describing how a scope
 * scales, never a currency amount.
 */

import { RATES, PRICE_LABELS, type PriceLabelKey, type RateRange } from "./rate-book.generated";

export type Range = RateRange;

export { RATES };

/**
 * The published price string for a scope, e.g. "From RM 450 / room".
 * Used verbatim in estimator explanations so customers can trace every figure
 * back to a price we publish.
 */
export function priceLabel(key: PriceLabelKey): string {
  return PRICE_LABELS[key];
}

/** Round to the nearest RM 10 so estimates read like a real quotation. */
export function roundMoney(value: number, nearest = 10): number {
  if (!Number.isFinite(value) || value <= 0) return 0;
  return Math.max(nearest, Math.round(value / nearest) * nearest);
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/** Interpolate inside a published market band (0 = low end, 1 = high end). */
export function withinBand(band: Range, position: number): number {
  return band.low + (band.high - band.low) * clamp(position, 0, 1);
}
