"use client";
import { buildAirconSizeCalculatorSpec } from "@/lib/estimator/builders/aircon";
import { airconToolsZhDict } from "@/lib/estimator/i18n/tools/aircon-tools-zh";
import { chromeZhDict } from "@/lib/estimator/i18n/chrome-zh";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(airconToolsZhDict);
const chromeT = createStaticTranslator(chromeZhDict);
const spec = buildAirconSizeCalculatorSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
