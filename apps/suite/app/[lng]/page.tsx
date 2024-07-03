import Image from 'next/image';
import Link from 'next/link';

import { Navbar } from '@/components';
import traveler_img from '@repo/ui/assets/traveler.svg';

import { useTranslation } from '../i18n';

type Params = {
  params: {
    lng: string;
  };
};

export default async function Home({ params: { lng } }: Params) {
  const { t } = await useTranslation(lng);
  return (
    <>
      <Navbar />
      <main className="home__container">
        <div className="home__title">
          <h1 className="heading--1">{t('title3')}</h1>
          <h5 className="subtitle--1">{t('subtitle2')}</h5>
        </div>
        <div className="home__title">
          <Image src={traveler_img} alt="traveling image" width={550} />
          <Link href={`/login`} className="home__button">
            {t('getStarted')}
          </Link>
        </div>
      </main>
    </>
  );
}
