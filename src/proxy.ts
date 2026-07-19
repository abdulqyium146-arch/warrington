import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import { NextResponse } from 'next/server';

// Use the edge-safe config only — no pg / Prisma / bcrypt imports.
const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { pathname } = req.nextUrl;
  const isLoggedIn = !!req.auth;

  const isLoginPage =
    pathname === '/admin/login' || pathname === '/admin/login/';

  // Admin routes — require authentication
  if (pathname.startsWith('/admin') && !isLoginPage) {
    if (!isLoggedIn) {
      const loginUrl = new URL('/admin/login/', req.url);
      loginUrl.searchParams.set('callbackUrl', pathname);
      return NextResponse.redirect(loginUrl);
    }

    const res = NextResponse.next();
    res.headers.set('X-Robots-Tag', 'noindex, nofollow');
    res.headers.set('Cache-Control', 'no-store, must-revalidate');
    return res;
  }

  // Redirect authenticated users away from the login page
  if (isLoginPage && isLoggedIn) {
    return NextResponse.redirect(new URL('/admin/', req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ['/admin/:path*'],
};
