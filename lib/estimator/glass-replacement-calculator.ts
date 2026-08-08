import { createStaticTranslator } from "../i18n";
import { glassReplacementCalculatorEnDict } from "./i18n/tools/glass-replacement-calculator-en";
import { buildGlassReplacementCalculatorSpec } from "./builders/glass-replacement-calculator";

export const glassReplacementCalculatorSpec = buildGlassReplacementCalculatorSpec(createStaticTranslator(glassReplacementCalculatorEnDict));
