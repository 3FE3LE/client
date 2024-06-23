import Image from 'next/image';
import { LoginForm } from '../features/auth';
import ss_logo from '@repo/ui/assets/logo-17suit@4x.png';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '17Suit - Login',
  description: 'Sign in to your account',
  icons: {
    icon: '/favicon.ico',
  },
};
export default function Login() {
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
