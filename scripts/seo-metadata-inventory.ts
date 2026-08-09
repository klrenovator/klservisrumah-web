/**
 * Build a complete before/after SEO metadata inventory from prerendered HTML.
 *
 * Usage (after `npm run build`):
 *   npm run audit:seo-inventory -- --baseline /tmp/seo-baseline.json
 *
 * The baseline is a JSON array captured from a prior build with the fields
 * url, title, description, h1, canonical and robots. When no baseline is
 * supplied the current build is used for both columns.
 */
import fs from "node:fs";
import path from "node:path";

const BUILD_DIR = path.join(process.cwd(), ".next", "server", "app");
const DEFAULT_OUTPUT = path.join(process.cwd(), "docs", "seo-metadata-inventory.csv");
const DEFAULT_SUMMARY = path.join(process.cwd(), "docs", "seo-metadata-summary.json");

type Row = {
  url: string;
  title: string;
  description: string;
  h1: string;
  canonical: string;
  robots: string;
  status?: string;
};

type InventoryStatus = "Indexable" | "Canonicalized" | "Noindex";

function argument(name: string): string | undefined {
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] : undefined;
}

function walk(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(file) : entry.isFile() && entry.name.endsWith(".html") ? [file] : [];
  });
}

function pageUrl(file: string): string {
  let relative = path.relative(BUILD_DIR, file).replace(/\\/g, "/").replace(/\.html$/, "");
  relative = relative.replace(/^\((en|ms|zh)\)\//, "");
  if (relative === "index") return "/";
  if (relative.endsWith("/index")) relative = relative.slice(0, -6);
  return `/${relative}`;
}

function decodeHtml(value: string): string {
  return value
    .replace(/&#(\d+);/g, (_, code: string) => String.fromCodePoint(Number(code)))
    .replace(/&#x([\da-f]+);/gi, (_, code: string) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function text(value: string): string {
  return decodeHtml(value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());
}

function match(html: string, pattern: RegExp): string {
  return text(pattern.exec(html)?.[1] ?? "");
}

function parse(file: string): Row {
  const html = fs.readFileSync(file, "utf8");
  return {
    url: pageUrl(file),
    title: match(html, /<title[^>]*>([\s\S]*?)<\/title>/i),
    description: match(html, /<meta\b[^>]*name="description"[^>]*content="([^"]*)"[^>]*>/i),
    h1: match(html, /<h1\b[^>]*>([\s\S]*?)<\/h1>/i),
    canonical: match(html, /<link\b[^>]*rel="canonical"[^>]*href="([^"]*)"[^>]*>/i),
    robots: match(html, /<meta\b[^>]*name="robots"[^>]*content="([^"]*)"[^>]*>/i)
  };
}

function normalizedUrl(value: string): string {
  try {
    const parsed = new URL(value, "https://www.klservisrumah.my");
    return `${parsed.origin}${decodeURIComponent(parsed.pathname).replace(/\/$/, "") || ""}`;
  } catch {
    return value.replace(/\/$/, "");
  }
}

function status(row: Row): InventoryStatus {
  if (row.robots.toLowerCase().includes("noindex")) return "Noindex";
  const expected = `https://www.klservisrumah.my${row.url === "/" ? "" : row.url}`;
  return row.canonical && normalizedUrl(row.canonical) !== normalizedUrl(expected)
    ? "Canonicalized"
    : "Indexable";
}

