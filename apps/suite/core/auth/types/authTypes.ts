// suite/features/auth/types/authTypes.ts
export type LoginInput = {
  label: string;
  name: 'email' | 'password';
  type: string;
  placeholder?: string;
};
export type RegisterInput = {
  label: string;
  name: 'name' | 'email' | 'password' | 'passwordConfirm';
  type: string;
  placeholder?: string;
};
