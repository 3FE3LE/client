'use client';
import { FormWrapper, Input } from '@repo/ui';
import { UserLogin } from '../actions';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import { SubmitButton } from './SubmitButton';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

export default function LoginForm() {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  //react hook form validation
  const formaValidation = () => {
    if (watch('email') && watch('password')) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <FormProvider {...methods}>
      <FormWrapper title="Login">
        <form onSubmit={handleSubmit(formaValidation)} action={UserLogin}>
          <Input
            register={register}
            errors={errors['email']?.message}
            label="Email"
            name="email"
            type="email"
            placeholder={'example@17suit.com'}
          />
          <Input
            register={register}
            errors={errors['password']?.message}
            label="Password"
            name="password"
            placeholder={'175785%%'}
          />
          <SubmitButton isDisable={isSubmitting} />
        </form>
      </FormWrapper>
    </FormProvider>
  );
}
