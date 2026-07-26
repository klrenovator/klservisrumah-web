/** Currency formatting shared by every estimator surface. */
export function formatMYR(value: number): string {
  if (!Number.isFinite(value)) return "RM 0";
  return `RM ${Math.round(value).toLocaleString("en-MY")}`;
}

/** The disclaimer that must appear before any customer books. */
export const ESTIMATE_DISCLAIMER =
  "This is an estimated quotation based on the information provided. Final pricing may change after an on-site inspection depending on actual site conditions.";
