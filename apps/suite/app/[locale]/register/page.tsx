import { Metadata } from 'next';
import { Session } from 'next-auth';
import Image from 'next/image';
import Link from 'next/link';

import ss_logo from '@repo/ui/assets/logo-17suit@4x.png';
import { auth } from '@sss/auth';
import { RegisterForm } from '@sss/components/auth';
import { redirect, routing } from '@sss/i18n/routing';

export const metadata: Metadata = {
  title: '17Suit - Register',
  description: 'Sign up your account',
};

const getSessionOnServer = async (): Promise<Session | null> => {
  return await auth();
};

export default async function Register() {
  const session = await getSessionOnServer();

  if (session) {
    redirect({ href: '/dashboard', locale: routing.defaultLocale });
  }
  return (
    <div className="register-page__container">
      <div className="register-page__article">
        <h1 className="heading--1">
          Sign Up in{' '}
          <Link href="/">
            <Image priority alt="logo" src={ss_logo} width={250} />
          </Link>
        </h1>
      </div>
      <div className="register-page__article">
        <RegisterForm />
      </div>
    </div>
  );
}
