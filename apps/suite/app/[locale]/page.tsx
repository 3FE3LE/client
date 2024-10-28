import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

import lading_img from '@repo/ui/assets/animated/traveler-a.svg';
import { auth } from '@sss/auth';
import { Link, redirect, routing } from '@sss/i18n/routing';

export default async function Home() {
  const session = await auth();

  if (session) {
    redirect({ href: '/dashboard', locale: routing.defaultLocale });
  }
  const t = await getTranslations('home');
  return (
    <div className="home__container">
      <div className="home__title">
        <h1 className="heading--1">{t('title3')}</h1>
        <h5 className="subtitle--1">{t('subtitle2')}</h5>
        <Link href={`/login`} className="home__button">
          {t('getStarted')}
        </Link>
      </div>
      <div className="home__title">
        <Image src={lading_img} alt="traveling image" width={550} />
      </div>
    </div>
  );
}
