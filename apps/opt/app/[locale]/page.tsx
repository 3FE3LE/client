import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';

import lading_img from '@repo/ui/assets/animated/globalization-a.svg';

export default async function HomePage() {
  const t = await getTranslations('home');

  return (
    <div className="home__container">
      <div className="home__title">
        <h1 className="heading--1">{t('title3')}</h1>
        <h5 className="subtitle--1">{t('subtitle2')}</h5>
        <Link href={`/dashboard`} className="home__button">
          {t('getStarted')}
        </Link>
      </div>
      <div className="home__title">
        <Image src={lading_img} alt="traveling image" width={550} />
      </div>
    </div>
  );
}
