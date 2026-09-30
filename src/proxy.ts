import { NextRequest, NextResponse } from "next/server";

export async function proxy(req: NextRequest) {
  const isLoginPage = req.nextUrl.pathname.startsWith("admin/login");
  const isAdminPage = req.nextUrl.pathname.startsWith("admin");

  console.log(req.nextUrl.toString());
  return NextResponse.next();
}

export const config = {
  matcher: "/admin/:path*",
};
