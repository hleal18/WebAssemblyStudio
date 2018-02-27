/// <reference types="react" />
import * as React from "react";
export interface ProjectTemplate {
    name: string;
    directory?: string;
    children: ProjectTemplate[];
    openedFiles: string[][];
}
export interface Template {
    name: string;
    description: string;
    project: ProjectTemplate;
    icon: string;
}
export declare class NewProjectDialog extends React.Component<{
    isOpen: boolean;
    onCreate: (template: Template) => void;
    onCancel: () => void;
}, {
    description: string;
    name: string;
    template: Template;
    templates: Template[];
}> {
    constructor(props: any);
    onChangeName: (event: React.ChangeEvent<any>) => void;
    nameError(): void;
    createButtonLabel(): string;
    componentDidMount(): Promise<void>;
    setTemplate(template: Template): Promise<void>;
    render(): JSX.Element;
}
