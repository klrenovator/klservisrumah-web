"use client";
import { buildRoofAreaCalculatorSpec } from "@/lib/estimator/builders/roof-area-calculator";
import { roofAreaCalculatorZhDict } from "@/lib/estimator/i18n/tools/roof-area-calculator-zh";
import { chromeZhDict } from "@/lib/estimator/i18n/chrome-zh";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(roofAreaCalculatorZhDict);
const chromeT = createStaticTranslator(chromeZhDict);
const spec = buildRoofAreaCalculatorSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
