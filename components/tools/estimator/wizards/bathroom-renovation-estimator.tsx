"use client";
import { bathroomRenovationEstimatorSpec } from "@/lib/estimator/bathroom-renovation-estimator";
import { EstimatorForm } from "../estimator-form";
export default function Wizard() {
  return <EstimatorForm spec={bathroomRenovationEstimatorSpec} />;
}
