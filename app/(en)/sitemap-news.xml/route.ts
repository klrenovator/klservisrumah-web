import { blogPosts } from "@/config/blog-data";

export const dynamic = "force-static";

export function GET() {
  const baseUrl = "https://www.klservisrumah.my";
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${blogPosts.map((post) => `  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <news:news>
      <news:publication><news:name>KL Servis Rumah Blog</news:name><news:language>en</news:language></news:publication>
      <news:publication_date>${new Date(post.date).toISOString()}</news:publication_date>
      <news:title><![CDATA[${post.title}]]></news:title>
    </news:news>
  </url>`).join("\n")}
</urlset>`;
  return new Response(xml, { headers: { "content-type": "application/xml; charset=utf-8" } });
}
