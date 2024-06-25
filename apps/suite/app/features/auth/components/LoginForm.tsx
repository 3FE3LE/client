'use client';
import { FormWrapper, InputGroup } from '@repo/ui';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { SubmitButton } from '@repo/ui/src/SubmitButton';
import { LoginSchema as schema } from '../constants/schemas';
import { LoginInputs } from '../constants/inputs';
import { LoginInput } from '../types/authTypes';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
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

    console.log(result);
    if (result?.error) {
      // Manejar el error de inicio de sesión
      console.error('Error en el inicio de sesión:', result.error);
    } else {
      // Redirigir al dashboard si el inicio de sesión es exitoso
      router.push('/dashboard');
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
