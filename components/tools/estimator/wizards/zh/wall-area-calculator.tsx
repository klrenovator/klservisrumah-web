"use client";
import { buildWallAreaCalculatorSpec } from "@/lib/estimator/builders/wall-area-calculator";
import { wallAreaCalculatorZhDict } from "@/lib/estimator/i18n/tools/wall-area-calculator-zh";
import { chromeZhDict } from "@/lib/estimator/i18n/chrome-zh";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(wallAreaCalculatorZhDict);
const chromeT = createStaticTranslator(chromeZhDict);
const spec = buildWallAreaCalculatorSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
