import { createStaticTranslator } from "../i18n";
import { airconToolsEnDict } from "./i18n/tools/aircon-tools-en";
import { buildAirconSavingsCalculatorSpec } from "./builders/aircon";

export const airconSavingsCalculatorSpec = buildAirconSavingsCalculatorSpec(createStaticTranslator(airconToolsEnDict));
