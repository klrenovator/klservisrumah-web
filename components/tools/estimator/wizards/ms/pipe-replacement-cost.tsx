"use client";
import { buildPipeReplacementCostSpec } from "@/lib/estimator/builders/pipe-replacement-cost";
import { pipeReplacementCostMsDict } from "@/lib/estimator/i18n/tools/pipe-replacement-cost-ms";
import { chromeMsDict } from "@/lib/estimator/i18n/chrome-ms";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(pipeReplacementCostMsDict);
const chromeT = createStaticTranslator(chromeMsDict);
const spec = buildPipeReplacementCostSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
