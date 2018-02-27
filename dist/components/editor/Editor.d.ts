/// <reference types="react" />
import * as React from "react";
import { View } from "./View";
import "monaco-editor";
export interface MonacoProps {
    view: View;
    options?: monaco.editor.IEditorConstructionOptions;
}
export declare class Monaco extends React.Component<MonacoProps, {}> {
    editor: monaco.editor.IStandaloneCodeEditor;
    container: HTMLDivElement;
    revealLastLine(): void;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: EditorViewProps): void;
    shouldComponentUpdate(nextProps: EditorViewProps, nextState: any): boolean;
    componentDidUpdate(): void;
    onLayout: () => void;
    componentWillUnmount(): void;
    registerActions(): void;
    private ensureEditor();
    private setContainer(container);
    render(): JSX.Element;
}
export interface EditorViewProps {
    view: View;
    options?: monaco.editor.IEditorConstructionOptions;
}
export declare class EditorView extends React.Component<EditorViewProps, {}> {
    monaco: Monaco;
    setMonaco(monaco: Monaco): void;
    revealLastLine(): void;
    render(): JSX.Element;
}
