import { createStaticTranslator } from "../i18n";
import { handymanCostEstimatorEnDict } from "./i18n/tools/handyman-cost-estimator-en";
import { buildHandymanCostEstimatorSpec } from "./builders/handyman-cost-estimator";

export const handymanCostEstimatorSpec = buildHandymanCostEstimatorSpec(createStaticTranslator(handymanCostEstimatorEnDict));
