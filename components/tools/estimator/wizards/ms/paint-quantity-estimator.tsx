"use client";
import { buildPaintQuantityEstimatorSpec } from "@/lib/estimator/builders/paint-quantity-estimator";
import { paintQuantityEstimatorMsDict } from "@/lib/estimator/i18n/tools/paint-quantity-estimator-ms";
import { chromeMsDict } from "@/lib/estimator/i18n/chrome-ms";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(paintQuantityEstimatorMsDict);
const chromeT = createStaticTranslator(chromeMsDict);
const spec = buildPaintQuantityEstimatorSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
