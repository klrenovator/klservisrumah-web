"use client";
import { buildWallAreaCalculatorSpec } from "@/lib/estimator/builders/wall-area-calculator";
import { wallAreaCalculatorMsDict } from "@/lib/estimator/i18n/tools/wall-area-calculator-ms";
import { chromeMsDict } from "@/lib/estimator/i18n/chrome-ms";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(wallAreaCalculatorMsDict);
const chromeT = createStaticTranslator(chromeMsDict);
const spec = buildWallAreaCalculatorSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
