import { post } from '@/axios/request';
import { RawHttpRequestConfig } from '@/axios/types';
import { formatVietnamese } from '@/funcs/';
import { IFileResponse } from '@/types/files';
import { IApiResponse } from '@/types/response';

import { FILES } from './url';

export const uploadFile = (
  file: File,
  config?: RawHttpRequestConfig,
): Promise<IApiResponse<IFileResponse>> => {
  const { name, type } = file;

  const newFile = new File([file], formatVietnamese(name), { type });

  const payload = new FormData();

  payload.append('file', newFile);

  return post(FILES.UPLOAD, payload, config);
};
