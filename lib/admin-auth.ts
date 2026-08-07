import { createHmac, timingSafeEqual } from "node:crypto";

/**
 * Admin session token primitives (Node runtime).
 * --------------------------------------------------------------------------
 * Replaces the previous client-side password check, which shipped the literal
 * admin password inside the public JS bundle and could be bypassed entirely
 * from the browser console (`sessionStorage.setItem("adminToolsAuth","true")`).
 *
 * Design (mirrors the fail-closed pattern in `app/api/indexnow/route.ts`):
 *  - The password lives ONLY in the `ADMIN_PASSWORD` env var, never in code.
 *  - Login issues a signed, expiring token stored in an `httpOnly` cookie
 *    (not readable by client JS, not settable via the console).
 *  - Token format: `v1.<expiryEpochSeconds>.<hex HMAC-SHA256 of the prefix>`,
 *    keyed with `ADMIN_PASSWORD` itself, so a token cannot be forged without
 *    the secret and expires after SESSION_TTL_SECONDS.
 *  - Every comparison is constant-time and every missing-secret path fails
 *    closed.
 *
 * `lib/admin-auth-edge.ts` implements the same verification with Web Crypto
 * for the middleware (edge runtime); token formats must stay identical.
 */

export const ADMIN_SESSION_COOKIE = "kl_admin_session";
export const SESSION_TTL_SECONDS = 60 * 60 * 8; // 8 hours
const TOKEN_PREFIX = "v1";

/** Fail closed: no configured secret means nobody can authenticate. */
export function getAdminSecret(): string | null {
  const secret = process.env.ADMIN_PASSWORD;
  if (!secret || secret.trim().length < 8) return null;
  return secret;
}

function sign(payload: string, secret: string): string {
  return createHmac("sha256", secret).update(payload, "utf8").digest("hex");
}

/** Constant-time comparison for arbitrary string values of any length. */
export function safeEqual(a: string, b: string): boolean {
  const aBuf = Buffer.from(a, "utf8");
  const bBuf = Buffer.from(b, "utf8");
  // Hash both sides first so lengths can differ without leaking timing
  // information proportionate to the position of the first mismatch.
  const aHash = createHmac("sha256", "kl-safe-equal").update(aBuf).digest();
  const bHash = createHmac("sha256", "kl-safe-equal").update(bBuf).digest();
  return timingSafeEqual(aHash, bHash);
}

/** Verify a login attempt against the configured secret. */
export function verifyAdminPassword(candidate: string): boolean {
  const secret = getAdminSecret();
  if (!secret) return false; // fail closed
  return safeEqual(candidate, secret);
}

/** Issue a new signed session token valid until now + TTL. */
export function issueAdminToken(nowEpochSeconds: number = Math.floor(Date.now() / 1000)): string {
  const secret = getAdminSecret();
  if (!secret) throw new Error("ADMIN_PASSWORD is not configured");
  const expiry = nowEpochSeconds + SESSION_TTL_SECONDS;
  const payload = `${TOKEN_PREFIX}.${expiry}`;
  return `${payload}.${sign(payload, secret)}`;
}

/** Returns true when the token is well-formed, correctly signed, and unexpired. */
export function verifyAdminToken(
  token: string | undefined | null,
  nowEpochSeconds: number = Math.floor(Date.now() / 1000)
): boolean {
  const secret = getAdminSecret();
  if (!secret || !token) return false;
  const parts = token.split(".");
  if (parts.length !== 3 || parts[0] !== TOKEN_PREFIX) return false;
  const payload = `${parts[0]}.${parts[1]}`;
  if (!safeEqual(parts[2], sign(payload, secret))) return false;
  const expiry = Number.parseInt(parts[1], 10);
  if (!Number.isSafeInteger(expiry)) return false;
  return expiry > nowEpochSeconds;
}
