'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import { yupResolver } from '@hookform/resolvers/yup';
import { BackButton, FormWrapper, InputGroup, SubmitButton } from '@repo/ui';
import { useRouter } from '@sss/navigations';

import { UserLogin, UserRegister } from '../actions';
import { RegisterInputs } from '../constants/inputs';
import { RegisterSchema as schema } from '../constants/schemas';
import { RegisterInput } from '../types/authTypes';
import { GoogleSignInButton } from './GoogleSignInButton';

export const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    register,
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
      await UserRegister(data);
      toast.remove();
      toast.success('User created successfully');
      await UserLogin(data);
    } catch (error) {
      toast.remove();
      toast.error(error as string);
      setIsLoading(false);
    }
  };

  return (
    <FormWrapper title="Register" loading={isLoading}>
      <BackButton handleClick={router.back} />
      <form action={onSubmit} onSubmit={handleSubmit}>
        <GoogleSignInButton />
        <div className="form__division">
          <span>or</span>
        </div>
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
          <SubmitButton isDisable={isLoading} />
        </div>
        <Link className="form__link" href="/login">
          Have an account?, click to Sign in
        </Link>
      </form>
    </FormWrapper>
  );
};
