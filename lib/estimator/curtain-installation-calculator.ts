import { createStaticTranslator } from "../i18n";
import { curtainInstallationCalculatorEnDict } from "./i18n/tools/curtain-installation-calculator-en";
import { buildCurtainInstallationCalculatorSpec } from "./builders/curtain-installation-calculator";

export const curtainInstallationCalculatorSpec = buildCurtainInstallationCalculatorSpec(createStaticTranslator(curtainInstallationCalculatorEnDict));
