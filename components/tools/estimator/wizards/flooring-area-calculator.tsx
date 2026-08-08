"use client";
import { flooringAreaCalculatorSpec } from "@/lib/estimator/flooring-area-calculator";
import { EstimatorForm } from "../estimator-form";
export default function Wizard() {
  return <EstimatorForm spec={flooringAreaCalculatorSpec} />;
}
