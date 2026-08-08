import { createStaticTranslator } from "../i18n";
import { ceilingAreaCalculatorEnDict } from "./i18n/tools/ceiling-area-calculator-en";
import { buildCeilingAreaCalculatorSpec } from "./builders/ceiling-area-calculator";

export const ceilingAreaCalculatorSpec = buildCeilingAreaCalculatorSpec(createStaticTranslator(ceilingAreaCalculatorEnDict));
