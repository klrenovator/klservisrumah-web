import { createStaticTranslator } from "../i18n";
import { airconToolsEnDict } from "./i18n/tools/aircon-tools-en";
import { buildAirconServicePickerSpec } from "./builders/aircon";

export const airconServicePickerSpec = buildAirconServicePickerSpec(createStaticTranslator(airconToolsEnDict));
