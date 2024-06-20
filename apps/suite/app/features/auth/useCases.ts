// suite/features/auth/useCases.ts
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
    console.log(name, password, email);
    return await registerUser(name, email, password);
  };
  return { register };
};

export const useLogin = () => {
  const login = async (name: string, password: string) => {
    return await loginUser(name, password);
  };
  return { login };
};
