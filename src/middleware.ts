"use server";

import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";
import type { AppLocale } from "./i18n/type";

const intlMiddleware = createMiddleware(routing);

interface MiddlewareParams {
  request: NextRequest;
  pathname: string;
}

export default async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const params: MiddlewareParams = { request, pathname };

  // Skip static files and already-localized routes
  if (shouldSkipMiddleware(params)) {
    return intlMiddleware(request);
  }

  // Check for existing locale in cookie
  const cookieLocale = getCookieLocale(params);
  if (cookieLocale) {
    return createLocaleRedirect(cookieLocale, params);
  }

  // Fallback → use default locale (NO IP detection anymore)
  return createLocaleRedirect(routing.defaultLocale, params);
}

// Skip middleware for already localized paths or static assets
function shouldSkipMiddleware({ pathname }: MiddlewareParams): boolean {
  const localePattern = `^/(${routing.locales.join("|")})(/|$)`;
  return new RegExp(localePattern).test(pathname) || /\.(.*)$/.test(pathname);
}

// Read locale from cookie
function getCookieLocale({ request }: MiddlewareParams): AppLocale | null {
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  return cookieLocale && routing.locales.includes(cookieLocale as AppLocale)
    ? (cookieLocale as AppLocale)
    : null;
}

// Redirect to the localized path
function createLocaleRedirect(
  locale: AppLocale,
  { request, pathname }: MiddlewareParams
): NextResponse {
  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
}

// Match all pages except API, static, or assets
export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
