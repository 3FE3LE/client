'use client';

import { signOut } from 'next-auth/react';
import { toast } from 'react-hot-toast';

export const SignOutButton = ({ text }: { text?: string }) => {
  return (
    <button
      onClick={() => {
        signOut();
        toast.success('You are logout');
      }}
    >
      {text || 'Sign Out'}
    </button>
  );
};
