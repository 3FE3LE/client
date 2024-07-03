'use client';

import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import { BackButton } from '@/components';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormWrapper, InputGroup, SubmitButton } from '@repo/ui';

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
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
    reValidateMode: 'onBlur',
  });

  const onSubmit = async (data: any) => {
    const result = await signIn('credentials', {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (result?.error) {
      // Manejar el error de inicio de sesión
      toast.dismiss();
      toast.error(result.error);
      setError(result.error);
    } else {
      // Redirigir al dashboard si el inicio de sesión es exitoso
      toast.dismiss();
      toast.success('Login success');
      router.push('/dashboard');
    }
  };

  return (
    <FormWrapper title="Login" loading={isSubmitting}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {LoginInputs.map((input: LoginInput) => (
          <InputGroup
            key={input.name}
            errors={errors[input.name]?.message}
            label={input.label}
            name={input.name}
          >
            <input
              {...register(input.name)}
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
            />
          </InputGroup>
        ))}
        <div className="form__division">
          <span>or</span>
        </div>
        <GoogleSignInButton />
        {error && <p className="form__error">{error}</p>}
        <div className="form__group form__group--buttons">
          <BackButton />
          <SubmitButton isDisable={!isValid || isSubmitting} />
        </div>
        <Link href="/register">Not have account yet?, click to Sign up</Link>
      </form>
    </FormWrapper>
  );
}
