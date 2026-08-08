"use client";
import { buildBalconyWaterproofingEstimatorSpec } from "@/lib/estimator/builders/balcony-waterproofing-estimator";
import { balconyWaterproofingEstimatorMsDict } from "@/lib/estimator/i18n/tools/balcony-waterproofing-estimator-ms";
import { chromeMsDict } from "@/lib/estimator/i18n/chrome-ms";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(balconyWaterproofingEstimatorMsDict);
const chromeT = createStaticTranslator(chromeMsDict);
const spec = buildBalconyWaterproofingEstimatorSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
