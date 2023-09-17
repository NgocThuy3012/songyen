import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import { ROUTES } from './routes';

const ListCustomersPage = lazy(
  () => import('@/modules/customer/pages/ListCustomersPage'),
);

const CreateCustomerPage = lazy(
  () => import('@/modules/customer/pages/CreateCustomerPage'),
);

const UpdateCustomerPage = lazy(
  () => import('@/modules/customer/pages/UpdateCustomerPage'),
);

export const CustomerRoutes: RouteObject[] = [
  {
    path: ROUTES.CUSTOMERS.LIST,
    element: <ListCustomersPage />,
  },
  {
    path: ROUTES.CUSTOMERS.CREATE,
    element: <CreateCustomerPage />,
  },
  {
    path: ROUTES.CUSTOMERS.UPDATE,
    element: <UpdateCustomerPage />,
  },
];