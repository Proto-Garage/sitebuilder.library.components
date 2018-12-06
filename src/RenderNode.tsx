import * as React from "react";
import styled from "styled-components";
import { Node as NodeType, CarouselNode } from "sitebuilder.client";
import Section from "./templates/Section";
import Node from "./Node";
import Carousel from "./templates/Carousel";
import ColumnControls from "./ColumnControls";
import SectionControls from "./SectionControls";

interface IProps {
  current: number;
  dragControl?: any;
  node: NodeType;
}

const RenderNode: React.SFC<IProps> = props => {
  const { current, dragControl, node } = props;
  switch (node.type) {
    case "Root":
      return (
        <>
          <Section node={node}>
            <Node node={node} current={0} />
          </Section>
        </>
      );
    case "Section":
      return (
        <Section node={node}>
          <ControlWrapper>
            <Node node={node} current={0} />
            <SectionControls />
          </ControlWrapper>
        </Section>
      );
    case "Row":
      return <Node node={node} current={0} />;
    case "Column":
      return (
        <ControlWrapper>
          <Node node={node} current={current + 1} />
          <ColumnControls dragControl={dragControl} />
        </ControlWrapper>
      );
    case "Carousel":
      return <Carousel node={node as CarouselNode} />;
    default:
      return null;
  }
};

export default RenderNode;

const ControlWrapper = styled.div`
  position: relative;
  &:hover {
    .section-controls {
      opacity: 1;
    }
  }
`;
