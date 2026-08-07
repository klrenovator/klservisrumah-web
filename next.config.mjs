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
        ],
      },
    ];
  },
};

export default nextConfig;
