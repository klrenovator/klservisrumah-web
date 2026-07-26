"use client";

import React from "react";
import { buildLeakSpec } from "@/lib/estimator/builders/leak";
import { leakMsDict } from "@/lib/estimator/i18n/tools/leak-ms";
import { chromeMsDict } from "@/lib/estimator/i18n/chrome-ms";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";

/**
 * Bahasa Malaysia deep-tool entry point for the /ms/alatan routes.
 * Only this locale's dictionaries are imported, so the route bundle stays
 * single-language — mirrors the English wizard, never shares its bundle.
 */
const contentT = createStaticTranslator(leakMsDict);
const chromeT = createStaticTranslator(chromeMsDict);
const spec = buildLeakSpec(contentT);

export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
