import * as React from "react";
import { Node as NodeType, CarouselNode } from "sitebuilder.client";
import Section from "./templates/Section";
import Node from "./Node";
import Carousel from "./templates/Carousel";

interface OwnProps {
  current?: number;
  node: NodeType | null;
}

const defaultProps: OwnProps = {
  current: 0,
  node: null
};

const RenderNode: React.SFC<OwnProps> = props => {
  const { node } = props;
  if (!node) return null;
  const current = props.current ? props.current : 0;
  switch (node.type) {
    case "Root":
      return (
        <>
          <Section node={node}>
            <Node node={node} current={0} />
          </Section>
        </>
      );
    case "Section": {
      if (node.attributes.type === "column") {
        return <Node node={node} current={current + 1} />;
      }
      return <Node node={node} current={0} />;
    }
    case "Carousel":
      return <Carousel node={node as CarouselNode} />;
    default:
      return null;
  }
};

RenderNode.defaultProps = defaultProps;

export default RenderNode;
