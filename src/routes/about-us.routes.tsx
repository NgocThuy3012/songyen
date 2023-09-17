import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import CreateFeedbackPage from '@/modules/feedback/pages/CreateFeedbackPage';
import ListFeedbackPage from '@/modules/feedback/pages/ListFeedbackPage';
import UpdateFeedbackPage from '@/modules/feedback/pages/UpdateFeedbackPage';

import { ROUTES } from './routes';

const CreateMemberPage = lazy(
  () => import('@/modules/about-us/pages/CreateMemberPage'),
);

const ListMembersPage = lazy(
  () => import('@/modules/about-us/pages/ListMembersPage'),
);

const UpdateMemberPage = lazy(
  () => import('@/modules/about-us/pages/UpdateMemberPage'),
);

export const AboutUsRoutes: RouteObject[] = [
  {
    path: ROUTES.ABOUT_US.MEMBERS.LIST,
    element: <ListMembersPage />,
  },
  {
    path: ROUTES.ABOUT_US.MEMBERS.CREATE,
    element: <CreateMemberPage />,
  },
  {
    path: ROUTES.ABOUT_US.MEMBERS.UPDATE,
    element: <UpdateMemberPage />,
  },
  {
    path: ROUTES.ABOUT_US.FEEDBACKS.LIST,
    element: <ListFeedbackPage />,
  },
  {
    path: ROUTES.ABOUT_US.FEEDBACKS.CREATE,
    element: <CreateFeedbackPage />,
  },
  {
    path: ROUTES.ABOUT_US.FEEDBACKS.UPDATE,
    element: <UpdateFeedbackPage />,
  },
];
