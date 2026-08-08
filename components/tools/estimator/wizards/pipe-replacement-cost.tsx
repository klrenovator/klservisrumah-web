"use client";
import { pipeReplacementCostSpec } from "@/lib/estimator/pipe-replacement-cost";
import { EstimatorForm } from "../estimator-form";
export default function Wizard() {
  return <EstimatorForm spec={pipeReplacementCostSpec} />;
}
