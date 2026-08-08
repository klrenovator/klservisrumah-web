"use client";
import { buildWaterPressureTroubleshooterSpec } from "@/lib/estimator/builders/water-pressure-troubleshooter";
import { waterPressureTroubleshooterMsDict } from "@/lib/estimator/i18n/tools/water-pressure-troubleshooter-ms";
import { chromeMsDict } from "@/lib/estimator/i18n/chrome-ms";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(waterPressureTroubleshooterMsDict);
const chromeT = createStaticTranslator(chromeMsDict);
const spec = buildWaterPressureTroubleshooterSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
