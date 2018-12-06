"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const Section_1 = require("./templates/Section");
const Node_1 = require("./Node");
const Carousel_1 = require("./templates/Carousel");
const ColumnControls_1 = require("./ColumnControls");
const SectionControls_1 = require("./SectionControls");
const RenderNode = props => {
    const { current, dragControl, node } = props;
    switch (node.type) {
        case "Root":
            return (React.createElement(React.Fragment, null,
                React.createElement(Section_1.default, { node: node },
                    React.createElement(Node_1.default, { node: node, current: 0 }))));
        case "Section":
            return (React.createElement(Section_1.default, { node: node },
                React.createElement(ControlWrapper, null,
                    React.createElement(Node_1.default, { node: node, current: 0 }),
                    React.createElement(SectionControls_1.default, null))));
        case "Row":
            return React.createElement(Node_1.default, { node: node, current: 0 });
        case "Column":
            return (React.createElement(ControlWrapper, null,
                React.createElement(Node_1.default, { node: node, current: current + 1 }),
                React.createElement(ColumnControls_1.default, { dragControl: dragControl })));
        case "Carousel":
            return React.createElement(Carousel_1.default, { node: node });
        default:
            return null;
    }
};
exports.default = RenderNode;
const ControlWrapper = styled_components_1.default.div `
  position: relative;
  &:hover {
    .section-controls {
      opacity: 1;
    }
  }
`;
//# sourceMappingURL=RenderNode.js.map