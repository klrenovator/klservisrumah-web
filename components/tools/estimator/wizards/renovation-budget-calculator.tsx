"use client";
import { renovationBudgetCalculatorSpec } from "@/lib/estimator/renovation-budget-calculator";
import { EstimatorForm } from "../estimator-form";
export default function Wizard() {
  return <EstimatorForm spec={renovationBudgetCalculatorSpec} />;
}
