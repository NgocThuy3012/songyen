import { List } from "@mui/material";

import { NAVIGATIONS } from "@/constants/navigations";

import { CCollapse } from "./CCollapse";
import { CNavItem } from "./CNavItem";
import { ILoginParams } from "@/types/auth";
import { useEffect, useState } from "react";

export const CNavigations = () => {
  const [user, setUser] = useState<ILoginParams>();

  const userDataJSON = localStorage.getItem("authenticatedUser");

  useEffect(() => {
    if (userDataJSON) {
      const userData: ILoginParams = JSON.parse(userDataJSON);
      setUser(userData);
    }
  }, [userDataJSON]);

  return (
    <List sx={{ padding: "10px 15px" }}>
      {NAVIGATIONS.map((nav, i) =>
        nav?.isChildren && nav?.children ? (
          <CCollapse
            key={nav.title}
            data={nav}
            index={i}
            dropdownList={nav.children}
          />
        ) : (
          <CNavItem
            key={nav.title}
            data={nav}
            index={i}
            disabled={!(user?.role == nav.role)}
          />
        )
      )}
    </List>
  );
};
