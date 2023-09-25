import { stringify } from "qs";

import { get, post, put, remove } from "@/axios/request";
import { formatParams } from "@/funcs/";

import { IApiResponse, IPaginateData } from "@/types/response";

import { CATEGORIES } from "./url";
import {
  ICreateHarvestParams,
  IGetDetailHarvestResponse,
  IGetHarvestParams,
  IGetHarvestResponse,
  IGetListHarvestParams,
  IUpdateHarvestParams,
} from "@/types/harvest";

export const getHarvest = (
  params: IGetHarvestParams
): Promise<IApiResponse<IPaginateData<IGetHarvestResponse[]>, any>> => {
  const formated = formatParams({
    ...params.input,
    pages: params.pages,
    page: params.page,
    size: params.size,
  });

  const qs = stringify(formated);

  return get(CATEGORIES.GET_LIST + "?" + qs);
};

export const getListHarvest = (
  params: IGetListHarvestParams
): Promise<IApiResponse<IPaginateData<IGetHarvestResponse[]>, any>> => {
  const paramsStr = new URLSearchParams(params as any);

  return get(CATEGORIES.GET_LIST + "?" + paramsStr);
};

export const deleteHarvest = (id: string) => {
  return remove(`${CATEGORIES.DELETE}/${id}`);
};

export const createHarvest = (body: ICreateHarvestParams) => {
  return post(CATEGORIES.CREATE, body);
};

export const updateHarvest = (id: string, body: IUpdateHarvestParams) => {
  return put(`${CATEGORIES.UPDATE}/${id}`, body);
};

export const getDetailHarvest = (
  id: string
): Promise<IApiResponse<IGetDetailHarvestResponse>> => {
  return get(`${CATEGORIES.GET_DETAIL}/${id}`);
};
