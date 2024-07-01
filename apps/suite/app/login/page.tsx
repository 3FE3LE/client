import Image from 'next/image';
import ss_logo from '@repo/ui/assets/logo-17suit@4x.png';
import type { Metadata } from 'next';
import { LoginForm } from '../features/auth/components';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import { Session } from 'next-auth';

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
          <Image src={ss_logo} alt="logo" width={250} />
        </h1>
        <LoginForm />
      </div>
    </div>
  );
}
