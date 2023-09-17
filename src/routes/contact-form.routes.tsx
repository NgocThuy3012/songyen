import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import { ROUTES } from './routes';

const ListContactsPage = lazy(
  () => import('@/modules/contact/pages/ListContactPage'),
);

export const ContactRoutes: RouteObject[] = [
  {
    path: ROUTES.CONTACT_FORM.LIST,
    element: <ListContactsPage />,
  },
];
