import * as React from "react";
export interface IProps {
    nodes: any;
    node: any;
    current: number;
}
export default class Node extends React.Component<IProps, any> {
    render(): JSX.Element;
}
