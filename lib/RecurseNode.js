"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_beautiful_dnd_1 = require("react-beautiful-dnd");
const RenderNode_1 = require("./RenderNode");
const styled_components_1 = require("styled-components");
const getItemStyle = (isDragging, draggableStyle) => (Object.assign({ userSelect: "none" }, draggableStyle));
const EditModeRowWrapper = ({ children, value, edit }) => {
    if (!edit)
        return React.createElement(React.Fragment, null, children);
    return (React.createElement(react_beautiful_dnd_1.Droppable, { key: value, droppableId: value, direction: "horizontal", type: "ROW" }, (provided, snapshot) => (React.createElement(RowContainer, Object.assign({ className: "row-container", innerRef: provided.innerRef, isDraggingOver: snapshot.isDraggingOver }, provided.droppableProps), children))));
};
const EditModeColumnWrapper = ({ children, value, index, edit }) => {
    if (!edit)
        return React.createElement(React.Fragment, null, children);
    return (React.createElement(react_beautiful_dnd_1.Draggable, { key: value, draggableId: value, index: index }, (provided, snapshot) => {
        const childrenWithProps = React.Children.map(children, (child) => React.cloneElement(child, { dragControl: provided.dragHandleProps }));
        return (React.createElement(ColumnContainer, Object.assign({ className: "column-container", innerRef: provided.innerRef }, provided.draggableProps, { style: getItemStyle(snapshot.isDragging, provided.draggableProps.style) }), childrenWithProps));
    }));
};
class RecurseNode extends React.Component {
    render() {
        const { node, current } = this.props;
        const { config } = this.context.state;
        let newChildren = [];
        node.children.filter((child) => {
            newChildren = [...newChildren, child.id];
        });
        return (React.createElement(React.Fragment, null, newChildren.map((value, index) => {
            const node = config.findNode(value);
            if (!node)
                return;
            if (node.type === "Section" && node.attributes.type === "row") {
                return (React.createElement(EditModeRowWrapper, { value: value, edit: config },
                    React.createElement(RenderNode_1.default, { node: node, current: current })));
            }
            if (node.type === "Section" && node.attributes.type === "column") {
                return (React.createElement(EditModeColumnWrapper, { value: value, index: index, edit: config },
                    React.createElement(RenderNode_1.default, { node: node, current: current })));
            }
            return (React.createElement(React.Fragment, { key: value },
                React.createElement(RenderNode_1.default, { node: node, current: current })));
        })));
    }
}
exports.default = RecurseNode;
const ColumnContainer = styled_components_1.default.div `
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
const RowContainer = styled_components_1.default.div `
  display: flex;
  margin-right: -15px;
  margin-left: -15px;
  overflow: auto;
`;
//# sourceMappingURL=RecurseNode.js.map