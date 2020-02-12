import { autoinject, bindable, customElement } from 'aurelia-framework';
import * as monaco from "monaco-editor";

@customElement('monaco-editor')
export class MonacoEditor {
    @bindable
    public options: monaco.editor.IStandaloneEditorConstructionOptions;

    public editorHost: HTMLElement;

    public attached(): void {

        this.options.lineNumbers = "on";
        this.options.roundedSelection = false;
        this.options.scrollBeyondLastLine = false;
        this.options.readOnly = false;
        //this.options.theme = "vs-dark";

        let editor = monaco.editor.create(this.editorHost, this.options);
    }
}