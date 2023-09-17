import axios from 'axios';

import { IApiResponse } from '@/types/response';

export function isSuccess<T>(
  response: IApiResponse<T>,
): response is NonNullable<IApiResponse<T>> {
  return response.status?.toString()[0] === '2' && !!response.data.data;
}

export const isCancel = axios.isCancel;
