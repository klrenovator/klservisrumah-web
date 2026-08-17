/**
 * Client bundle guard.
 *
 * WHY THIS EXISTS
 * ---------------
 * The site's heaviest routes once shipped 435–514 kB of first-load JavaScript
 * against a 102 kB shared baseline. The cause was not a heavy UI library: it
 * was four content registries being pulled into the browser bundle by client
 * components that only needed a handful of fields from them.
 *
 *   config/services-data.ts   → 429 kB emitted chunk
 *   config/tools-i18n.ts      → 334 kB emitted chunk
 *   config/problem-data.ts    → 224 kB emitted chunk
 *   config/tools-data.ts      → 152 kB emitted chunk
 *   config/content-data.ts    → re-exports services-data
 *
 * The leaks were mostly indirect and therefore invisible in review — a client
 * component imported a small helper module, and *that* module imported a
 * registry for a build-time validator or a server-only helper.
 *
 * This guard walks the static import graph from every `"use client"` module and
 * fails the build if any of them can reach a registry. Client components should
 * use the compact generated catalogs instead:
 *
 *   config/service-nav.generated.ts        slug + title + price
 *   config/service-summary.generated.ts    + tagline, icon, warranty, sub-service names
 *   config/quote-catalog.generated.ts      + sub-service price and blurb
 *   config/problem-nav.generated.ts        problem link cards
 *   config/content-nav.generated.ts        generic content page siblings
 *   config/dedicated-tool-cards.generated.ts   the six hand-built calculator cards
 *
 * …or receive the data as props from a server component, or load it through a
 * dynamic `import()` (see lib/smart-finder-loader.ts).
 *
 * `import type { … }` statements are erased by the compiler and are ignored
 * here, so importing a *type* from a registry remains fine.
 */

import { readFileSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { globSync } from "node:fs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

/** Modules that must never end up in a client bundle. */
const FORBIDDEN = new Set([
  "config/services-data.ts",
  "config/problem-data.ts",
  "config/problem-data-extra.ts",
  "config/tools-data.ts",
  "config/tools-i18n.ts",
  "config/content-data.ts",
  "config/blog-data.ts",
  "config/area-i18n.ts",
]);

/**
 * Deliberate, reviewed exceptions.
 *
 * `smart-finder-*` are only ever reached through the dynamic `import()` in
 * `lib/smart-finder-loader.ts`, which is the whole point of that module — they
 * are code-split into an on-demand chunk rather than the initial bundle. The
 * guard cannot see that, because it deliberately only follows *static* imports
 * and these files are themselves marked `"use client"`-adjacent by their
 * importers.
 */
const ALLOWED_ROOTS = new Set([
  "lib/smart-finder-index.ts",
  "lib/smart-finder-search.ts",
]);

const SCAN_DIRS = ["app", "components", "context", "hooks", "lib", "config"];

function listFiles(): string[] {
  const out: string[] = [];
  for (const dir of SCAN_DIRS) {
    for (const ext of ["ts", "tsx"]) {
      out.push(...globSync(`${dir}/**/*.${ext}`, { cwd: ROOT }));
    }
  }
  return out.map((f) => f.split(path.sep).join("/"));
}

/**
 * Resolves both `@/`-aliased and relative specifiers to a repo-relative path.
 * Relative imports matter: `lib/estimator/*` wires itself together with `./x`,
 * and an alias-only walk would silently stop at the first relative hop.
 */
function resolveSpecifier(spec: string, importer: string): string | null {
  let base: string;
  if (spec.startsWith("@/")) {
    base = spec.slice(2);
  } else if (spec.startsWith("./") || spec.startsWith("../")) {
    base = path.posix.normalize(path.posix.join(path.posix.dirname(importer), spec));
    if (base.startsWith("..")) return null;
  } else {
    return null; // bare package specifier
  }

  for (const candidate of [`${base}.ts`, `${base}.tsx`, `${base}/index.ts`, `${base}/index.tsx`, base]) {
    try {
      if (statSync(path.join(ROOT, candidate)).isFile()) return candidate;
    } catch {
      /* not this one */
    }
  }
  return null;
}

/**
 * Value imports and re-exports only — `import type { … } from` is erased at
 * compile time. `[^;]*?` keeps a match inside a single statement so the lazy
 * clause cannot run past a semicolon and swallow the next import.
 */
const IMPORT_RE = /(?:^|\n)\s*(?:import|export)\s+(?!type[\s{])([^;]*?)\s*from\s*["']([^"']+)["']/g;

type Module = { deps: string[]; isClient: boolean };

const modules = new Map<string, Module>();

for (const file of listFiles()) {
  let source: string;
  try {
    source = readFileSync(path.join(ROOT, file), "utf8");
  } catch {
    continue;
  }
  const trimmed = source.trimStart();
  const isClient = trimmed.startsWith('"use client"') || trimmed.startsWith("'use client'");

  const deps: string[] = [];
  for (const match of source.matchAll(IMPORT_RE)) {
    // `import { type Foo }` inline-type specifiers still emit nothing, but the
    // statement may also carry value bindings, so treat it as a value import.
    const resolved = resolveSpecifier(match[2], file);
    if (resolved) deps.push(resolved);
  }
  modules.set(file, { deps, isClient });
}

type Violation = { entry: string; chain: string[] };
const violations: Violation[] = [];

for (const [entry, mod] of modules) {
  if (!mod.isClient) continue;
  if (ALLOWED_ROOTS.has(entry)) continue;

  // Breadth-first so the reported chain is the shortest one — easiest to fix.
  const queue: Array<{ file: string; chain: string[] }> = [{ file: entry, chain: [entry] }];
  const seen = new Set<string>([entry]);
  const hits = new Set<string>();

  while (queue.length) {
    const { file, chain } = queue.shift()!;
    for (const dep of modules.get(file)?.deps ?? []) {
      if (FORBIDDEN.has(dep)) {
        if (!hits.has(dep)) {
          hits.add(dep);
          violations.push({ entry, chain: [...chain, dep] });
        }
        continue;
      }
      if (ALLOWED_ROOTS.has(dep) || seen.has(dep)) continue;
      seen.add(dep);
      queue.push({ file: dep, chain: [...chain, dep] });
    }
  }
}

const clientCount = [...modules.values()].filter((m) => m.isClient).length;

if (violations.length) {
  console.error(`\n✗ Client bundle guard FAILED — ${violations.length} registry leak(s) into client code.\n`);
  const byEntry = new Map<string, string[][]>();
  for (const v of violations) {
    if (!byEntry.has(v.entry)) byEntry.set(v.entry, []);
    byEntry.get(v.entry)!.push(v.chain);
  }
  for (const [entry, chains] of [...byEntry].sort()) {
    console.error(`  ${entry}`);
    for (const chain of chains) {
      console.error(`      ${chain.join("\n        → ")}`);
    }
    console.error("");
  }
  console.error("Use a compact generated catalog, pass the data down as props from a");
  console.error("server component, or load it with a dynamic import().");
  console.error("See the header of scripts/client-bundle-guard.ts for the options.\n");
  process.exit(1);
}

console.log(
  `✓ Client bundle guard OK — ${clientCount} client modules, none reach the ${FORBIDDEN.size} heavy content registries.`
);
