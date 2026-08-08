"use client";
import { buildCeilingAreaCalculatorSpec } from "@/lib/estimator/builders/ceiling-area-calculator";
import { ceilingAreaCalculatorMsDict } from "@/lib/estimator/i18n/tools/ceiling-area-calculator-ms";
import { chromeMsDict } from "@/lib/estimator/i18n/chrome-ms";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(ceilingAreaCalculatorMsDict);
const chromeT = createStaticTranslator(chromeMsDict);
const spec = buildCeilingAreaCalculatorSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
