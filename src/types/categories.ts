import { IBasePaginateParams } from './params';

export interface IGetCategoriesParams extends IBasePaginateParams {
  input: {
    q?: string;

    page_id?: string;
  };
}

export interface IGetListCategoriesParams {
  page: number;

  pages: number;

  size: number;
}

export interface IGetCategoriesResponse {
  id: string;

  name: string;
}

export interface IGetCategoryResponse {
  id: string;
  name: string;
  page_name: string;
  is_public: boolean;
}

export interface ICreateCategoryParams {
  name: string;
  page_id: string;
  is_public: boolean;
  pin_homepage: boolean;
}

export interface ICreateCategoryForm extends ICreateCategoryParams {}
export interface IUpdateCategoryParams extends ICreateCategoryParams {}

export interface IGetDetailCategoryResponse {
  id: string;

  name: string;

  page: {
    id: string;

    name: string;
  };

  is_public: boolean;

  pin_homepage: boolean;
}
