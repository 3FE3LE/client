import { Metadata } from 'next';
import { Session } from 'next-auth';
import { getServerSession } from 'next-auth/next';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import { RegisterForm } from '@/app/features/auth/components';
import ss_logo from '@repo/ui/as"importSorter.generalConfiguration.sortOnBeforeSave"sets/logo-17suit@4x.png';

export const metadata: Metadata = {
  title: '17Suit - Register',
  description: 'Sign up your account',
};

const getSessionOnServer = async (): Promise<Session | null> => {
  return await getServerSession(authOptions);
};

export default async function Register() {
  const session = await getSessionOnServer();

  if (session) {
    redirect('/dashboard');
  }
  return (
    <div className="register-page">
      <div className="register-page__container">
        <h1 className="heading--1">
          Sign Up your{' '}
          <Link href="/">
            <Image alt="logo" src={ss_logo} width={250} /> Account!!
          </Link>
        </h1>
        <RegisterForm />
      </div>
    </div>
  );
}
