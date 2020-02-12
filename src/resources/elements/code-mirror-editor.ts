import { autoinject, bindable, customElement, transient } from 'aurelia-framework';
import * as CodeMirror from "codemirror";
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/theme/base16-dark.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/addon/hint/show-hint.js';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/javascript-hint.js';
import 'codemirror/addon/lint/javascript-lint.js';
import 'codemirror'



@customElement('code-mirror-editor')
@transient()
export class CodeMirrorEditor {

    @bindable
    public mode: string;

    public editorHost: HTMLTextAreaElement;

    public attached(): void {
        var myCodeMirror = CodeMirror.fromTextArea(this.editorHost, {
            mode: this.mode,
            lineNumbers: true,
            theme: "base16-dark",
            indentUnit: 4,
            extraKeys: {
                "Ctrl-Space": "autocomplete",
            },
        });
    }
}