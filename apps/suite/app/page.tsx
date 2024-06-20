'use client';
import Image from 'next/image';
import ss_logo from '@repo/ui/assets/logo-17suit@4x.svg';
import { Button, FormWrapper, Input } from '@repo/ui';
import { RegisterForm } from './features/auth';

export default function Web() {
  return (
    <div>
      <Image
        alt="17 suit logo"
        style={{ fill: '#fff', color: '#000' }}
        src={ss_logo}
      />
      <RegisterForm />
    </div>
  );
}
