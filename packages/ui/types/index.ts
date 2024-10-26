export interface PageProps {
  children: React.ReactNode;
  params: Params;
}

export type PageParams = {
  params: Params;
};

export type Params = {
  locale: 'es' | 'en';
  id?: string;
};

export type OptionType = {
  id: number;
  value: string;
  label: string;
};

export enum ActionType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
}
