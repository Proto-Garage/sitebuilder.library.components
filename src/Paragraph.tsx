import * as React from "react";

interface IProps {
  value: string;
}

const Paragraph: React.SFC<IProps> = props => {
  return <p>{props.value}</p>;
};

export default Paragraph;
