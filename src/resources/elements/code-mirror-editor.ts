import { autoinject, bindable, customElement } from 'aurelia-framework';
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
export class CodeMirrorEditor {

    public editorHost: HTMLTextAreaElement;

    public attached(): void {
        var myCodeMirror = CodeMirror.fromTextArea(this.editorHost, {
            mode: "javascript",
            lineNumbers: true,
            //theme: "base16-dark",
            indentUnit: 4,
            extraKeys: {
                "Ctrl-Space": "autocomplete",
            },
        });
    }
}