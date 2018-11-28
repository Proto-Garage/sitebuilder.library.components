import * as React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { Node as NodeType } from "sitebuilder.client";
// import Node from "./Node";
import RenderNode from "./RenderNode";
import data from "../../../data.json";
import styled from "styled-components";
import AuthContext from "../../../components/auth-context";

interface IProps {
  node: NodeType;
  current: number;
}

const grid = 8;

const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  // padding: grid * 2,
  // margin: `0 ${grid}px 0 0`,

  // change background colour if dragging
  // background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle
});

class RecurseNode extends React.Component<IProps> {
  static contextType = AuthContext;
  context!: React.ContextType<typeof AuthContext>;
  render() {
    const { node, current } = this.props;
    const { config } = this.context.state;
    if (!config) return;
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
                    <RenderNode node={node} current={current} />
                  </RowContainer>
                )}
              </Droppable>
            );
          }
          if (node.type === "Section" && node.attributes.type === "column") {
            return (
              <Draggable key={value} draggableId={value} index={index}>
                {(provided, snapshot) => (
                  <ColumnContainer
                    className="column-container"
                    innerRef={provided.innerRef}
                    {...provided.draggableProps}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style
                    )}
                  >
                    <RenderNode
                      dragControl={provided.dragHandleProps}
                      node={node}
                      current={current}
                    />
                  </ColumnContainer>
                )}
              </Draggable>
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

const ColumnContainer = styled.div`
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

const RowContainer = styled.div<{ isDraggingOver: boolean }>`
  display: flex;
  margin-right: -15px;
  margin-left: -15px;
  overflow: auto;
`;
