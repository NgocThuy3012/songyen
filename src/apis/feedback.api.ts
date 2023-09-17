import { get, post, put, remove } from '@/axios/request';
import { formatParams, objectToQueryString } from '@/funcs/';
import {
  ICreateFeedbackParams,
  IGetDetailFeedbackResponse,
  IGetFeedbackParams,
  IGetFeedbackResponse,
  IUpdateFeedbackParams,
} from '@/types/feedback';
import { IApiResponse, IPaginateData } from '@/types/response';

import { FEEDBACKS } from './url';

export const getFeedbacks = (
  params: IGetFeedbackParams,
): Promise<IApiResponse<IPaginateData<IGetFeedbackResponse[]>, any>> => {
  const formated = formatParams(params);

  const qs = objectToQueryString(formated);

  return get(FEEDBACKS.GET_LIST + '?' + qs);
};

export const getDetailFeedback = (
  id: string,
): Promise<IApiResponse<IGetDetailFeedbackResponse>> => {
  return get(`${FEEDBACKS.GET_DETAIL}/${id}`);
};

export const createFeedback = (body: ICreateFeedbackParams) => {
  return post(FEEDBACKS.CREATE, body);
};

export const updateFeedback = (id: string, body: IUpdateFeedbackParams) => {
  return put(`${FEEDBACKS.UPDATE}/${id}`, body);
};

export const deleteFeedback = (id: string) => {
  return remove(`${FEEDBACKS.DELETE}/${id}`);
};
