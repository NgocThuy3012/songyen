import { stringify } from 'qs';

import { get, post, put, remove } from '@/axios/request';
import { formatParams } from '@/funcs/';
import {
  ICreateCategoryParams,
  IGetCategoriesParams,
  IGetCategoriesResponse,
  IGetCategoryResponse,
  IGetDetailCategoryResponse,
  IGetListCategoriesParams,
  IUpdateCategoryParams,
} from '@/types/categories';
import { IApiResponse, IPaginateData } from '@/types/response';

import { CATEGORIES } from './url';

export const getCategories = (
  params: IGetCategoriesParams,
): Promise<IApiResponse<IPaginateData<IGetCategoriesResponse[]>, any>> => {
  const formated = formatParams({
    ...params.input,
    pages: params.pages,
    page: params.page,
    size: params.size,
  });

  const qs = stringify(formated);

  return get(CATEGORIES.GET_LIST + '?' + qs);
};

export const getListCategories = (
  params: IGetListCategoriesParams,
): Promise<IApiResponse<IPaginateData<IGetCategoryResponse[]>, any>> => {
  const paramsStr = new URLSearchParams(params as any);

  return get(CATEGORIES.GET_LIST + '?' + paramsStr);
};

export const deleteCategory = (id: string) => {
  return remove(`${CATEGORIES.DELETE}/${id}`);
};

export const createCategory = (body: ICreateCategoryParams) => {
  return post(CATEGORIES.CREATE, body);
};

export const updateCAtegory = (id: string, body: IUpdateCategoryParams) => {
  return put(`${CATEGORIES.UPDATE}/${id}`, body);
};

export const getDetailCategory = (
  id: string,
): Promise<IApiResponse<IGetDetailCategoryResponse>> => {
  return get(`${CATEGORIES.GET_DETAIL}/${id}`);
};
