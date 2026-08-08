"use client";
import { glassReplacementCalculatorSpec } from "@/lib/estimator/glass-replacement-calculator";
import { EstimatorForm } from "../estimator-form";
export default function Wizard() {
  return <EstimatorForm spec={glassReplacementCalculatorSpec} />;
}
