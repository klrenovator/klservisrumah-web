import { createStaticTranslator } from "../i18n";
import { paintQuantityEstimatorEnDict } from "./i18n/tools/paint-quantity-estimator-en";
import { buildPaintQuantityEstimatorSpec } from "./builders/paint-quantity-estimator";

export const paintQuantityEstimatorSpec = buildPaintQuantityEstimatorSpec(createStaticTranslator(paintQuantityEstimatorEnDict));
