/** Currency formatting shared by every estimator surface. */
export function formatMYR(value: number): string {
  if (!Number.isFinite(value)) return "RM 0";
  return `RM ${Math.round(value).toLocaleString("en-MY")}`;
}

/** The disclaimer that must appear before any customer books. */
export const ESTIMATE_DISCLAIMER =
  "This is an estimated price only. Final quotation will be provided after inspection or after confirming project details.";
