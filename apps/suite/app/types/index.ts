export interface PageProps {
  children: React.ReactNode;
  params: Params;
}

export type PageParams = {
  params: Params;
};

export type Params = {
  locale: 'es' | 'en';
};
