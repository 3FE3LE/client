'use client';
import { FormWrapper, InputGroup } from '@repo/ui';
import { UserRegister } from '../actions';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { SubmitButton } from '@repo/ui/src/SubmitButton';
import { RegisterSchema as schema } from '../constants/schemas';
import { RegisterInputs } from '../constants/inputs';
import { RegisterInput } from '../types/authTypes';

export default function RegisterForm() {
  const {
    register,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
    reValidateMode: 'onBlur',
  });

  return (
    <FormWrapper title="Register" loading={isSubmitting}>
      {isSubmitting && <p>Loading...</p>}
      <form action={UserRegister}>
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
        <SubmitButton isDisable={!isValid || isSubmitting} />
      </form>
    </FormWrapper>
  );
}
