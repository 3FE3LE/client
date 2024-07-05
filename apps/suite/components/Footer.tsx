'use client';

import { useTranslations } from 'next-intl';

import { Link, usePathname } from '@/navigations';

export const Footer = ({ locale }: { locale: string }) => {
  const pathname = usePathname();
  const t = useTranslations('footer');

  return (
    <footer className="footer__container">
      <div>
        <Link href="href">
          <h5>{t('about-us')}</h5>
        </Link>
        <ul>
          <Link href="href">
            <li>{t('our-company')}</li>
          </Link>
          <Link href="href">
            <li>{t('stories-news')}</li>
          </Link>
          <Link href="href">
            <li>{t('investor-relations')}</li>
          </Link>
        </ul>
      </div>
      <div>
        <Link href="href">
          <h5>{t('social-impact')}</h5>
        </Link>
        <ul>
          <Link href="href">
            <li>{t('people')}</li>
          </Link>
          <Link href="href">
            <li>{t('planet')}</li>
          </Link>
        </ul>
      </div>
      <div>
        <Link href="href">
          <h5>{t('for-business-partners')}</h5>
        </Link>
        <ul>
          <Link href="href">
            <li>{t('coming-soon')}</li>
          </Link>
        </ul>
      </div>
      <div>
        <Link href="href">
          <h5>{t('languages')}</h5>
        </Link>
        <ul>
          <li>
            <Link
              hidden={locale === 'es'}
              replace
              locale="es"
              scroll={false}
              href={pathname}
            >
              ES
            </Link>{' '}
            <Link
              hidden={locale === 'en'}
              replace
              locale="en"
              scroll={false}
              href={pathname}
            >
              EN
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
