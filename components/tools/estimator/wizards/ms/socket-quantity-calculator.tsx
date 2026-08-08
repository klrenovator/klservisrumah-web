"use client";
import { buildSocketQuantityCalculatorSpec } from "@/lib/estimator/builders/socket-quantity-calculator";
import { socketQuantityCalculatorMsDict } from "@/lib/estimator/i18n/tools/socket-quantity-calculator-ms";
import { chromeMsDict } from "@/lib/estimator/i18n/chrome-ms";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(socketQuantityCalculatorMsDict);
const chromeT = createStaticTranslator(chromeMsDict);
const spec = buildSocketQuantityCalculatorSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
