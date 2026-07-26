"use client";

import React from "react";
import { buildPlumbingSpec } from "@/lib/estimator/builders/plumbing";
import { plumbingMsDict } from "@/lib/estimator/i18n/tools/plumbing-ms";
import { chromeMsDict } from "@/lib/estimator/i18n/chrome-ms";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";

/**
 * Bahasa Malaysia deep-tool entry point for the /ms/alatan routes.
 * Only this locale's dictionaries are imported, so the route bundle stays
 * single-language — mirrors the English wizard, never shares its bundle.
 */
const contentT = createStaticTranslator(plumbingMsDict);
const chromeT = createStaticTranslator(chromeMsDict);
const spec = buildPlumbingSpec(contentT);

export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
