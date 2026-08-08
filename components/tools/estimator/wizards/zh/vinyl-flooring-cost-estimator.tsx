"use client";
import { buildVinylFlooringCostEstimatorSpec } from "@/lib/estimator/builders/vinyl-flooring-cost-estimator";
import { vinylFlooringCostEstimatorZhDict } from "@/lib/estimator/i18n/tools/vinyl-flooring-cost-estimator-zh";
import { chromeZhDict } from "@/lib/estimator/i18n/chrome-zh";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(vinylFlooringCostEstimatorZhDict);
const chromeT = createStaticTranslator(chromeZhDict);
const spec = buildVinylFlooringCostEstimatorSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
