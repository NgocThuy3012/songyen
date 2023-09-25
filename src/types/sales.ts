export interface IGetSalesParams {
  input?: {
    q?: string;
  };
}

export interface IGetSalesResponse {
  id: string;

  code: string;

  acreage: string;

  address: string;

  date: Date;

  weight: number;

  plot: string;
}

export interface ICreateSaleParams {
  id: string;

  code: string;

  acreage: string;

  address: string;

  date: Date;

  weight: number;

  plot: string;
}

export interface ICreateSaleForm extends ICreateSaleParams {}

export interface IUpdateSaleParams extends ICreateSaleParams {}

export interface IGetDetailSaleResponse {
  id: string;

  code: string;

  acreage: string;

  address: string;

  date: Date;

  weight: number;

  plot: string;
}

export interface IEmptyResponse {
  data: { data: { data: null; page: 1; pages: 0 } };
}
