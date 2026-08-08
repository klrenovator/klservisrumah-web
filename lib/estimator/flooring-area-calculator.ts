import { createStaticTranslator } from "../i18n";
import { flooringAreaCalculatorEnDict } from "./i18n/tools/flooring-area-calculator-en";
import { buildFlooringAreaCalculatorSpec } from "./builders/flooring-area-calculator";

export const flooringAreaCalculatorSpec = buildFlooringAreaCalculatorSpec(createStaticTranslator(flooringAreaCalculatorEnDict));
