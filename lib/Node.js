"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const RenderNode_1 = require("./RenderNode");
const RecurseNode_1 = require("./RecurseNode");
class Node extends React.Component {
    render() {
        const { nodes, node, current } = this.props;
        if (!node.children || current === node.children.length)
            return React.createElement(RenderNode_1.default, { nodes: nodes, node: node, current: current });
        return React.createElement(RecurseNode_1.default, { nodes: nodes, node: node, current: 0 });
    }
}
exports.default = Node;
//# sourceMappingURL=Node.js.map