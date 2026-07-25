"use client";

import dynamic from "next/dynamic";

/**
 * Non-critical, purely-cosmetic engagement widgets that never contribute to
 * the LCP or first-input-delay. We defer them behind `next/dynamic` with
 * `ssr: false` from a client component so the initial HTML stays lean and
 * the widgets hydrate only after the main content is interactive.
 *
 * Wrapped here (rather than in `app/layout.tsx`) because Next.js 15 forbids
 * `ssr: false` in server components — the wrapper flips the boundary.
 */
const ExitIntentPopup = dynamic(
  () => import("@/components/exit-intent-popup").then((m) => m.ExitIntentPopup),
  { ssr: false, loading: () => null }
);

const SocialProofWidgets = dynamic(
  () => import("@/components/social-proof-widgets").then((m) => m.SocialProofWidgets),
  { ssr: false, loading: () => null }
);

export function DeferredWidgets() {
  return (
    <>
      <ExitIntentPopup />
      <SocialProofWidgets />
    </>
  );
}
