import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import { ROUTES } from './routes';

const ListEmployeePage = lazy(
  () => import('@/modules/employees/pages/ListEmployeePage'),
);

const CreateEmployeePage = lazy(
  () => import('@/modules/employees/pages/CreateEmployeePage'),
);

const UpdateEmployeePage = lazy(
  () => import('@/modules/employees/pages/UpdateEmloyeePage'),
);

export const UsersRoutes: RouteObject[] = [
  {
    path: ROUTES.USERS.LIST,
    element: <ListEmployeePage />,
  },
  {
    path: ROUTES.USERS.CREATE,
    element: <CreateEmployeePage />,
  },
  {
    path: ROUTES.USERS.UPDATE,
    element: <UpdateEmployeePage />,
  },
];
