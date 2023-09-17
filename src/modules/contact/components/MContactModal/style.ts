import { SxProps, Theme } from '@mui/material';

export const modalWrapStyle: SxProps<Theme> = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  backgroundColor: 'white',
  outline: 'none',
  borderRadius: '1rem',
  padding: '1rem',
};

export const modalContentStyle: SxProps<Theme> = {
  maxHeight: '80vh',
  overflowY: 'auto',
  padding: '1rem',
};

export const modalTitleStyle: SxProps<Theme> = {
  fontWeight: 'bold',
  fontSize: '1.5rem',
  marginBottom: '1rem',
  paddingBottom: '1rem',
  borderBottom: '1px solid #F5F5F5',
};
