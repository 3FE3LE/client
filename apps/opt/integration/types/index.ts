export type ActionResponse = {
  success: boolean;
  error?: string;
  data?: any;
  token?: string;
  message?: string;
};

export interface HookState<T> {
  result?: T | null;
  results?: T[] | [];
  isLoading: boolean;
  isError: any;
}
