"use client";
import { lightingInstallationCalculatorSpec } from "@/lib/estimator/lighting-installation-calculator";
import { EstimatorForm } from "../estimator-form";
export default function Wizard() {
  return <EstimatorForm spec={lightingInstallationCalculatorSpec} />;
}
