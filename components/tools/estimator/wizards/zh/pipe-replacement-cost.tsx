"use client";
import { buildPipeReplacementCostSpec } from "@/lib/estimator/builders/pipe-replacement-cost";
import { pipeReplacementCostZhDict } from "@/lib/estimator/i18n/tools/pipe-replacement-cost-zh";
import { chromeZhDict } from "@/lib/estimator/i18n/chrome-zh";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(pipeReplacementCostZhDict);
const chromeT = createStaticTranslator(chromeZhDict);
const spec = buildPipeReplacementCostSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
