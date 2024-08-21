import { useState } from 'react';
import { toast } from 'react-hot-toast';

import { loginCase } from '@sss/core/auth/useCases';
import { useRouter } from '@sss/navigations';

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const login = async (data: { email: string; password: string }) => {
    setIsLoading(true);
    const result = await loginCase(data);

    if (!!result?.error) {
      toast.remove();
      toast.error('Email or password is wrong, try again');
      setError('Login failed');
    } else {
      toast.remove();
      toast.success('Login successful');
      setError(null);
    }
    router.refresh();
    setIsLoading(false);
  };

  return { login, isLoading, error };
};
