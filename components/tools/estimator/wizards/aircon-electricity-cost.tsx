"use client";
import { airconElectricityCostSpec } from "@/lib/estimator/aircon-electricity-cost";
import { EstimatorForm } from "../estimator-form";
export default function Wizard() {
  return <EstimatorForm spec={airconElectricityCostSpec} />;
}
