import { createStaticTranslator } from "../i18n";
import { bathroomRenovationEstimatorEnDict } from "./i18n/tools/bathroom-renovation-estimator-en";
import { buildBathroomRenovationEstimatorSpec } from "./builders/bathroom-renovation-estimator";

export const bathroomRenovationEstimatorSpec = buildBathroomRenovationEstimatorSpec(createStaticTranslator(bathroomRenovationEstimatorEnDict));
