import { customElement, bindable, transient } from 'aurelia-framework';
import * as ace from 'ace-builds/src-noconflict/ace';
import 'ace-builds/webpack-resolver'
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/ext-language_tools';
import { SaveValues } from './save-values';

@customElement('ace-editor')
@transient()
export class AceEditor {

    @bindable
    public mode: string;

    public editorHost: HTMLElement;
    private editor: any;

    public attached(): void {
        this.editor = ace.edit(this.editorHost, {
            mode: "ace/mode/" + this.mode,
            enableBasicAutocompletion: true,
            theme: "ace/theme/monokai"
        });
        this.editor.setShowPrintMargin(false);
    }

    protected save() {
        var text = this.editor.getValue();

        switch (this.mode) {
            case "html":
                SaveValues.downloadString(text, "text/html", "code.html");
                break;
            case "javascript":
                SaveValues.downloadString(text, "text/javascript", "code.js");
        }
    }
}