function csv(value: string | number): string {
  const stringValue = String(value);
  return /[",\n]/.test(stringValue) ? `"${stringValue.replace(/"/g, '""')}"` : stringValue;
}

function duplicateStats(rows: Row[], key: "title" | "description") {
  const values = new Map<string, number>();
  // Inventory duplicates across the complete rendered corpus, including
  // canonicalized supporting pages. The technical head audit separately
  // enforces zero duplicates among self-canonical indexable pages.
  for (const row of rows) {
    if (!row[key]) continue;
    values.set(row[key], (values.get(row[key]) ?? 0) + 1);
  }
  const groups = [...values.values()].filter((count) => count > 1);
  return { groups: groups.length, pages: groups.reduce((sum, count) => sum + count, 0) };
}

if (!fs.existsSync(BUILD_DIR)) {
  console.error("Build output not found. Run `npm run build` first.");
  process.exit(1);
}

const output = argument("--output") ?? DEFAULT_OUTPUT;
const summaryOutput = argument("--summary") ?? DEFAULT_SUMMARY;
const currentRows = walk(BUILD_DIR).sort().map(parse);
const baselineFile = argument("--baseline");
const baselineRows: Row[] = baselineFile
  ? JSON.parse(fs.readFileSync(baselineFile, "utf8")) as Row[]
  : currentRows;
const baselineByUrl = new Map(baselineRows.map((row) => [row.url, row]));

const header = [
  "URL",
  "Current Title",
  "New Title",
  "Current Description",
  "New Description",
  "H1",
  "Canonical",
  "Status"
];

let titlesUpdated = 0;
let descriptionsUpdated = 0;
let h1Updated = 0;
let pagesUpdated = 0;

const lines = [header.map(csv).join(",")];
for (const row of currentRows) {
  const before = baselineByUrl.get(row.url) ?? row;
  const titleChanged = before.title !== row.title;
  const descriptionChanged = before.description !== row.description;
  const h1Changed = before.h1 !== row.h1;
  const changed = titleChanged || descriptionChanged || h1Changed || before.canonical !== row.canonical;
  if (titleChanged) titlesUpdated++;
  if (descriptionChanged) descriptionsUpdated++;
  if (h1Changed) h1Updated++;
  if (changed) pagesUpdated++;

  lines.push([
    row.url,
    before.title,
    row.title,
    before.description,
    row.description,
    row.h1,
    row.canonical,
    `${status(row)} · ${changed ? "Updated" : "Unchanged"}`
  ].map(csv).join(","));
}

fs.mkdirSync(path.dirname(output), { recursive: true });
fs.writeFileSync(output, `${lines.join("\n")}\n`);

const beforeTitleDuplicates = duplicateStats(baselineRows, "title");
const afterTitleDuplicates = duplicateStats(currentRows, "title");
const beforeDescriptionDuplicates = duplicateStats(baselineRows, "description");
const afterDescriptionDuplicates = duplicateStats(currentRows, "description");
const beforeMissing = baselineRows.filter((row) => !row.title || !row.description).length;
const afterMissing = currentRows.filter((row) => !row.title || !row.description).length;

const summary = {
  generatedAt: new Date().toISOString(),
  pagesAudited: currentRows.length,
  pagesUpdated,
  titlesUpdated,
  descriptionsUpdated,
  h1sUpdated: h1Updated,
  duplicateTitles: {
    before: beforeTitleDuplicates,
    after: afterTitleDuplicates,
    groupsFixed: Math.max(0, beforeTitleDuplicates.groups - afterTitleDuplicates.groups)
  },
  duplicateDescriptions: {
    before: beforeDescriptionDuplicates,
    after: afterDescriptionDuplicates,
    groupsFixed: Math.max(0, beforeDescriptionDuplicates.groups - afterDescriptionDuplicates.groups)
  },
  missingMetadata: {
    before: beforeMissing,
    after: afterMissing,
    pagesFixed: Math.max(0, beforeMissing - afterMissing)
  },
  status: {
    indexable: currentRows.filter((row) => status(row) === "Indexable").length,
    canonicalized: currentRows.filter((row) => status(row) === "Canonicalized").length,
    noindex: currentRows.filter((row) => status(row) === "Noindex").length
  }
};

fs.writeFileSync(summaryOutput, `${JSON.stringify(summary, null, 2)}\n`);
console.log(`SEO inventory: ${currentRows.length} pages -> ${path.relative(process.cwd(), output)}`);
console.log(`SEO summary -> ${path.relative(process.cwd(), summaryOutput)}`);
console.log(`${pagesUpdated} pages updated; ${titlesUpdated} titles; ${descriptionsUpdated} descriptions; ${h1Updated} H1s.`);
