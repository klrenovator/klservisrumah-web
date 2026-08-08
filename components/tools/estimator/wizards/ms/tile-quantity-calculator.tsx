"use client";
import { buildTileQuantityCalculatorSpec } from "@/lib/estimator/builders/tile-quantity-calculator";
import { tileQuantityCalculatorMsDict } from "@/lib/estimator/i18n/tools/tile-quantity-calculator-ms";
import { chromeMsDict } from "@/lib/estimator/i18n/chrome-ms";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(tileQuantityCalculatorMsDict);
const chromeT = createStaticTranslator(chromeMsDict);
const spec = buildTileQuantityCalculatorSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
