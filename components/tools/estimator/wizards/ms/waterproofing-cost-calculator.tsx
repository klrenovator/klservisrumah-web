"use client";
import { buildWaterproofingCostCalculatorSpec } from "@/lib/estimator/builders/waterproofing-cost-calculator";
import { waterproofingCostCalculatorMsDict } from "@/lib/estimator/i18n/tools/waterproofing-cost-calculator-ms";
import { chromeMsDict } from "@/lib/estimator/i18n/chrome-ms";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(waterproofingCostCalculatorMsDict);
const chromeT = createStaticTranslator(chromeMsDict);
const spec = buildWaterproofingCostCalculatorSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
