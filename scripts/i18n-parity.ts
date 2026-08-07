/**
 * Site dictionary parity gate — messages/en.json vs ms.json vs zh.json.
 *
 * Enforces, across ALL site dictionary keys:
 *   1. Key-set parity        — every locale declares exactly the same keys
 *   2. No empty values       — no locale ships a blank/whitespace string
 *   3. Placeholder parity    — {tokens} in EN must appear (same set) in MS/ZH
 *   4. Well-formed tokens    — no malformed placeholders ("{ warranty }"),
 *      which silently skip interpolation and render raw to visitors
 *      (regression of the S012 `{ warranty }` live defect on /zh/services/*)
 *
 * Exits non-zero on any violation so `npm run build` fails loudly.
 * Run standalone with: npm run audit:i18n
 */

import enMessages from "../messages/en.json" with { type: "json" };
import msMessages from "../messages/ms.json" with { type: "json" };
import zhMessages from "../messages/zh.json" with { type: "json" };

type Dict = Record<string, unknown>;

function flatten(obj: Dict, prefix = "", out: Record<string, string> = {}): Record<string, string> {
  for (const [k, v] of Object.entries(obj)) {
    const key = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === "object" && !Array.isArray(v)) {
      flatten(v as Dict, key, out);
    } else if (typeof v === "string") {
      out[key] = v;
    }
  }
  return out;
}

const en = flatten(enMessages as unknown as Dict);
const ms = flatten(msMessages as unknown as Dict);
const zh = flatten(zhMessages as unknown as Dict);

const locales: Array<["ms" | "zh", Record<string, string>]> = [
  ["ms", ms],
  ["zh", zh],
];

let failures = 0;

const enKeys = Object.keys(en);
for (const [name, dict] of locales) {
  const keys = Object.keys(dict);
  const missing = enKeys.filter((k) => !(k in dict));
  const extra = keys.filter((k) => !(k in en));
  if (missing.length || extra.length) {
    failures++;
    console.error(`❌ [${name}] key parity: ${missing.length} missing, ${extra.length} extra`);
    for (const k of missing.slice(0, 10)) console.error(`   missing: ${k}`);
    for (const k of extra.slice(0, 10)) console.error(`   extra:   ${k}`);
  }
}

for (const [name, dict] of locales) {
  const empty = Object.entries(dict).filter(([, v]) => !v.trim());
  if (empty.length) {
    failures++;
    console.error(`❌ [${name}] ${empty.length} empty values`);
    for (const [k] of empty.slice(0, 10)) console.error(`   empty: ${k}`);
  }
}

const tokenRe = /\{[a-zA-Z]+\}/g;
const malformedRe = /\{\s+\w+|\w+\s+\}|\{\}|\{\s*\}/;

for (const k of enKeys) {
  const enTokens = (en[k].match(tokenRe) ?? []).sort().join(",");
  for (const [name, dict] of locales) {
    const value = dict[k];
    if (value === undefined) continue;
    const tokens = (value.match(tokenRe) ?? []).sort().join(",");
    if (tokens !== enTokens) {
      failures++;
      console.error(`❌ placeholder parity [${name}] "${k}": en=(${enTokens}) ${name}=(${tokens})`);
    }
    if (malformedRe.test(value) || malformedRe.test(en[k])) {
      failures++;
      console.error(`❌ malformed placeholder [${name}] "${k}": contains "{ … }" — interpolation would silently render it raw`);
    }
  }
}

if (failures) {
  console.error(`\n❌ i18n parity FAILED — ${failures} violation group(s)`);
  process.exit(1);
}
console.log(`✅ i18n parity PASS — ${enKeys.length} keys × 3 locales, 0 missing/extra/empty/malformed, placeholder-perfect`);
