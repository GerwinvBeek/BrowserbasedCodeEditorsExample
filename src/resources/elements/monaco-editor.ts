import { autoinject, bindable, customElement, transient } from 'aurelia-framework';
import * as monaco from "monaco-editor";
import { SaveValues } from "./save-values"; 

@customElement('monaco-editor')
@transient()
export class MonacoEditor {
    @bindable
    public mode: string;

    public editorHost: HTMLElement;

    private editor: monaco.editor.IStandaloneCodeEditor;

    public attached(): void {
        const options: monaco.editor.IStandaloneEditorConstructionOptions = {
            language: this.mode,
            lineNumbers: "on",
            roundedSelection: false,
            scrollBeyondLastLine: false,
            readOnly: false,
            theme: "vs-dark"
        }

        this.editor = monaco.editor.create(this.editorHost, options);
    }


    protected save() {
        var text = this.editor.getValue();

        switch (this.mode) {
            case "html":
                SaveValues.downloadString(text, "text/html", "code.html");
                break;
            case "typescript":
                SaveValues.downloadString(text, "text/typescript", "code.ts");
        }
    }
}