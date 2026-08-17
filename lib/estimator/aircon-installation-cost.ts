import { createStaticTranslator } from "../i18n";
import { airconToolsEnDict } from "./i18n/tools/aircon-tools-en";
import { buildAirconInstallationCostSpec } from "./builders/aircon";

export const airconInstallationCostSpec = buildAirconInstallationCostSpec(createStaticTranslator(airconToolsEnDict));
