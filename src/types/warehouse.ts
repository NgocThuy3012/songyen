import { IFileResponse } from "./files";
import { IBasePaginateParams } from "./params";

export interface ICreateWarehouseParams {
  id: string;

  code: string;

  acreage: string;

  address: string;

  date: string;

  weight: number;

  plot: string;
}

export interface ICreateWarehouseForm {
  code: string;

  acreage: number;

  address: string;

  date: string;

  weight: number;

  plot: string;

  inputDate: string;

  importLot: string;

  warehousingPerson: string;

  humidity: string;
}

export interface IUpdateWarehouseParams extends ICreateWarehouseParams {}

export interface IUpdateWarehouseForm extends ICreateWarehouseParams {}

export interface IGetWarehouseResponse {
  id: string;

  code: string;

  acreage: number;

  address: string;

  date: string;

  weight: number;

  plot: string;
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

  date: string;

  weight: number;

  plot: string;
}

export interface IUpdateWarehouseParams extends ICreateWarehouseParams {}
