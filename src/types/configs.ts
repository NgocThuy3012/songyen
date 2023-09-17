export enum FOOTER_TYPES {
  FINANCE_BUSINESS = 'finance_business',

  USEFUL_LINKS = 'useful_links',

  ADDITIONAL_PAGES = 'additional_pages',
}

export interface IGetInformationResponse {
  phone1: string;

  phone2: string;

  email1: string;

  email2: string;

  location: string;

  facebook: string;

  twitter: string;

  linkedin: string;
}

export interface IGetFootersResponse {
  name: string;

  footer_type: FOOTER_TYPES;

  value: string;
}

export interface IGetConfigResponse {
  footer: IGetFootersResponse[];

  information: IGetInformationResponse;
}

export interface IUpdateInformationParams extends IGetInformationResponse {}

export interface IUpdateInformationForm extends IUpdateInformationParams {}

export interface IUpdateFooterParams {
  footer: IGetFootersResponse[];
}

export interface IUpdateFooterForm {
  finance_business: IGetFootersResponse;

  useful_links: IGetFootersResponse[];

  additional_pages: IGetFootersResponse[];
}
