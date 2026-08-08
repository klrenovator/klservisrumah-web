"use client";
import { buildWindowReplacementEstimatorSpec } from "@/lib/estimator/builders/window-replacement-estimator";
import { windowReplacementEstimatorMsDict } from "@/lib/estimator/i18n/tools/window-replacement-estimator-ms";
import { chromeMsDict } from "@/lib/estimator/i18n/chrome-ms";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(windowReplacementEstimatorMsDict);
const chromeT = createStaticTranslator(chromeMsDict);
const spec = buildWindowReplacementEstimatorSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
