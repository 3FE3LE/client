import Image from 'next/image';
import ss_logo from '@repo/ui/assets/logo-17suit@4x.png';
import type { Metadata } from 'next';
import { LoginForm } from '../features/auth/components';
export const metadata: Metadata = {
  title: '17Suit - Login',
  description: 'Sign in to your account',
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
