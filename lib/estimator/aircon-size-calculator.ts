import { createStaticTranslator } from "../i18n";
import { airconToolsEnDict } from "./i18n/tools/aircon-tools-en";
import { buildAirconSizeCalculatorSpec } from "./builders/aircon";

export const airconSizeCalculatorSpec = buildAirconSizeCalculatorSpec(createStaticTranslator(airconToolsEnDict));
