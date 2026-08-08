import { createStaticTranslator } from "../i18n";
import { furnitureAssemblyEstimatorEnDict } from "./i18n/tools/furniture-assembly-estimator-en";
import { buildFurnitureAssemblyEstimatorSpec } from "./builders/furniture-assembly-estimator";

export const furnitureAssemblyEstimatorSpec = buildFurnitureAssemblyEstimatorSpec(createStaticTranslator(furnitureAssemblyEstimatorEnDict));
