'use client';

import { signOut } from 'next-auth/react';
import { toast } from 'react-hot-toast';

export const SignOutButton = () => {
  return (
    <button
      onClick={() => {
        signOut();
        toast.success('You are logout');
      }}
    >
      Sign out
    </button>
  );
};
