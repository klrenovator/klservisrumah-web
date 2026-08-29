/**
 * P2-16 tranche-2 planning: English body word counts per indexable problem,
 * computed from the authored config records (approximates rendered body
 * length, excluding template chrome).
 */
import { indexableProblemPages } from "@/config/problem-index";

function words(s: string): number {
  return s.split(/\s+/).filter((w) => w.length > 0).length;
}

const rows = indexableProblemPages().map((p) => {
  let count = words(p.symptom) + words(p.costRange) + words(p.title);
  for (const c of p.causes) count += words(c);
  for (const s of p.solutions) count += words(s);
  for (const w of p.whenToCall) count += words(w);
  for (const f of p.faqs) count += words(f.q) + words(f.a);
  const enriched = Boolean(p.overview || p.diyChecks || p.prevention || p.costDetail);
  if (p.overview) count += words(p.overview);
  for (const d of p.diyChecks ?? []) count += words(d);
  for (const d of p.prevention ?? []) count += words(d);
  if (p.costDetail) count += words(p.costDetail);
  return { slug: p.slug, service: p.serviceSlug, words: count, enriched, urgency: p.urgency };
});

rows.sort((a, b) => a.words - b.words);
console.log(`Indexable problems: ${rows.length}`);
console.log(`Enriched: ${rows.filter((r) => r.enriched).length}`);
console.log("\nRANK  words  enriched  urgency  service  slug");
rows.forEach((r, i) => {
  console.log(`${String(i + 1).padStart(4)}  ${String(r.words).padStart(5)}  ${r.enriched ? "YES" : "---"}  ${r.urgency.padEnd(9)}  ${r.service.padEnd(20)}  ${r.slug}`);
});
