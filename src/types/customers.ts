import { IFileResponse } from './files';
import { IBasePaginateParams } from './params';

export interface IGetCustomersParams extends IBasePaginateParams {
  input?: {
    q?: string;
  };
}

export interface IGetCustomersResponse {
  id: string;

  name: string;

  url: string;

  is_public: boolean;
}

export interface IGetDetailCustomerResponse {
  id: string;

  name: string;

  image: IFileResponse;

  url: string;

  is_public: boolean;
}

export interface ICreateCustomerParams {
  image_id?: string;

  name: string;

  url: string;

  is_public: boolean;
}

export interface ICreateCustomerForm extends ICreateCustomerParams {
  image?: IFileResponse;
}

export interface IUpdateCustomerParams extends ICreateCustomerParams {}
