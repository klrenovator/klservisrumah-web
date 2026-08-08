"use client";
import { buildKitchenRenovationEstimatorSpec } from "@/lib/estimator/builders/kitchen-renovation-estimator";
import { kitchenRenovationEstimatorZhDict } from "@/lib/estimator/i18n/tools/kitchen-renovation-estimator-zh";
import { chromeZhDict } from "@/lib/estimator/i18n/chrome-zh";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(kitchenRenovationEstimatorZhDict);
const chromeT = createStaticTranslator(chromeZhDict);
const spec = buildKitchenRenovationEstimatorSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
