import { get, put } from '@/axios/request';
import { IGetPageResponse, IUpdatePageParams } from '@/types/page';
import { IApiResponse } from '@/types/response';

import { PAGES } from './url';

export const getPages = (): Promise<IApiResponse<IGetPageResponse[]>> => {
  return get(PAGES.GET_LIST);
};

export const getPageById = async (
  id: string,
): Promise<IApiResponse<IGetPageResponse, any>> => {
  const result = await get(`${PAGES.GET_DETAIL}/${id}`);

  return result;
};

export const updatePage = (id: string, body: IUpdatePageParams) => {
  return put(`${PAGES.UPDATE}/${id}`, body);
};
