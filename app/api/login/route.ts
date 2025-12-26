import { NextResponse } from "next/server";
import { getRoom } from "@/lib/rooms";
import { sha256Hex } from "@/lib/utils";
import { AuthCookie, issueToken, verifyToken } from "@/lib/auth";

export async function POST(req: Request) {
  const { room: slug, password } = await req.json().catch(() => ({}));

  if (!slug || !password) {
    return NextResponse.json({ error: "Missing room or password" }, { status: 400 });
  }

  const room = getRoom(slug);
  if (!room) {
    return NextResponse.json({ error: "Room not found" }, { status: 404 });
  }

  const inputHash = await sha256Hex(String(password));
  if (inputHash !== room.passwordSha256Hex) {
    return NextResponse.json({ error: "Wrong password" }, { status: 401 });
  }

  // Merge with existing token rooms
  const cookieHeader = req.headers.get("cookie") ?? "";
  const existing = cookieHeader
    .split(";")
    .map((s) => s.trim())
    .find((s) => s.startsWith(`${AuthCookie.name}=`))
    ?.split("=")[1];

  const verified = await verifyToken(existing);
  const rooms = Array.from(new Set([...(verified?.rooms ?? []), slug]));
  const token = await issueToken(rooms);

  const res = NextResponse.json({ ok: true });
  res.cookies.set(AuthCookie.name, token, AuthCookie.options);
  return res;
}
