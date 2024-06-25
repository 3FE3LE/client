'use server';

import { redirect } from 'next/navigation';
import { useLogin, useRegister } from './useCases';
import { cookies } from 'next/headers';

const cookie = cookies();

export const UserRegister = async (formData: FormData) => {
  const { register } = useRegister();

  const name = formData.get('name')?.toString();
  const email = formData.get('email')?.toString();
  const password = formData.get('password')?.toString();

  const newUser = {
    name,
    email,
    password,
  };

  await register(newUser);

  redirect('/login');
};

export const UserLogin = async (formData: FormData) => {
  const { login } = useLogin();

  const email = formData.get('email')?.toString();
  const password = formData.get('password')?.toString();

  const user = {
    email,
    password,
  };

  console.log(user);

  await login(user);

  redirect('/dashboard');
  return user;
};
