"use client";
import { buildBathroomRenovationEstimatorSpec } from "@/lib/estimator/builders/bathroom-renovation-estimator";
import { bathroomRenovationEstimatorMsDict } from "@/lib/estimator/i18n/tools/bathroom-renovation-estimator-ms";
import { chromeMsDict } from "@/lib/estimator/i18n/chrome-ms";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(bathroomRenovationEstimatorMsDict);
const chromeT = createStaticTranslator(chromeMsDict);
const spec = buildBathroomRenovationEstimatorSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
