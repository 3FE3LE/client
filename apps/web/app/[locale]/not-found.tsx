'use client';
import { ArrowLeft } from 'lucide-react';

import { ActionButton } from '@repo/ui';
import { useRouter } from '@web/navigations';

export default function NotFound() {
  const { back } = useRouter();
  return (
    <div className="not-found">
      <h1 className="heading--1">404</h1>{' '}
      <h4 className="subtitle--1">
        Mmmm... well, sometime this things happens
      </h4>
      <ActionButton type="icon" onClick={() => back()}>
        <ArrowLeft />
      </ActionButton>
    </div>
  );
}
