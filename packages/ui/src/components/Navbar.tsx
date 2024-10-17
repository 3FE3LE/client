import { User } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { ActionButton } from './ActionButton';

type MenuItem = {
  name: string; // Puedes pasar la key de traducción o el texto ya traducido
  href: string;
  protected: boolean;
};

export type NavbarProps = {
  locale?: 'en' | 'es';
  authenticated: boolean;
  title?: string | { src: string; alt: string }; // Soporta texto o imagen
  menuItems: MenuItem[];
};

export const Navbar: React.FC<NavbarProps> = ({
  locale,
  authenticated,
  title,
  menuItems,
}) => {
  const pathname = usePathname();

  const t = useTranslations('navbar');
  return (
    <nav className="navbar">
      <Link href="/">
        {typeof title !== 'object' ? (
          <h1>{title}</h1>
        ) : (
          <Image
            priority
            alt={title?.alt || 'Logo'}
            className="navbar__logo"
            src={title?.src || 'logo'}
            width={200}
            height={80}
          />
        )}
      </Link>
      <ul className="navbar__menu">
        {menuItems.map(
          (item) =>
            item.protected === authenticated && (
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
