"use client";
import { balconyWaterproofingEstimatorSpec } from "@/lib/estimator/balcony-waterproofing-estimator";
import { EstimatorForm } from "../estimator-form";
export default function Wizard() {
  return <EstimatorForm spec={balconyWaterproofingEstimatorSpec} />;
}
