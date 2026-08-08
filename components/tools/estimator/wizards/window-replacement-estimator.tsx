"use client";
import { windowReplacementEstimatorSpec } from "@/lib/estimator/window-replacement-estimator";
import { EstimatorForm } from "../estimator-form";
export default function Wizard() {
  return <EstimatorForm spec={windowReplacementEstimatorSpec} />;
}
