"use client";
import { buildRoofRepairEstimatorSpec } from "@/lib/estimator/builders/roof-repair-estimator";
import { roofRepairEstimatorZhDict } from "@/lib/estimator/i18n/tools/roof-repair-estimator-zh";
import { chromeZhDict } from "@/lib/estimator/i18n/chrome-zh";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(roofRepairEstimatorZhDict);
const chromeT = createStaticTranslator(chromeZhDict);
const spec = buildRoofRepairEstimatorSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
