import { registerUser, loginUser } from './repository';

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

export const useLogin = () => {
  const login = async ({
    email,
    password,
  }: {
    email: string | undefined;
    password: string | undefined;
  }) => {
    return await loginUser(email, password);
  };
  return { login };
};
