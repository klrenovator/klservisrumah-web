"use client";
import { buildAirconInstallationCostSpec } from "@/lib/estimator/builders/aircon";
import { airconToolsMsDict } from "@/lib/estimator/i18n/tools/aircon-tools-ms";
import { chromeMsDict } from "@/lib/estimator/i18n/chrome-ms";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(airconToolsMsDict);
const chromeT = createStaticTranslator(chromeMsDict);
const spec = buildAirconInstallationCostSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
