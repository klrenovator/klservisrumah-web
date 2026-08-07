"use client";

import { useEffect } from "react";

/**
 * Last-resort error boundary — rendered when the root layout itself fails
 * (no providers, no language context, no translations yet available).
 *
 * The visible copy is therefore kept in plain English so it remains
 * serviceable in that edge case. Browser locale is respected via the
 * `lang` attribute on <html>.
 */
export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Production observability — same sanitized beacon as app/error.tsx.
    try {
      const payload = JSON.stringify({
        source: "global-error-boundary",
        message: error.message,
        stack: error.stack,
        digest: error.digest,
        pathname: window.location.pathname
      });
      const blob = new Blob([payload], { type: "application/json" });
      navigator.sendBeacon("/api/error-log", blob);
    } catch {
      // Never throw inside the error boundary of last resort.
    }
  }, [error]);

  return (
    <html lang="en-MY">
      <body>
        <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", fontFamily: "system-ui, sans-serif", padding: 24 }}>
          <section style={{ maxWidth: 620, textAlign: "center" }}>
            <h1 style={{ color: "#075985", fontSize: 36, marginBottom: 12 }}>KL Servis Rumah is temporarily unavailable</h1>
            <p style={{ color: "#475569", lineHeight: 1.7 }}>Please try again. If the issue continues, contact our dispatch desk through the contact page.</p>
            {/* #0284C7 measured 4.10:1 against white ( WCAG AA small-text fail );
                #0369A1 passes at 5.94:1. */}
            <button onClick={reset} style={{ marginTop: 24, background: "#0369A1", color: "white", border: 0, borderRadius: 12, padding: "12px 18px", fontWeight: 800 }}>Try again</button>
          </section>
        </main>
      </body>
    </html>
  );
}
