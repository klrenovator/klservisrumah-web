import { MetadataRoute } from "next";
import { servicesData } from "@/config/services-data";
import { areaPages } from "@/config/area-data";
import { blogPosts } from "@/config/blog-data";
import { suburbPages } from "@/config/suburb-data";
import { problemPages } from "@/config/problem-data";
import { allGenericPages, clusterPages, maintenancePages } from "@/config/content-data";
import { slugify } from "@/lib/utils";

const baseUrl = "https://www.klservisrumah.my";

type Entry = { path: string; priority: number; changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"] };

function entry({ path, priority, changeFrequency = "weekly" }: Entry): MetadataRoute.Sitemap[number] {
  const cleanPath = path === "/" ? "" : path;
  return {
    url: `${baseUrl}${cleanPath}`,
    lastModified: new Date("2026-07-24"),
    changeFrequency,
    priority,
    alternates: {
      languages: {
        "en-MY": `${baseUrl}${cleanPath}`,
        "ms-MY": `${baseUrl}/ms${cleanPath}`,
        "zh-MY": `${baseUrl}/zh${cleanPath}`,
        "x-default": `${baseUrl}${cleanPath}`
      }
    }
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: Entry[] = [
    { path: "/", priority: 1.0 },
    { path: "/services", priority: 0.8 },
    { path: "/areas", priority: 0.8 },
    { path: "/blog", priority: 0.7 },
    { path: "/faq", priority: 0.7 },
    { path: "/contact", priority: 0.8 },
    { path: "/about", priority: 0.6 },
    { path: "/projects", priority: 0.7 },
    { path: "/problems", priority: 0.75 },
    { path: "/tools", priority: 0.7 },
    { path: "/tools/painting-calculator", priority: 0.75 },
    { path: "/tools/plumbing-diagnostic", priority: 0.75 },
    { path: "/tools/leak-triage", priority: 0.75 },
    { path: "/tools/ceiling-calculator", priority: 0.7 },
    { path: "/tools/tv-mount-advisor", priority: 0.7 }
  ];

  const serviceRoutes: Entry[] = Object.values(servicesData).flatMap((service) => [
    { path: `/services/${service.slug}`, priority: 0.95 },
    { path: `/${service.slug}`, priority: 0.9 },
    { path: `/near-me/${service.slug}`, priority: 0.86 },
    { path: `/services/${service.slug}/cost`, priority: 0.88 },
    { path: `/services/${service.slug}/emergency`, priority: 0.86 },
    ...service.subServices.map((sub) => ({ path: `/services/${service.slug}/${slugify(sub.name)}`, priority: 0.9 }))
  ]);

  const clusterRoutes: Entry[] = clusterPages.map((page) => ({ path: `/services/${page.relatedServiceSlug}/${page.slug}`, priority: 0.82 }));
  const areaRoutes: Entry[] = areaPages.flatMap((area) => [
    { path: `/areas/${area.slug}`, priority: 0.85 },
    ...Object.keys(servicesData).flatMap((serviceSlug) => [
      { path: `/areas/${area.slug}/${serviceSlug}`, priority: 0.9 },
      { path: `/areas/${area.slug}/${serviceSlug}/near-me`, priority: 0.82 }
    ])
  ]);
  const suburbRoutes: Entry[] = suburbPages.flatMap((suburb) => Object.keys(servicesData).map((serviceSlug) => ({ path: `/suburbs/${suburb.slug}/${serviceSlug}`, priority: 0.85 })));
  const problemRoutes: Entry[] = problemPages.map((problem) => ({ path: `/problems/${problem.slug}`, priority: 0.8 }));
  const blogRoutes: Entry[] = blogPosts.map((post) => ({ path: `/blog/${post.slug}`, priority: 0.7, changeFrequency: "monthly" }));

  const genericRoutes: Entry[] = allGenericPages
    .filter((page) => !clusterPages.some((cluster) => cluster.slug === page.slug) && !maintenancePages.some((maintenance) => maintenance.slug === page.slug))
    .map((page) => {
      if (page.category === "Comparison") return { path: `/compare/${page.slug}`, priority: 0.7 };
      if (page.category === "Seasonal") return { path: `/seasonal/${page.slug}`, priority: 0.65 };
      if (page.category === "Commercial") return { path: `/commercial/${page.slug}`, priority: 0.72 };
      if (page.category === "Residential") return { path: `/residential/${page.slug}`, priority: 0.72 };
      if (page.category === "Brand Guide") return { path: `/brands/${page.slug}`, priority: 0.66 };
      if (page.category === "Top Considerations") return { path: `/top/${page.slug}`, priority: 0.64 };
      if (page.category === "AI Answer Guide") return { path: `/answers/${page.slug}`, priority: 0.8 };
      if (page.category === "Process") return { path: `/process/${page.slug}`, priority: 0.74 };
      return { path: `/guides/${page.slug}`, priority: 0.7 };
    });
  const maintenanceRoutes: Entry[] = maintenancePages.map((page) => ({ path: `/guides/maintenance/${page.slug}`, priority: 0.68 }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...clusterRoutes,
    ...areaRoutes,
    ...suburbRoutes,
    ...problemRoutes,
    ...blogRoutes,
    ...genericRoutes,
    ...maintenanceRoutes
  ].map(entry);
}
