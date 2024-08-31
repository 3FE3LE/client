'use client';

import { ArrowLeft } from 'lucide-react';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { ActionButton, FormWrapper, Google, InputGroup } from '@repo/ui';
import { useLogin } from '@sss/core/auth/hooks';
import { useRouter } from '@sss/navigations';

import { LoginInputs } from '../../core/auth/constants/inputs';
import { LoginSchema as schema } from '../../core/auth/constants/schemas';

export const LoginForm = () => {
  const router = useRouter();
  const { login, isLoading } = useLogin(); // Usa el hook para manejar la autenticación
  const {
    register,
    resetField,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
    reValidateMode: 'onBlur',
  });

  const onSubmit = async (data: { email: string; password: string }) => {
    await login(data); // Llama al hook para realizar la autenticación
    if (!errors.password) {
      resetField('password'); // Resetea el campo de contraseña en caso de error
    }
  };

  return (
    <FormWrapper title="Login" loading={isLoading}>
      <div className="form__header">
        <ActionButton type="icon" onClick={router.back}>
          <ArrowLeft />
        </ActionButton>
        <ActionButton
          type="full"
          onClick={() => signIn('google', { redirectTo: '/dashboard' })}
        >
          <Google /> Sing in
        </ActionButton>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form__division">
          <span>or</span>
        </div>
        {LoginInputs.map((input) => (
          <InputGroup
            key={input.name}
            errors={errors[input.name]?.message}
            label={input.label}
            name={input.name}
            register={register}
            type={input.type}
            placeholder={input.placeholder}
            required={true}
          />
        ))}
        <div className="form__group form__group--buttons">
          <ActionButton type="full" variant="primary" disabled={isLoading}>
            Submit
          </ActionButton>
        </div>
        <Link className="form__link" href="/register">
          Not have account yet?, click to Sign up
        </Link>
      </form>
    </FormWrapper>
  );
};
