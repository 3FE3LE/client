import { signIn } from 'next-auth/react';

import { Google } from '@repo/ui';

export const GoogleSignInButton = () => {
  return (
    <div
      className="form__button--google"
      onClick={(e) => {
        e.preventDefault();
        signIn('google', { redirect: true, callbackUrl: '/dashboard' });
      }}
    >
      <Google /> <span>Sign In</span>
    </div>
  );
};
