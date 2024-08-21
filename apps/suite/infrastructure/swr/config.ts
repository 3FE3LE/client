// lib/swr-config.ts

export const fetcher = async (url: string, options: RequestInit = {}) => {
  const token = localStorage.getItem('auth_token');

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: token ? `Bearer ${token}` : '',
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Error fetching data');
  }

  return response.json();
};

export const swrConfig = {
  fetcher,
  revalidateOnFocus: false,
};
