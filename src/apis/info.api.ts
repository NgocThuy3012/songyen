import { get, post, put, remove } from "@/axios/request";
import { formatParams, objectToQueryString } from "@/funcs/";

import { IApiResponse, IPaginateData } from "@/types/response";

import { INFO } from "./url";
import {
  ICreateInfoParams,
  IGetDetailInfoResponse,
  IGetInfoParams,
  IGetInfoResponse,
  IUpdateInfoParams,
} from "@/types/info";

export const getInfo = (
  params: IGetInfoParams
): Promise<IApiResponse<IPaginateData<IGetInfoResponse[]>, any>> => {
  const formated = formatParams(params);

  const qs = objectToQueryString(formated);

  return get(INFO.GET_LIST + "?" + qs);
};

export const getDetailInfo = (
  id: string
): Promise<IApiResponse<IGetDetailInfoResponse>> => {
  return get(`${INFO.GET_DETAIL}/${id}`);
};

export const createInfo = (body: ICreateInfoParams) => {
  return post(INFO.CREATE, body);
};

export const updateInfo = (id: string, body: IUpdateInfoParams) => {
  return put(`${INFO.UPDATE}/${id}`, body);
};

export const deleteInfo = (id: string) => {
  return remove(`${INFO.DELETE}/${id}`);
};
