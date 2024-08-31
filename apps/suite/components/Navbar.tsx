'use client';

import { User } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { ActionButton } from '@repo/ui';
import ss_logo from '@repo/ui/assets/logo-17suit@4x.png';
import { Link, usePathname } from '@sss/navigations';

export const Navbar = ({
  locale,
  authenticated,
}: {
  locale: 'en' | 'es' | undefined;
  authenticated: boolean;
}) => {
  const pathname = usePathname();

  const t = useTranslations('navbar');

  const menuItems = [
    {
      name: 'login',
      href: '/login',
      protected: authenticated,
    },
    {
      name: 'register',
      href: '/register',
      protected: authenticated,
    },
    {
      name: 'dashboard',
      href: '/dashboard',
      protected: !authenticated,
    },
    {
      name: 'profile',
      href: '/profile',
      protected: !authenticated,
    },
  ];

  return (
    <nav className="navbar">
      <Link href="/">
        <Image
          priority
          alt="17 suit logo"
          className="navbar__logo"
          src={ss_logo}
        />
      </Link>
      <ul className="navbar__menu">
        {menuItems.map(
          (item) =>
            !item.protected && (
              <li key={item.name}>
                <Link
                  prefetch={true}
                  locale={locale}
                  className={`navbar__menu-item ${item.href === pathname && 'navbar__menu-item--active'}`}
                  href={item.href}
                >
                  {t(item.name)}
                </Link>
              </li>
            ),
        )}
        {authenticated && (
          <li>
            <ActionButton size="small" type="icon">
              <User />
            </ActionButton>
          </li>
        )}
      </ul>
    </nav>
  );
};
