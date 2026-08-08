"use client";
import { buildLightingInstallationCalculatorSpec } from "@/lib/estimator/builders/lighting-installation-calculator";
import { lightingInstallationCalculatorZhDict } from "@/lib/estimator/i18n/tools/lighting-installation-calculator-zh";
import { chromeZhDict } from "@/lib/estimator/i18n/chrome-zh";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(lightingInstallationCalculatorZhDict);
const chromeT = createStaticTranslator(chromeZhDict);
const spec = buildLightingInstallationCalculatorSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
