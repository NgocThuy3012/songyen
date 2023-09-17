import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import { ROUTES } from './routes';

const ListCategoriesPage = lazy(
  () => import('@/modules/category/pages/ListCategoryPage'),
);
const CreateCategoryPage = lazy(
  () => import('@/modules/category/pages/CreateCategoryPage'),
);
const UpdateCategoryPage = lazy(
  () => import('@/modules/category/pages/UpdateCategoryPage'),
);

export const CategoryRoutes: RouteObject[] = [
  {
    path: ROUTES.CATEGORY.LIST,
    element: <ListCategoriesPage />,
  },
  {
    path: ROUTES.CATEGORY.CREATE,
    element: <CreateCategoryPage />,
  },
  {
    path: ROUTES.CATEGORY.UPDATE,
    element: <UpdateCategoryPage />,
  },
];
