"use client";
import { buildWaterproofingCostCalculatorSpec } from "@/lib/estimator/builders/waterproofing-cost-calculator";
import { waterproofingCostCalculatorZhDict } from "@/lib/estimator/i18n/tools/waterproofing-cost-calculator-zh";
import { chromeZhDict } from "@/lib/estimator/i18n/chrome-zh";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(waterproofingCostCalculatorZhDict);
const chromeT = createStaticTranslator(chromeZhDict);
const spec = buildWaterproofingCostCalculatorSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
