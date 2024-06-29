'use client';
import Image from 'next/image';
import Link from 'next/link';
import ss_logo from '@repo/ui/assets/logo-17suit@4x.png';
import { usePathname } from 'next/navigation';

export const Navbar = () => {
  const pathname = usePathname();

  const menuItems = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Login',
      href: '/login',
    },
    {
      name: 'Register',
      href: '/register',
    },
    {
      name: 'Dashboard',
      href: '/dashboard',
    },
  ];

  return (
    <nav className="navbar">
      <Image alt="17 suit logo" className="navbar__logo" src={ss_logo} />
      <ul className="navbar__menu">
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link
              className={`navbar__menu-item ${item.href === pathname ? 'navbar__menu-item--active' : ''}`}
              href={item.href}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
