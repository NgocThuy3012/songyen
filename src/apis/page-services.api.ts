import { get } from '@/axios/request';
import { IGetPageServicesResponse } from '@/types/page-services';
import { IApiResponse } from '@/types/response';

import { PAGE_SERVICES } from './url';

export const getPageServices = (): Promise<
  IApiResponse<IGetPageServicesResponse[]>
> => {
  return get(PAGE_SERVICES.GET_LIST);
};
