/**
 * Content Security Policy.
 *
 * WHY THIS EXISTS
 * ---------------
 * The site shipped HSTS, X-Frame-Options, nosniff, Referrer-Policy and
 * Permissions-Policy but **no CSP at all** — the single most effective
 * defence-in-depth header against XSS. The app renders trusted JSON-LD and a
 * locale-bootstrap script through `dangerouslySetInnerHTML` in nine places; a
 * CSP is what limits the blast radius should any of those ever be fed
 * attacker-influenced data, and it also blocks injected third-party scripts,
 * form hijacking and clickjacking via `frame-ancestors`.
 *
 * The directives below are derived from an inventory of what the app actually
 * loads — nothing speculative:
 *
 *   script-src   'self' + Google Tag Manager (the only third-party script,
 *                loaded by components/analytics/google-analytics.tsx).
 *   connect-src  'self' (the /api/error-log beacon and admin fetches) plus the
 *                Google Analytics collection endpoints.
 *   img-src      'self' + data: (the hero's inline base64 SVG blur placeholder)
 *                + blob: (next/image) + GA's tracking pixel.
 *   style-src    'self' + 'unsafe-inline' — required: React/Next inject inline
 *                <style> for critical CSS and the code base uses `style={{…}}`.
 *   frame-src    'none' — the site embeds no iframes (verified: zero matches).
 *   frame-ancestors 'none' — the modern equivalent of X-Frame-Options: DENY,
 *                which we keep alongside it for older browsers.
 *
 * NOTE ON 'unsafe-inline' IN script-src: Next.js App Router bootstraps
 * hydration with inline scripts that have no stable nonce in a fully static
 * export, and this site is ~4,245 statically prerendered pages served from a
 * CDN, so a per-request nonce is not available. `'unsafe-inline'` is therefore
 * required for the app to run. It is still a substantial improvement over no
 * CSP: script-src remains origin-limited, so an injected `<script src>`
 * pointing at an attacker domain is blocked, as are eval, foreign form posts,
 * plugins and framing.
 */
const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  "manifest-src 'self'",
  "worker-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://www.googletagmanager.com https://www.google-analytics.com",
  "font-src 'self' data:",
  "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com",
  "upgrade-insecure-requests",
].join("; ");

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  compress: true,
  // Keep verification and SEO metadata in the initial HTML document. Next.js
  // otherwise streams metadata for user agents it does not recognise as
  // HTML-limited bots; Bing's verification fetcher can then inspect the
  // response before the streamed tags have been moved into <head>.
  htmlLimitedBots: /.*/,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // AVIF removed — it aggressively re-encodes colours and caused visible
    // desaturation / hue shifts on hero photos and the brand logo.
    // WebP with an sRGB ICC profile preserves colour fidelity much better.
    formats: ["image/webp"],
    deviceSizes: [360, 414, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },
  experimental: {
    // NB: `cpus: 1` and `workerThreads: false` are kept from the original
    // repo to stabilise build memory on constrained CI runners.
    cpus: 1,
    workerThreads: false,
    // The site has multiple root layouts (one per language tree — see
    // app/(en)/layout.tsx for why), so a conventional app/not-found.tsx cannot
    // exist (it would have no root layout). The experimental global-not-found
    // convention (Next 15.4+) renders app/global-not-found.tsx — a complete
    // document with the site chrome — for every URL that matches no route and
    // for NoFallbackError cases (dynamicParams=false pages with unknown
    // params, e.g. /ms/services/not-a-service).
    globalNotFound: true,
    // Tree-shake the biggest offenders. Every package here has hundreds
    // of exports; without this Next.js pulls the whole barrel file into
    // the client bundle even when a single icon is used.
    // (tailwind-merge / react-hook-form / zod were removed — never imported;
    // see PART5/A1 of the forensic audit and SESSION_LOG Session 001.)
    optimizePackageImports: [
      "lucide-react",
      "clsx",
    ],
  },
  async redirects() {
    return [
      // Service shortcut URLs — redirect root-level paths to canonical service pages
      { source: "/painting", destination: "/services/painting", permanent: true },
      { source: "/plumbing", destination: "/services/plumbing", permanent: true },
      { source: "/ceiling", destination: "/services/ceiling", permanent: true },
      { source: "/waterproofing", destination: "/services/waterproofing", permanent: true },
      { source: "/handyman", destination: "/services/handyman", permanent: true },
      { source: "/electrical", destination: "/services/electrical", permanent: true },
      { source: "/tiling", destination: "/services/tiling", permanent: true },
      { source: "/renovation", destination: "/services/house-renovation", permanent: true },
      { source: "/painting-calculator", destination: "/tools/painting-calculator", permanent: true },
      { source: "/plumbing-diagnostic", destination: "/tools/plumbing-diagnostic", permanent: true },
      { source: "/leak-triage", destination: "/tools/leak-triage", permanent: true },
      { source: "/ceiling-calculator", destination: "/tools/ceiling-calculator", permanent: true },
      { source: "/tv-mount-advisor", destination: "/tools/tv-mount-advisor", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      {
        // NB: no `Cache-Control` here on purpose.
        //
        // Next.js applies `headers()` rules in order, but a later matching rule
        // *overrides* an earlier one for the same header key. This catch-all
        // matches `/_next/static/*` too, so setting Cache-Control here stomped
        // the `immutable` policy above and served every hashed JS/CSS chunk as
        // `max-age=3600` — forcing repeat visitors to re-validate ~1.3 MB of
        // fingerprinted assets on every visit. Content-hashed files never change,
        // so they must keep the immutable rule. HTML caching is left to Next.js,
        // which already emits correct per-route values.
        source: "/:path*",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(self)" },
          { key: "Content-Security-Policy", value: CONTENT_SECURITY_POLICY },
          // Blocks the legacy cross-origin isolation leaks that CSP does not
          // cover. `same-origin` on COOP severs the window.opener relationship
          // for cross-origin popups; CORP stops other origins embedding our
          // subresources.
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
        ],
      },
    ];
  },
};

export default nextConfig;
