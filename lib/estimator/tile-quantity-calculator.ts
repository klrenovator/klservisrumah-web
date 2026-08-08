import { createStaticTranslator } from "../i18n";
import { tileQuantityCalculatorEnDict } from "./i18n/tools/tile-quantity-calculator-en";
import { buildTileQuantityCalculatorSpec } from "./builders/tile-quantity-calculator";

export const tileQuantityCalculatorSpec = buildTileQuantityCalculatorSpec(createStaticTranslator(tileQuantityCalculatorEnDict));
