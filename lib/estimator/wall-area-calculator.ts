import { createStaticTranslator } from "../i18n";
import { wallAreaCalculatorEnDict } from "./i18n/tools/wall-area-calculator-en";
import { buildWallAreaCalculatorSpec } from "./builders/wall-area-calculator";

export const wallAreaCalculatorSpec = buildWallAreaCalculatorSpec(createStaticTranslator(wallAreaCalculatorEnDict));
