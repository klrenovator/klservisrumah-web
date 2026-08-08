"use client";
import { moveInOutCleaningCalculatorSpec } from "@/lib/estimator/move-in-out-cleaning-calculator";
import { EstimatorForm } from "../estimator-form";
export default function Wizard() {
  return <EstimatorForm spec={moveInOutCleaningCalculatorSpec} />;
}
