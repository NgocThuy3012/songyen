import { get, post, put, remove } from "@/axios/request";
import { formatParams, objectToQueryString } from "@/funcs/";
import {
  ICreateEmployeeParams,
  IEmptyResponse,
  IGetDetailEmployeeResponse,
  IGetEmployeesParams,
  IGetEmployeesResponse,
  IUpdateEmployeeParams,
} from "@/types/sales";
import { IApiResponse, IPaginateData } from "@/types/response";

import { USERS } from "./url";

// export const getEmployees = (
//   params: IGetEmployeesParams,
// ): Promise<IApiResponse<IPaginateData<IGetEmployeesResponse[]>, any>> => {
//   const formated = formatParams(params);

//   const qs = objectToQueryString(formated);
//   console.log(get(USERS.GET_LIST + '?' + qs), 'aaaa');

//   return get(USERS.GET_LIST + '?' + qs);
// };

export const getEmployees = async (): Promise<
  IApiResponse<IPaginateData<IGetEmployeesResponse[]>, any> | IEmptyResponse
> => {
  try {
    const response = await get(USERS.GET_LIST);

    return response;
  } catch (error) {
    console.error(error);
    return { data: { data: { data: null, page: 1, pages: 0 } } };
  }
};

export const getDetailEmployee = (
  id: string
): Promise<IApiResponse<IGetDetailEmployeeResponse>> => {
  return get(`${USERS.GET_DETAIL}/${id}`);
};

export const deleteEmployee = (id: string) => {
  return remove(`${USERS.DELETE}/${id}`);
};

export const createEmployee = (body: ICreateEmployeeParams) => {
  return post(USERS.CREATE, body);
};

export const updateEmployee = (id: string, body: IUpdateEmployeeParams) => {
  return put(`${USERS.UPDATE}/${id}`, body);
};
