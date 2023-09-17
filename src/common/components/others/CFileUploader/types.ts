import { IFileResponse } from '@/types/files';

export interface ICFileUploaderModalProps {
  accept?: string;

  onClose?: () => void;

  onConfirm: (file: IFileResponse) => void;
}

export interface ICFileUploaderModalRef {}

export interface ICFileUploaderItemRef {
  startUpload: () => Promise<any>;
}
