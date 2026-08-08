import { createStaticTranslator } from "../i18n";
import { moveInOutCleaningCalculatorEnDict } from "./i18n/tools/move-in-out-cleaning-calculator-en";
import { buildMoveInOutCleaningCalculatorSpec } from "./builders/move-in-out-cleaning-calculator";

export const moveInOutCleaningCalculatorSpec = buildMoveInOutCleaningCalculatorSpec(createStaticTranslator(moveInOutCleaningCalculatorEnDict));
