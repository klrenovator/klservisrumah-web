import { NextResponse } from "next/server";

/**
 * Client error beacon.
 *
 * The site previously had no production error observability: a client-side
 * failure only surfaced if someone happened to check a console (audit Part
 * 2, B4). This endpoint receives sanitized client-error reports (sent via
 * `navigator.sendBeacon` from `components/error-reporter.tsx`, `app/error.tsx`
 * and `app/global-error.tsx`) and re-emits them as structured JSON on
 * `console.error`, which persists in Vercel function logs — zero external
 * dependencies, zero new accounts, zero PII.
 *
 * Defences:
 *  - hard body-size cap (2 KB) before parsing;
 *  - strict key whitelist + per-field truncation, so nothing client-supplied
 *    (cookies, storage contents, long stacks) can smuggle bulk data through;
 *  - best-effort per-IP throttling so a broken loop cannot spam the logs.
 */
export const dynamic = "force-dynamic";

const MAX_BODY_BYTES = 2048;
const MAX_FIELD_CHARS = 400;
const MAX_EVENTS_PER_WINDOW = 20;
const WINDOW_MS = 60_000;

const hitsByIp = new Map<string, { count: number; windowStart: number }>();

function clientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

function throttled(ip: string): boolean {
  const now = Date.now();
  const record = hitsByIp.get(ip);
  if (!record || now - record.windowStart > WINDOW_MS) {
    hitsByIp.set(ip, { count: 1, windowStart: now });
    return false;
  }
  record.count += 1;
  return record.count > MAX_EVENTS_PER_WINDOW;
}

function clip(value: unknown): string | undefined {
  if (typeof value !== "string" || value.length === 0) return undefined;
  return value.slice(0, MAX_FIELD_CHARS);
}

export async function POST(req: Request) {
  const contentLength = Number(req.headers.get("content-length") ?? 0);
  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json({ ok: false }, { status: 413 });
  }

  const ip = clientIp(req);
  if (throttled(ip)) {
    return NextResponse.json({ ok: true, throttled: true }, { status: 202 });
  }

  let raw: string;
  try {
    raw = await req.text();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  if (raw.length > MAX_BODY_BYTES) {
    return NextResponse.json({ ok: false }, { status: 413 });
  }

  let body: Record<string, unknown>;
  try {
    body = JSON.parse(raw) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const event = {
    type: "client-error",
    source: clip(body.source) ?? "unknown",
    message: clip(body.message),
    stack: clip(body.stack),
    digest: clip(body.digest),
    pathname: clip(body.pathname),
    userAgent: clip(req.headers.get("user-agent") ?? undefined),
    // Server-side timestamp — clients must never be trusted for event time.
    at: new Date().toISOString()
  };

  console.error(JSON.stringify(event));
  return NextResponse.json({ ok: true }, { status: 202 });
}
