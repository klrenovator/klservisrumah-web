import { NextResponse } from "next/server";
import {
  ADMIN_SESSION_COOKIE,
  SESSION_TTL_SECONDS,
  issueAdminToken,
  verifyAdminPassword
} from "@/lib/admin-auth";

/**
 * Admin login endpoint.
 *
 * - Verifies the submitted password against `ADMIN_PASSWORD` in constant time.
 * - Fails CLOSED when the secret is not configured (503, like the IndexNow
 *   endpoint) rather than defaulting to any open behaviour.
 * - On success sets the signed session token in an `httpOnly` cookie — client
 *   JavaScript (and the browser console) can neither read nor forge it.
 * - Best-effort per-IP throttling slows credential guessing; Vercel function
 *   logs capture every failed attempt for observability.
 */
export const dynamic = "force-dynamic";

const MAX_ATTEMPTS = 5;
const WINDOW_MS = 10 * 60 * 1000;

type AttemptRecord = { attempts: number; windowStart: number };
const attemptsByIp = new Map<string, AttemptRecord>();

function clientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

function isThrottled(ip: string): boolean {
  const now = Date.now();
  const record = attemptsByIp.get(ip);
  if (!record) return false;
  if (now - record.windowStart > WINDOW_MS) {
    attemptsByIp.delete(ip);
    return false;
  }
  return record.attempts >= MAX_ATTEMPTS;
}

function registerFailure(ip: string): void {
  const now = Date.now();
  const record = attemptsByIp.get(ip);
  if (!record || now - record.windowStart > WINDOW_MS) {
    attemptsByIp.set(ip, { attempts: 1, windowStart: now });
    return;
  }
  record.attempts += 1;
}

export async function POST(req: Request) {
  if (!process.env.ADMIN_PASSWORD || process.env.ADMIN_PASSWORD.trim().length < 8) {
    return NextResponse.json(
      { error: "Admin login is not configured. Set the ADMIN_PASSWORD environment variable." },
      { status: 503 }
    );
  }

  const ip = clientIp(req);
  if (isThrottled(ip)) {
    return NextResponse.json(
      { error: "Too many attempts. Try again in a few minutes." },
      { status: 429 }
    );
  }

  let password: string;
  try {
    const body = (await req.json()) as { password?: unknown };
    password = typeof body.password === "string" ? body.password : "";
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!verifyAdminPassword(password)) {
    registerFailure(ip);
    // Visible in Vercel function logs — deliberate audit trail for a
    // protected surface. No password material is ever logged.
    console.error(`[admin-login] Failed login attempt from ${ip}`);
    return NextResponse.json({ error: "Incorrect password." }, { status: 401 });
  }

  attemptsByIp.delete(ip);
  const response = NextResponse.json({ ok: true });
  response.cookies.set(ADMIN_SESSION_COOKIE, issueAdminToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_TTL_SECONDS
  });
  return response;
}
