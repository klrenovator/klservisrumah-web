"use client";
import { airconInstallationCostSpec } from "@/lib/estimator/aircon-installation-cost";
import { EstimatorForm } from "../estimator-form";
export default function Wizard() {
  return <EstimatorForm spec={airconInstallationCostSpec} />;
}
