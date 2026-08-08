"use client";
import { buildGlassReplacementCalculatorSpec } from "@/lib/estimator/builders/glass-replacement-calculator";
import { glassReplacementCalculatorMsDict } from "@/lib/estimator/i18n/tools/glass-replacement-calculator-ms";
import { chromeMsDict } from "@/lib/estimator/i18n/chrome-ms";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(glassReplacementCalculatorMsDict);
const chromeT = createStaticTranslator(chromeMsDict);
const spec = buildGlassReplacementCalculatorSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
