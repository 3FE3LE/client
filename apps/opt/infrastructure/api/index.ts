export const apiRequest = async (url: string, method: string, body?: any) => {
  const response = await fetch(url, {
    method,
    body: body ? JSON.stringify(body) : undefined,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Error processing request');
  }

  return response.json();
};
