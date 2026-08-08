"use client";
import { wallAreaCalculatorSpec } from "@/lib/estimator/wall-area-calculator";
import { EstimatorForm } from "../estimator-form";
export default function Wizard() {
  return <EstimatorForm spec={wallAreaCalculatorSpec} />;
}
