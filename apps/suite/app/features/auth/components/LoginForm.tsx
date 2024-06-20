import { useLogin } from '../useCases';
import { FormWrapper, Input } from '@repo/ui';

export default function LoginForm() {
  const { login } = useLogin();

  const handleSubmit = async (formData: FormData) => {
    const email = formData.get('email');
    const password = formData.get('password');
    ('use server');
    try {
      const data = await login(`${email}`, `${password}`);
      console.log('Login successful:', data);
    } catch (error: any) {
      console.error('Login failed:', error.message);
    }
  };

  return (
    <FormWrapper title="Login">
      <form action={handleSubmit}>
        <Input name="name" type="text" />
        <Input name="name" type="password" />
        <button className="form__button">Submit</button>
      </form>
    </FormWrapper>
  );
}
