import { createStaticTranslator } from "../i18n";
import { airconToolsEnDict } from "./i18n/tools/aircon-tools-en";
import { buildAirconGasTopupCostSpec } from "./builders/aircon";

export const airconGasTopupCostSpec = buildAirconGasTopupCostSpec(createStaticTranslator(airconToolsEnDict));
