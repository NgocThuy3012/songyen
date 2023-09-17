import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import { ROUTES } from './routes';

const InformationPage = lazy(
  () => import('@/modules/config/pages/InformationPage'),
);

const FooterPage = lazy(() => import('@/modules/config/pages/FooterPage'));

export const ConfigRoutes: RouteObject[] = [
  {
    path: ROUTES.CONFIG.INFORMATION,
    element: <InformationPage />,
  },
  {
    path: ROUTES.CONFIG.FOOTER,
    element: <FooterPage />,
  },
];
