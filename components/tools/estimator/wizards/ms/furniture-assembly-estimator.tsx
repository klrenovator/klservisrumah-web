"use client";
import { buildFurnitureAssemblyEstimatorSpec } from "@/lib/estimator/builders/furniture-assembly-estimator";
import { furnitureAssemblyEstimatorMsDict } from "@/lib/estimator/i18n/tools/furniture-assembly-estimator-ms";
import { chromeMsDict } from "@/lib/estimator/i18n/chrome-ms";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(furnitureAssemblyEstimatorMsDict);
const chromeT = createStaticTranslator(chromeMsDict);
const spec = buildFurnitureAssemblyEstimatorSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
