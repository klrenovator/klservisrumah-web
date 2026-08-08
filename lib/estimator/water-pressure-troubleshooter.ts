import { createStaticTranslator } from "../i18n";
import { waterPressureTroubleshooterEnDict } from "./i18n/tools/water-pressure-troubleshooter-en";
import { buildWaterPressureTroubleshooterSpec } from "./builders/water-pressure-troubleshooter";

export const waterPressureTroubleshooterSpec = buildWaterPressureTroubleshooterSpec(createStaticTranslator(waterPressureTroubleshooterEnDict));
