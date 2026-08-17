"use client";
import { airconSavingsCalculatorSpec } from "@/lib/estimator/aircon-savings-calculator";
import { EstimatorForm } from "../estimator-form";
export default function Wizard() {
  return <EstimatorForm spec={airconSavingsCalculatorSpec} />;
}
