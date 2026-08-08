"use client";
import { buildWindowReplacementEstimatorSpec } from "@/lib/estimator/builders/window-replacement-estimator";
import { windowReplacementEstimatorZhDict } from "@/lib/estimator/i18n/tools/window-replacement-estimator-zh";
import { chromeZhDict } from "@/lib/estimator/i18n/chrome-zh";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(windowReplacementEstimatorZhDict);
const chromeT = createStaticTranslator(chromeZhDict);
const spec = buildWindowReplacementEstimatorSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
