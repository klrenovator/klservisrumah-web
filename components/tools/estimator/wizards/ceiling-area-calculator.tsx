"use client";
import { ceilingAreaCalculatorSpec } from "@/lib/estimator/ceiling-area-calculator";
import { EstimatorForm } from "../estimator-form";
export default function Wizard() {
  return <EstimatorForm spec={ceilingAreaCalculatorSpec} />;
}
