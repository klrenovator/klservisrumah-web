"use client";
import { buildKitchenRenovationEstimatorSpec } from "@/lib/estimator/builders/kitchen-renovation-estimator";
import { kitchenRenovationEstimatorMsDict } from "@/lib/estimator/i18n/tools/kitchen-renovation-estimator-ms";
import { chromeMsDict } from "@/lib/estimator/i18n/chrome-ms";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(kitchenRenovationEstimatorMsDict);
const chromeT = createStaticTranslator(chromeMsDict);
const spec = buildKitchenRenovationEstimatorSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
