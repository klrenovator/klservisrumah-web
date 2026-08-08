"use client";
import { waterproofingCostCalculatorSpec } from "@/lib/estimator/waterproofing-cost-calculator";
import { EstimatorForm } from "../estimator-form";
export default function Wizard() {
  return <EstimatorForm spec={waterproofingCostCalculatorSpec} />;
}
