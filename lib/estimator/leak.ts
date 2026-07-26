/**
 * Water Leak Triage — English spec (back-compat module).
 * Implementation: `builders/leak.ts` with dictionaries under `i18n/tools/`.
 */

import { createStaticTranslator } from "../i18n";
import { leakEnDict } from "./i18n/tools/leak-en";
import { buildLeakSpec, LEAK_LOCATIONS } from "./builders/leak";

export const leakSpec = buildLeakSpec(createStaticTranslator(leakEnDict));

export { LEAK_LOCATIONS };
