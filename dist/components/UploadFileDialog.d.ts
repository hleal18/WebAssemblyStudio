/// <reference types="react" />
import * as React from "react";
import { File, Directory, ModelRef } from "../model";
import { FileUploadInput } from "./Widgets";
export interface UploadFileDialogProps {
    isOpen: boolean;
    directory: ModelRef<Directory>;
    onUpload: (file: File[]) => void;
    onCancel: () => void;
}
export declare class UploadFileDialog extends React.Component<UploadFileDialogProps, {
    files: Object[];
    hasError: boolean;
}> {
    fileUploadInput: FileUploadInput;
    constructor(props: any);
    _checkErrorForFile(file: any): string;
    _handleUpload(files: FileList): Promise<void>;
    _readUploadedFileAsText(inputFile: any): Promise<{}>;
    _setHasError(): void;
    _isFilenameValid(name: string): boolean;
    render(): JSX.Element;
}
