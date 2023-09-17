import { get, post, put, remove } from '@/axios/request';
import { formatParams, objectToQueryString } from '@/funcs/';
import {
  ICreateMemberParams,
  IGetDetailMemberResponse,
  IGetMembersParams,
  IGetMembersResponse,
  IUpdateMemberParams,
} from '@/types/members';
import { IApiResponse, IPaginateData } from '@/types/response';

import { MEMBERS } from './url';

export const getMembers = (
  params: IGetMembersParams,
): Promise<IApiResponse<IPaginateData<IGetMembersResponse[]>, any>> => {
  const formated = formatParams(params);

  const qs = objectToQueryString(formated);

  return get(MEMBERS.GET_LIST + '?' + qs);
};

export const getDetailMember = (
  id: string,
): Promise<IApiResponse<IGetDetailMemberResponse>> => {
  return get(`${MEMBERS.GET_DETAIL}/${id}`);
};

export const createMember = (body: ICreateMemberParams) => {
  return post(MEMBERS.CREATE, body);
};

export const updateMember = (id: string, body: IUpdateMemberParams) => {
  return put(`${MEMBERS.UPDATE}/${id}`, body);
};

export const deleteMember = (id: string) => {
  return remove(`${MEMBERS.DELETE}/${id}`);
};
