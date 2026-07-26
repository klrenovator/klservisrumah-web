"use client";

import React from "react";
import { buildLeakSpec } from "@/lib/estimator/builders/leak";
import { leakZhDict } from "@/lib/estimator/i18n/tools/leak-zh";
import { chromeZhDict } from "@/lib/estimator/i18n/chrome-zh";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";

/**
 * 中文 deep-tool entry point for the /zh/gongju routes.
 * Only this locale's dictionaries are imported, so the route bundle stays
 * single-language — mirrors the English wizard, never shares its bundle.
 */
const contentT = createStaticTranslator(leakZhDict);
const chromeT = createStaticTranslator(chromeZhDict);
const spec = buildLeakSpec(contentT);

export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
