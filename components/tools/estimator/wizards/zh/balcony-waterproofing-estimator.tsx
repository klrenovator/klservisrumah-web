"use client";
import { buildBalconyWaterproofingEstimatorSpec } from "@/lib/estimator/builders/balcony-waterproofing-estimator";
import { balconyWaterproofingEstimatorZhDict } from "@/lib/estimator/i18n/tools/balcony-waterproofing-estimator-zh";
import { chromeZhDict } from "@/lib/estimator/i18n/chrome-zh";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(balconyWaterproofingEstimatorZhDict);
const chromeT = createStaticTranslator(chromeZhDict);
const spec = buildBalconyWaterproofingEstimatorSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
