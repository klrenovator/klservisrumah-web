import fs from "node:fs";
import path from "node:path";

const appRoot = path.resolve(process.cwd(), ".next/server/app");
const threshold = 0.7;
const shingleSize = 5;

type Page = { file: string; place: string; service: string; shingles: Set<string> };
type Result = { score: number; left: string; right: string };

function walk(directory: string): string[] {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const target = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(target) : entry.name.endsWith(".html") ? [target] : [];
  });
}

function visibleTokens(file: string) {
  const html = fs.readFileSync(file, "utf8")
    .replace(/<(script|style|svg|noscript|template)\b[^>]*>[\s\S]*?<\/\1>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&(?:nbsp|amp|quot|#39|#x27);/gi, " ")
    .toLowerCase();
  return html.match(/[\p{L}\p{N}]+/gu) ?? [];
}

function shingles(file: string) {
  const tokens = visibleTokens(file);
  const result = new Set<string>();
  for (let index = 0; index <= tokens.length - shingleSize; index += 1) {
    result.add(tokens.slice(index, index + shingleSize).join("\u0001"));
  }
  return result;
}

function jaccard(left: Set<string>, right: Set<string>) {
  const smaller = left.size <= right.size ? left : right;
  const larger = smaller === left ? right : left;
  let intersection = 0;
  for (const value of smaller) if (larger.has(value)) intersection += 1;
  return intersection / (left.size + right.size - intersection);
}

function groupBy(pages: Page[], key: (page: Page) => string) {
  const groups = new Map<string, Page[]>();
  for (const page of pages) groups.set(key(page), [...(groups.get(key(page)) ?? []), page]);
  return groups;
}

function auditGroups(groups: Map<string, Page[]>): Result {
  let highest: Result = { score: 0, left: "", right: "" };
  for (const pages of groups.values()) {
    for (let left = 0; left < pages.length; left += 1) {
      for (let right = left + 1; right < pages.length; right += 1) {
        const score = jaccard(pages[left].shingles, pages[right].shingles);
        if (score > highest.score) highest = { score, left: pages[left].file, right: pages[right].file };
      }
    }
  }
  return highest;
}

const files = walk(appRoot);
const areaService: Page[] = [];
const nearMe: Page[] = [];
const suburbService: Page[] = [];
for (const file of files) {
  const relative = path.relative(appRoot, file).replaceAll(path.sep, "/");
  let match = relative.match(/^areas\/([^/]+)\/([^/]+)\.html$/);
  if (match) areaService.push({ file: relative, place: match[1], service: match[2], shingles: shingles(file) });
  match = relative.match(/^areas\/([^/]+)\/([^/]+)\/near-me\.html$/);
  if (match) nearMe.push({ file: relative, place: match[1], service: match[2], shingles: shingles(file) });
  match = relative.match(/^suburbs\/([^/]+)\/([^/]+)\.html$/);
  if (match) suburbService.push({ file: relative, place: match[1], service: match[2], shingles: shingles(file) });
}

const audits = [
  ["area-service across areas", auditGroups(groupBy(areaService, (page) => page.service))],
  ["area-service across services", auditGroups(groupBy(areaService, (page) => page.place))],
  ["suburb-service across suburbs", auditGroups(groupBy(suburbService, (page) => page.service))],
  ["suburb-service across services", auditGroups(groupBy(suburbService, (page) => page.place))]
] as const;

console.log(`Location similarity audit: ${areaService.length} area-service, ${nearMe.length} near-me and ${suburbService.length} suburb-service pages.`);
console.log(`Metric: Jaccard similarity of normalized ${shingleSize}-word visible-text shingles; required maximum < ${(threshold * 100).toFixed(0)}%.`);

// BP-1 phase 1 retired all 1,073 `/areas/<a>/<s>/near-me` pages (301 → parent).
// Their similarity layers are therefore gone from the corpus; assert that rather
// than quietly printing a meaningless "0.0% max ( ↔ )".
if (nearMe.length !== 0) {
  console.error(`✖ ${nearMe.length} /areas/*/*/near-me pages are still being generated — BP-1 phase 1 regression.`);
  process.exit(1);
}
console.log("  near-me layer: 0 pages (BP-1 phase 1 — consolidated into /areas/<area>/<svc>)");

let failed = false;
for (const [label, result] of audits) {
  console.log(`  ${label}: ${(result.score * 100).toFixed(1)}% max (${result.left} ↔ ${result.right})`);
  if (result.score >= threshold) failed = true;
}
if (failed) {
  console.error(`✖ Location similarity threshold failed (maximum must be below ${(threshold * 100).toFixed(0)}%).`);
  process.exit(1);
}
console.log("✓ Every measured location-page layer is below the 70% similarity threshold.");
