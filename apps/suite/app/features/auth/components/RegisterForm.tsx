'use client';
import { FormWrapper, InputGroup } from '@repo/ui';
import { UserRegister } from '../actions';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { SubmitButton } from './SubmitButton';

// const schema = yup.object().shape({
//   name: yup.string().required('Name is required'),
//   email: yup.string().email('Invalid email').required('Email is required'),
//   password: yup
//     .string()
//     .min(6, 'Password must be at least 6 characters')
//     .required('Password is required'),
//   passwordConfirm: yup
//     .string()
//     .oneOf([yup.ref('password'), ''], 'Passwords must match')
//     .required('Confirm Password is required'),
// });

export default function RegisterForm() {
  // const methods = useForm({
  //   resolver: yupResolver(schema),
  // });

  // const onSubmit = async (data: any) => {
  //   await UserRegister(data);
  // };
  return (
    <FormWrapper title="Register">
      {/* <FormProvider {...methods}> */}
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
      {/* </FormProvider> */}
    </FormWrapper>
  );
}
