import { autoinject, bindable, customElement, transient, InlineViewStrategy } from 'aurelia-framework';
import * as monaco from "monaco-editor";
import { SaveValues } from "./save-values"; 

@customElement('monaco-editor')
@transient()
export class MonacoEditor {
    @bindable
    public mode: string;

    public editorHost: HTMLElement;

    @bindable
    public code: any;

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

    protected preview(){
        var text = this.editor.getValue();
        this.code = new InlineViewStrategy('<template>' + text + '</template>');
    }

    protected insertHelloWorld() {
        var selection = this.editor.getSelection();
        var id = { major: 1, minor: 1 };
        var text = "function helloWorld(){console.log('HelloWorld')};";
        var op = { identifier: id, range: selection, text: text, forceMoveMarkers: true };
        this.editor.executeEdits("my-source", [op]);
    }

    protected insertButton() {
        var selection = this.editor.getSelection();
        var id = { major: 1, minor: 1 };
        var text = "<button>This is a button</button>";
        var op = { identifier: id, range: selection, text: text, forceMoveMarkers: true };
        this.editor.executeEdits("my-source", [op]);
    }
}