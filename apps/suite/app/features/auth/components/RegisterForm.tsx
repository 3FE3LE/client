'use client';
import { useState } from 'react';
import { FormWrapper, InputGroup, SubmitButton } from '@repo/ui';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { RegisterSchema as schema } from '../constants/schemas';
import { RegisterInputs } from '../constants/inputs';
import { RegisterInput } from '../types/authTypes';
import { BackButton } from '../../../../components/BackButton';
import { UserRegister } from '../actions';
import { signIn } from 'next-auth/react';

export default function RegisterForm() {
  const [error, setError] = useState('');
  const router = useRouter();
  const {
    register,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
    reValidateMode: 'onBlur',
  });

  const onSubmit = async (data: FormData) => {
    const result = await UserRegister(data);
    if (result.message !== 'User created successfully') {
      // Manejar el error de inicio de sesión
      setError(result.message);
    } else {
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
      <form action={onSubmit}>
        {RegisterInputs.map((input: RegisterInput) => (
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
              id={input.name}
              placeholder={input.placeholder}
            />
          </InputGroup>
        ))}

        {error && <p className="form__error">{error}</p>}
        <div className="form__group form__group--buttons">
          <BackButton />
          <SubmitButton isDisable={!isValid || isSubmitting} />
        </div>
        <Link href="/login">Have an account?, click to Sign in</Link>
      </form>
    </FormWrapper>
  );
}
