import { Command, Editor } from '@ckeditor/ckeditor5-core';

import { IFileResponse } from '@/types/files';

import { fileUploadFunc } from '.';

export const insertImages = (editor: Editor, urls: string[]) => {
  const imageCommand = editor.commands.get('insertImage');

  // Check if inserting an image is actually possible - it might be possible to only insert a link.
  if (!imageCommand?.isEnabled) {
    const notification = editor.plugins.get('Notification');
    const t = editor.locale.t;

    (notification as any).showWarning(
      t('Could not insert image at the current position.'),
      {
        title: t('Inserting image failed'),
        namespace: 'fileUploader',
      },
    );

    return;
  }

  editor.execute('insertImage', { source: urls });
};

export class FileUploaderCommand extends Command {
  /**
   * @inheritDoc
   */
  constructor(editor: Editor) {
    super(editor);

    // The FileManager command does not affect data by itself.
    // this._affaectsData = false;

    // Remove default document listener to lower its priority.
    this.stopListening(this.editor.model.document, 'change');

    // Lower this command listener priority to be sure that refresh() will be called after link & image refresh.
    this.listenTo(this.editor.model.document, 'change', () => this.refresh(), {
      priority: 'low',
    });
  }

  /**
   * @inheritDoc
   */
  refresh() {
    const imageCommand = this.editor.commands.get('insertImage');
    const linkCommand = this.editor.commands.get('link');

    // The CKFinder command is enabled when one of image or link command is enabled.
    this.isEnabled = imageCommand?.isEnabled || linkCommand?.isEnabled || false;
  }

  /**
   * @inheritDoc
   */
  execute() {
    fileUploadFunc({
      onConfirm: () => {},
    })
      .then((file: IFileResponse | undefined) => {
        if (file) {
          insertImages(this.editor, [file.url]);
        }
      })
      .catch(() => {});
  }
}
