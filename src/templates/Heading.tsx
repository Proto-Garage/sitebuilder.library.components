import * as React from "react";
import renderHTML from "react-render-html";
import styled from "styled-components";
import { Button } from "@blueprintjs/core";

interface IProps {
  tag?: string;
  value: string;
}

const Heading: React.SFC<IProps> = props => {
  return (
    <Wrapper>
      <div className="controls">
        <ul className="list-inline">
          <li>
            <Button small>H1</Button>
          </li>
          <li>
            <Button small>H2</Button>
          </li>
          <li>
            <Button small>H3</Button>
          </li>
          <li>
            <Button small>H4</Button>
          </li>
          <li>
            <Button small>H5</Button>
          </li>
          <li>
            <Button small>H6</Button>
          </li>
        </ul>
      </div>
      {renderHTML(`<${props.tag}>${props.value}</${props.tag}>`)}
    </Wrapper>
  );
};

Heading.defaultProps = {
  tag: "h1"
};

export default Heading;

const Wrapper = styled.div`
  border: 1px solid transparent;
  position: relative;
  :hover {
    border-color: var(--ck-color-base-active);
    .controls {
      opacity: 1;
    }
  }
  .controls {
    position: absolute;
    top: -28px;
    left: 0;
    opacity: 0;
    z-index: 10;
    ul {
      margin: 0;
      display: flex;
      li {
        margin-right: 2px;
      }
    }
  }
`;
