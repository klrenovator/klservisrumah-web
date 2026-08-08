"use client";
import { buildLightingInstallationCalculatorSpec } from "@/lib/estimator/builders/lighting-installation-calculator";
import { lightingInstallationCalculatorMsDict } from "@/lib/estimator/i18n/tools/lighting-installation-calculator-ms";
import { chromeMsDict } from "@/lib/estimator/i18n/chrome-ms";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(lightingInstallationCalculatorMsDict);
const chromeT = createStaticTranslator(chromeMsDict);
const spec = buildLightingInstallationCalculatorSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
