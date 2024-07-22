'use client';

import Image from 'next/image';

import { useRouter } from '@/navigations';
import left_arrow from '@repo/ui/assets/arrow-left.svg';

export const BackButton = () => {
  const router = useRouter();
  return (
    <div
      className="form__button--back"
      onClick={(e) => {
        e.preventDefault();
        router.back();
      }}
    >
      <Image alt="back-icon" src={left_arrow} />
    </div>
  );
};
