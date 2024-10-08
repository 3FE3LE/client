import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';

import { auth } from '@sss/auth';

const locales = ['es', 'en'];

const publicPages = ['/', '/login', '/register', '/error', '/verify'];

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale: 'en',
});

const publicPathnameRegex = RegExp(
  `^(/(${locales.join('|')}))?(${publicPages
    .flatMap((p) => (p === '/' ? ['', '/'] : p))
    .join('|')})/?$`,
  'i',
);

export default auth((req) => {
  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);

  if (isPublicPage) {
    return intlMiddleware(req);
  } else {
    if (req.auth && req.auth.user) {
      return intlMiddleware(req);
    } else {
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }
});

export const config = {
  matcher: [
    '/profile',
    '/dashboard',
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
};
