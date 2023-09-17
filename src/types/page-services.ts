import { IBasePaginateParams } from './params';

export interface IGetPageServicesParams extends IBasePaginateParams {
  input?: {
    q?: string;
  };
}

export interface IGetPageServicesResponse {
  id: string;

  name: string;
}
