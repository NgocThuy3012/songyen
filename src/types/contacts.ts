import { IBasePaginateParams } from './params';

export interface IGetContactsParams extends IBasePaginateParams {
  input?: {
    q?: string;
  };
}

export interface IGetContactsResponse {
  id: string;

  blog_names: string[];

  fullname: string;

  email: string;

  phone: string;

  message: string;

  created_date: Date;
}
