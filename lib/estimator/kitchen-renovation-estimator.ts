import { createStaticTranslator } from "../i18n";
import { kitchenRenovationEstimatorEnDict } from "./i18n/tools/kitchen-renovation-estimator-en";
import { buildKitchenRenovationEstimatorSpec } from "./builders/kitchen-renovation-estimator";

export const kitchenRenovationEstimatorSpec = buildKitchenRenovationEstimatorSpec(createStaticTranslator(kitchenRenovationEstimatorEnDict));
