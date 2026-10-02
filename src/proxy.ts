import { NextRequest, NextResponse } from "next/server";
import { verifyJwt } from "./lib/login/manage-login";

export async function proxy(req: NextRequest) {
  const isLoginPage = req.nextUrl.pathname.startsWith("/admin/login");
  const isAdminPage = req.nextUrl.pathname.startsWith("/admin");
  const isGetMethod = req.method === "GET";

  const shouldBeAuth = isAdminPage && isLoginPage;

  const shouldRedirect = shouldBeAuth && isGetMethod;

  const jwtSession = req.cookies.get(
    process.env.LOGIN_COOKIE_NAME || "loginSession",
  )?.value;

  const isAuth = await verifyJwt(jwtSession);

  if (!isAuth) {
    const url = new URL("admin/login", req.url);

    return NextResponse.redirect(url);
  }

  console.log({ isAuth });
  return NextResponse.next();
}

export const config = {
  matcher: "/admin/:path*",
};
