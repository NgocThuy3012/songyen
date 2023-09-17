import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

import { createFileUploader } from '@/others/CFileUploader/utils';

import { FileUploaderEditing } from './editing';
import { FileUploaderUI } from './ui';

export const fileUploadFunc = createFileUploader();

export class FileUploader extends Plugin {
  /**
   * @inheritDoc
   */
  static get pluginName() {
    return 'FileUploader';
  }

  /**
   * @inheritDoc
   */
  static get requires() {
    return ['Link', FileUploaderUI, FileUploaderEditing];
  }
}
