"use client";
import { buildFlooringAreaCalculatorSpec } from "@/lib/estimator/builders/flooring-area-calculator";
import { flooringAreaCalculatorMsDict } from "@/lib/estimator/i18n/tools/flooring-area-calculator-ms";
import { chromeMsDict } from "@/lib/estimator/i18n/chrome-ms";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(flooringAreaCalculatorMsDict);
const chromeT = createStaticTranslator(chromeMsDict);
const spec = buildFlooringAreaCalculatorSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
