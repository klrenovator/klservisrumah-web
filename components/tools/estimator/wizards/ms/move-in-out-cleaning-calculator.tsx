"use client";
import { buildMoveInOutCleaningCalculatorSpec } from "@/lib/estimator/builders/move-in-out-cleaning-calculator";
import { moveInOutCleaningCalculatorMsDict } from "@/lib/estimator/i18n/tools/move-in-out-cleaning-calculator-ms";
import { chromeMsDict } from "@/lib/estimator/i18n/chrome-ms";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(moveInOutCleaningCalculatorMsDict);
const chromeT = createStaticTranslator(chromeMsDict);
const spec = buildMoveInOutCleaningCalculatorSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
