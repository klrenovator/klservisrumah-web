"use client";
import { buildRenovationBudgetCalculatorSpec } from "@/lib/estimator/builders/renovation-budget-calculator";
import { renovationBudgetCalculatorMsDict } from "@/lib/estimator/i18n/tools/renovation-budget-calculator-ms";
import { chromeMsDict } from "@/lib/estimator/i18n/chrome-ms";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(renovationBudgetCalculatorMsDict);
const chromeT = createStaticTranslator(chromeMsDict);
const spec = buildRenovationBudgetCalculatorSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
