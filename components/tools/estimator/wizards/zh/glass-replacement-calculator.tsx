"use client";
import { buildGlassReplacementCalculatorSpec } from "@/lib/estimator/builders/glass-replacement-calculator";
import { glassReplacementCalculatorZhDict } from "@/lib/estimator/i18n/tools/glass-replacement-calculator-zh";
import { chromeZhDict } from "@/lib/estimator/i18n/chrome-zh";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(glassReplacementCalculatorZhDict);
const chromeT = createStaticTranslator(chromeZhDict);
const spec = buildGlassReplacementCalculatorSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
