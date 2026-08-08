"use client";
import { buildMoveInOutCleaningCalculatorSpec } from "@/lib/estimator/builders/move-in-out-cleaning-calculator";
import { moveInOutCleaningCalculatorZhDict } from "@/lib/estimator/i18n/tools/move-in-out-cleaning-calculator-zh";
import { chromeZhDict } from "@/lib/estimator/i18n/chrome-zh";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(moveInOutCleaningCalculatorZhDict);
const chromeT = createStaticTranslator(chromeZhDict);
const spec = buildMoveInOutCleaningCalculatorSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
