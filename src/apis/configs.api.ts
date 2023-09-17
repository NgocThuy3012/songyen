import { get, put } from '@/axios/request';
import {
  IGetConfigResponse,
  IUpdateFooterParams,
  IUpdateInformationParams,
} from '@/types/configs';
import { IApiResponse } from '@/types/response';

import { CONFIGS } from './url';

export const getConfig = (): Promise<IApiResponse<IGetConfigResponse>> => {
  return get(CONFIGS.GET_DETAIL);
};

export const updateInformation = (body: IUpdateInformationParams) => {
  return put(CONFIGS.UPDATE_INFORMATION, body);
};

export const updateFooter = (body: IUpdateFooterParams) => {
  return put(CONFIGS.UPDATE_FOOTER, body);
};
