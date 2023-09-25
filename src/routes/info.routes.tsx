import { lazy } from "react";
import { RouteObject } from "react-router-dom";

import { ROUTES } from "./routes";

const ListInfoPage = lazy(() => import("@/modules/info/pages/ListInfoPage"));

const CreateInfoPage = lazy(
  () => import("@/modules/info/pages/CreateInfoPage")
);

const UpdateInfoPage = lazy(
  () => import("@/modules/info/pages/UpdateInfoPage")
);

export const InfoRoutes: RouteObject[] = [
  {
    path: ROUTES.INFO.LIST,
    element: <ListInfoPage />,
  },
  {
    path: ROUTES.INFO.CREATE,
    element: <CreateInfoPage />,
  },
  {
    path: ROUTES.INFO.UPDATE,
    element: <UpdateInfoPage />,
  },
];
