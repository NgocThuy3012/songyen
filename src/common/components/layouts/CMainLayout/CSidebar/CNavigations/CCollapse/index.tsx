import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import {
  Collapse,
  Fade,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { ICCollapseProps } from "./types";

const listItemStyle = {
  fontSize: "16px",
  padding: "10px 18px",
  borderRadius: "10px",
  "&.Mui-selected": {
    backgroundColor: "#1da996",
    ".MuiListItemText-primary": {
      color: "white",
    },
    ".MuiSvgIcon-root": {
      color: "white",
    },
    "&:hover": {
      backgroundColor: "#1da996",
    },
  },
  "&:hover": {
    backgroundColor: "#1da996",
    ".MuiListItemText-primary": {
      color: "white",
    },
    ".MuiSvgIcon-root": {
      color: "white",
    },
  },
};

export const CCollapse: React.FC<ICCollapseProps> = ({
  data,
  index,
  dropdownList,
}) => {
  //#region Data
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const selected = useMemo(() => {
    for (let e of dropdownList) {
      if (pathname.includes(e.path)) return true;
    }

    return false;
  }, [dropdownList, pathname]);

  const [open, setOpen] = useState(selected);
  //#endregion

  //#region Event
  const toggleCollapse = () => setOpen(!open);
  //#endregion

  //#region Render
  return (
    <>
      <Fade in timeout={500} style={{ transitionDelay: `${index * 100}ms` }}>
        <ListItemButton
          key={data.title}
          sx={listItemStyle}
          selected={selected}
          onClick={toggleCollapse}
        >
          {data?.icon ? (
            <ListItemIcon
              sx={{
                minWidth: 40,
                ".MuiSvgIcon-root": {
                  color: "#49581A",
                },
              }}
            >
              {data.icon}
            </ListItemIcon>
          ) : (
            <div style={{ marginLeft: "40px" }}></div>
          )}
          <ListItemText
            primary={data.title}
            sx={{
              ".MuiListItemText-primary": {
                color: "#49581A",
              },
            }}
          />
          {data?.isChildren &&
            (open ? (
              <ArrowDropUp
                sx={{
                  "&.MuiSvgIcon-root": {
                    color: "black",
                  },
                }}
              />
            ) : (
              <ArrowDropDown
                sx={{
                  "&.MuiSvgIcon-root": {
                    color: "black",
                  },
                }}
              />
            ))}
        </ListItemButton>
      </Fade>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List disablePadding>
          {dropdownList.map((e, i: number) =>
            e?.isChildren && e?.children ? (
              <CCollapse
                key={e.title}
                index={i}
                data={e}
                dropdownList={e.children}
              />
            ) : (
              <Fade
                key={e.title}
                in
                timeout={500}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <ListItemButton
                  key={data.title}
                  sx={{
                    color: "#49581A",
                    fontSize: "16px",
                    padding: "10px 18px",
                    borderRadius: "10px",
                    "&.Mui-selected": {
                      backgroundColor: "unset",
                      ".MuiListItemText-primary": {
                        color: "#1da996",
                        fontWeight: 700,
                      },
                    },
                  }}
                  selected={e.path.includes(pathname.split("/")[2])}
                  onClick={() => navigate(e.path)}
                >
                  <ListItemIcon sx={{ minWidth: 40 * e.level }} />
                  <ListItemText
                    primary={e.title}
                    sx={{
                      ".MuiListItemText-primary": {
                        color: "#49581A",
                      },
                    }}
                  />
                </ListItemButton>
              </Fade>
            )
          )}
        </List>
      </Collapse>
    </>
  );
  //#endregion
};
