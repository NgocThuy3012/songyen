import { stringify } from 'qs';

import { get, post, put, remove } from '@/axios/request';
import { formatParams } from '@/funcs/';
import {
  ICreateBlogParams,
  IGetDetailBlogResponse,
  IGetPostsParams,
  IGetPostsResponse,
  IUpdateBlogParams,
} from '@/types/posts';
import { IApiResponse, IPaginateData } from '@/types/response';

import { POSTS } from './url';

export const getPosts = (
  params: IGetPostsParams,
): Promise<IApiResponse<IPaginateData<IGetPostsResponse[]>, any>> => {
  const formated = formatParams({
    ...params.input,
    pages: params.pages,
    page: params.page,
    size: params.size,
  });

  const qs = stringify(formated);

  return get(POSTS.GET_LIST + '?' + qs);
};

export const getDetailPost = (
  id: string,
): Promise<IApiResponse<IGetDetailBlogResponse>> => {
  return get(`${POSTS.GET_DETAIL_BLOG}/${id}`);
};

export const createBlog = (body: ICreateBlogParams) => {
  return post(POSTS.CREATE_BLOG, body);
};

export const updateBlog = (id: string, body: IUpdateBlogParams) => {
  return put(`${POSTS.UPDATE_BLOG}/${id}`, body);
};

export const deleteBlog = (id: string) => {
  return remove(`${POSTS.DELETE_BLOG}/${id}`);
};
