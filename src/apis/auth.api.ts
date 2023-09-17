import { get, post, put } from '@/axios/request';
import { ILoginParams, ILoginResponse, IProfileResponse } from '@/types/auth';
import { IApiResponse } from '@/types/response';

import { AUTH } from './url';

export const login = (
  body: ILoginParams,
): Promise<IApiResponse<ILoginResponse, any>> => {
  return post(AUTH.LOGIN, body);
};

export const profile = (): Promise<IApiResponse<IProfileResponse, any>> => {
  return get(AUTH.GET_PROFILE);
};

export const logout = async () => {
  return put(AUTH.LOGOUT);
};
