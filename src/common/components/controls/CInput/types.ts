import { SxProps, Theme } from '@mui/material';

import { IFormInputComponentProps, IFormInputComponentRef } from '@/types/form';

export interface ICInputRef extends IFormInputComponentRef {}
export interface ICInputProps extends IFormInputComponentProps {
  key?: string | number;
  placeholder?: string;
  type?: string;
  startAdornment?: any;
  endAdornment?: any;
  multiline?: boolean;
  rows?: number;
  maxRows?: number;
  sx?: SxProps<Theme>;
  fullWidth?: boolean;
}
