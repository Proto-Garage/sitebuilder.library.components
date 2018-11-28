import * as React from "react";

interface IProps {
  node: any;
}

const Image: React.SFC<IProps> = props => (
  <img src={props.node.data.src} className="img-fluid" alt="" />
);

export default Image;
