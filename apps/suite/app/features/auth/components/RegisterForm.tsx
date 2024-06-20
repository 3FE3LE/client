import { FormWrapper, Input } from '@repo/ui';
import { userRegister } from '../actions';

export default function RegisterForm() {
  return (
    <FormWrapper title="Register">
      <form action={userRegister}>
        <Input name="name" type="text" />
        <Input name="email" type="email" />
        <Input name="password" type="password" />
        <button className="form__button">Submit</button>
      </form>
    </FormWrapper>
  );
}
