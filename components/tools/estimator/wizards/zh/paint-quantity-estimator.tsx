"use client";
import { buildPaintQuantityEstimatorSpec } from "@/lib/estimator/builders/paint-quantity-estimator";
import { paintQuantityEstimatorZhDict } from "@/lib/estimator/i18n/tools/paint-quantity-estimator-zh";
import { chromeZhDict } from "@/lib/estimator/i18n/chrome-zh";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(paintQuantityEstimatorZhDict);
const chromeT = createStaticTranslator(chromeZhDict);
const spec = buildPaintQuantityEstimatorSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
