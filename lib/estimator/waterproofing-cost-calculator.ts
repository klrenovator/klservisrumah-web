import { createStaticTranslator } from "../i18n";
import { waterproofingCostCalculatorEnDict } from "./i18n/tools/waterproofing-cost-calculator-en";
import { buildWaterproofingCostCalculatorSpec } from "./builders/waterproofing-cost-calculator";

export const waterproofingCostCalculatorSpec = buildWaterproofingCostCalculatorSpec(createStaticTranslator(waterproofingCostCalculatorEnDict));
