"use client";
import { buildRoofAreaCalculatorSpec } from "@/lib/estimator/builders/roof-area-calculator";
import { roofAreaCalculatorMsDict } from "@/lib/estimator/i18n/tools/roof-area-calculator-ms";
import { chromeMsDict } from "@/lib/estimator/i18n/chrome-ms";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(roofAreaCalculatorMsDict);
const chromeT = createStaticTranslator(chromeMsDict);
const spec = buildRoofAreaCalculatorSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
