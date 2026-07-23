import { MetadataRoute } from "next";
import { servicesData } from "@/config/services-data";
import { areaPages } from "@/config/area-data";
import { blogPosts } from "@/config/blog-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.klservisrumah.my";

  const staticRoutes = ["", "/about", "/contact", "/faq", "/services", "/areas", "/blog"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8
  }));

  const serviceRoutes = Object.keys(servicesData).map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9
  }));

  const areaRoutes = areaPages.map((area) => ({
    url: `${baseUrl}/areas/${area.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  return [...staticRoutes, ...serviceRoutes, ...areaRoutes, ...blogRoutes];
}
