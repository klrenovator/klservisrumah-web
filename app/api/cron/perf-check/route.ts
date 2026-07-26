import { NextResponse } from "next/server";
import { servicesData } from "@/config/services-data";
import { areaPages } from "@/config/area-data";

export const dynamic = "force-dynamic";

/**
 * Guard the endpoint. It was previously open to the public while spending a
 * billable Google PageSpeed API quota — anyone could drain the key by looping
 * requests. Vercel Cron sends `Authorization: Bearer $CRON_SECRET`, so accept
 * that and fall back to a `?secret=` param for manual runs.
 */
function isAuthorized(req: Request): boolean {
  const secret = process.env.CRON_SECRET;
  if (!secret) return false;
  const provided =
    req.headers.get("authorization")?.replace(/^Bearer\s+/i, "") ??
    new URL(req.url).searchParams.get("secret") ??
    "";
  if (provided.length !== secret.length) return false;
  let mismatch = 0;
  for (let i = 0; i < provided.length; i += 1) {
    mismatch |= provided.charCodeAt(i) ^ secret.charCodeAt(i);
  }
  return mismatch === 0;
}

export async function GET(req: Request) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

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
