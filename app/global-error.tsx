"use client";

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="en-MY">
      <body>
        <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", fontFamily: "system-ui, sans-serif", padding: 24 }}>
          <section style={{ maxWidth: 620, textAlign: "center" }}>
            <h1 style={{ color: "#1E40AF", fontSize: 36, marginBottom: 12 }}>KL Servis Rumah is temporarily unavailable</h1>
            <p style={{ color: "#475569", lineHeight: 1.7 }}>Please try again. If the issue continues, contact our dispatch desk through the contact page.</p>
            <button onClick={reset} style={{ marginTop: 24, background: "#2563EB", color: "white", border: 0, borderRadius: 12, padding: "12px 18px", fontWeight: 800 }}>Try again</button>
          </section>
        </main>
      </body>
    </html>
  );
}
