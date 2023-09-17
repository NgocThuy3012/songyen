import { createElement, StrictMode } from 'react';
import { createRoot, Root } from 'react-dom/client';

import { IFileResponse } from '@/types/files';

import { ICFileUploaderModalProps } from './types';
import { CFileUploader } from '.';

export function createFileUploader(
  mountingNode = document.getElementById('__uploader') || document.body,
  unmountDelay = 500,
) {
  return (props: Omit<ICFileUploaderModalProps, 'onSelectedFiles'>) => {
    const wrapper = mountingNode.appendChild(document.createElement('div'));

    let root: Root | null = null;

    const _promise = new Promise<IFileResponse | undefined>(
      (resolve, reject) => {
        try {
          root = createRoot(wrapper);

          root.render(
            createElement(
              StrictMode,
              {},
              createElement(CFileUploader, {
                ...props,
                onClose: () => reject(),
                onConfirm: (file) => resolve(file),
              }),
            ),
          );
        } catch (e) {
          console.error(e);
          // throw e;
        }
      },
    );

    const dispose = () => {
      setTimeout(() => {
        root?.unmount();

        if (mountingNode.contains(wrapper)) {
          mountingNode.removeChild(wrapper);
        }
      }, unmountDelay);
    };

    return _promise.then(
      (result) => {
        dispose();
        return result;
      },
      () => {
        dispose();
        return Promise.reject();
      },
    );
  };
}
