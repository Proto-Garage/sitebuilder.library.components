import * as React from "react";
import Node from "./Node";
import RenderNode from "./RenderNode";

interface IProps {
  nodes: any;
  node: any;
  current: number;
}

const RecurseNode: React.SFC<IProps> = props => {
  const { nodes, node, current } = props;
  return (
    <>
      {node.children.map((value: string) => {
        const newNode = (nodes as any)[value];
        return (
          <React.Fragment key={value}>
            <RenderNode nodes={nodes} node={newNode} current={current} />
          </React.Fragment>
        );
      })}
    </>
  );
};

export default RecurseNode;
