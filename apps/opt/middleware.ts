import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';

import { auth } from '@opt/auth';
import { SSS_URI } from '@repo/ui/constants';

import { routing } from './i18n/routing';

const publicPages = ['/'];

const intlMiddleware = createMiddleware(routing);

const publicPathnameRegex = RegExp(
  `^(/(${routing.locales.join('|')}))?(${publicPages
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
      return NextResponse.redirect(new URL(SSS_URI + '/login', req.url));
    }
  }
});

export const config = {
  matcher: [
    '/trips',
    '/dashboard',
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
};
