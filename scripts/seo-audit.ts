import fs from "node:fs";
import path from "node:path";
import { servicesData } from "../config/services-data.ts";
import { areaPages } from "../config/area-data.ts";
import { suburbPages } from "../config/suburb-data.ts";
import { problemPages } from "../config/problem-data.ts";
import { blogPosts } from "../config/blog-data.ts";

const routes = [
  "/",
  "/services",
  "/areas",
  "/contact",
  "/faq",
  "/blog",
  ...Object.keys(servicesData).map((slug) => `/services/${slug}`),
  ...areaPages.map((area) => `/areas/${area.slug}`),
  ...suburbPages.slice(0, 20).map((suburb) => `/suburbs/${suburb.slug}/painting`),
  ...problemPages.map((problem) => `/problems/${problem.slug}`),
  ...blogPosts.map((post) => `/blog/${post.slug}`)
];

const report = `# SEO Audit Report\n\nGenerated: ${new Date().toISOString()}\n\n## Route Inventory\n\n${routes.map((route) => `- ${route}`).join("\n")}\n\n## Checks\n\n- Total representative routes: ${routes.length}\n- Service pages: ${Object.keys(servicesData).length}\n- Area pages: ${areaPages.length}\n- Suburb records: ${suburbPages.length}\n- Problem pages: ${problemPages.length}\n- Blog posts: ${blogPosts.length}\n\n## Manual follow-up\n\nRun production crawl after deployment to verify status codes, canonical tags, rendered schema and Core Web Vitals.\n`;

const output = path.join(process.cwd(), "docs", "seo-audit-report.md");
fs.mkdirSync(path.dirname(output), { recursive: true });
fs.writeFileSync(output, report);
console.log(`SEO audit report written to ${output}`);
