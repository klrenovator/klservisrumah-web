"use client";
import { airconBtuCalculatorSpec } from "@/lib/estimator/aircon-btu-calculator";
import { EstimatorForm } from "../estimator-form";
export default function Wizard() {
  return <EstimatorForm spec={airconBtuCalculatorSpec} />;
}
