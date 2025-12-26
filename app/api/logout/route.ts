import { NextResponse } from "next/server";
import { AuthCookie } from "@/lib/auth";

export async function POST(req: Request) {
  const url = new URL(req.url);
  url.pathname = "/";
  url.search = "";

  const res = NextResponse.redirect(url);
  res.cookies.set(AuthCookie.name, "", { ...AuthCookie.options, maxAge: 0 });
  return res;
}
