export const AUTH = {
  LOGIN: '/cms/auth/login',
  GET_PROFILE: '/cms/auth/get-profile',
  LOGOUT: '/cms/auth/logout',
  REFETCH_TOKEN: '/cms/auth/renew-token',
};

export const POSTS = {
  CREATE_BLOG: '/cms/blogs',
  GET_LIST: '/cms/blogs',
  GET_DETAIL_BLOG: '/cms/blogs', // :id
  UPDATE_BLOG: '/cms/blogs', // :id
  DELETE_BLOG: '/cms/blogs', // :id
};

export const FILES = {
  UPLOAD: '/cms/files/upload',
};

export const MEMBERS = {
  GET_LIST: '/cms/employees',
  CREATE: '/cms/employees',
  GET_DETAIL: '/cms/employees', // :id
  UPDATE: '/cms/employees', // :id
  DELETE: '/cms/employees', // :id
};

export const CUSTOMERS = {
  GET_LIST: '/cms/partners',
  CREATE: '/cms/partners',
  GET_DETAIL: '/cms/partners', // :id
  UPDATE: '/cms/partners', // :id
  DELETE: '/cms/partners', // :id
};

export const PAGE_SERVICES = {
  GET_LIST: '/cms/page-services',
};

export const PAGES = {
  GET_LIST: '/cms/pages',
  GET_DETAIL: '/cms/pages', // :id
  UPDATE: '/cms/pages', // :id
};

export const CATEGORIES = {
  GET_LIST: '/cms/categories',
  GET_DETAIL: '/cms/categories', // :id
  CREATE: '/cms/categories', // :id
  UPDATE: '/cms/categories', // :id
  DELETE: '/cms/categories', // :id
};

export const CONTACTS = {
  GET_LIST: '/contacts',
  GET_EXPORT: '/contacts/export',
};

export const PERMISSIONS = {
  GET_LIST: '/permissions',
};

export const FEEDBACKS = {
  GET_LIST: '/cms/feedbacks',
  CREATE: '/cms/feedbacks',
  GET_DETAIL: '/cms/feedbacks', // :id
  UPDATE: '/cms/feedbacks', // :id
  DELETE: '/cms/feedbacks', // :id
};

export const CONFIGS = {
  GET_DETAIL: '/cms/configs',
  UPDATE_INFORMATION: '/cms/configs/information',
  UPDATE_FOOTER: '/cms/configs/footer',
};

export const USERS = {
  GET_LIST: '/cms/users',
  CREATE: '/cms/users',
  GET_DETAIL: '/cms/users', // :id
  UPDATE: '/cms/users', // :id
  DELETE: '/cms/users', // :id
};
