import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';

import { auth } from '@sss/auth';

import { routing } from './i18n/routing';

const publicPages = ['/', '/login', '/register', '/error', '/verify'];

const intlMiddleware = createMiddleware(routing);

const localePattern = `(/(${routing.locales.join('|')}))?`;
const pagesPattern = publicPages
  .flatMap((p) => (p === '/' ? ['', '/'] : p))
  .join('|');

// Combine patterns into final regex
const publicPathnameRegex = RegExp(
  `^${localePattern}(${pagesPattern})/?$`,
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
