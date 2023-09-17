export interface IBasePaginateParams {
  page: number;
  pages: number;
  size?: number;
  input?: {
    q?: string;
  } | null;
}
