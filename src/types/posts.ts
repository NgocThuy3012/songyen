import { IFileResponse } from './files';
import { IBasePaginateParams } from './params';

export interface ICreatePostBaseParams {
  page_id: string;
  category_id: string;
}

export interface ICreateBlogParams extends ICreatePostBaseParams {
  title: string;
  description: string;
  content: string;
  is_public: boolean;
  pin_homepage: boolean;
  pin_about_us: boolean;
  image_id?: string;
  background_image_id?: string;
}

export interface ICreateBlogForm extends ICreatePostBaseParams {
  title: string;
  description: string;
  content: string;
  image?: IFileResponse;
  background?: IFileResponse;
  is_public: boolean;
  pin_homepage: boolean;
  pin_about_us: boolean;
}

export interface IUpdateBlogParams extends ICreateBlogParams {}

export interface IUpdateBlogForm extends ICreateBlogForm {}

export interface IGetPostsResponse {
  id: string;
  page: { id: string; title: string };
  folder: { id: string; title: string };
  title: string;
  is_public: boolean;
}

export interface IGetPostsParams extends IBasePaginateParams {
  input: {
    q?: string;

    page_id?: string;

    folder_id?: string;
  };
}

export interface IGetDetailBlogResponse {
  id: string;
  title: string;
  description: string;
  content: string;
  image: IFileResponse;
  background_image: IFileResponse;
  is_public: boolean;
  pin_homepage: boolean;
  pin_about_us: boolean;
  category: {
    id: string;
    name: string;
    page: {
      id: string;
      name: string;
    };
  };
}

export interface IUpdateBlogParams extends ICreateBlogParams {}
