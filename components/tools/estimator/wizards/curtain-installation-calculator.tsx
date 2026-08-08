"use client";
import { curtainInstallationCalculatorSpec } from "@/lib/estimator/curtain-installation-calculator";
import { EstimatorForm } from "../estimator-form";
export default function Wizard() {
  return <EstimatorForm spec={curtainInstallationCalculatorSpec} />;
}
