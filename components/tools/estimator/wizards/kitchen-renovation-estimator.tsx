"use client";
import { kitchenRenovationEstimatorSpec } from "@/lib/estimator/kitchen-renovation-estimator";
import { EstimatorForm } from "../estimator-form";
export default function Wizard() {
  return <EstimatorForm spec={kitchenRenovationEstimatorSpec} />;
}
