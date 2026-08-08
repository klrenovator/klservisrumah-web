"use client";
import { buildCeilingReplacementCostSpec } from "@/lib/estimator/builders/ceiling-replacement-cost";
import { ceilingReplacementCostMsDict } from "@/lib/estimator/i18n/tools/ceiling-replacement-cost-ms";
import { chromeMsDict } from "@/lib/estimator/i18n/chrome-ms";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(ceilingReplacementCostMsDict);
const chromeT = createStaticTranslator(chromeMsDict);
const spec = buildCeilingReplacementCostSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
