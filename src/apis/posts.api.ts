import { stringify } from "qs";

import { get, post, put, remove } from "@/axios/request";
import { formatParams } from "@/funcs/";

import { IApiResponse, IPaginateData } from "@/types/response";

import { POSTS } from "./url";
import {
  ICreateWarehouseParams,
  IGetDetailWarehouseResponse,
  IGetWarehouseParams,
  IGetWarehouseResponse,
  IUpdateWarehouseParams,
} from "@/types/warehouse";

export const getPosts = (
  params: IGetWarehouseParams
): Promise<IApiResponse<IPaginateData<IGetWarehouseResponse[]>, any>> => {
  const formated = formatParams({
    ...params.input,
    pages: params.pages,
    page: params.page,
    size: params.size,
  });

  const qs = stringify(formated);

  return get(POSTS.GET_LIST + "?" + qs);
};

export const getDetailPost = (
  id: string
): Promise<IApiResponse<IGetDetailWarehouseResponse>> => {
  return get(`${POSTS.GET_DETAIL_BLOG}/${id}`);
};

export const createBlog = (body: ICreateWarehouseParams) => {
  return post(POSTS.CREATE_BLOG, body);
};

export const updateBlog = (id: string, body: IUpdateWarehouseParams) => {
  return put(`${POSTS.UPDATE_BLOG}/${id}`, body);
};

export const deleteBlog = (id: string) => {
  return remove(`${POSTS.DELETE_BLOG}/${id}`);
};
