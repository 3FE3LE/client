// lib/swr-config.ts
export const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const swrConfig = {
  fetcher,
  revalidateOnFocus: false,
};
