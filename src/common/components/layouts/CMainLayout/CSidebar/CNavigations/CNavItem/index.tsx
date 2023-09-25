import { useLocation, useNavigate } from "react-router-dom";
import {
  Fade,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { ICNavItemProps } from "./types";

const style = {
  fontSize: "16px",
  padding: "10px 18px",
  borderRadius: "10px",
  "&.Mui-selected": {
    backgroundColor: "#1da996",
    borderBottom: "2px solid white",
    borderTop: "2px solid white",
    "& path, & .MuiTypography-root, & .MuiSvgIcon-root": {
      color: "white",
      fontWeight: 600,
    },
    "&:hover": {
      backgroundColor: "#1da996",
      ".MuiListItemText-primary": {
        color: "white",
      },
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

export const CNavItem: React.FC<ICNavItemProps> = ({
  data,
  index,
  disabled,
}) => {
  //#region Data
  const { pathname } = useLocation();
  const navigate = useNavigate();

  //#endregion

  //#region Event
  //#endregion

  //#region Render
  return (
    <Fade in timeout={500} style={{ transitionDelay: `${index * 100}ms` }}>
      <ListItemButton
        key={data.title}
        sx={style}
        selected={pathname.includes(data.path)}
        onClick={() => navigate(data.path)}
        disabled={disabled}
      >
        {data?.icon && (
          <ListItemIcon
            sx={{
              minWidth: 40,
              ".MuiSvgIcon-root": {
                color: pathname.includes(data.path) ? "#ffff" : "#49581A",
              },
            }}
          >
            {data.icon}
          </ListItemIcon>
        )}
        <ListItemText
          primary={data.title}
          sx={{
            ".MuiListItemText-primary": {
              color: pathname.includes(data.path) ? "#ffff" : "#49581A",
            },
            ".MuiListItemText-primary:hover": {
              color: "white",
            },
          }}
        />
      </ListItemButton>
    </Fade>
  );
  //#endregion
};

CNavItem.defaultProps = {
  disabled: false,
};
