import { Metadata } from 'next';
import { Session } from 'next-auth';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import ss_logo from '@repo/ui/assets/logo-17suit@4x.png';
import { auth } from '@sss/auth';
import { RegisterForm } from '@sss/components/auth';

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
    redirect('/dashboard');
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
