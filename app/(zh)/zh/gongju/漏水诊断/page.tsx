import React from "react";
import dynamic from "next/dynamic";
import { LocalizedToolRoute, localizedToolMetadata } from "@/components/tools/localized-tool-route";

const LOCALE = "zh" as const;
const SLUG = "leak-triage";

export const metadata = localizedToolMetadata(LOCALE, SLUG);

/**
 * The wizard is the only interactive part of this route. Deferring it keeps the
 * hero image, direct answer, price table and FAQ in the static HTML payload, so
 * the LCP element never waits on estimator JavaScript.
 */
const Wizard = dynamic(() => import("@/components/tools/estimator/wizards/zh/leak-triage"), {
  loading: () => (
    <div className="h-[34rem] animate-pulse rounded-3xl border border-slate-200 bg-slate-50" aria-hidden="true" />
  )
});

export default function Page() {
  return <LocalizedToolRoute locale={LOCALE} slug={SLUG} wizard={<Wizard />} />;
}
