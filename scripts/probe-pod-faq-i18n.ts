/**
 * Post-build probe for P3-12 phase-2 tranches: verify every localized
 * `/ms` + `/zh` pod detail page in a completed family renders the editorial
 * FAQ set in visible HTML, byte-identical to its FAQPage.mainEntity JSON-LD.
 *
 * Usage (after `npm run build`):
 *   node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON --experimental-strip-types \
 *        --import ./scripts/ts-resolver.mjs scripts/probe-pod-faq-i18n.ts <family>
 *
 * where <family> is a key of POD_FAMILIES that has a localized route tree
 * (e.g. `guidesMaintenance`, `seasonal`, `compare`, `brands`, `commercial`,
 * `residential`). Defaults to `guidesMaintenance` (Wave 17).
 */
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { CONTENT_POD_FAQ_I18N } from "../config/content-pod-faq-i18n";
import { POD_FAMILIES, type ContentPodFamily } from "../config/content-locale";
import { POD_FAMILY_BASE_PATHS } from "../config/pod-family-paths";

const family = (process.argv[2] ?? "guidesMaintenance") as ContentPodFamily;
const def = POD_FAMILIES[family];
if (!def) {
  console.error(`Unknown family "${family}". Valid: ${Object.keys(POD_FAMILIES).join(", ")}`);
  process.exit(1);
}

const slugs = def.pages.filter((p) => p.faqTopic && !p.serviceDerived).map((p) => p.slug);
const basePath = POD_FAMILY_BASE_PATHS[family];
const root = join(process.cwd(), ".next", "server", "app");
const problems: string[] = [];
let pages = 0;
let faqs = 0;

function stripBlocks(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ");
}

function visibleText(html: string): string {
  return stripBlocks(html)
    .replace(/<[^>]+>/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ");
}

for (const locale of ["ms", "zh"] as const) {
  for (const slug of slugs) {
    const file = join(root, locale, basePath, `${slug}.html`);
    let raw: string;
    try {
      raw = readFileSync(file, "utf8");
    } catch {
      problems.push(`${locale}/${basePath}/${slug}: built HTML not found`);
      continue;
    }
    pages++;
    const vis = visibleText(raw);

    const jsonLdMatches = raw.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g) ?? [];
    let faqMainEntity: { name?: string; acceptedAnswer?: { text?: string } }[] = [];
    for (const m of jsonLdMatches) {
      const inner = m.replace(/<script type="application\/ld\+json">|<\/script>/g, "");
      try {
        const parsed = JSON.parse(inner);
        const node = Array.isArray(parsed)
          ? parsed.find((n) => n?.["@type"] === "FAQPage")
          : parsed?.["@type"] === "FAQPage"
            ? parsed
            : null;
        if (node?.mainEntity) faqMainEntity = node.mainEntity;
      } catch {
        /* ignore unrelated blocks */
      }
    }

    const expected = CONTENT_POD_FAQ_I18N[`${family}:${slug}`]?.[locale];
    if (!expected) {
      problems.push(`${locale}/${basePath}/${slug}: missing registry set`);
      continue;
    }

    for (let i = 0; i < expected.length; i++) {
      faqs++;
      const { q, a } = expected[i];
      const qNorm = q.replace(/\s+/g, " ");
      const aNorm = a.replace(/\s+/g, " ");
      if (!vis.includes(qNorm)) problems.push(`${locale}/${basePath}/${slug} Q${i + 1}: question not visible in HTML`);
      if (!vis.includes(aNorm)) problems.push(`${locale}/${basePath}/${slug} A${i + 1}: answer not visible in HTML`);
      const schemaNode = faqMainEntity[i];
      if (!schemaNode) {
        problems.push(`${locale}/${basePath}/${slug} Q${i + 1}: no matching FAQPage.mainEntity[${i}]`);
        continue;
      }
      if (schemaNode.name?.trim() !== qNorm) problems.push(`${locale}/${basePath}/${slug} Q${i + 1}: schema name != registry question`);
      if ((schemaNode.acceptedAnswer?.text ?? "").trim() !== aNorm) problems.push(`${locale}/${basePath}/${slug} A${i + 1}: schema answer != registry answer`);
    }
  }
}

if (problems.length) {
  console.error(`✗ ${family} probe FAILED — ${problems.length} problem(s):`);
  for (const p of problems) console.error(`  • ${p}`);
  process.exit(1);
}
console.log(`✓ ${family} probe — ${pages}/${slugs.length * 2} localized pages; ${faqs}/${slugs.length * 8} Q&As visible and byte-identical to FAQPage schema.`);
