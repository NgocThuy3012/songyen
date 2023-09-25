import { useState } from "react";
import { AccountCircle } from "@mui/icons-material";
import {
  Box,
  ButtonBase,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";

import { tryLogout } from "@/axios/index";
import { useNavigate } from "react-router-dom";

export const CProfile = () => {
  //#region Data
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = !!anchorEl;

  const navigate = useNavigate();
  //#endregion

  //#region Event
  const toggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (anchorEl !== e.currentTarget) {
      setAnchorEl(e.currentTarget);
    }
  };

  const close = () => setAnchorEl(null);

  const onLogout = async () => {
    setAnchorEl(null);

    localStorage.removeItem("authenticatedUser");
    navigate("/login");
  };
  //#endregion

  //#region Render
  return (
    <>
      <ButtonBase onClick={toggle} onMouseOver={toggle}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Box>
            <Typography
              fontSize={14}
              sx={{ color: "#282828", fontWeight: "bold" }}
            >
              Administrator
            </Typography>
          </Box>
          <AccountCircle
            sx={{ height: "1.5em", width: "1.5em", color: "#282828" }}
          />
        </Stack>
      </ButtonBase>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClick={close}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        MenuListProps={{ onMouseLeave: close }}
      >
        <MenuItem
          onClick={onLogout}
          sx={{ minWidth: "200px", color: "#282828" }}
        >
          Logout
        </MenuItem>
      </Menu>
    </>
  );
  //#endregion
};
