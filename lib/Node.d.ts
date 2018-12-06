import * as React from "react";
import { Node as NodeType } from "sitebuilder.client";
export interface IProps {
    node: NodeType | null;
    current: number;
}
export default class Node extends React.Component<IProps, any> {
    render(): JSX.Element | undefined;
}
