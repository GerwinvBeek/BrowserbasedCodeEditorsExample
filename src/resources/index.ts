import { FrameworkConfiguration } from 'aurelia-framework';
import { PLATFORM } from "aurelia-pal";

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName("./elements/ace-editor"),
    PLATFORM.moduleName("./elements/code-mirror-editor"),
    PLATFORM.moduleName("./elements/monaco-editor"),
  ]);
}

export * from './elements/ace-editor';
export * from './elements/code-mirror-editor';
export * from './elements/monaco-editor';

