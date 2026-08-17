"use client";
import { airconGasTopupCostSpec } from "@/lib/estimator/aircon-gas-topup-cost";
import { EstimatorForm } from "../estimator-form";
export default function Wizard() {
  return <EstimatorForm spec={airconGasTopupCostSpec} />;
}
