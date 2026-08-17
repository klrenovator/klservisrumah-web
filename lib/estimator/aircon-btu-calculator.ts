import { createStaticTranslator } from "../i18n";
import { airconToolsEnDict } from "./i18n/tools/aircon-tools-en";
import { buildAirconBtuCalculatorSpec } from "./builders/aircon";

export const airconBtuCalculatorSpec = buildAirconBtuCalculatorSpec(createStaticTranslator(airconToolsEnDict));
