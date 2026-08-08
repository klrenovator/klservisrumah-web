import { createStaticTranslator } from "../i18n";
import { pipeReplacementCostEnDict } from "./i18n/tools/pipe-replacement-cost-en";
import { buildPipeReplacementCostSpec } from "./builders/pipe-replacement-cost";

export const pipeReplacementCostSpec = buildPipeReplacementCostSpec(createStaticTranslator(pipeReplacementCostEnDict));
