"use client";
import { buildElectricalInstallationCostSpec } from "@/lib/estimator/builders/electrical-installation-cost";
import { electricalInstallationCostZhDict } from "@/lib/estimator/i18n/tools/electrical-installation-cost-zh";
import { chromeZhDict } from "@/lib/estimator/i18n/chrome-zh";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(electricalInstallationCostZhDict);
const chromeT = createStaticTranslator(chromeZhDict);
const spec = buildElectricalInstallationCostSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
