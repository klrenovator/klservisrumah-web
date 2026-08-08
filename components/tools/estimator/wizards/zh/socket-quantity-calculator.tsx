"use client";
import { buildSocketQuantityCalculatorSpec } from "@/lib/estimator/builders/socket-quantity-calculator";
import { socketQuantityCalculatorZhDict } from "@/lib/estimator/i18n/tools/socket-quantity-calculator-zh";
import { chromeZhDict } from "@/lib/estimator/i18n/chrome-zh";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(socketQuantityCalculatorZhDict);
const chromeT = createStaticTranslator(chromeZhDict);
const spec = buildSocketQuantityCalculatorSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
