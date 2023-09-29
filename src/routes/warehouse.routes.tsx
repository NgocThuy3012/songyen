import { lazy } from "react";
import { RouteObject } from "react-router-dom";

import { ROUTES } from "./routes";

const ListWarehousePage = lazy(
  () => import("@/modules/warehouse/pages/ListWarehousePage")
);

const UpdateWarehousePage = lazy(
  () => import("@/modules/warehouse/pages/UpdateWarehousePage")
);

export const WarehouseRoutes: RouteObject[] = [
  {
    path: ROUTES.WAREHOUSE.LIST,
    element: <ListWarehousePage />,
  },
  {
    path: ROUTES.WAREHOUSE.UPDATE,
    element: <UpdateWarehousePage />,
  },
];
