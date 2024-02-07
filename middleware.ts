import * as jwt from "jose";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const token = request ? request.cookies.get("token") : null;

  const { pathname } = request.nextUrl;

  let authenticated = null;

  if (token) {
    const secret = new TextEncoder().encode("test");
    authenticated = await jwt.jwtVerify(token.value, secret);
  }

  if (pathname.includes("/api/login") || authenticated) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/login") && authenticated) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!token && pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
