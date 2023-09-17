import { get } from '@/axios/request';
import { IGetPagesParams, IGetPagesResponse } from '@/types/pages';
import { IApiResponse } from '@/types/response';

import { PAGES } from './url';

export const getPages = (
  params?: IGetPagesParams,
): Promise<IApiResponse<IGetPagesResponse[]>> => {
  const paramsStr = new URLSearchParams(params as any);

  return get(PAGES.GET_LIST + '?' + paramsStr);
};
