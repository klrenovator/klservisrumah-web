/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  compress: true,
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
    optimizePackageImports: [
      "lucide-react",
      "clsx",
      "tailwind-merge",
      "react-hook-form",
      "zod",
    ],
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
        source: "/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=3600, must-revalidate" },
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
