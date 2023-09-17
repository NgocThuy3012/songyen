//#region IMPORT
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';

import { uploadFile } from '@/apis/files.api';
import { byteToReadable, isCancel, isSuccess } from '@/funcs/';

import {
  ICFileManagerUploadItemProps,
  ICFileManagerUploadItemRef,
} from './types';
//#endregion

let abortController: AbortController | null = null;

const CFileManagerUploadItem = forwardRef<
  ICFileManagerUploadItemRef,
  ICFileManagerUploadItemProps
>(({ file }, ref) => {
  const hasUploadComplete = useRef<boolean>(false);

  //#region DATA
  const [showProgress, setShowProgress] = useState<boolean>(false);

  const [error, setError] = useState<string | null>(null);
  //#endregion

  //#region FUNC
  const startUploadProcess = async () => {
    if (hasUploadComplete.current) {
      return;
    }

    setShowProgress(true);

    try {
      abortController = new AbortController();

      const res = await uploadFile(file, {
        signal: abortController.signal,
      });

      const message = res?.data?.message;

      if (!isSuccess(res)) {
        setError(message ?? 'Something error');

        return;
      }

      hasUploadComplete.current = true;
    } catch (error: any) {
      // console.log(error);
      if (isCancel(error)) {
        setShowProgress(false);
      } else {
        setError(error?.response?.data?.message ?? 'Có lỗi xảy ra');
      }

      return;
    }
  };

  //#endregion

  useImperativeHandle(ref, () => ({
    startUpload: startUploadProcess,
  }));

  return (
    <>
      <div className="mt-2 flex space-x-4 rounded-md border border-solid border-gray-200 bg-gray-100 px-4">
        <div
          className="my-auto flex-1 py-4"
          style={{ width: 'calc(100% - 30px - 1rem)' }}
        >
          <p className="mb-1 line-clamp-1">{file.name}</p>
          {/* <p className="mb-1 text-sm text-gray-600">{file.type}</p> */}
          <p className="mb-0 text-sm text-gray-600">
            {byteToReadable(file.size)}
          </p>
        </div>
      </div>
      {showProgress && (
        <div className="mt-1 flex items-center">
          <p className="mb-0 flex-1 whitespace-nowrap text-right text-sm">
            {byteToReadable(file.size)}
          </p>
        </div>
      )}
      {error && <p className="mb-0 mt-2 text-danger-500">{error}</p>}
    </>
  );
});

export { CFileManagerUploadItem };
