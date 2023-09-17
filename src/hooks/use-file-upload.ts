// import { createFileUploader } from 'src/common/components/others/CFileUploader/utils';
import { ICFileUploaderModalProps } from '@/others/CFileUploader/types';
import { createFileUploader } from '@/others/CFileUploader/utils';
import { IFileResponse } from '@/types/files';

export const fileUploadFunc = createFileUploader();

export function useFileUpload() {
  const showFileUpload = (
    options: Omit<ICFileUploaderModalProps, 'onSelectedFiles'>,
    confirmFn?: (file: IFileResponse | undefined) => any,
    cancelFn?: () => any,
  ) => {
    fileUploadFunc(options)
      .then((file) => {
        confirmFn && confirmFn(file);

        cancelFn && cancelFn();
      })
      .catch(() => {
        cancelFn && cancelFn();
      });
  };

  return { showFileUpload };
}
