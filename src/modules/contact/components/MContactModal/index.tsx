import { useState } from "react";
import { Box, Chip, Modal, Stack, Typography } from "@mui/material";

import { CFormLabel, CInput } from "@/controls/";

import { modalContentStyle, modalTitleStyle, modalWrapStyle } from "./style";
import { IMContactModalProps } from "./types";

export const MContactModal: React.FC<IMContactModalProps> = ({
  blog_names = [],
  fullname,
  email,
  phone,
  message,
  reset,
}) => {
  //#region Data
  const [open, setOpen] = useState<boolean>(true);
  //#endregion

  const onCancel = () => {
    reset();

    setOpen(false);
  };

  return (
    <Modal open={open} onClose={onCancel} title="Contact form detail">
      <Box sx={{ ...modalWrapStyle }}>
        <Box sx={modalContentStyle}>
          <Typography sx={modalTitleStyle}>Contact form detail</Typography>
          <Stack direction="row" spacing={1} mb={2} width="100%">
            <Box sx={{ width: "20%" }}>
              <CFormLabel label="Services:" />
            </Box>
            <Box sx={{ width: "80%" }}>
              {blog_names.length ? (
                <Stack direction="column" spacing={1}>
                  {blog_names.map((blog) => (
                    <Chip
                      label={blog}
                      sx={{ backgroundColor: "#1da996", color: "white" }}
                    />
                  ))}
                </Stack>
              ) : (
                "No services choice"
              )}
            </Box>
          </Stack>
          <Stack direction="row" spacing={1} mb={2} width="100%">
            <Box sx={{ width: "20%" }}>
              <CFormLabel label="Name:" />
            </Box>
            <Box sx={{ width: "80%" }}>
              <CInput disabled value={fullname} fullWidth />
            </Box>
          </Stack>
          <Stack direction="row" spacing={1} mb={2} width="100%">
            <Box sx={{ width: "20%" }}>
              <CFormLabel label="Email:" />
            </Box>
            <Box sx={{ width: "80%" }}>
              <CInput disabled value={email} fullWidth />
            </Box>
          </Stack>
          <Stack direction="row" spacing={1} mb={2} width="100%">
            <Box sx={{ width: "20%" }}>
              <CFormLabel label="Phone:" />
            </Box>
            <Box sx={{ width: "80%" }}>
              <CInput disabled value={phone} fullWidth />
            </Box>
          </Stack>
          <Stack direction="row" spacing={1} mb={2} width="100%">
            <Box sx={{ width: "20%" }}>
              <CFormLabel label="Message:" />
            </Box>
            <Box sx={{ width: "80%" }}>
              <CInput disabled value={message} multiline rows={2} fullWidth />
            </Box>
          </Stack>
        </Box>
      </Box>
    </Modal>
  );
};
