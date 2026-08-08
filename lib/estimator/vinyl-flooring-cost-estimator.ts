import { createStaticTranslator } from "../i18n";
import { vinylFlooringCostEstimatorEnDict } from "./i18n/tools/vinyl-flooring-cost-estimator-en";
import { buildVinylFlooringCostEstimatorSpec } from "./builders/vinyl-flooring-cost-estimator";

export const vinylFlooringCostEstimatorSpec = buildVinylFlooringCostEstimatorSpec(createStaticTranslator(vinylFlooringCostEstimatorEnDict));
