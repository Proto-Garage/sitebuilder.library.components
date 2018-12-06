import * as React from "react";
import styled from "styled-components";
import { FiSettings, FiMove, FiTrash } from "react-icons/fi";
import { Button } from "reactstrap";

interface IProps {}

const RowControls: React.SFC<IProps> = props => {
  return (
    <Controls>
      <ul className="list-unstyled">
        <li className="list-inline-item">
          <Button color="primary">
            <FiMove />
          </Button>
        </li>
        <li className="list-inline-item">
          <Button color="primary">
            <FiSettings />
          </Button>
        </li>
        <li className="list-inline-item">
          <Button color="primary">
            <FiTrash />
          </Button>
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
