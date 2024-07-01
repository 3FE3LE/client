import Image from 'next/image';
import ss_logo from '@repo/ui/assets/logo-17suit@4x.png';
import { RegisterForm } from '../features/auth/components';
import { Metadata } from 'next';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import { Session } from 'next-auth';

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
          Sign Up your <Image alt="logo" src={ss_logo} width={250} /> Account!!
        </h1>
        <RegisterForm />
      </div>
    </div>
  );
}
