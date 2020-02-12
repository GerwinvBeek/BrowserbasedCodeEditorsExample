import { autoinject, bindable, customElement, transient } from 'aurelia-framework';
import * as monaco from "monaco-editor";

@customElement('monaco-editor')
@transient()
export class MonacoEditor {
    @bindable
    public mode: string;

    public editorHost: HTMLElement;

    public attached(): void {
        const options: monaco.editor.IStandaloneEditorConstructionOptions = {
            language: this.mode,
            lineNumbers : "on",
            roundedSelection : false,
            scrollBeyondLastLine : false,
            readOnly : false,
            theme : "vs-dark"
        }

        let editor = monaco.editor.create(this.editorHost, options);
    }
}