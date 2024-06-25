'use client';
import { FormWrapper, InputGroup } from '@repo/ui';
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
    <FormWrapper title="Login">
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
        <SubmitButton isDisable={!isValid || isSubmitting} />
      </form>
    </FormWrapper>
  );
}
