/**
 * Edge-runtime (middleware) counterpart of `lib/admin-auth.ts`.
 * --------------------------------------------------------------------------
 * Middleware bundles for the edge runtime, where `node:crypto` is unavailable,
 * so HMAC-SHA256 is computed with the Web Crypto API. The token format MUST
 * stay byte-identical to the Node implementation:
 *
 *   `v1.<expiryEpochSeconds>.<lowercase hex HMAC-SHA256 of "v1.<expiry>">`
 *
 * keyed with the `ADMIN_PASSWORD` environment variable.
 */

function toHex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Array(buffer))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

async function sign(payload: string, secret: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(payload));
  return toHex(signature);
}

/** Constant-time string comparison (hex signatures share a fixed length). */
function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let mismatch = 0;
  for (let i = 0; i < a.length; i += 1) {
    mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return mismatch === 0;
}

/** Mirrors `verifyAdminToken` from `lib/admin-auth.ts`. Fails closed. */
export async function verifyAdminTokenEdge(token: string | undefined | null): Promise<boolean> {
  const secret = process.env.ADMIN_PASSWORD;
  if (!secret || secret.trim().length < 8 || !token) return false;
  const parts = token.split(".");
  if (parts.length !== 3 || parts[0] !== "v1") return false;
  const payload = `${parts[0]}.${parts[1]}`;
  const expected = await sign(payload, secret);
  if (!safeEqual(parts[2], expected)) return false;
  const expiry = Number.parseInt(parts[1], 10);
  if (!Number.isSafeInteger(expiry)) return false;
  return expiry > Math.floor(Date.now() / 1000);
}
