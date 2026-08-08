"use client";
import { buildBathroomWaterproofingEstimatorSpec } from "@/lib/estimator/builders/bathroom-waterproofing-estimator";
import { bathroomWaterproofingEstimatorMsDict } from "@/lib/estimator/i18n/tools/bathroom-waterproofing-estimator-ms";
import { chromeMsDict } from "@/lib/estimator/i18n/chrome-ms";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(bathroomWaterproofingEstimatorMsDict);
const chromeT = createStaticTranslator(chromeMsDict);
const spec = buildBathroomWaterproofingEstimatorSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
