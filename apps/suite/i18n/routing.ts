import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'es'],
  defaultLocale: 'en',
  localePrefix: {
    mode: 'always',
    prefixes: {
      en: '/en',
      es: '/es',
    },
  },
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
