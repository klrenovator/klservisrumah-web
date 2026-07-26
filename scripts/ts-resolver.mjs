/**
 * Minimal ESM resolve hook for running the repo's TypeScript directly under
 * `node --experimental-strip-types`.
 *
 * Application code imports without file extensions (`./pricing`) and via the
 * `@/*` path alias, both of which Next.js/webpack resolve but bare Node does
 * not. This hook adds the two rules so scripts can import real application
 * modules instead of duplicating them.
 *
 * Usage: node --experimental-strip-types --import ./scripts/ts-resolver.mjs script.ts
 */

import { existsSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";
import { register } from "node:module";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

export async function resolve(specifier, context, nextResolve) {
  let target = specifier;

  // `@/lib/foo` → `<root>/lib/foo`
  if (target.startsWith("@/")) {
    target = pathToFileURL(path.join(projectRoot, target.slice(2))).href;
  }

  const isRelative = target.startsWith("./") || target.startsWith("../");
  const isFileUrl = target.startsWith("file:");

  if (isRelative || isFileUrl) {
    const base = isFileUrl
      ? fileURLToPath(target)
      : path.resolve(path.dirname(fileURLToPath(context.parentURL)), target);

    for (const candidate of [base, `${base}.ts`, `${base}.tsx`, path.join(base, "index.ts")]) {
      if (existsSync(candidate) && !candidate.endsWith(path.sep)) {
        try {
          return await nextResolve(pathToFileURL(candidate).href, context);
        } catch {
          /* fall through to the next candidate */
        }
      }
    }
  }

  return nextResolve(target, context);
}

// Self-register when loaded via `--import`.
if (!process.env.__TS_RESOLVER_REGISTERED) {
  process.env.__TS_RESOLVER_REGISTERED = "1";
  register(import.meta.url, import.meta.url);
}
