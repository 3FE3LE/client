import { registerUser } from './repository';

export const useRegister = () => {
  const register = async ({
    name,
    email,
    password,
  }: {
    name: string | undefined;
    email: string | undefined;
    password: string | undefined;
  }) => {
    return await registerUser(name, email, password);
  };
  return { register };
};
