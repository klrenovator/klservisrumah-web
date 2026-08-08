"use client";
import { paintQuantityEstimatorSpec } from "@/lib/estimator/paint-quantity-estimator";
import { EstimatorForm } from "../estimator-form";
export default function Wizard() {
  return <EstimatorForm spec={paintQuantityEstimatorSpec} />;
}
