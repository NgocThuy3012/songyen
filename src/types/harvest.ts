import { IBasePaginateParams } from "./params";

export interface IGetHarvestParams extends IBasePaginateParams {
  input: {
    q?: string;

    page_id?: string;
  };
}

export interface IGetListHarvestParams {
  page: number;

  pages: number;

  size: number;
}

export interface IGetHarvestResponse {
  id: string;

  code: string;
}

export interface IGetHarvestResponse {
  id: string;
  code: string;
  acreage: string;
  address: string;
  date: Date;
  weight: number;
  plot: string;
}

export interface ICreateHarvestParams {
  code: string;
  acreage: string;
  address: string;
  date: Date;
  weight: number;
  plot: string;
}

export interface ICreateHarvestForm extends ICreateHarvestParams {}
export interface IUpdateHarvestParams extends ICreateHarvestParams {}

export interface IGetDetailHarvestResponse {
  id: string;

  code: string;

  acreage: string;

  address: string;

  date: Date;

  weight: number;

  plot: string;
}
