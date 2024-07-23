'use client';

import { useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { ThemeSwitcher } from '@repo/ui';
import ss_logo from '@repo/ui/assets/logo-17suit@4x.png';
import { Link, usePathname } from '@sss/navigations';

import { SignOutButton } from './SignOutButton';

export const Navbar = ({ locale }: { locale: 'en' | 'es' | undefined }) => {
  const pathname = usePathname();
  const session = useSession();
  const t = useTranslations('navbar');

  const protectedRoute = session.status === 'authenticated';

  const menuItems = [
    {
      name: 'login',
      href: '/login',
      protected: protectedRoute,
    },
    {
      name: 'register',
      href: '/register',
      protected: protectedRoute,
    },
    {
      name: 'dashboard',
      href: '/dashboard',
      protected: !protectedRoute,
    },
    {
      name: 'profile',
      href: '/profile',
      protected: !protectedRoute,
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
        <li>
          <ThemeSwitcher />
        </li>
        {session.status === 'authenticated' && (
          <li>
            <SignOutButton text={t('log-out')} />
          </li>
        )}
      </ul>
    </nav>
  );
};
