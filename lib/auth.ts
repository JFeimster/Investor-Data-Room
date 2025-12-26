import { cookies } from "next/headers";

const COOKIE_NAME = "dr_auth";

function base64url(input: Uint8Array) {
  return Buffer.from(input).toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function base64urlToBytes(s: string) {
  const pad = s.length % 4 === 0 ? "" : "=".repeat(4 - (s.length % 4));
  const b64 = (s + pad).replace(/-/g, "+").replace(/_/g, "/");
  return new Uint8Array(Buffer.from(b64, "base64"));
}

async function hmacSha256(message: string, secret: string) {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(message));
  return new Uint8Array(sig);
}

export async function issueToken(rooms: string[]) {
  const secret = process.env.AUTH_SECRET;
  if (!secret) throw new Error("Missing AUTH_SECRET env var");

  const payload = JSON.stringify({ rooms, iat: Math.floor(Date.now() / 1000) });
  const payloadB64 = base64url(new TextEncoder().encode(payload));
  const sig = await hmacSha256(payloadB64, secret);
  const sigB64 = base64url(sig);
  return `${payloadB64}.${sigB64}`;
}

export async function verifyToken(token: string | undefined | null): Promise<{ rooms: string[] } | null> {
  const secret = process.env.AUTH_SECRET;
  if (!secret || !token) return null;

  const parts = token.split(".");
  if (parts.length !== 2) return null;

  const [payloadB64, sigB64] = parts;
  const expected = await hmacSha256(payloadB64, secret);
  const given = base64urlToBytes(sigB64);

  if (given.length !== expected.length) return null;
  let ok = 0;
  for (let i = 0; i < given.length; i++) ok |= given[i] ^ expected[i];
  if (ok !== 0) return null;

  const payloadJson = new TextDecoder().decode(base64urlToBytes(payloadB64));
  try {
    const parsed = JSON.parse(payloadJson);
    if (!Array.isArray(parsed.rooms)) return null;
    return { rooms: parsed.rooms };
  } catch {
    return null;
  }
}

export async function isRoomAuthed(slug: string) {
  const token = (await cookies()).get(COOKIE_NAME)?.value;
  const data = await verifyToken(token);
  return !!data?.rooms?.includes(slug);
}

export const AuthCookie = {
  name: COOKIE_NAME,
  options: {
    httpOnly: true,
    secure: true,
    sameSite: "lax" as const,
    path: "/",
    maxAge: 60 * 60 * 24 * 14
  }
};
