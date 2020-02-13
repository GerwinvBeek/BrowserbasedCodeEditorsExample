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
import { SaveValues } from './save-values';



@customElement('code-mirror-editor')
@transient()
export class CodeMirrorEditor {

    @bindable
    public mode: string;

    public editorHost: HTMLTextAreaElement;
    private codeMirror: any;

    public attached(): void {
        this.codeMirror = CodeMirror.fromTextArea(this.editorHost, {
            mode: this.mode,
            lineNumbers: true,
            theme: "base16-dark",
            indentUnit: 4,
            extraKeys: {
                "Ctrl-Space": "autocomplete",
            },
        });
    }

    protected save() {
        var text = this.codeMirror.getValue();

        switch (this.mode) {
            case "html":
                SaveValues.downloadString(text, "text/html", "code.html");
                break;
            case "javascript":
                SaveValues.downloadString(text, "text/javascript", "code.js");
        }
    }
}