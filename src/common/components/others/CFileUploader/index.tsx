import { forwardRef, useState } from 'react';
import { Box, Modal, SxProps, Theme, Typography } from '@mui/material';

import { CImageUpload } from '@/controls/';

import {
  // ICFileUploaderItemRef,
  ICFileUploaderModalProps,
  ICFileUploaderModalRef,
} from './types';

const style: SxProps<Theme> = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: 'white',
  outline: 'none',
  padding: '2rem',
  borderRadius: '1rem',
};

export const CFileUploader = forwardRef<
  ICFileUploaderModalRef,
  ICFileUploaderModalProps
>(({ onConfirm }, ref) => {
  //#region Data
  const [open, setOpen] = useState<boolean>(true);
  //#endregion

  const onCancel = () => {
    setOpen(false);
  };

  return (
    <Modal open={open} onClose={onCancel} title="Upload file">
      <Box sx={{ ...style, width: 400 }}>
        <Typography
          sx={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '1rem' }}
        >
          Upload file
        </Typography>
        <CImageUpload aspectRatio="2/1" onChange={onConfirm} />
      </Box>
    </Modal>
  );
});
