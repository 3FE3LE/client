const isClient = typeof window !== 'undefined';

export const apiRequest = async (url: string, method: string, body?: any) => {
  const token = isClient ? document.cookie.split('auth_token=')[1] || '' : '';
  const response = await fetch(url, {
    method,
    body: body ? JSON.stringify(body) : undefined,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
    },
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Error processing request');
  }

  return response.json();
};
