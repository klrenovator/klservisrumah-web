"use client";
import { buildPipeLeakEstimatorSpec } from "@/lib/estimator/builders/pipe-leak-estimator";
import { pipeLeakEstimatorMsDict } from "@/lib/estimator/i18n/tools/pipe-leak-estimator-ms";
import { chromeMsDict } from "@/lib/estimator/i18n/chrome-ms";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(pipeLeakEstimatorMsDict);
const chromeT = createStaticTranslator(chromeMsDict);
const spec = buildPipeLeakEstimatorSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
