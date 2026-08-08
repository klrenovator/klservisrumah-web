"use client";
import { buildRoofRepairEstimatorSpec } from "@/lib/estimator/builders/roof-repair-estimator";
import { roofRepairEstimatorMsDict } from "@/lib/estimator/i18n/tools/roof-repair-estimator-ms";
import { chromeMsDict } from "@/lib/estimator/i18n/chrome-ms";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(roofRepairEstimatorMsDict);
const chromeT = createStaticTranslator(chromeMsDict);
const spec = buildRoofRepairEstimatorSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
