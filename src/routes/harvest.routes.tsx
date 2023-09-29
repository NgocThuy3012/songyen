import { lazy } from "react";
import { RouteObject } from "react-router-dom";

import { ROUTES } from "./routes";

const ListHarvestPage = lazy(
  () => import("@/modules/harvest/pages/ListHarvestPage")
);

const UpdateHarvestPage = lazy(
  () => import("@/modules/harvest/pages/UpdateHarvestPage")
);

export const HarvestRoutes: RouteObject[] = [
  {
    path: ROUTES.HARVEST.LIST,
    element: <ListHarvestPage />,
  },
  {
    path: ROUTES.HARVEST.UPDATE,
    element: <UpdateHarvestPage />,
  },
];
