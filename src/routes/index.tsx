import { Outlet, RouteObject } from 'react-router-dom';

import { CExceptionError, CNotFoundError } from '@/errors/';
import { asyncLayout } from '@/funcs/';
import { CLoginLayout } from '@/layouts/CLoginLayout';

import { AboutUsRoutes } from './about-us.routes';
import { CategoryRoutes } from './category.routes';
import { ConfigRoutes } from './config.routes';
import { ContactRoutes } from './contact-form.routes';
import { CustomerRoutes } from './customers.routes';
import { PageRoutes } from './page.routes';
import { PostRoutes } from './posts.routes';
import { UsersRoutes } from './users.routes';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Outlet />,
    errorElement: <CExceptionError />,
    children: [
      {
        path: '/',
        element: asyncLayout(() => import('@/layouts/CMainLayout')),
        children: [
          {
            path: '/dashboard',
            element: <div>Dashboard</div>,
          },
          ...PageRoutes,
          ...CategoryRoutes,
          ...PostRoutes,
          ...AboutUsRoutes,
          ...CustomerRoutes,
          ...ContactRoutes,
          ...ConfigRoutes,
          ...UsersRoutes,
        ],
      },
      {
        path: '/login',
        element: <CLoginLayout />,
      },
    ],
  },
  {
    path: '*',
    element: <CNotFoundError />,
  },
];

export default routes;
