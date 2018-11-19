import * as React from "react";
import RenderNode from "./RenderNode";
import RecurseNode from "./RecurseNode";

export interface IProps {
  nodes: any;
  node: any;
  current: number;
}

export default class Node extends React.Component<IProps, any> {
  public render() {
    const { nodes, node, current } = this.props;
    if (!node.children || current === node.children.length)
      return <RenderNode nodes={nodes} node={node} current={current} />;
    return <RecurseNode nodes={nodes} node={node} current={0} />;
  }
}
