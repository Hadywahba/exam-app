import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

const authRoutes = ['^/login$', '^/register$', '^/forgot-password(/.*)?$'];

const protectedRoutes = [
  '^/dashboard(/.*)?$',
  '^/$',
  '^/account(/.*)?$',
  '^/exam(/.*)?$',
];

export default async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const { pathname, origin } = request.nextUrl;

  const redirectUrl = new URL('/login', origin);
  redirectUrl.searchParams.set('callbackUrl', pathname);

  // Protect routes
  if (protectedRoutes.some((route) => new RegExp(route).test(pathname))) {
    if (!token) {
      return NextResponse.redirect(redirectUrl);
    }

    return NextResponse.next();
  }

  // Prevent authenticated users from accessing auth pages
  if (authRoutes.some((route) => new RegExp(route).test(pathname))) {
    if (!token) {
      return NextResponse.next();
    }

    const role = (token.user as { role?: string })?.role;

    if (role === 'ADMIN' || role === 'SUPER_ADMIN') {
      return NextResponse.redirect(new URL('/dashboard', origin));
    }

    return NextResponse.redirect(new URL('/', origin));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
