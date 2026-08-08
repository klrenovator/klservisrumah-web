import { createStaticTranslator } from "../i18n";
import { balconyWaterproofingEstimatorEnDict } from "./i18n/tools/balcony-waterproofing-estimator-en";
import { buildBalconyWaterproofingEstimatorSpec } from "./builders/balcony-waterproofing-estimator";

export const balconyWaterproofingEstimatorSpec = buildBalconyWaterproofingEstimatorSpec(createStaticTranslator(balconyWaterproofingEstimatorEnDict));
