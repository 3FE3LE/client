import { signIn } from 'next-auth/react';

import { Google } from '@repo/ui';

export const GoogleSignInButton = () => {
  return (
    <button
      className="form__button--google"
      onClick={(e) => {
        e.preventDefault();
        signIn('google', { redirectTo: '/dashboard' });
      }}
    >
      <Google /> <span>Sign In</span>
    </button>
  );
};
