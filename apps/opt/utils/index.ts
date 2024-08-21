export const getAuthToken = (): string | null => {
  const match = document.cookie.match(new RegExp('(^| )auth_token=([^;]+)'));
  return match ? match[2] : null;
};
