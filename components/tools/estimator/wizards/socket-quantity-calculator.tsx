"use client";
import { socketQuantityCalculatorSpec } from "@/lib/estimator/socket-quantity-calculator";
import { EstimatorForm } from "../estimator-form";
export default function Wizard() {
  return <EstimatorForm spec={socketQuantityCalculatorSpec} />;
}
