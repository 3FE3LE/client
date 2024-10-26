'use client';

import { NotFoundImage } from '@repo/ui';
import { Link } from '@sss/i18n/routing';

export default function NotFound() {
  return (
    <div className="not-found__container">
      <Link replace href={'/'}>
        <NotFoundImage />
      </Link>
      <h4 className="subtitle--1">
        Mmmm... well, sometime this things happens
      </h4>
    </div>
  );
}
