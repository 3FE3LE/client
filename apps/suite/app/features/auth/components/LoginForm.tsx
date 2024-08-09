'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import { yupResolver } from '@hookform/resolvers/yup';
import { BackButton, FormWrapper, InputGroup, SubmitButton } from '@repo/ui';
import { useRouter } from '@sss/navigations';

import { UserLogin } from '../actions';
import { LoginInputs } from '../constants/inputs';
import { LoginSchema as schema } from '../constants/schemas';
import { LoginInput } from '../types/authTypes';
import { GoogleSignInButton } from './GoogleSignInButton';

export const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const {
    register,
    resetField,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
    reValidateMode: 'onBlur',
  });

  const handleSubmit = () => {
    setIsLoading(true);
    toast.loading('Loading...');
  };

  const onSubmit = async (data: FormData) => {
    try {
      await UserLogin(data);
      toast.remove();
      toast.success('Login successful');
    } catch {
      toast.remove();
      toast.error('Email or password is wrong, try again');
      resetField('password');
      setIsLoading(false);
    }
  };

  return (
    <FormWrapper title="Login" loading={isLoading}>
      <BackButton handleClick={router.back} />
      <form action={onSubmit} onSubmit={handleSubmit}>
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
