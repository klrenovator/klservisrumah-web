import { createStaticTranslator } from "../i18n";
import { roofRepairEstimatorEnDict } from "./i18n/tools/roof-repair-estimator-en";
import { buildRoofRepairEstimatorSpec } from "./builders/roof-repair-estimator";

export const roofRepairEstimatorSpec = buildRoofRepairEstimatorSpec(createStaticTranslator(roofRepairEstimatorEnDict));
