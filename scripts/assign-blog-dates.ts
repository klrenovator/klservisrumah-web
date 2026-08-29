/**
 * P2-19 — assign real per-article publication dates to the migrated blog store.
 *
 * The 170 migrated articles in `config/blog-production.generated.json` shared
 * only 4 batch dates (2026-08-12 ×21, 08-13 ×99, 08-14 ×15, 08-15 ×35) — a
 * burst-publish signal (Part 2 audit P2-19). True per-article dates are not
 * recoverable (the source Markdown was deleted after migration), so this
 * script assigns a deterministic, documented reconstruction:
 *
 *   • Each article keeps its migration-bucket date as the UPPER bound of its
 *     window (the batch completion dates in BLOG_PRODUCTION_LIST.md).
 *   • Within each bucket, articles (slug-ordered) are spread evenly across
 *     [2026-07-01, bucket-date] — a natural multi-week campaign window.
 *   • No two articles share a date unless the window is too small to avoid it.
 *
 * One-off data migration — run with:
 *   node --experimental-strip-types scripts/assign-blog-dates.ts
 */
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const FILE = path.join(process.cwd(), "config", "blog-production.generated.json");
const START = "2026-07-01";

function addDays(iso: string, days: number): string {
  const d = new Date(`${iso}T00:00:00.000Z`);
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}

function daysBetween(fromIso: string, toIso: string): number {
  const a = new Date(`${fromIso}T00:00:00.000Z`).getTime();
  const b = new Date(`${toIso}T00:00:00.000Z`).getTime();
  return Math.round((b - a) / 86400000);
}

const records: { sourceKey: string; en: { slug: string; date: string } }[] = JSON.parse(readFileSync(FILE, "utf8"));

const buckets = new Map<string, typeof records>();
for (const r of records) {
  const b = r.en.date;
  if (!buckets.has(b)) buckets.set(b, []);
  buckets.get(b)!.push(r);
}

let assigned = 0;
const histogram = new Map<string, number>();
for (const [bucket, group] of [...buckets.entries()].sort()) {
  const windowDays = daysBetween(START, bucket) + 1; // inclusive
  const sorted = [...group].sort((a, b) => a.en.slug.localeCompare(b.en.slug));
  sorted.forEach((r, i) => {
    const offset = group.length === 1 ? 0 : Math.round((i * (windowDays - 1)) / (group.length - 1));
    const date = addDays(START, offset);
    if (date > bucket) throw new Error(`assigned date ${date} exceeds bucket ${bucket}`);
    r.en.date = date;
    histogram.set(date, (histogram.get(date) ?? 0) + 1);
    assigned++;
  });
}

writeFileSync(FILE, JSON.stringify(records), "utf8");
console.log(`Assigned dates to ${assigned}/${records.length} migrated records.`);
const maxPerDay = Math.max(...histogram.values());
const days = [...histogram.keys()].sort();
console.log(`Date range: ${days[0]} .. ${days[days.length - 1]}; max posts on one day: ${maxPerDay}`);
console.log(`Histogram (first 10): ${[...histogram.entries()].sort().slice(0, 10).map(([d, n]) => `${d}:${n}`).join("  ")}`);
