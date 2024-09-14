export type ActionResponse<T> = {
  success: boolean;
  error?: string;
  data?: T | T[];
  token?: string;
  message?: string;
};

export interface HookState<T> {
  result?: T | null;
  results?: T[] | [];
  isLoading: boolean;
  isError: any;
}
