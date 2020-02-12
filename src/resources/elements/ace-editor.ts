import { customElement, bindable, transient } from 'aurelia-framework';
import * as ace from 'ace-builds/src-noconflict/ace';
import 'ace-builds/webpack-resolver'
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/ext-language_tools';

@customElement('ace-editor')
@transient()
export class AceEditor {

    @bindable
    public mode: string;

    public editorHost: HTMLElement;

    public attached(): void {
        var editor = ace.edit(this.editorHost, {
            mode: "ace/mode/" + this.mode,
            enableBasicAutocompletion: true,
            theme: "ace/theme/monokai"
        });
        editor.setShowPrintMargin(false);
    }
}