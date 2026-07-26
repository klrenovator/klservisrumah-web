"use client";

import React from "react";
import { buildTvMountSpec } from "@/lib/estimator/builders/tv-mount";
import { tvMountMsDict } from "@/lib/estimator/i18n/tools/tv-mount-ms";
import { chromeMsDict } from "@/lib/estimator/i18n/chrome-ms";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";

/**
 * Bahasa Malaysia deep-tool entry point for the /ms/alatan routes.
 * Only this locale's dictionaries are imported, so the route bundle stays
 * single-language — mirrors the English wizard, never shares its bundle.
 */
const contentT = createStaticTranslator(tvMountMsDict);
const chromeT = createStaticTranslator(chromeMsDict);
const spec = buildTvMountSpec(contentT);

export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
