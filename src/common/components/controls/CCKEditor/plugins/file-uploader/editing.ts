//#region IMPORT
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import MediaEmbedEditing from '@ckeditor/ckeditor5-media-embed/src/mediaembedediting';
import Notification from '@ckeditor/ckeditor5-ui/src/notification/notification';
import CKEditorError from '@ckeditor/ckeditor5-utils/src/ckeditorerror';

import { FileUploaderCommand } from './command';
//#endregion

export class FileUploaderEditing extends Plugin {
  /**
   * @inheritDoc
   */
  static get pluginName() {
    return 'FileUploaderEditing';
  }

  /**
   * @inheritDoc
   */
  static get requires() {
    return [Notification, 'LinkEditing', MediaEmbedEditing];
  }

  /**
   * @inheritDoc
   */
  init() {
    const editor = this.editor;

    if (
      !editor.plugins.has('ImageBlockEditing') &&
      !editor.plugins.has('ImageInlineEditing') &&
      !editor.plugins.has('MediaEmbedEditing')
    ) {
      /**
       * Requires at least one plugin providing support for images loaded in the editor
       *
       * @error file-manager-missing-image-plugin
       */
      throw new CKEditorError('file-manager-missing-image-plugin', editor);
    }

    editor.commands.add('fileUploader', new FileUploaderCommand(editor));
  }
}
