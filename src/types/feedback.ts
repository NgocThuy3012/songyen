import { IFileResponse } from './files';
import { IBasePaginateParams } from './params';

export interface IGetFeedbackParams extends IBasePaginateParams {
  input?: {
    q?: string;
  };
}

export interface IGetFeedbackResponse {
  id: string;

  name: string;

  position: string;

  description: string;

  is_public: boolean;
}

export interface IGetDetailFeedbackResponse {
  id: string;

  name: string;

  position: string;

  image: IFileResponse;

  description: string;

  is_public: boolean;
}

export interface ICreateFeedbackParams {
  image_id?: string;

  name: string;

  position: string;

  description: string;

  is_public: boolean;
}

export interface ICreateFeedbackForm extends ICreateFeedbackParams {
  image?: IFileResponse;
}

export interface IUpdateFeedbackParams extends ICreateFeedbackParams {}
