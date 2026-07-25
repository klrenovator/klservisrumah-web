import type { Metadata } from "next";
import { buildMetadata, type BuildMetadataInput } from "@/lib/seo-meta";

/**
 * Thin compatibility layer over `lib/seo-meta.ts`.
 *
 * All metadata construction funnels into `buildMetadata()` so that title length,
 * description length, canonical correctness and hreflang self-reference are
 * enforced in exactly one place. These wrappers exist purely to keep call sites
 * expressive.
 */

type MetadataInput = Omit<BuildMetadataInput, "type"> & {
  type?: "website" | "article" | "service";
};

export function buildPageMetadata({ type = "website", ...rest }: MetadataInput): Metadata {
  // "service" is not a valid Open Graph type; it maps to "website".
  return buildMetadata({ ...rest, type: type === "article" ? "article" : "website" });
}

export function buildServiceMetadata(service: {
  title: string;
  metaTitle: string;
  metaDesc: string;
  slug: string;
  heroImage: string;
}) {
  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDesc,
    path: `/services/${service.slug}`,
    image: service.heroImage,
    keywords: [
      service.title,
      `${service.title} KL`,
      `${service.title} Selangor`,
      "home services Malaysia",
    ],
  });
}
