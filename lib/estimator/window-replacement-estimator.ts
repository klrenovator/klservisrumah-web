import { createStaticTranslator } from "../i18n";
import { windowReplacementEstimatorEnDict } from "./i18n/tools/window-replacement-estimator-en";
import { buildWindowReplacementEstimatorSpec } from "./builders/window-replacement-estimator";

export const windowReplacementEstimatorSpec = buildWindowReplacementEstimatorSpec(createStaticTranslator(windowReplacementEstimatorEnDict));
