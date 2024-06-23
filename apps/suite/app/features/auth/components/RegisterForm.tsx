'use client';
import { FormWrapper, Input } from '@repo/ui';
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
        <Input
          // register={methods.register}
          placeholder=""
          name="name"
          type="text"
          label="Name"
          // errors={methods.formState.errors}
        />
        <Input
          // register={methods.register}
          placeholder=""
          name="email"
          type="email"
          label="Email"
          // errors={methods.formState.errors}
        />
        <Input
          // register={methods.register}
          placeholder=""
          name="password"
          type="password"
          label="Password"
          // errors={methods.formState.errors}
        />
        <Input
          // register={methods.register}
          placeholder=""
          name="passwordConfirm"
          type="password"
          label="Confirm Password"
          // errors={methods.formState.errors}
        />
        <SubmitButton
        // isDisable={methods.formState.isSubmitting}
        />
      </form>
      {/* </FormProvider> */}
    </FormWrapper>
  );
}
