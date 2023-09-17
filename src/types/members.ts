import { IFileResponse } from './files';
import { IBasePaginateParams } from './params';

export interface IGetMembersParams extends IBasePaginateParams {
  input?: {
    q?: string;
  };
}

export interface IGetMembersResponse {
  id: string;

  name: string;

  position: string;

  description: string;

  active: boolean;
}

export interface IGetDetailMemberResponse {
  id: string;

  name: string;

  position: string;

  description: string;

  is_public: boolean;

  image: IFileResponse;
}

export interface ICreateMemberParams {
  image_id?: string;

  name: string;

  description: string;

  position: string;

  is_public: boolean;
}

export interface IUpdateMemberParams extends ICreateMemberParams {}

export interface ICreateMemberForm extends ICreateMemberParams {
  image?: IFileResponse;
}

export interface IUpdateMemberForm extends ICreateMemberForm {}
