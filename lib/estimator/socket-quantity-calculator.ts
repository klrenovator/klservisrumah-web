import { createStaticTranslator } from "../i18n";
import { socketQuantityCalculatorEnDict } from "./i18n/tools/socket-quantity-calculator-en";
import { buildSocketQuantityCalculatorSpec } from "./builders/socket-quantity-calculator";

export const socketQuantityCalculatorSpec = buildSocketQuantityCalculatorSpec(createStaticTranslator(socketQuantityCalculatorEnDict));
