import * as React from "react";
import * as renderHTML from "react-render-html";

interface IProps {
  tag?: string;
  value: string;
}

const Heading: React.SFC<IProps> = props => {
  return <>{renderHTML(`<${props.tag}>${props.value}</${props.tag}>`)}</>;
};

Heading.defaultProps = {
  tag: "h1"
};

export default Heading;
