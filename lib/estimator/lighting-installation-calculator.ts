import { createStaticTranslator } from "../i18n";
import { lightingInstallationCalculatorEnDict } from "./i18n/tools/lighting-installation-calculator-en";
import { buildLightingInstallationCalculatorSpec } from "./builders/lighting-installation-calculator";

export const lightingInstallationCalculatorSpec = buildLightingInstallationCalculatorSpec(createStaticTranslator(lightingInstallationCalculatorEnDict));
