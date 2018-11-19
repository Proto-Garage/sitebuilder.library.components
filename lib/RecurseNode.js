"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const RenderNode_1 = require("./RenderNode");
const RecurseNode = props => {
    const { nodes, node, current } = props;
    return (React.createElement(React.Fragment, null, node.children.map((value) => {
        const newNode = nodes[value];
        return (React.createElement(React.Fragment, { key: value },
            React.createElement(RenderNode_1.default, { nodes: nodes, node: newNode, current: current })));
    })));
};
exports.default = RecurseNode;
//# sourceMappingURL=RecurseNode.js.map