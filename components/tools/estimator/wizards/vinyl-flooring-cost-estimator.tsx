"use client";
import { vinylFlooringCostEstimatorSpec } from "@/lib/estimator/vinyl-flooring-cost-estimator";
import { EstimatorForm } from "../estimator-form";
export default function Wizard() {
  return <EstimatorForm spec={vinylFlooringCostEstimatorSpec} />;
}
