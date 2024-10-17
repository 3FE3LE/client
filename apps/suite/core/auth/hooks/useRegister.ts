import { useState } from 'react';
import { toast } from 'react-hot-toast';

import { loginCase, registerCase } from '@sss/core/auth/useCases';
import { useRouter } from '@sss/navigations';

export const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const userRegister = async (data: {
    email: string;
    password: string;
    name: string;
  }) => {
    setIsLoading(true);
    try {
      await registerCase(data);

      toast.remove();
      toast.success('Login successful');
      await loginCase({ email: data.email, password: data.password });
      router.refresh();
      setError(null);
    } catch (error) {
      toast.remove();
      if (error instanceof Error) {
        toast.error(error.message);
      }
      setError('Register failed');
    } finally {
      setIsLoading(false);
    }
  };

  return { userRegister, isLoading, error };
};
