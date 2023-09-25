export const ROUTES = {
  LOGIN: "/login",

  HOME: "/",

  HARVEST: {
    LIST: "/harvest",
    UPDATE: "/harvest/detail/:id",
    CREATE: "/harvest/detail",
  },

  WAREHOUSE: {
    LIST: "/warehouse",
    CREATE: "/warehouse/detail",
    UPDATE: "/warehouse/detail/:id",
  },

  INFO: {
    LIST: "/info",
    CREATE: "/info/detail",
    UPDATE: "/info/detail/:id",
  },

  SALES: {
    LIST: "/export-sale",
    CREATE: "/export-sale/detail",
    UPDATE: "/export-sale/detail/:id",
  },
};
