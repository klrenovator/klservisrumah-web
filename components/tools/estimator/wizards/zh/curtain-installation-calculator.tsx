"use client";
import { buildCurtainInstallationCalculatorSpec } from "@/lib/estimator/builders/curtain-installation-calculator";
import { curtainInstallationCalculatorZhDict } from "@/lib/estimator/i18n/tools/curtain-installation-calculator-zh";
import { chromeZhDict } from "@/lib/estimator/i18n/chrome-zh";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(curtainInstallationCalculatorZhDict);
const chromeT = createStaticTranslator(chromeZhDict);
const spec = buildCurtainInstallationCalculatorSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
