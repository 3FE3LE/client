// core/auth/useCases.ts

import { signIn } from 'next-auth/react';

import { registerUser } from './repository';

export const loginCase = async (data: { email: string; password: string }) => {
  return await signIn('credentials', {
    ...data,
    redirect: false,
  });
};

export const registerCase = async (data: {
  email: string;
  password: string;
  name: string;
}) => {
  return registerUser(data);
};
