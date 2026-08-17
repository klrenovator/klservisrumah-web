"use client";
import { airconSizeCalculatorSpec } from "@/lib/estimator/aircon-size-calculator";
import { EstimatorForm } from "../estimator-form";
export default function Wizard() {
  return <EstimatorForm spec={airconSizeCalculatorSpec} />;
}
