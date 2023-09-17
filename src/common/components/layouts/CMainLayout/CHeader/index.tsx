import { Menu } from "@mui/icons-material";
import {
  Box,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { ThemeOptions } from "@mui/material";

import { CProfile } from "./CProfile";
import { ICHeaderProps } from "./types";

const HEADER_HEIGHT = 56;

export const CHeader = ({ toggleSidebar }: ICHeaderProps) => {
  const isBelowLg = useMediaQuery(
    (theme: ThemeOptions) => theme.breakpoints?.down?.("lg") ?? ""
  );

  return (
    <Box
      height={HEADER_HEIGHT}
      sx={{ backgroundColor: "#fff" }}
      position="sticky"
      top={0}
      zIndex={1}
    >
      <Stack
        direction="row"
        sx={{ padding: "6px 20px" }}
        alignItems="center"
        spacing={1.75}
      >
        <IconButton onClick={toggleSidebar} sx={{ display: { lg: "none" } }}>
          <Menu />
        </IconButton>

        <Box>
          <Typography
            textAlign="center"
            fontSize="2.5rem"
            fontWeight={800}
            color="#1da996"
            mb={2.5}
          >
            SONG YẾN
          </Typography>
        </Box>

        <Box flex={1}>
          {/* {!isBelowLg && (
            <Typography fontSize="16px" fontWeight={700}>
              BRADO CONSULTING
            </Typography>
          )} */}
        </Box>
        <CProfile />
      </Stack>
    </Box>
  );
};
