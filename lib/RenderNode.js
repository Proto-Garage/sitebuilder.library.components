"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Heading_1 = require("./Heading");
const Paragraph_1 = require("./Paragraph");
const Section_1 = require("./Section");
const Node_1 = require("./Node");
const Image_1 = require("./Image");
const Row_1 = require("reactstrap/lib/Row");
const Col_1 = require("reactstrap/lib/Col");
const RenderNode = props => {
    const { current, node, nodes } = props;
    switch (node.type) {
        case "Root":
            return (React.createElement(React.Fragment, null,
                React.createElement(Section_1.default, { className: "root123", node: node },
                    React.createElement(Node_1.default, { nodes: nodes, node: node, current: 0 }))));
        case "Section":
            // console.log(current, node);
            return (React.createElement(Section_1.default, { node: node },
                React.createElement(Node_1.default, { nodes: nodes, node: node, current: 0 })));
        case "Row":
            return (React.createElement(Row_1.default, null,
                React.createElement(Node_1.default, { nodes: nodes, node: node, current: 0 })));
        case "Column":
            return (React.createElement(Col_1.default, null,
                React.createElement(Node_1.default, { nodes: nodes, node: node, current: current + 1 })));
        case "Heading":
            return React.createElement(Heading_1.default, { tag: node.tag, value: node.value });
        case "Paragraph":
            return React.createElement(Paragraph_1.default, { value: node.value });
        case "Image":
            return React.createElement(Image_1.default, { node: node });
        default:
            return React.createElement("div", null, "asdasd");
    }
};
exports.default = RenderNode;
//# sourceMappingURL=RenderNode.js.map