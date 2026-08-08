import { createStaticTranslator } from "../i18n";
import { electricalInstallationCostEnDict } from "./i18n/tools/electrical-installation-cost-en";
import { buildElectricalInstallationCostSpec } from "./builders/electrical-installation-cost";

export const electricalInstallationCostSpec = buildElectricalInstallationCostSpec(createStaticTranslator(electricalInstallationCostEnDict));
