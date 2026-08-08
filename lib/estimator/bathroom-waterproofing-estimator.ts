import { createStaticTranslator } from "../i18n";
import { bathroomWaterproofingEstimatorEnDict } from "./i18n/tools/bathroom-waterproofing-estimator-en";
import { buildBathroomWaterproofingEstimatorSpec } from "./builders/bathroom-waterproofing-estimator";

export const bathroomWaterproofingEstimatorSpec = buildBathroomWaterproofingEstimatorSpec(createStaticTranslator(bathroomWaterproofingEstimatorEnDict));
