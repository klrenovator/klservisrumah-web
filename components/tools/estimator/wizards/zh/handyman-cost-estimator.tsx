"use client";
import { buildHandymanCostEstimatorSpec } from "@/lib/estimator/builders/handyman-cost-estimator";
import { handymanCostEstimatorZhDict } from "@/lib/estimator/i18n/tools/handyman-cost-estimator-zh";
import { chromeZhDict } from "@/lib/estimator/i18n/chrome-zh";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(handymanCostEstimatorZhDict);
const chromeT = createStaticTranslator(chromeZhDict);
const spec = buildHandymanCostEstimatorSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
