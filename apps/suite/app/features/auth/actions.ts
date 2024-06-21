'use server';

import { useRegister } from './useCases';

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

  return newUser;
};
