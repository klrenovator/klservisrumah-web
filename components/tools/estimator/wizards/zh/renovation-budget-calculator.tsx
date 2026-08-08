"use client";
import { buildRenovationBudgetCalculatorSpec } from "@/lib/estimator/builders/renovation-budget-calculator";
import { renovationBudgetCalculatorZhDict } from "@/lib/estimator/i18n/tools/renovation-budget-calculator-zh";
import { chromeZhDict } from "@/lib/estimator/i18n/chrome-zh";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(renovationBudgetCalculatorZhDict);
const chromeT = createStaticTranslator(chromeZhDict);
const spec = buildRenovationBudgetCalculatorSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
