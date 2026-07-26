"use client";

import React from "react";
import { tvMountSpec } from "@/lib/estimator/tv-mount";
import { EstimatorWizard } from "../estimator-wizard";

/**
 * Per-tool client entry point. Estimator specs carry `compute` and `visible`
 * functions, so they cannot cross the server → client boundary as props. Each
 * tool therefore imports its own spec inside a client module, which also lets
 * webpack code-split one spec per route instead of bundling all five.
 */
export default function Wizard() {
  return <EstimatorWizard spec={tvMountSpec} />;
}
