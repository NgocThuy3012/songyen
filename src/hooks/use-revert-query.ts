import { queryStringToObject } from '@/funcs/';

export const useRevertQuery = (input: string) => {
  const queryParams = queryStringToObject(input);

  return {
    // ...queryParams?.input,
    page: Number(queryParams?.page) || 1,
    pages: Number(queryParams?.pages) || 0,
    size: Number(queryParams?.size) || 10,
    input: {
      ...queryParams,
    },
  };
};
