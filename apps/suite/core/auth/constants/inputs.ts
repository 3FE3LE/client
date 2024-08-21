// suite/features/auth/constants/loginInputs.ts
import { LoginInput, RegisterInput } from '../types/authTypes';

export const LoginInputs: LoginInput[] = [
  {
    label: 'Email',
    name: 'email',
    type: 'email',
    placeholder: 'Enter your email',
  },
  {
    label: 'Password',
    name: 'password',
    type: 'password',
    placeholder: 'Enter your password',
  },
];

export const RegisterInputs: RegisterInput[] = [
  {
    label: 'Name',
    name: 'name',
    type: 'text',
    placeholder: 'Enter your Name',
  },
  {
    label: 'Email',
    name: 'email',
    type: 'email',
    placeholder: 'Enter your email',
  },
  {
    label: 'Password',
    name: 'password',
    type: 'password',
    placeholder: 'Enter your password',
  },
  {
    label: 'Confirm Password',
    name: 'passwordConfirm',
    type: 'password',
    placeholder: 'Confirm your password',
  },
];
