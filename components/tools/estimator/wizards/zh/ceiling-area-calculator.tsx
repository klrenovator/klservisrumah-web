"use client";
import { buildCeilingAreaCalculatorSpec } from "@/lib/estimator/builders/ceiling-area-calculator";
import { ceilingAreaCalculatorZhDict } from "@/lib/estimator/i18n/tools/ceiling-area-calculator-zh";
import { chromeZhDict } from "@/lib/estimator/i18n/chrome-zh";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(ceilingAreaCalculatorZhDict);
const chromeT = createStaticTranslator(chromeZhDict);
const spec = buildCeilingAreaCalculatorSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
