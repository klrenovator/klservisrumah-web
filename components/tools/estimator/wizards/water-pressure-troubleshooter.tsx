"use client";
import { waterPressureTroubleshooterSpec } from "@/lib/estimator/water-pressure-troubleshooter";
import { EstimatorForm } from "../estimator-form";
export default function Wizard() {
  return <EstimatorForm spec={waterPressureTroubleshooterSpec} />;
}
