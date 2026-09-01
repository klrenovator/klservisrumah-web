/**
 * P5-13 / P5-14 — raster og:image / twitter:image / schema image gate.
 *
 * Part 5 found og:image and schema `image` pointing at SVGs (`hero-*.svg`,
 * blog cover SVGs) on ~2,200+ pages. WhatsApp, Facebook, Telegram and iMessage
 * refuse SVG previews, and Google's structured-data pipeline skips SVG image
 * fields. `lib/og-image.ts` + `app/og-image/route.tsx` (next/og 1200×630 PNG)
 * replaced them, but nothing stopped a re-added SVG literal from silently
 * shipping to the public site — this gate is that stop.
 *
 * MODES
 * -----
 *   default          source + build corpus checks (run after `npm run build`)
 *   --source-only    source wiring checks only; safe in `prebuild` before any
 *                    build output exists
 *
 * Exits non-zero on any failure.
 *
 * Run: `npm run audit:raster-og`
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const BUILD = path.join(ROOT, ".next", "server", "app");
const SOURCE_ONLY = process.argv.includes("--source-only");

const failures: string[] = [];

function fail(message: string) {
  failures.push(message);
}

function ok(label: string, detail: string) {
  console.log(`   ✅ ${label} — ${detail}`);
}

const OG_TEMPLATE_IDS = ["default", "service", "area", "blog", "tool", "problem", "cost", "pod"];

/* ------------------------------------------------------------------ *
 * 1. Source wiring — the rasterisation helpers must exist and be used.
 * ------------------------------------------------------------------ */
console.log("\n1. Raster-OG source wiring");

const ogImageLib = path.join(ROOT, "lib", "og-image.ts");
if (!fs.existsSync(ogImageLib)) {
  fail("lib/og-image.ts is missing — rasterOgFor/ogImageUrl/isSvgImage no longer exist");
} else {
  const src = fs.readFileSync(ogImageLib, "utf8");
  for (const symbol of ["export function rasterOgFor", "export function ogImageUrl", "export function isSvgImage", "export type OgTemplate"]) {
    if (!src.includes(symbol)) fail(`lib/og-image.ts no longer exports ${symbol}`);
  }
  if (!src.includes("/og-image?")) fail("lib/og-image.ts no longer points at the /og-image route");
  ok("lib/og-image.ts", "rasterOgFor / ogImageUrl / isSvgImage / OgTemplate present, route URL intact");
}

const routeFile = path.join(ROOT, "app", "og-image", "route.tsx");
if (!fs.existsSync(routeFile)) {
  fail("app/og-image/route.tsx is missing — the raster template route no longer exists");
} else {
  const src = fs.readFileSync(routeFile, "utf8");
  if (!src.includes("ImageResponse")) fail("app/og-image/route.tsx no longer renders with next/og ImageResponse");
  // Edge (not Node) since 2026-09-01: live probes showed the Node serverless
  // version intermittently 500ing (heavy resvg/satori cold starts on Vercel
  // Hobby). next/og ImageResponse is fully supported on the Edge runtime —
  // assert the explicit runtime declaration exists so it is never dropped.
  if (!/export const runtime\s*=\s*"edge"/.test(src)) fail("app/og-image/route.tsx lost runtime = \"edge\"");
  for (const id of OG_TEMPLATE_IDS) {
    if (!new RegExp(`\\b${id}:\\s*\\{`).test(src)) fail(`app/og-image/route.tsx lost the "${id}" template`);
  }
  ok("app/og-image/route.tsx", "ImageResponse + edge runtime + all 8 template ids present");
}

const seoMeta = path.join(ROOT, "lib", "seo-meta.ts");
const seoMetaSrc = fs.readFileSync(seoMeta, "utf8");
if (!seoMetaSrc.includes("rasterOgFor(")) {
  fail("lib/seo-meta.ts no longer passes og:image through rasterOgFor — SVGs would ship again");
}
ok("lib/seo-meta.ts", "og:image / twitter:image routed through rasterOgFor");

