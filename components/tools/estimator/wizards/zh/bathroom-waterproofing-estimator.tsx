"use client";
import { buildBathroomWaterproofingEstimatorSpec } from "@/lib/estimator/builders/bathroom-waterproofing-estimator";
import { bathroomWaterproofingEstimatorZhDict } from "@/lib/estimator/i18n/tools/bathroom-waterproofing-estimator-zh";
import { chromeZhDict } from "@/lib/estimator/i18n/chrome-zh";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(bathroomWaterproofingEstimatorZhDict);
const chromeT = createStaticTranslator(chromeZhDict);
const spec = buildBathroomWaterproofingEstimatorSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
