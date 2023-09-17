import { Navigate } from 'react-router-dom';
import axios from 'axios';

import { logout, profile } from '@/apis/auth.api';
import { AUTH } from '@/apis/url';
import { store } from '@/redux/';
import { setProfile, setToken } from '@/slices/auth/auth.slice';

import { formatParams, objectToQueryString } from '../funcs';

import { post } from './request';

const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: import.meta.env.VITE_API_TIMEOUT,
  paramsSerializer: {
    serialize: (params) => objectToQueryString(params),
  },
});

let isRefetching = false;

const _queue: any[] = [];

const handleRefetch = async (response: any) => {
  if (!isRefetching) {
    isRefetching = true;

    try {
      const res = await refresh();

      const { data } = res;

      isRefetching = false;

      if (!data) {
        tryLogout();
      }

      const { refresh_token, access_token } = data.data;

      store.dispatch(setToken({ refresh_token, access_token }));

      setAuthToken(access_token);

      _queue.forEach(({ resolve }) => resolve());

      return apiInstance({
        ...response.config,
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
    } catch (error: any) {
      isRefetching = false;

      _queue.forEach(({ reject }) => reject(error));

      return Promise.reject(error);
    }
  } else {
    // save to use later when refetching done
    return new Promise((resolve, reject) => _queue.push({ resolve, reject }))
      .then(() => Promise.reject('false'))
      .catch((error) => Promise.reject(error));
  }
};

apiInstance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

apiInstance.interceptors.response.use(
  (response) => {
    if (response?.status === 205) {
      if (response?.request.responseURL.includes(AUTH.REFETCH_TOKEN)) {
        return response;
      }

      return handleRefetch(response);
    }

    return response;
  },
  (error) => {
    if (error?.constructor?.name === 'Cancel') {
      return error?.message ?? 'Cancel';
    }

    if (error?.response?.status === 401) {
      store.dispatch(setProfile(null));
      store.dispatch(setToken(null));

      return Promise.reject(error);
    }

    return Promise.reject(error);
  },
);

apiInstance.interceptors.request.use((config) => {
  if (config.data instanceof FormData) {
    return config;
  }

  let dataPayload = config?.data;

  if (typeof dataPayload === 'string') {
    dataPayload = JSON.parse(dataPayload);
  }

  if (dataPayload) {
    const params = formatParams(dataPayload);

    return { ...config, data: params };
  }

  return config;
});

export const setAuthToken = (token: string) => {
  if (token) apiInstance.defaults.headers['Authorization'] = `Bearer ${token}`;
  else delete apiInstance.defaults.headers.common['Authorization'];
};

export const getProfile = async (token: string) => {
  try {
    setAuthToken(token);

    const res = await profile();

    store.dispatch(setProfile({ ...res.data }));

    return res;
  } catch (error: any) {
    tryLogout();
  }
};

const refresh = () => {
  const { refresh_token } = store.getState().auth;

  return post(AUTH.REFETCH_TOKEN, { refresh_token });
};

export const tryLogout = async () => {
  try {
    await logout();
  } catch (error: any) {
    throw error;
  } finally {
    store.dispatch(setProfile(null));
    store.dispatch(setToken(null));

    return <Navigate to="/login" replace={true} />;
  }
};

export default apiInstance;
