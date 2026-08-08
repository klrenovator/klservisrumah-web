"use client";
import { ceilingFanInstallationEstimatorSpec } from "@/lib/estimator/ceiling-fan-installation-estimator";
import { EstimatorForm } from "../estimator-form";
export default function Wizard() {
  return <EstimatorForm spec={ceilingFanInstallationEstimatorSpec} />;
}
