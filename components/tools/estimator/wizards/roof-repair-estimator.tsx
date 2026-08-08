"use client";
import { roofRepairEstimatorSpec } from "@/lib/estimator/roof-repair-estimator";
import { EstimatorForm } from "../estimator-form";
export default function Wizard() {
  return <EstimatorForm spec={roofRepairEstimatorSpec} />;
}
