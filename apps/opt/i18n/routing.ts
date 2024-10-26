import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en-US', 'es-ES'],
  defaultLocale: 'en-US',
  localePrefix: {
    mode: 'always',
    prefixes: {
      'en-US': '/en',
      'es-ES': '/es',
    },
  },
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