const seoSrc = fs.readFileSync(path.join(ROOT, "lib", "seo.ts"), "utf8");
const rasterUses = (seoSrc.match(/rasterOgFor\(/g) ?? []).length;
if (rasterUses < 3) {
  fail(`lib/seo.ts uses rasterOgFor only ${rasterUses}× — schema image fields (Service, LocalBusiness, BlogPosting) must all rasterise`);
}
const svgInSeoImage = seoSrc
  .split("\n")
  .map((line, i) => ({ line, i: i + 1 }))
  .filter(({ line }) => /image/i.test(line) && /\.svg/i.test(line) && !/^\s*(\/\/|\*)/.test(line));
if (svgInSeoImage.length > 0) {
  for (const { line, i } of svgInSeoImage) fail(`lib/seo.ts:${i} has an SVG in an image context: ${line.trim()}`);
}
ok("lib/seo.ts", `schema image fields rasterised (${rasterUses} rasterOgFor call sites, 0 raw SVG image literals)`);

// No page-level metadata may pass an SVG straight to images: (would bypass
// the central rasterOgFor). Scan app/ + components/ for image-emitting lines
// that still carry a literal .svg.
const svgLiteralOffenders: string[] = [];
(function walk(dir: string) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "og-image") continue; // the raster route itself
      walk(full);
    } else if (/\.(ts|tsx)$/.test(entry.name)) {
      const rel = path.relative(ROOT, full);
      const lines = fs.readFileSync(full, "utf8").split("\n");
      lines.forEach((line, index) => {
        const code = line.trim();
        if (code.startsWith("*") || code.startsWith("//")) return;
        // Image-emitting metadata/schema contexts: og:image, twitter:image,
        // images: arrays, image: fields, ImageResponse svg? (route excluded).
        if (/\.svg/i.test(code) && /ogImage|twitterImage|images|image|ImageResponse/i.test(code)) {
          svgLiteralOffenders.push(`${rel}:${index + 1} ${code.slice(0, 120)}`);
        }
      });
    }
  }
})(path.join(ROOT, "app"));
(function walkComponents(dir: string) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkComponents(full);
    else if (/\.(ts|tsx)$/.test(entry.name)) {
      const rel = path.relative(ROOT, full);
      const lines = fs.readFileSync(full, "utf8").split("\n");
      lines.forEach((line, index) => {
        const code = line.trim();
        if (code.startsWith("*") || code.startsWith("//")) return;
        if (/\.svg/i.test(code) && /ogImage|twitterImage|images|image|ImageResponse/i.test(code)) {
          svgLiteralOffenders.push(`${rel}:${index + 1} ${code.slice(0, 120)}`);
        }
      });
    }
  }
})(path.join(ROOT, "components"));
if (svgLiteralOffenders.length > 0) {
  for (const o of svgLiteralOffenders) fail(`SVG literal in image-emitting context — ${o}`);
} else {
  ok("source scan", "0 SVG literals in og/twitter/schema image-emitting contexts (app/ + components/)");
}

/* ------------------------------------------------------------------ *
 * 2. Build corpus (skipped in --source-only mode).
 * ------------------------------------------------------------------ */
if (!SOURCE_ONLY) {
  console.log("\n2. Build corpus");

  if (!fs.existsSync(BUILD)) {
    fail(`no build output at .next/server/app — run \`npm run build\` first (or pass --source-only)`);
  } else {
    const htmlFiles: string[] = [];
    (function walk(dir: string) {
      for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) walk(full);
        else if (entry.name.endsWith(".html")) htmlFiles.push(full);
      }
    })(BUILD);

    let svgOg = 0;
    let svgTwitter = 0;
    let svgSchemaImage = 0;
    let rasterRoutePages = 0;
    const templateUsage = new Map<string, number>();
    const ogSample: string[] = [];

    for (const file of htmlFiles) {
      const html = fs.readFileSync(file, "utf8");
      const ogMatches = [...html.matchAll(/<meta property="og:image" content="([^"]+)"/g)];
      const twMatches = [...html.matchAll(/<meta name="twitter:image" content="([^"]+)"/g)];
      const schemaMatches = [...html.matchAll(/"image":"([^"]+)"/g)];

      for (const m of ogMatches) {
        if (/\.svg($|\?)/i.test(m[1])) svgOg++;
        if (ogSample.length < 3) ogSample.push(m[1]);
      }
      for (const m of twMatches) {
        if (/\.svg($|\?)/i.test(m[1])) svgTwitter++;
      }
      for (const m of schemaMatches) {
        if (/\.svg($|\?)/i.test(m[1])) svgSchemaImage++;
      }
      const routeUses = (html.match(/\/og-image\?/g) ?? []).length;
      if (routeUses > 0) rasterRoutePages++;
      for (const m of html.matchAll(/\/og-image\?[^"'\s]*[?&](?:amp;)?t=([a-z]+)/g)) {
        templateUsage.set(m[1], (templateUsage.get(m[1]) ?? 0) + 1);
      }
    }

    if (svgOg > 0) fail(`${svgOg} pages still emit an SVG og:image (e.g. ${ogSample[0] ?? "?"})`);
    else ok("og:image", `0 SVG og:image across ${htmlFiles.length} built pages`);
    if (svgTwitter > 0) fail(`${svgTwitter} pages still emit an SVG twitter:image`);
    else ok("twitter:image", "0 SVG twitter:image");
    if (svgSchemaImage > 0) fail(`${svgSchemaImage} pages still emit an SVG schema image field`);
    else ok("schema image", "0 SVG schema image fields");

    // Part 5 measured ~2,200 SVG-og pages; the measured raster build had
    // 1,349 pages on the /og-image route (the rest use raster heroes). A
    // regression that bypasses the route entirely would collapse this floor.
    if (rasterRoutePages < 1000) {
      fail(`only ${rasterRoutePages} built pages use the /og-image raster route (expected ≥ 1000)`);
    } else {
      ok("/og-image route", `${rasterRoutePages} built pages use the raster template`);
    }

    for (const id of OG_TEMPLATE_IDS) {
      if (!templateUsage.has(id)) fail(`no built page uses the "${id}" OG template`);
    }
    ok(
      "template coverage",
      `all ${OG_TEMPLATE_IDS.length} templates emitted (${[...templateUsage.entries()].map(([k, v]) => `${k}=${v}`).join(", ")})`,
    );
    if (ogSample.length > 0) console.log(`   ℹ️  sample og:image: ${ogSample[0]}`);
  }
} else {
  console.log("\n2. Build corpus — skipped (--source-only)");
}

/* ------------------------------------------------------------------ */
console.log("");
if (failures.length > 0) {
  console.error(`❌ Raster-OG gate FAILED — ${failures.length} problem(s):`);
  for (const f of failures) console.error(`   • ${f}`);
  process.exit(1);
}
console.log("✅ Raster-OG gate PASSED — og:image / twitter:image / schema image are raster-only (P5-13/14).");
