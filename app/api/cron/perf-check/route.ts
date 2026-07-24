import { NextResponse } from "next/server";
import { servicesData } from "@/config/services-data";
import { areaPages } from "@/config/area-data";

export const dynamic = "force-dynamic";

export async function GET() {
  const apiKey = process.env.PAGESPEED_API_KEY;
  const baseUrl = "https://www.klservisrumah.my";
  const paths = [
    "/",
    "/services",
    "/contact",
    ...Object.keys(servicesData).map((slug) => `/services/${slug}`),
    ...areaPages.slice(0, 6).map((area) => `/areas/${area.slug}`)
  ];

  if (!apiKey) {
    return NextResponse.json({
      ok: true,
      mode: "dry-run",
      message: "Set PAGESPEED_API_KEY to run live PageSpeed checks.",
      queuedUrls: paths.map((path) => `${baseUrl}${path}`)
    });
  }

  const results = await Promise.all(
    paths.slice(0, 10).map(async (path) => {
      const url = `${baseUrl}${path}`;
      const endpoint = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&strategy=mobile&key=${apiKey}`;
      const response = await fetch(endpoint, { next: { revalidate: 0 } });
      if (!response.ok) return { url, ok: false, status: response.status };
      const json = await response.json();
      return {
        url,
        ok: true,
        performanceScore: Math.round((json.lighthouseResult?.categories?.performance?.score ?? 0) * 100)
      };
    })
  );

  return NextResponse.json({ ok: true, checkedAt: new Date().toISOString(), results });
}
