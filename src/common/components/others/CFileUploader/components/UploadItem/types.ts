import { IFileResponse } from '@/types/files';

export interface ICFileManagerUploadItemProps {
  file: File;

  onRemove: (file: File, index: number) => void;

  onUploadComplete?: (file?: IFileResponse) => void;
}

export interface ICFileManagerUploadItemRef {
  startUpload: () => Promise<void>;
}
