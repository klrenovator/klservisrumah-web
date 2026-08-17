import { createStaticTranslator } from "../i18n";
import { airconToolsEnDict } from "./i18n/tools/aircon-tools-en";
import { buildAirconElectricityCostSpec } from "./builders/aircon";

export const airconElectricityCostSpec = buildAirconElectricityCostSpec(createStaticTranslator(airconToolsEnDict));
