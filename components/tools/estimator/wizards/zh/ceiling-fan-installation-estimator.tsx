"use client";
import { buildCeilingFanInstallationEstimatorSpec } from "@/lib/estimator/builders/ceiling-fan-installation-estimator";
import { ceilingFanInstallationEstimatorZhDict } from "@/lib/estimator/i18n/tools/ceiling-fan-installation-estimator-zh";
import { chromeZhDict } from "@/lib/estimator/i18n/chrome-zh";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(ceilingFanInstallationEstimatorZhDict);
const chromeT = createStaticTranslator(chromeZhDict);
const spec = buildCeilingFanInstallationEstimatorSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
