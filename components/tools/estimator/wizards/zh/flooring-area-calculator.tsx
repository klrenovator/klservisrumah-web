"use client";
import { buildFlooringAreaCalculatorSpec } from "@/lib/estimator/builders/flooring-area-calculator";
import { flooringAreaCalculatorZhDict } from "@/lib/estimator/i18n/tools/flooring-area-calculator-zh";
import { chromeZhDict } from "@/lib/estimator/i18n/chrome-zh";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(flooringAreaCalculatorZhDict);
const chromeT = createStaticTranslator(chromeZhDict);
const spec = buildFlooringAreaCalculatorSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
