"use client";
import { buildBathroomRenovationEstimatorSpec } from "@/lib/estimator/builders/bathroom-renovation-estimator";
import { bathroomRenovationEstimatorZhDict } from "@/lib/estimator/i18n/tools/bathroom-renovation-estimator-zh";
import { chromeZhDict } from "@/lib/estimator/i18n/chrome-zh";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(bathroomRenovationEstimatorZhDict);
const chromeT = createStaticTranslator(chromeZhDict);
const spec = buildBathroomRenovationEstimatorSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
