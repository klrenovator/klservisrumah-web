/**
 * Plumbing Diagnostic Estimator — English spec (back-compat module).
 * Implementation: `builders/plumbing.ts` with dictionaries under `i18n/tools/`.
 */

import { createStaticTranslator } from "../i18n";
import { plumbingEnDict } from "./i18n/tools/plumbing-en";
import { buildPlumbingSpec, PLUMBING_PROBLEMS } from "./builders/plumbing";

export const plumbingSpec = buildPlumbingSpec(createStaticTranslator(plumbingEnDict));

export { PLUMBING_PROBLEMS };
