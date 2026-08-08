"use client";
import { buildCeilingReplacementCostSpec } from "@/lib/estimator/builders/ceiling-replacement-cost";
import { ceilingReplacementCostZhDict } from "@/lib/estimator/i18n/tools/ceiling-replacement-cost-zh";
import { chromeZhDict } from "@/lib/estimator/i18n/chrome-zh";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(ceilingReplacementCostZhDict);
const chromeT = createStaticTranslator(chromeZhDict);
const spec = buildCeilingReplacementCostSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
