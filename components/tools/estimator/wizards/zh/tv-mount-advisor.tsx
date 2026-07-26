"use client";

import React from "react";
import { buildTvMountSpec } from "@/lib/estimator/builders/tv-mount";
import { tvMountZhDict } from "@/lib/estimator/i18n/tools/tv-mount-zh";
import { chromeZhDict } from "@/lib/estimator/i18n/chrome-zh";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";

/**
 * 中文 deep-tool entry point for the /zh/gongju routes.
 * Only this locale's dictionaries are imported, so the route bundle stays
 * single-language — mirrors the English wizard, never shares its bundle.
 */
const contentT = createStaticTranslator(tvMountZhDict);
const chromeT = createStaticTranslator(chromeZhDict);
const spec = buildTvMountSpec(contentT);

export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
