"use client";
import { deepCleaningCostEstimatorSpec } from "@/lib/estimator/deep-cleaning-cost-estimator";
import { EstimatorForm } from "../estimator-form";
export default function Wizard() {
  return <EstimatorForm spec={deepCleaningCostEstimatorSpec} />;
}
