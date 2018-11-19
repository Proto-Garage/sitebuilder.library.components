import * as React from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Section from "./Section";
import Node from "./Node";
import Image from "./Image";
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";

interface IProps {
  current: number;
  nodes: any;
  node: any;
}

const RenderNode: React.SFC<IProps> = props => {
  const { current, node, nodes } = props;
  switch (node.type) {
    case "Root":
      return (
        <>
          <Section className="root123" node={node}>
            <Node nodes={nodes} node={node} current={0} />
          </Section>
        </>
      );
    case "Section":
      // console.log(current, node);
      return (
        <Section node={node}>
          <Node nodes={nodes} node={node} current={0} />
        </Section>
      );
    case "Row":
      return (
        <Row>
          <Node nodes={nodes} node={node} current={0} />
        </Row>
      );
    case "Column":
      return (
        <Col>
          <Node nodes={nodes} node={node} current={current + 1} />
        </Col>
      );
    case "Heading":
      return <Heading tag={node.tag} value={node.value} />;
    case "Paragraph":
      return <Paragraph value={node.value} />;
    case "Image":
      return <Image node={node} />;
    default:
      return <div>asdasd</div>;
  }
};

export default RenderNode;
