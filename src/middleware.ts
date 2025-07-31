import { NextRequest, NextResponse } from "next/server";
import { getSessionFromRequest } from "@/lib/auth";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect admin routes (excluding login page)
  if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
    const session = await getSessionFromRequest(request);

    if (!session) {
      // Redirect to login page if not authenticated
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  // If user is on login page but already authenticated, redirect to admin
  if (pathname === "/admin/login") {
    const session = await getSessionFromRequest(request);

    if (session) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
