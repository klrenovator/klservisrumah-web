import { createStaticTranslator } from "../i18n";
import { doorInstallationCostEnDict } from "./i18n/tools/door-installation-cost-en";
import { buildDoorInstallationCostSpec } from "./builders/door-installation-cost";

export const doorInstallationCostSpec = buildDoorInstallationCostSpec(createStaticTranslator(doorInstallationCostEnDict));
