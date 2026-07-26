"use client";

import React from "react";
import { buildCeilingSpec } from "@/lib/estimator/builders/ceiling";
import { ceilingZhDict } from "@/lib/estimator/i18n/tools/ceiling-zh";
import { chromeZhDict } from "@/lib/estimator/i18n/chrome-zh";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";

/**
 * 中文 deep-tool entry point for the /zh/gongju routes.
 * Only this locale's dictionaries are imported, so the route bundle stays
 * single-language — mirrors the English wizard, never shares its bundle.
 */
const contentT = createStaticTranslator(ceilingZhDict);
const chromeT = createStaticTranslator(chromeZhDict);
const spec = buildCeilingSpec(contentT);

export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
