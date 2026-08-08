"use client";
import { pipeLeakEstimatorSpec } from "@/lib/estimator/pipe-leak-estimator";
import { EstimatorForm } from "../estimator-form";
export default function Wizard() {
  return <EstimatorForm spec={pipeLeakEstimatorSpec} />;
}
