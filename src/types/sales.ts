export interface IGetSalesParams {
  input?: {
    q?: string;
  };
}

export interface IGetSalesResponse {
  id: string;

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

export interface ICreateSaleParams {
  id: string;

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

  dateSale: string;

  saleLot: string;

  saleWeight: number;

  unit: string;

  salePerson: string;

  saleHumidity: string;
}

export interface ICreateSaleForm extends ICreateSaleParams {}

export interface IUpdateSaleParams extends ICreateSaleParams {}

export interface IGetDetailSaleResponse {
  id: string;

  code: string;

  acreage: number;

  address: string;

  date: string;

  weight: number;

  plot: string;
}

export interface IEmptyResponse {
  data: { data: { data: null; page: 1; pages: 0 } };
}
