'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { BackButton, FormWrapper, InputGroup, SubmitButton } from '@repo/ui';
import { useLogin } from '@sss/core/auth/hooks';
import { useRouter } from '@sss/navigations';

import { LoginInputs } from '../../core/auth/constants/inputs';
import { LoginSchema as schema } from '../../core/auth/constants/schemas';
import { GoogleSignInButton } from './GoogleSignInButton';

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
      <BackButton handleClick={router.back} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <GoogleSignInButton />
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
          <SubmitButton isDisable={isLoading} />
        </div>
        <Link className="form__link" href="/register">
          Not have account yet?, click to Sign up
        </Link>
      </form>
    </FormWrapper>
  );
};
