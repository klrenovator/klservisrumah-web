"use client";
import { buildTileQuantityCalculatorSpec } from "@/lib/estimator/builders/tile-quantity-calculator";
import { tileQuantityCalculatorZhDict } from "@/lib/estimator/i18n/tools/tile-quantity-calculator-zh";
import { chromeZhDict } from "@/lib/estimator/i18n/chrome-zh";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(tileQuantityCalculatorZhDict);
const chromeT = createStaticTranslator(chromeZhDict);
const spec = buildTileQuantityCalculatorSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
