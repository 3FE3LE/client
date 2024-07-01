'use server';

import { useLogin, useRegister } from './useCases';

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

  const result = await register(newUser);

  return result;
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
};
