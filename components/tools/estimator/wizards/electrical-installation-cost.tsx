"use client";
import { electricalInstallationCostSpec } from "@/lib/estimator/electrical-installation-cost";
import { EstimatorForm } from "../estimator-form";
export default function Wizard() {
  return <EstimatorForm spec={electricalInstallationCostSpec} />;
}
