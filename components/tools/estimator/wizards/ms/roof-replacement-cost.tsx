"use client";
import { buildRoofReplacementCostSpec } from "@/lib/estimator/builders/roof-replacement-cost";
import { roofReplacementCostMsDict } from "@/lib/estimator/i18n/tools/roof-replacement-cost-ms";
import { chromeMsDict } from "@/lib/estimator/i18n/chrome-ms";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(roofReplacementCostMsDict);
const chromeT = createStaticTranslator(chromeMsDict);
const spec = buildRoofReplacementCostSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
