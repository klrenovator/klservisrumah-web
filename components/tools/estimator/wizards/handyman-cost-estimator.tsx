"use client";
import { handymanCostEstimatorSpec } from "@/lib/estimator/handyman-cost-estimator";
import { EstimatorForm } from "../estimator-form";
export default function Wizard() {
  return <EstimatorForm spec={handymanCostEstimatorSpec} />;
}
