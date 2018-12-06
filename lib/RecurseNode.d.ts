import * as React from "react";
import { Node as NodeType } from "sitebuilder.client";
interface IProps {
    node: NodeType;
    current: number;
}
declare class RecurseNode extends React.Component<IProps> {
    render(): JSX.Element;
}
export default RecurseNode;
