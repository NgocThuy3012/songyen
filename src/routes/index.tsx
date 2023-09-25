import { Outlet, RouteObject } from "react-router-dom";

import { CExceptionError, CNotFoundError } from "@/errors/";
import { asyncLayout } from "@/funcs/";
import { CLoginLayout } from "@/layouts/CLoginLayout";

import { HarvestRoutes } from "./harvest.routes";

import { InfoRoutes } from "./info.routes";
import { WarehouseRoutes } from "./warehouse.routes";
import { SalesRoutes } from "./sale.routes";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Outlet />,
    errorElement: <CExceptionError />,
    children: [
      {
        path: "/",
        element: asyncLayout(() => import("@/layouts/CMainLayout")),
        children: [
          {
            path: "/dashboard",
            element: <div>Dashboard</div>,
          },
          ...HarvestRoutes,
          ...WarehouseRoutes,
          ...InfoRoutes,
          ...SalesRoutes,
        ],
      },
      {
        path: "/login",
        element: <CLoginLayout />,
      },
    ],
  },
  {
    path: "*",
    element: <CNotFoundError />,
  },
];

export default routes;
