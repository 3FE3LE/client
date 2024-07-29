'use client';

import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import { yupResolver } from '@hookform/resolvers/yup';
import { BackButton, FormWrapper, InputGroup, SubmitButton } from '@repo/ui';
import { useRouter } from '@sss/navigations';

import { LoginInputs } from '../constants/inputs';
import { LoginSchema as schema } from '../constants/schemas';
import { LoginInput } from '../types/authTypes';
import { GoogleSignInButton } from './GoogleSignInButton';

export default function LoginForm() {
  const [error, setError] = useState('');
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
    reValidateMode: 'onBlur',
  });

  const onSubmit = async (data: any) => {
    toast.loading;
    const result = await signIn('credentials', {
      redirect: false,
      email: data.email,
      password: data.password,
    });
    // Redirigir al dashboard si el inicio de sesión es exitoso
    if (result?.ok) {
      toast.dismiss();
      toast.success('Login success');
      router.push('/dashboard');
    } else {
      // Manejar el error de inicio de sesión
      toast.dismiss();
      toast.error(result?.error as string);
      setError(result?.error as string);
    }
  };

  return (
    <FormWrapper title="Login" loading={isSubmitting}>
      <BackButton handleClick={router.back} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <GoogleSignInButton />
        <div className="form__division">
          <span>or</span>
        </div>
        {LoginInputs.map((input: LoginInput) => (
          <InputGroup
            key={input.name}
            errors={errors[input.name]?.message}
            label={input.label}
            name={input.name}
            register={register}
            type={input.type}
            placeholder={input.placeholder}
          />
        ))}
        <div className="form__group form__group--buttons">
          {error && <p className="form__error">{error}</p>}
          <SubmitButton isDisable={isSubmitting} />
        </div>
        <Link className="form__link" href="/register">
          Not have account yet?, click to Sign up
        </Link>
      </form>
    </FormWrapper>
  );
}
