import * as React from "react";
import { Node as NodeType } from "sitebuilder.client";
import RenderNode from "./RenderNode";
import RecurseNode from "./RecurseNode";
// import AuthContext from "../../../components/auth-context";

export interface IProps {
  node: NodeType | null;
  current: number;
}

export default class Node extends React.Component<IProps, any> {
  // static contextType = AuthContext;
  // context!: React.ContextType<typeof AuthContext>;
  public render() {
    const { node, current } = this.props;
    if (!node) return;
    const children = node.children;
    let newChildren: string[] = [];
    console.log(node, children);
    if (node.type === "Page") {
      children.filter((child: NodeType) => {
        if (child.type === "Header") return;
        if (child.type === "Footer") return;
        newChildren = [...newChildren, child.id];
      });
    } else {
      children.filter((child: NodeType) => {
        newChildren = [...newChildren, child.id];
      });
    }
    if (!newChildren || current === newChildren.length) {
      return <RenderNode node={node} current={current} />;
    }
    return <RecurseNode node={node} current={0} />;
  }
}
