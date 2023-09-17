import { IFileResponse } from '@/types/files';
import { IFormInputComponentProps, IFormInputComponentRef } from '@/types/form';

export interface ICImageUploadRef extends IFormInputComponentRef {}
export interface ICImageUploadProps extends IFormInputComponentProps {
  url?: string;
  value?: IFileResponse;
  imgWrapClassName?: string;
  onChange: (file: IFileResponse) => void;
  // value: IFileUpload | null;
  // onChange: (value: IFileUpload) => void;
  aspectRatio?: string;
  maxMb?: number;
  maxWidth?: number;
  showPlaceHolder?: boolean;
  showMaxSize?: boolean;
}
