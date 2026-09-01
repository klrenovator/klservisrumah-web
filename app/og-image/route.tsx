import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

/**
 * Raster OG-image template (audit P5-13 / P5-14).
 *
 * Every page's og:image/twitter:image and schema `image` that used to point
 * at an SVG (`hero-*.svg`, blog cover SVGs) now points here. This route
 * renders a 1200×630 PNG with the page's real title, so WhatsApp/Facebook/
 * Telegram previews work and Google's structured-data image pipeline
 * accepts the format.
 *
 * Query params:
 *   title — page title (≤160 chars after sanitising; the default is used
 *           when absent)
 *   t     — template id (default|service|area|blog|tool|problem|cost|pod);
 *           selects the accent colour + chip label only
 *
 * The image is deterministic per (title, t), so we cache it at the CDN
 * (`s-maxage` below) and in the browser; crawlers re-fetch per page.
 *
 * RUNTIME CHOICE (changed 2026-09-01): Edge, not Node. Live probes showed the
 * Node serverless version intermittently returning HTTP 500 (multi-second
 * cold starts bundling the resvg WASM + satori graph on Vercel's Hobby
 * functions) — and since nearly every page's og:image points here, a failure
 * breaks WhatsApp/Facebook/Telegram link previews sitewide. Edge functions
 * cold-start in milliseconds and `next/og`'s ImageResponse is fully
 * supported on the Edge runtime.
 */
export const runtime = "edge";
export const dynamic = "force-dynamic";

const TEMPLATES: Record<string, { accent: string; label: string }> = {
  default: { accent: "#0EA5E9", label: "HOME SERVICES" },
  service: { accent: "#0EA5E9", label: "SERVICE" },
  area: { accent: "#10B981", label: "SERVICE AREA" },
  blog: { accent: "#A78BFA", label: "GUIDE" },
  tool: { accent: "#F59E0B", label: "FREE TOOL" },
  problem: { accent: "#FB7185", label: "PROBLEM & FIX" },
  cost: { accent: "#34D399", label: "PRICE GUIDE" },
  pod: { accent: "#38BDF8", label: "GUIDE" },
};

const FALLBACK_TITLE = "Home Services in KL & Selangor";

/** Drops control characters (function form avoids ESLint no-control-regex). */
function stripControlChars(value: string): string {
  let out = "";
  for (const ch of value) {
    const code = ch.charCodeAt(0);
    if (code >= 0x20 && code !== 0x7f) out += ch;
  }
  return out;
}

function sanitise(raw: string | null): string {
  if (!raw) return FALLBACK_TITLE;
  const clean = stripControlChars(raw)
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 160);
  return clean || FALLBACK_TITLE;
}

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const title = sanitise(params.get("title"));
  const template = TEMPLATES[params.get("t") ?? "default"] ?? TEMPLATES.default;

  // Scale the title down so long titles wrap inside the 630px canvas
  // without colliding with the top/bottom rows (160 chars ≈ 5 lines at 30px).
  const titleFontSize = title.length <= 40 ? 56 : title.length <= 80 ? 44 : title.length <= 120 ? 36 : 30;

  const response = new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px 64px",
          background: "linear-gradient(135deg, #082F49 0%, #075985 60%, #0C4A6E 100%)",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
        }}
      >
        {/* Accent glow */}
        <div
          style={{
            position: "absolute",
            top: -140,
            right: -120,
            width: 420,
            height: 420,
            borderRadius: "50%",
            background: template.accent,
            opacity: 0.16,
            display: "flex",
          }}
        />
        {/* Top row: brand + template chip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: template.accent,
                display: "flex",
              }}
            />
            <div style={{ fontSize: 34, fontWeight: 800, letterSpacing: 1, display: "flex" }}>
              KL&nbsp;SERVIS&nbsp;RUMAH
            </div>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: 3,
              color: template.accent,
              border: `2px solid ${template.accent}`,
              borderRadius: 999,
              padding: "8px 22px",
            }}
          >
            {template.label}
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            width: "100%",
            fontSize: titleFontSize,
            lineHeight: 1.18,
            fontWeight: 800,
            letterSpacing: -0.5,
            color: "#F8FAFC",
            maxWidth: 960,
          }}
        >
          {title}
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "2px solid rgba(255,255,255,0.18)",
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex", fontSize: 24, fontWeight: 600, color: "#BAE6FD" }}>
            www.klservisrumah.my
          </div>
          <div style={{ display: "flex", fontSize: 24, fontWeight: 600, color: "#E0F2FE" }}>
            Fixed-price home services · KL &amp; Selangor · WhatsApp +60 11-1662 7349
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        // s-maxage caches the deterministic image at the CDN for 24h so
        // crawlers and social fetchers (WhatsApp, Facebook, Telegram) never
        // re-invoke the rendering function per page; max-age covers browsers.
        "Cache-Control": "public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800",
      },
    }
  );

  return response;
}
