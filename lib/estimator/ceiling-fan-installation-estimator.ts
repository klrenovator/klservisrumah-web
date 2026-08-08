import { createStaticTranslator } from "../i18n";
import { ceilingFanInstallationEstimatorEnDict } from "./i18n/tools/ceiling-fan-installation-estimator-en";
import { buildCeilingFanInstallationEstimatorSpec } from "./builders/ceiling-fan-installation-estimator";

export const ceilingFanInstallationEstimatorSpec = buildCeilingFanInstallationEstimatorSpec(createStaticTranslator(ceilingFanInstallationEstimatorEnDict));
