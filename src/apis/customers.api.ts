import { get, post, put, remove } from '@/axios/request';
import { formatParams, objectToQueryString } from '@/funcs/';
import {
  ICreateCustomerParams,
  IGetCustomersParams,
  IGetCustomersResponse,
  IGetDetailCustomerResponse,
  IUpdateCustomerParams,
} from '@/types/customers';
import { IApiResponse, IPaginateData } from '@/types/response';

import { CUSTOMERS } from './url';

export const getCustomers = (
  params: IGetCustomersParams,
): Promise<IApiResponse<IPaginateData<IGetCustomersResponse[]>, any>> => {
  const formated = formatParams(params);

  const qs = objectToQueryString(formated);

  return get(CUSTOMERS.GET_LIST + '?' + qs);
};

export const getDetailCustomer = (
  id: string,
): Promise<IApiResponse<IGetDetailCustomerResponse>> => {
  return get(`${CUSTOMERS.GET_DETAIL}/${id}`);
};

export const createCustomer = (body: ICreateCustomerParams) => {
  return post(CUSTOMERS.CREATE, body);
};

export const updateCustomer = (id: string, body: IUpdateCustomerParams) => {
  return put(`${CUSTOMERS.UPDATE}/${id}`, body);
};

export const deleteCustomer = (id: string) => {
  return remove(`${CUSTOMERS.DELETE}/${id}`);
};
