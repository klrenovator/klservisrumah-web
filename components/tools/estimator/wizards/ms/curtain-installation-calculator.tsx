"use client";
import { buildCurtainInstallationCalculatorSpec } from "@/lib/estimator/builders/curtain-installation-calculator";
import { curtainInstallationCalculatorMsDict } from "@/lib/estimator/i18n/tools/curtain-installation-calculator-ms";
import { chromeMsDict } from "@/lib/estimator/i18n/chrome-ms";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(curtainInstallationCalculatorMsDict);
const chromeT = createStaticTranslator(chromeMsDict);
const spec = buildCurtainInstallationCalculatorSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
