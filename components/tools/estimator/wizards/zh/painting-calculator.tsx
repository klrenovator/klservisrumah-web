"use client";

import React from "react";
import { buildPaintingSpec } from "@/lib/estimator/builders/painting";
import { paintingZhDict } from "@/lib/estimator/i18n/tools/painting-zh";
import { chromeZhDict } from "@/lib/estimator/i18n/chrome-zh";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";

/**
 * 中文 deep-tool entry point for the /zh/gongju routes.
 * Only this locale's dictionaries are imported, so the route bundle stays
 * single-language — mirrors the English wizard, never shares its bundle.
 */
const contentT = createStaticTranslator(paintingZhDict);
const chromeT = createStaticTranslator(chromeZhDict);
const spec = buildPaintingSpec(contentT);

export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
