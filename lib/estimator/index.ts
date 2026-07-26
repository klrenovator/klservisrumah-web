import type { EstimatorSpec } from "./types";
import { paintingSpec } from "./painting";
import { leakSpec } from "./leak";
import { ceilingSpec } from "./ceiling";
import { plumbingSpec } from "./plumbing";
import { tvMountSpec } from "./tv-mount";

export const estimatorSpecs: Record<string, EstimatorSpec> = {
  "painting-calculator": paintingSpec,
  "leak-triage": leakSpec,
  "ceiling-calculator": ceilingSpec,
  "plumbing-diagnostic": plumbingSpec,
  "tv-mount-advisor": tvMountSpec
};

export { paintingSpec, leakSpec, ceilingSpec, plumbingSpec, tvMountSpec };
export * from "./types";
export { formatMYR } from "./format";
