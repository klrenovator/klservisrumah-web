/**
 * Painting Cost Estimator — English spec (back-compat module).
 *
 * The real implementation moved to `builders/painting.ts`, which renders copy
 * through an injected translator so the same engine serves the /ms/alatan/*
 * and /zh/gongju/* routes with their own dictionaries. This module binds the
 * English dictionary and keeps the historical import surface
 * (`paintingSpec`, `PAINT_TARGETS`) used by the wizard and the test harness.
 */

import { createStaticTranslator } from "../i18n";
import { paintingEnDict } from "./i18n/tools/painting-en";
import { buildPaintingSpec, PAINT_TARGETS } from "./builders/painting";

export const paintingSpec = buildPaintingSpec(createStaticTranslator(paintingEnDict));

export { PAINT_TARGETS };
