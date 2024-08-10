import { createSharedPathnamesNavigation } from 'next-intl/navigation';

import { locales } from '@repo/ui/config';

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales /* ... */ });
