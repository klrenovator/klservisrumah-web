"use client";
import { buildPipeLeakEstimatorSpec } from "@/lib/estimator/builders/pipe-leak-estimator";
import { pipeLeakEstimatorZhDict } from "@/lib/estimator/i18n/tools/pipe-leak-estimator-zh";
import { chromeZhDict } from "@/lib/estimator/i18n/chrome-zh";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(pipeLeakEstimatorZhDict);
const chromeT = createStaticTranslator(chromeZhDict);
const spec = buildPipeLeakEstimatorSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
