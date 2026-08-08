import { createStaticTranslator } from "../i18n";
import { roofAreaCalculatorEnDict } from "./i18n/tools/roof-area-calculator-en";
import { buildRoofAreaCalculatorSpec } from "./builders/roof-area-calculator";

export const roofAreaCalculatorSpec = buildRoofAreaCalculatorSpec(createStaticTranslator(roofAreaCalculatorEnDict));
