"use client";
import { buildElectricalInstallationCostSpec } from "@/lib/estimator/builders/electrical-installation-cost";
import { electricalInstallationCostMsDict } from "@/lib/estimator/i18n/tools/electrical-installation-cost-ms";
import { chromeMsDict } from "@/lib/estimator/i18n/chrome-ms";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(electricalInstallationCostMsDict);
const chromeT = createStaticTranslator(chromeMsDict);
const spec = buildElectricalInstallationCostSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
