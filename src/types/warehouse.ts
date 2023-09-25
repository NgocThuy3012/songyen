import { IFileResponse } from "./files";
import { IBasePaginateParams } from "./params";

export interface ICreateWarehouseParams {
  id: string;

  code: string;

  acreage: string;

  address: string;

  date: Date;

  weight: number;

  plot: string;
}

export interface ICreateWarehouseForm {
  id: string;

  code: string;

  acreage: string;

  address: string;

  date: Date;

  weight: number;

  plot: string;
}

export interface IUpdateBlogParams extends ICreateWarehouseParams {}

export interface IUpdateBlogForm extends ICreateWarehouseParams {}

export interface IGetWarehouseResponse {
  id: string;
  page: { id: string; title: string };
  folder: { id: string; title: string };
  title: string;
  is_public: boolean;
}

export interface IGetWarehouseParams extends IBasePaginateParams {
  input: {
    q?: string;

    page_id?: string;

    folder_id?: string;
  };
}

export interface IGetDetailWarehouseResponse {
  id: string;

  code: string;

  acreage: string;

  address: string;

  date: Date;

  weight: number;

  plot: string;
}

export interface IUpdateWarehouseParams extends ICreateWarehouseParams {}
