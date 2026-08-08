"use client";
import { buildDoorInstallationCostSpec } from "@/lib/estimator/builders/door-installation-cost";
import { doorInstallationCostZhDict } from "@/lib/estimator/i18n/tools/door-installation-cost-zh";
import { chromeZhDict } from "@/lib/estimator/i18n/chrome-zh";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(doorInstallationCostZhDict);
const chromeT = createStaticTranslator(chromeZhDict);
const spec = buildDoorInstallationCostSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
