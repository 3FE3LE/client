import Image from 'next/image';
import ss_logo from '@repo/ui/assets/logo-17suit@4x.png';
import { RegisterForm } from '../features/auth/components';

export default function Register() {
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
