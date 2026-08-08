"use client";
import { tileQuantityCalculatorSpec } from "@/lib/estimator/tile-quantity-calculator";
import { EstimatorForm } from "../estimator-form";
export default function Wizard() {
  return <EstimatorForm spec={tileQuantityCalculatorSpec} />;
}
