import { customElement } from 'aurelia-framework';
import * as ace from 'ace-builds/src-noconflict/ace';
import 'ace-builds/webpack-resolver'
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/ext-language_tools';

@customElement('ace-editor')
export class AceEditor {

    public editorHost: HTMLElement;

    public attached(): void {
        ace.edit(this.editorHost, {
            mode: "ace/mode/javascript",
            enableBasicAutocompletion: true,
            //theme: "ace/theme/monokai"
        });
    }
}