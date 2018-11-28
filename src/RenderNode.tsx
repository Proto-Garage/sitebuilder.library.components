import * as React from "react";
import styled from "styled-components";
// import Row from "reactstrap/lib/Row";
// import Col from "reactstrap/lib/Col";
import { Node as NodeType } from "sitebuilder.client";
import Heading from "./templates/Heading";
import Paragraph from "./templates/Paragraph";
import Section from "./templates/Section";
import Node from "./Node";
import Image from "./templates/Image";
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
          <Section className="root123" node={node}>
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
    case "Heading":
      return <Heading value={node.attributes.text} />;
    case "Paragraph":
      return <Paragraph value={node.attributes.text} />;
    case "Image":
      return <Image node={node} />;
    case "Carousel":
      return <Carousel node={node} />;
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
