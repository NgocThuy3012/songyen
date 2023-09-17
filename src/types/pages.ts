import { IBasePaginateParams } from './params';

export interface IGetPagesParams extends IBasePaginateParams {
  input?: {
    q?: string;
  };
}

export interface IGetPagesResponse {
  id: string;

  name: string;
}
