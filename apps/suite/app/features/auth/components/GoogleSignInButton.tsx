import { signIn } from 'next-auth/react';
import Image from 'next/image';

import ss_google_icon from '@repo/ui/assets/google.svg';

export const GoogleSignInButton = () => {
  return (
    <button
      className="form__button--google"
      onClick={(e) => {
        e.preventDefault();
        signIn('google', { redirect: true, callbackUrl: '/dashboard' });
      }}
    >
      <Image alt="google" src={ss_google_icon} /> <span>Sign In</span>
    </button>
  );
};
