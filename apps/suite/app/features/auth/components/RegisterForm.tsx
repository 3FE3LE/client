'use client';

import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import { BackButton } from '@/components';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormWrapper, InputGroup, SubmitButton } from '@repo/ui';

import { UserRegister } from '../actions';
import { RegisterInputs } from '../constants/inputs';
import { RegisterSchema as schema } from '../constants/schemas';
import { RegisterInput } from '../types/authTypes';

export default function RegisterForm() {
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

  const handleOnSubmit = () => isValid;

  const onSubmit = async (data: FormData) => {
    toast.loading('Loading...');
    const result = await UserRegister(data);
    if (result.message !== 'User created successfully') {
      // Manejar el error de inicio de sesión
      toast.dismiss();
      toast.error(result.message);
      setError(result.message);
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
      {isSubmitting && <p>Loading...</p>}
      <BackButton />
      <form onSubmit={handleSubmit(handleOnSubmit)} action={onSubmit}>
        {RegisterInputs.map((input: RegisterInput) => (
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

        {error && <p className="form__error">{error}</p>}
        <div className="form__group form__group--buttons">
          <SubmitButton isDisable={isSubmitting} />
        </div>
        <Link className="form__link" href="/login">
          Have an account?, click to Sign in
        </Link>
      </form>
    </FormWrapper>
  );
}
