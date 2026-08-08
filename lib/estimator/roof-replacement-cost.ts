import { createStaticTranslator } from "../i18n";
import { roofReplacementCostEnDict } from "./i18n/tools/roof-replacement-cost-en";
import { buildRoofReplacementCostSpec } from "./builders/roof-replacement-cost";

export const roofReplacementCostSpec = buildRoofReplacementCostSpec(createStaticTranslator(roofReplacementCostEnDict));
