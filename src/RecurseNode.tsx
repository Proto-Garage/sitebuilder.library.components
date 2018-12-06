import * as React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { Node as NodeType } from "sitebuilder.client";
import RenderNode from "./RenderNode";
import styled from "styled-components";

interface IProps {
  node: NodeType;
  current: number;
}

const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
  userSelect: "none",
  ...draggableStyle
});

const EditModeRowWrapper: React.SFC<{ value: string; edit: boolean }> = ({
  children,
  value,
  edit
}) => {
  if (!edit) return <>{children}</>;
  return (
    <Droppable
      key={value}
      droppableId={value}
      direction="horizontal"
      type="ROW"
    >
      {(provided, snapshot) => (
        <RowContainer
          className="row-container"
          innerRef={provided.innerRef}
          isDraggingOver={snapshot.isDraggingOver}
          {...provided.droppableProps}
        >
          {children}
        </RowContainer>
      )}
    </Droppable>
  );
};

const EditModeColumnWrapper: React.SFC<{
  value: string;
  index: number;
  edit: boolean;
}> = ({ children, value, index, edit }) => {
  if (!edit) return <>{children}</>;
  return (
    <Draggable key={value} draggableId={value} index={index}>
      {(provided, snapshot) => {
        const childrenWithProps = React.Children.map(children, (child: any) =>
          React.cloneElement(child, { dragControl: provided.dragHandleProps })
        );
        return (
          <ColumnContainer
            className="column-container"
            innerRef={provided.innerRef}
            {...provided.draggableProps}
            style={getItemStyle(
              snapshot.isDragging,
              provided.draggableProps.style
            )}
          >
            {childrenWithProps}
          </ColumnContainer>
        );
      }}
    </Draggable>
  );
};

class RecurseNode extends React.Component<IProps> {
  render() {
    const { node, current } = this.props;
    const { config } = this.context.state;
    let newChildren: string[] = [];
    node.children.filter((child: NodeType) => {
      newChildren = [...newChildren, child.id];
    });
    return (
      <>
        {newChildren.map((value: string, index: number) => {
          const node = config.findNode(value);
          if (!node) return;
          if (node.type === "Section" && node.attributes.type === "row") {
            return (
              <EditModeRowWrapper value={value} edit={config}>
                <RenderNode node={node} current={current} />
              </EditModeRowWrapper>
            );
          }
          if (node.type === "Section" && node.attributes.type === "column") {
            return (
              <EditModeColumnWrapper value={value} index={index} edit={config}>
                <RenderNode node={node} current={current} />
              </EditModeColumnWrapper>
            );
          }
          return (
            <React.Fragment key={value}>
              <RenderNode node={node} current={current} />
            </React.Fragment>
          );
        })}
      </>
    );
  }
}

export default RecurseNode;

const ColumnContainer = styled.div<any>`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  &:active,
  &:hover {
    .column-controls {
      div {
        opacity: 1;
      }
    }
  }
`;

const RowContainer = styled.div<any>`
  display: flex;
  margin-right: -15px;
  margin-left: -15px;
  overflow: auto;
`;
