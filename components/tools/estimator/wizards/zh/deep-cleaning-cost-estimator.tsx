"use client";
import { buildDeepCleaningCostEstimatorSpec } from "@/lib/estimator/builders/deep-cleaning-cost-estimator";
import { deepCleaningCostEstimatorZhDict } from "@/lib/estimator/i18n/tools/deep-cleaning-cost-estimator-zh";
import { chromeZhDict } from "@/lib/estimator/i18n/chrome-zh";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(deepCleaningCostEstimatorZhDict);
const chromeT = createStaticTranslator(chromeZhDict);
const spec = buildDeepCleaningCostEstimatorSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
