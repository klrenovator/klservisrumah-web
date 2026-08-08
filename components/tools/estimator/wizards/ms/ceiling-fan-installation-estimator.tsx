"use client";
import { buildCeilingFanInstallationEstimatorSpec } from "@/lib/estimator/builders/ceiling-fan-installation-estimator";
import { ceilingFanInstallationEstimatorMsDict } from "@/lib/estimator/i18n/tools/ceiling-fan-installation-estimator-ms";
import { chromeMsDict } from "@/lib/estimator/i18n/chrome-ms";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(ceilingFanInstallationEstimatorMsDict);
const chromeT = createStaticTranslator(chromeMsDict);
const spec = buildCeilingFanInstallationEstimatorSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
