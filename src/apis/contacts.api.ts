import { get } from '@/axios/request';
import { formatParams, objectToQueryString } from '@/funcs/';
import { IGetContactsParams, IGetContactsResponse } from '@/types/contacts';
import { IApiResponse, IPaginateData } from '@/types/response';

import { CONTACTS } from './url';

export const getContacts = async (
  params: IGetContactsParams,
): Promise<IApiResponse<IPaginateData<IGetContactsResponse[]>, any>> => {
  const formated = formatParams(params);

  const qs = objectToQueryString(formated);

  return get(CONTACTS.GET_LIST + '?' + qs);
};

export const getExport = async (params: IGetContactsParams): Promise<Blob> => {
  const formated = formatParams(params);

  const qs = objectToQueryString(formated);

  return (await get(CONTACTS.GET_EXPORT + '?' + qs, { responseType: 'blob' }))
    .data;
};
