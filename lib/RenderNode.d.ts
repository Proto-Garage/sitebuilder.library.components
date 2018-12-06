import * as React from "react";
import { Node as NodeType } from "sitebuilder.client";
interface IProps {
    current: number;
    dragControl?: any;
    node: NodeType;
}
declare const RenderNode: React.SFC<IProps>;
export default RenderNode;
