/**
 * TV Mount Advisor — English spec (back-compat module).
 * Implementation: `builders/tv-mount.ts` with dictionaries under `i18n/tools/`.
 */

import { createStaticTranslator } from "../i18n";
import { tvMountEnDict } from "./i18n/tools/tv-mount-en";
import { buildTvMountSpec } from "./builders/tv-mount";

export const tvMountSpec = buildTvMountSpec(createStaticTranslator(tvMountEnDict));
