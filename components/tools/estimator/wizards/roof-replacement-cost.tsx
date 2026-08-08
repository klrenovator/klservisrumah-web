"use client";
import { roofReplacementCostSpec } from "@/lib/estimator/roof-replacement-cost";
import { EstimatorForm } from "../estimator-form";
export default function Wizard() {
  return <EstimatorForm spec={roofReplacementCostSpec} />;
}
