'use client';

import { ArrowLeft } from 'lucide-react';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { ActionButton, FormWrapper, Google, InputGroup } from '@repo/ui';
import { RegisterInputs } from '@sss/core/auth/constants/inputs';
import { RegisterSchema as schema } from '@sss/core/auth/constants/schemas';
import { useRegister } from '@sss/core/auth/hooks/useRegister';
import { RegisterInput } from '@sss/core/auth/types/authTypes';
import { useRouter } from '@sss/navigations';

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
          <ActionButton variant="primary" type="full" disabled={isLoading}>
            Submit
          </ActionButton>
        </div>
        <Link className="form__link" href="/login">
          Have an account?, click to Sign in
        </Link>
      </form>
    </FormWrapper>
  );
};
