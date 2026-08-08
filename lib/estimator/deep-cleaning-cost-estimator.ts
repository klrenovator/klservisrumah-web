import { createStaticTranslator } from "../i18n";
import { deepCleaningCostEstimatorEnDict } from "./i18n/tools/deep-cleaning-cost-estimator-en";
import { buildDeepCleaningCostEstimatorSpec } from "./builders/deep-cleaning-cost-estimator";

export const deepCleaningCostEstimatorSpec = buildDeepCleaningCostEstimatorSpec(createStaticTranslator(deepCleaningCostEstimatorEnDict));
