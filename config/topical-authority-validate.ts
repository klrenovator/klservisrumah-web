/**
 * Build-time validation for the topical authority map.
 *
 * Split out of `config/topical-authority-map.ts` so that the map — which client
 * components import for their internal-link lists — does not drag the full
 * `services-data` and `problem-data` registries into the browser bundle. This
 * module is only ever imported by `scripts/validate-topical-map.ts`.
 */

import { servicesData } from "@/config/services-data";
import { problemPages } from "@/config/problem-data";
import publishedBlogSlugs from "@/config/blog-slugs.generated.json" with { type: "json" };
import { slugify } from "@/lib/utils";
import { topicalAuthorityMap } from "@/config/topical-authority-map";

const VALID_SERVICES = new Set(Object.keys(servicesData));
const VALID_PROBLEMS = new Set(problemPages.map((p) => p.slug));
const VALID_BLOGS = new Set(publishedBlogSlugs);

/** Valid specialty slugs per service, keyed by service slug. */
const VALID_SPECIALTIES: Record<string, Set<string>> = Object.fromEntries(
  Object.values(servicesData).map((s) => [
    s.slug,
    new Set(s.subServices.map((sub) => slugify(sub.name))),
  ]),
);

export type TopicalMapIssue = {
  serviceSlug: string;
  field: string;
  value: string;
  message: string;
};

/**
 * Validates every slug referenced by the topical authority map against the
 * source-of-truth data. Returns a list of issues (empty = fully valid).
 * Run via `scripts/validate-topical-map.ts` in CI / prebuild.
 */
export function validateTopicalAuthorityMap(): TopicalMapIssue[] {
  const issues: TopicalMapIssue[] = [];
  const push = (serviceSlug: string, field: string, value: string, message: string) =>
    issues.push({ serviceSlug, field, value, message });

  for (const [slug, silo] of Object.entries(topicalAuthorityMap)) {
    if (!VALID_SERVICES.has(slug)) push(slug, "serviceSlug", slug, "unknown service slug");

    // Ensure exactly every service pillar has a complete entry (no Handyman fallback).
    silo.relatedServices.forEach((ref) => {
      if (!VALID_SERVICES.has(ref)) push(slug, "relatedServices", ref, "unknown service slug");
    });
    silo.relatedProblems.forEach((ref) => {
      if (!VALID_PROBLEMS.has(ref)) push(slug, "relatedProblems", ref, "unknown problem slug");
    });
    silo.relatedBlogs.forEach((ref) => {
      if (!VALID_BLOGS.has(ref)) push(slug, "relatedBlogs", ref, "unknown blog slug");
    });
    silo.topAreas.forEach((ref) => {
      if (!/^[a-z0-9-]+$/.test(ref)) push(slug, "topAreas", ref, "malformed area slug");
    });

    for (const spec of silo.specialties) {
      const validSpecs = VALID_SPECIALTIES[slug];
      if (!validSpecs?.has(spec.specialtySlug)) {
        push(slug, `specialties.${spec.specialtySlug}`, spec.specialtySlug, "unknown specialty slug for this service");
      }
      spec.relatedProblems.forEach((ref) => {
        if (!VALID_PROBLEMS.has(ref)) push(slug, `specialties.${spec.specialtySlug}.relatedProblems`, ref, "unknown problem slug");
      });
      spec.relatedBlogs.forEach((ref) => {
        if (!VALID_BLOGS.has(ref)) push(slug, `specialties.${spec.specialtySlug}.relatedBlogs`, ref, "unknown blog slug");
      });
    }
  }

  // Ensure every one of the 28 service pillars is present (completeness gate).
  for (const s of Object.keys(servicesData)) {
    if (!topicalAuthorityMap[s]) push(s, "serviceSlug", s, "missing topical map entry");
  }

  // Ensure every specialty of every service is represented (coverage gate).
  for (const s of Object.values(servicesData)) {
    for (const sub of s.subServices) {
      const specSlug = slugify(sub.name);
      const silo = topicalAuthorityMap[s.slug];
      if (!silo?.specialties.some((spec) => spec.specialtySlug === specSlug)) {
        push(s.slug, `specialties.${specSlug}`, specSlug, "specialty missing from topical map");
      }
    }
  }

  return issues;
}
