"use client";
import { roofAreaCalculatorSpec } from "@/lib/estimator/roof-area-calculator";
import { EstimatorForm } from "../estimator-form";
export default function Wizard() {
  return <EstimatorForm spec={roofAreaCalculatorSpec} />;
}
