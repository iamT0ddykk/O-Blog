import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  console.log(req.nextUrl.toString());
  return NextResponse.next();
}

export const config = {
  matcher: "admin/:path",
};
