"use client";
import { buildFurnitureAssemblyEstimatorSpec } from "@/lib/estimator/builders/furniture-assembly-estimator";
import { furnitureAssemblyEstimatorZhDict } from "@/lib/estimator/i18n/tools/furniture-assembly-estimator-zh";
import { chromeZhDict } from "@/lib/estimator/i18n/chrome-zh";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(furnitureAssemblyEstimatorZhDict);
const chromeT = createStaticTranslator(chromeZhDict);
const spec = buildFurnitureAssemblyEstimatorSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
