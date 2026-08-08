"use client";
import { buildRoofReplacementCostSpec } from "@/lib/estimator/builders/roof-replacement-cost";
import { roofReplacementCostZhDict } from "@/lib/estimator/i18n/tools/roof-replacement-cost-zh";
import { chromeZhDict } from "@/lib/estimator/i18n/chrome-zh";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(roofReplacementCostZhDict);
const chromeT = createStaticTranslator(chromeZhDict);
const spec = buildRoofReplacementCostSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
