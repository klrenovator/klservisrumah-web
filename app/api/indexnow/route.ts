import { NextResponse } from "next/server";
import { toolsList } from "@/config/tools-data";
import { TOOLS_INDEX_PATH, toolLocaleUrls } from "@/config/tools-i18n";

/**
 * IndexNow ping endpoint (Bing / Yandex / Seznam).
 *
 * Must be dynamic: the handler reads `searchParams`, and under the previous
 * `force-static` export the route was evaluated once at build time with an
 * empty query string. The `trigger` check therefore always failed and the
 * endpoint returned 401 for every caller — it had never actually submitted
 * a single URL in production.
 */
export const dynamic = "force-dynamic";

const HOST = "www.klservisrumah.my";
const INDEXNOW_KEY = "2427f86a83154e488745beb379b3eec8";

/**
 * The URL set to ping. Derived from the real registries (not a hand-maintained
 * list) so a new estimator or tool is submitted automatically. Redirecting
 * URLs are never submitted — IndexNow wants canonical targets only — and the
 * NOINDEX `/estimate/*` share links were removed in CF-4 (see below).
 */
const CORE_PATHS = [
  "/",
  "/services",
  "/areas",
  "/blog",
  "/pricing",
  "/problems",
  "/faq",
  "/contact",
  // H3 pilot heads — the real localized service directories added in Session
  // 003. Their per-service pages are covered by sitemap submission; pinging
  // the tree heads gives Bing/Yandex the entry points directly.
  "/ms/services",
  "/zh/services"
];

const TOOL_PATHS = [
  TOOLS_INDEX_PATH.en,
  TOOLS_INDEX_PATH.ms,
  TOOLS_INDEX_PATH.zh,
  ...toolsList.flatMap((tool) => {
    const urls = toolLocaleUrls(tool.slug);
    return [urls.en, urls.ms, urls.zh];
  })
];

// CF-4: `/estimate` + `/estimate/<slug>` are NOINDEX (owner WhatsApp share
// links, index-thin duplicates of the tools). IndexNow must never ping a
// URL that answers `noindex` — the canonical money pages are the
// `/services/<slug>/cost` rate-book guides, which ship in the sitemap.
const URL_LIST = [...CORE_PATHS, ...TOOL_PATHS].map(
  (path) => `https://${HOST}${path}`
);

/**
 * Constant-time-ish comparison so the shared secret can't be recovered by
 * timing the response. Node's `crypto.timingSafeEqual` needs equal lengths,
 * so length is compared first and short-circuits on mismatch.
 */
function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let mismatch = 0;
  for (let i = 0; i < a.length; i += 1) {
    mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return mismatch === 0;
}

export async function GET(req: Request) {
  const secret = process.env.INDEXNOW_SECRET;

  // Fail closed. Without a configured secret this endpoint would let anyone
  // trigger outbound submissions on the brand's behalf.
  if (!secret) {
    return NextResponse.json(
      { error: "IndexNow is not configured. Set INDEXNOW_SECRET." },
      { status: 503 }
    );
  }

  const provided =
    new URL(req.url).searchParams.get("secret") ??
    req.headers.get("authorization")?.replace(/^Bearer\s+/i, "") ??
    "";

  if (!safeEqual(provided, secret)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host: HOST,
        key: INDEXNOW_KEY,
        // Required by the IndexNow spec so Bing/Yandex can verify key ownership.
        keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
        urlList: URL_LIST
      })
    });

    if (!response.ok) {
      return NextResponse.json(
        { success: false, status: response.status, error: await response.text() },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      submitted: URL_LIST.length,
      message: "IndexNow ping accepted."
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to send IndexNow ping",
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}
