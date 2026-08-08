"use client";
import { buildWaterPressureTroubleshooterSpec } from "@/lib/estimator/builders/water-pressure-troubleshooter";
import { waterPressureTroubleshooterZhDict } from "@/lib/estimator/i18n/tools/water-pressure-troubleshooter-zh";
import { chromeZhDict } from "@/lib/estimator/i18n/chrome-zh";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(waterPressureTroubleshooterZhDict);
const chromeT = createStaticTranslator(chromeZhDict);
const spec = buildWaterPressureTroubleshooterSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
