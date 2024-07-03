import { Session } from 'next-auth';
import { getServerSession } from 'next-auth/next';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import { LoginForm } from '@/app/features/auth/components';
import ss_logo from '@repo/ui/assets/logo-17suit@4x.png';

import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: '17Suit - Login',
  description: 'Sign in to your account',
};

const getSessionOnServer = async (): Promise<Session | null> => {
  return await getServerSession(authOptions);
};

export default async function Login() {
  const session = await getSessionOnServer();

  if (session) {
    redirect('/dashboard');
  }
  return (
    <div className="login-page">
      <div className="login-page__container">
        <h1 className="heading--1">
          Welcome to{'\n'}
          <Link href="/">
            <Image priority src={ss_logo} alt="logo" width={250} />
          </Link>
        </h1>
        <LoginForm />
      </div>
    </div>
  );
}
