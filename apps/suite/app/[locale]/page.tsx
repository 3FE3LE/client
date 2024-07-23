import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';

import lading_img from '@repo/ui/assets/animated/traveler-a.svg';
import { PageParams } from '@repo/ui/types';
import { Navbar } from '@sss/components';

export default async function Home({ params: { locale } }: PageParams) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('home');
  return (
    <>
      <Navbar locale={locale} />
      <main className="home__container">
        <div className="home__title">
          <h1 className="heading--1">{t('title3')}</h1>
          <h5 className="subtitle--1">{t('subtitle2')}</h5>
        </div>
        <div className="home__title">
          <Image src={lading_img} alt="traveling image" width={550} />
          <Link href={`/login`} className="home__button">
            {t('getStarted')}
          </Link>
        </div>
      </main>
    </>
  );
}
