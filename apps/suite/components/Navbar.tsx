'use client';

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import ss_logo from '@repo/ui/assets/logo-17suit@4x.png';

import { SignOutButton } from './SignOutButton';

export const Navbar = () => {
  const pathname = usePathname();
  const session = useSession();

  const protectedRoute = session.status === 'authenticated';

  const menuItems = [
    {
      name: 'Login',
      href: '/login',
      protected: protectedRoute,
    },
    {
      name: 'Register',
      href: '/register',
      protected: protectedRoute,
    },
    {
      name: 'Dashboard',
      href: '/dashboard',
      protected: !protectedRoute,
    },
    {
      name: 'Profile',
      href: '/profile',
      protected: !protectedRoute,
    },
  ];

  return (
    <nav className="navbar">
      <Image alt="17 suit logo" className="navbar__logo" src={ss_logo} />
      <ul className="navbar__menu">
        {menuItems.map(
          (item) =>
            !item.protected && (
              <li key={item.name}>
                <Link
                  className={`navbar__menu-item ${item.href === pathname && 'navbar__menu-item--active'}`}
                  href={item.href}
                >
                  {item.name}
                </Link>
              </li>
            ),
        )}
        <li>{session.status === 'authenticated' && <SignOutButton />}</li>
      </ul>
    </nav>
  );
};
