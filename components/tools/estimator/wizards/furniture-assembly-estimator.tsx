"use client";
import { furnitureAssemblyEstimatorSpec } from "@/lib/estimator/furniture-assembly-estimator";
import { EstimatorForm } from "../estimator-form";
export default function Wizard() {
  return <EstimatorForm spec={furnitureAssemblyEstimatorSpec} />;
}
