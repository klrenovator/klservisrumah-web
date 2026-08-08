"use client";
import { buildDeepCleaningCostEstimatorSpec } from "@/lib/estimator/builders/deep-cleaning-cost-estimator";
import { deepCleaningCostEstimatorMsDict } from "@/lib/estimator/i18n/tools/deep-cleaning-cost-estimator-ms";
import { chromeMsDict } from "@/lib/estimator/i18n/chrome-ms";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(deepCleaningCostEstimatorMsDict);
const chromeT = createStaticTranslator(chromeMsDict);
const spec = buildDeepCleaningCostEstimatorSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
