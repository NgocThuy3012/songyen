//#region IMPORT
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

//#endregion

const icon = `<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.627 16.5zm5.873-.196zm0-7.001V8h-13v8.5h4.341c.191.54.457 1.044.785 1.5H2a1.5 1.5 0 0 1-1.5-1.5v-13A1.5 1.5 0 0 1 2 2h4.5a1.5 1.5 0 0 1 1.06.44L9.122 4H16a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 19 8v2.531a6.027 6.027 0 0 0-1.5-1.228zM16 6.5v-1H8.5l-2-2H2v13h1V8a1.5 1.5 0 0 1 1.5-1.5H16z"/><path d="M14.5 19.5a5 5 0 1 1 0-10 5 5 0 0 1 0 10zM15 14v-2h-1v2h-2v1h2v2h1v-2h2v-1h-2z"/></svg>`;

export class FileUploaderUI extends Plugin {
  /**
   * @inheritDoc
   */
  static get pluginName() {
    return 'FileUploaderUI';
  }

  init() {
    const editor = this.editor;
    const componentFactory = editor.ui.componentFactory;

    componentFactory.add('fileUploader', (locale) => {
      const command = editor.commands.get('fileUploader');

      const button = new ButtonView(locale);

      button.set({
        label: 'Add image',
        icon,
        tooltip: true,
      });

      button.bind('isEnabled').to(command as any);

      button.on('execute', () => {
        editor.execute('fileUploader');

        editor.editing.view.focus();
      });

      return button;
    });
  }
}
