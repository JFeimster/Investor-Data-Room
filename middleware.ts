import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "@/lib/auth";

export async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  const match = pathname.match(/^\/r\/([^\/]+)\/?$/);
  if (!match) return NextResponse.next();

  const slug = match[1];
  const token = req.cookies.get("dr_auth")?.value;
  const data = await verifyToken(token);

  if (!data?.rooms?.includes(slug)) {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("room", slug);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/r/:path*"]
};
