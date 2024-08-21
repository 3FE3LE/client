'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { BackButton, FormWrapper, InputGroup, SubmitButton } from '@repo/ui';
import { RegisterInputs } from '@sss/core/auth/constants/inputs';
import { RegisterSchema as schema } from '@sss/core/auth/constants/schemas';
import { useRegister } from '@sss/core/auth/hooks/useRegister';
import { RegisterInput } from '@sss/core/auth/types/authTypes';
import { useRouter } from '@sss/navigations';

import { GoogleSignInButton } from './GoogleSignInButton';

export const RegisterForm = () => {
  const router = useRouter();
  const { userRegister, isLoading } = useRegister();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
    reValidateMode: 'onBlur',
  });

  const onSubmit = async ({
    email,
    password,
    name,
  }: {
    email: string;
    password: string;
    name: string;
  }) => {
    await userRegister({ email, password, name });
  };

  return (
    <FormWrapper title="Register" loading={isLoading}>
      <BackButton handleClick={router.back} />
      <form onSubmit={handleSubmit(onSubmit)}>
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
