// middleware.js
import { NextResponse } from "next/server";
import { i18n } from "next.config";
export function middleware(req) {
  const locale = req.cookies.get("locale")
    ? req.cookies.get("locale").value
    : i18n.defaultLocale; // Hoặc lấy từ URL nếu cần
  const response = NextResponse.next();
  response.cookies.set("locale", locale); // Lưu locale vào cookie
  return response;
}

export const config = {
  matcher: ["/((?!_next).*)"],
};
