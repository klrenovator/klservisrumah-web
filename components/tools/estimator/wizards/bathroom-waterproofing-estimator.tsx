"use client";
import { bathroomWaterproofingEstimatorSpec } from "@/lib/estimator/bathroom-waterproofing-estimator";
import { EstimatorForm } from "../estimator-form";
export default function Wizard() {
  return <EstimatorForm spec={bathroomWaterproofingEstimatorSpec} />;
}
