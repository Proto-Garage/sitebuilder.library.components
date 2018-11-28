import * as React from "react";
import styled from "styled-components";
import { AnchorButton } from "@blueprintjs/core";

interface IProps {}

const RowControls: React.SFC<IProps> = props => {
  return (
    <Controls>
      <ul className="list-unstyled">
        <li>
          <AnchorButton icon="move" />
        </li>
        <li>
          <AnchorButton icon="cog" />
        </li>
        <li>
          <AnchorButton icon="trash" />
        </li>
      </ul>
    </Controls>
  );
};

export default RowControls;

const Controls = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0;
`;
