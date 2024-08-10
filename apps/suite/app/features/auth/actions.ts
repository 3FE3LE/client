'use server';

import { signIn } from '@sss/auth';

import { useRegister } from './useCases';

export const UserRegister = async (formData: FormData) => {
  const { register } = useRegister();

  const newUser = {
    name: formData.get('name')?.toString(),
    email: formData.get('email')?.toString(),
    password: formData.get('password')?.toString(),
  };

  const result = await register(newUser);

  return result;
};

export const UserLogin = async (formData: FormData) => {
  const user = {
    email: formData.get('email'),
    password: formData.get('password'),
  };
  const result = await signIn('credentials', {
    ...user,
    redirect: true,
    redirectTo: '/dashboard',
  });
  console.log(result);
  return result;
};
