import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import { ROUTES } from './routes';

const ListPages = lazy(() => import('@/modules/page/pages/ListPages'));
const UpdatePage = lazy(() => import('@/modules/page/pages/UpdatePage'));

export const PageRoutes: RouteObject[] = [
  {
    path: ROUTES.PAGE.LIST,
    element: <ListPages />,
  },
  {
    path: ROUTES.PAGE.UPDATE,
    element: <UpdatePage />,
  },
];
