"use client";
import { buildHandymanCostEstimatorSpec } from "@/lib/estimator/builders/handyman-cost-estimator";
import { handymanCostEstimatorMsDict } from "@/lib/estimator/i18n/tools/handyman-cost-estimator-ms";
import { chromeMsDict } from "@/lib/estimator/i18n/chrome-ms";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(handymanCostEstimatorMsDict);
const chromeT = createStaticTranslator(chromeMsDict);
const spec = buildHandymanCostEstimatorSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
