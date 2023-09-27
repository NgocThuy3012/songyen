import { List } from "@mui/material";

import { NAVIGATIONS } from "@/constants/navigations";

import { CCollapse } from "./CCollapse";
import { CNavItem } from "./CNavItem";
import { ILoginParams } from "@/types/auth";
import { useEffect, useState } from "react";
import { INavigationItem } from "@/types/navigations";

export const CNavigations = () => {
  const [navList, setNavList] = useState<INavigationItem[]>([]);

  const userDataJSON = localStorage.getItem("authenticatedUser");

  useEffect(() => {
    if (userDataJSON) {
      const userData: ILoginParams = JSON.parse(userDataJSON);

      NAVIGATIONS.map((nav, i) => {
        if (userData?.role == nav.role) {
          setNavList([...navList, nav]);
        }
      });
    }
  }, [userDataJSON]);

  return (
    <List sx={{ padding: "10px 15px" }}>
      {navList.map((nav, i) =>
        nav?.isChildren && nav?.children ? (
          <CCollapse
            key={nav.title}
            data={nav}
            index={i}
            dropdownList={nav.children}
          />
        ) : (
          <CNavItem key={nav.title} data={nav} index={i} />
        )
      )}
    </List>
  );
};
