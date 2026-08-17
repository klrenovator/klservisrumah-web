"use client";
import { airconServicePickerSpec } from "@/lib/estimator/aircon-service-picker";
import { EstimatorForm } from "../estimator-form";
export default function Wizard() {
  return <EstimatorForm spec={airconServicePickerSpec} />;
}
