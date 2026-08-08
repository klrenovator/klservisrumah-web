"use client";
import { ceilingReplacementCostSpec } from "@/lib/estimator/ceiling-replacement-cost";
import { EstimatorForm } from "../estimator-form";
export default function Wizard() {
  return <EstimatorForm spec={ceilingReplacementCostSpec} />;
}
