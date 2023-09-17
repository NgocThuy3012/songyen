import { INavigationItem } from "@/types/navigations";
import InfoIcon from "@mui/icons-material/Info";
import AddchartIcon from "@mui/icons-material/Addchart";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

export const NAVIGATIONS: INavigationItem[] = [
  {
    title: "Thông tin nhà yến",
    icon: <InfoIcon />,
    isChildren: false,
    path: "/customers",
  },
  {
    title: "Thu hoạch",
    icon: <AddchartIcon />,
    isChildren: false,
    path: "/category",
  },
  {
    title: "Kho",
    icon: <WarehouseIcon />,
    isChildren: false,
    path: "/posts",
  },

  {
    title: "Xuất bán",
    icon: <CurrencyExchangeIcon />,
    isChildren: false,
    path: "/customers",
  },
];
