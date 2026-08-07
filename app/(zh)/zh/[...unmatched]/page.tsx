import { permanentRedirect, notFound } from "next/navigation";
import type { Metadata } from "next";
import { canonicalToolSlug } from "@/config/tools-i18n";

/**
 * Catch-all for unmatched URLs under the real Chinese tree (`/zh/*`).
 *
 * WHY THIS EXISTS
 * ---------------
 * The five hand-built Chinese tool pages have literal non-ASCII route segments
 * (e.g. `/zh/gongju/天花板计算器`). Browsers and crawlers request those URLs
 * percent-encoded (`/zh/gongju/%E5%A4%A9...`), and Next.js's static route
 * matcher compares the raw string — so the encoded form never matches the
 * literal route and would otherwise fall through to the global 404.
 *
 * This catch-all:
 *  1. Decodes the request segments.
 *  2. If the decoded path is one of the known non-ASCII pages (the five
 *     `/zh/gongju/*` tools), issues a permanent redirect to the canonical raw
 *     form — the URL the sitemap, hreflang and canonical tags already use.
 *  3. Otherwise renders the tree's 404 boundary (`app/(zh)/not-found.tsx`),
 *     which keeps the Chinese chrome and `lang="zh-MY"`.
 *
 * It only ever matches URLs nothing more specific matched, so existing
 * routes (services, bo-ke, gongju indexes, the five CJK tool pages in their
 * raw form) are unaffected.
 */
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

const CJK_TOOL_PREFIX = "/zh/gongju/";

export default async function ZhUnmatchedCatchAll({
  params,
}: {
  params: Promise<{ unmatched: string[] }>;
}) {
  const { unmatched } = await params;
  const rawPath = `/${unmatched.join("/")}`;

  // Decode percent-encoded segments; a malformed escape is not redirectable.
  let decodedPath = rawPath;
  try {
    decodedPath = `/${unmatched.map((segment) => decodeURIComponent(segment)).join("/")}`;
  } catch {
    // fall through to notFound()
  }

  if (decodedPath !== rawPath && decodedPath.startsWith(CJK_TOOL_PREFIX)) {
    const cjkSlug = decodedPath.slice(CJK_TOOL_PREFIX.length);
    // Only redirect when the decoded path is a page that actually exists
    // (the five literal-CJK tool routes) — never to an arbitrary string.
    if (canonicalToolSlug("zh", cjkSlug) !== undefined) {
      permanentRedirect(decodedPath);
    }
  }

  notFound();
}
