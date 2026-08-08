"use client";
import { roomRenovationEstimatorSpec } from "@/lib/estimator/room-renovation-estimator";
import { EstimatorForm } from "../estimator-form";
export default function Wizard() {
  return <EstimatorForm spec={roomRenovationEstimatorSpec} />;
}
