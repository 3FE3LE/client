'use client';

import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import { yupResolver } from '@hookform/resolvers/yup';
import { BackButton, FormWrapper, InputGroup, SubmitButton } from '@repo/ui';
import { useRouter } from '@sss/navigations';

import { UserRegister } from '../actions';
import { RegisterInputs } from '../constants/inputs';
import { RegisterSchema as schema } from '../constants/schemas';
import { RegisterInput } from '../types/authTypes';

export default function RegisterForm() {
  const [error, setError] = useState('');
  const router = useRouter();
  const {
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    reValidateMode: 'onBlur',
  });

  const onSubmit = async (data: FormData) => {
    toast.loading('Loading...');
    const result = await UserRegister(data);
    if (result.message !== 'User created successfully') {
      // Manejar el error de inicio de sesión
      setError(result.message);
      toast.dismiss();
      toast.error(result.message);
    } else {
      toast.success(result.message);
      // Redirigir al dashboard si el inicio de sesión es exitoso
      await signIn('credentials', {
        redirect: false,
        email: data.get('email')?.toString(),
        password: data.get('password')?.toString(),
      });
      router.push('/dashboard');
    }
  };

  return (
    <FormWrapper title="Register" loading={isSubmitting}>
      <BackButton handleClick={router.back} />
      {isSubmitting ? (
        <p>Loading...</p>
      ) : (
        <form action={onSubmit}>
          {RegisterInputs.map((input: RegisterInput) => (
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
            {error && <p className="form__error">{error}</p>}
            <SubmitButton isDisable={isSubmitting} />
          </div>
          <Link className="form__link" href="/login">
            Have an account?, click to Sign in
          </Link>
        </form>
      )}
    </FormWrapper>
  );
}
