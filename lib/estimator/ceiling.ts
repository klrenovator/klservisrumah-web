/**
 * Ceiling Repair & Installation Estimator — English spec (back-compat module).
 * Implementation: `builders/ceiling.ts` with dictionaries under `i18n/tools/`.
 */

import { createStaticTranslator } from "../i18n";
import { ceilingEnDict } from "./i18n/tools/ceiling-en";
import { buildCeilingSpec, CEILING_TYPES } from "./builders/ceiling";

export const ceilingSpec = buildCeilingSpec(createStaticTranslator(ceilingEnDict));

export { CEILING_TYPES };
