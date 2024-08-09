import { Session } from 'next-auth';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import ss_logo from '@repo/ui/assets/logo-17suit@4x.png';
import { LoginForm } from '@sss/app/features/auth/components';
import { auth } from '@sss/auth';

import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: '17Suit - Login',
  description: 'Sign in to your account',
};

const getSessionOnServer = async (): Promise<Session | null> => {
  return await auth();
};

export default async function Login() {
  const session = await getSessionOnServer();

  if (session) {
    redirect('/dashboard');
  }
  return (
    <div className="login-page__container">
      <div className="login-page__article">
        <h1 className="heading--1">
          Welcome to{'\n'}
          <Link href="/">
            <Image priority src={ss_logo} alt="logo" width={250} />
          </Link>
        </h1>
      </div>
      <div className="login-page__article">
        <LoginForm />
      </div>
    </div>
  );
}
