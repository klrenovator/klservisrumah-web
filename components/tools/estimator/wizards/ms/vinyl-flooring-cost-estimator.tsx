"use client";
import { buildVinylFlooringCostEstimatorSpec } from "@/lib/estimator/builders/vinyl-flooring-cost-estimator";
import { vinylFlooringCostEstimatorMsDict } from "@/lib/estimator/i18n/tools/vinyl-flooring-cost-estimator-ms";
import { chromeMsDict } from "@/lib/estimator/i18n/chrome-ms";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(vinylFlooringCostEstimatorMsDict);
const chromeT = createStaticTranslator(chromeMsDict);
const spec = buildVinylFlooringCostEstimatorSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
