import { lazy } from "react";
import { RouteObject } from "react-router-dom";

import { ROUTES } from "./routes";

const ListSalesPage = lazy(() => import("@/modules/sales/pages/ListSalesPage"));

const CreateSalePage = lazy(
  () => import("@/modules/sales/pages/CreateSalePage")
);

const UpdateSalePage = lazy(
  () => import("@/modules/sales/pages/UpdateSalePage")
);

export const SalesRoutes: RouteObject[] = [
  {
    path: ROUTES.SALES.LIST,
    element: <ListSalesPage />,
  },
  {
    path: ROUTES.SALES.CREATE,
    element: <CreateSalePage />,
  },
  {
    path: ROUTES.SALES.UPDATE,
    element: <UpdateSalePage />,
  },
];
