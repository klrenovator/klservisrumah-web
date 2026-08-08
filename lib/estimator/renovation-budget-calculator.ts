import { createStaticTranslator } from "../i18n";
import { renovationBudgetCalculatorEnDict } from "./i18n/tools/renovation-budget-calculator-en";
import { buildRenovationBudgetCalculatorSpec } from "./builders/renovation-budget-calculator";

export const renovationBudgetCalculatorSpec = buildRenovationBudgetCalculatorSpec(createStaticTranslator(renovationBudgetCalculatorEnDict));
