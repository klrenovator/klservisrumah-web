"use client";

import React from "react";
import { buildPaintingSpec } from "@/lib/estimator/builders/painting";
import { paintingMsDict } from "@/lib/estimator/i18n/tools/painting-ms";
import { chromeMsDict } from "@/lib/estimator/i18n/chrome-ms";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";

/**
 * Bahasa Malaysia deep-tool entry point for the /ms/alatan routes.
 * Only this locale's dictionaries are imported, so the route bundle stays
 * single-language — mirrors the English wizard, never shares its bundle.
 */
const contentT = createStaticTranslator(paintingMsDict);
const chromeT = createStaticTranslator(chromeMsDict);
const spec = buildPaintingSpec(contentT);

export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
