import { IBasePaginateParams } from "./params";

export interface IGetInfoParams extends IBasePaginateParams {
  input?: {
    q?: string;
  };
}

export interface IGetInfoResponse {
  id: string;

  code: string;

  address: string;

  acreage: number;
}

export interface IGetDetailInfoResponse {
  id: string;

  code: string;

  address: string;

  acreage: number;
}

export interface ICreateInfoParams {
  code: string;

  address: string;

  acreage: number;
}

export interface ICreateInfoForm extends ICreateInfoParams {}

export interface IUpdateInfoParams extends ICreateInfoParams {}
