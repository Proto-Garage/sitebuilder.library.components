import * as React from "react";
import styled from "styled-components";
import { AnchorButton } from "@blueprintjs/core";

interface IProps {}

const SectionControls: React.SFC<IProps> = props => {
  return (
    <Controls className="section-controls">
      <ul className="list-inline">
        <li className="list-inline-item">
          <AnchorButton icon="move" intent="primary" />
        </li>
        <li className="list-inline-item">
          <AnchorButton icon="cog" intent="primary" />
        </li>
        <li className="list-inline-item">
          <AnchorButton icon="trash" intent="primary" />
        </li>
      </ul>
    </Controls>
  );
};

export default SectionControls;

const Controls: any = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  ul {
    margin: 0;
  }
  li {
    margin-right: 2px !important;
  }
`;
