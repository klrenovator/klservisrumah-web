import { createStaticTranslator } from "../i18n";
import { ceilingReplacementCostEnDict } from "./i18n/tools/ceiling-replacement-cost-en";
import { buildCeilingReplacementCostSpec } from "./builders/ceiling-replacement-cost";

export const ceilingReplacementCostSpec = buildCeilingReplacementCostSpec(createStaticTranslator(ceilingReplacementCostEnDict));
