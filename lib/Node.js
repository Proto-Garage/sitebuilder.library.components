"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const RenderNode_1 = require("./RenderNode");
const RecurseNode_1 = require("./RecurseNode");
class Node extends React.Component {
    render() {
        const { node, current } = this.props;
        if (!node)
            return;
        const { children } = node;
        let newChildren = node.type === "Page"
            ? children.filter((child) => child.type === "Header" || child.type === "Footer")
            : children;
        if (!newChildren || current === newChildren.length) {
            return React.createElement(RenderNode_1.default, { node: node, current: current });
        }
        return React.createElement(RecurseNode_1.default, { node: node, current: 0 });
    }
}
exports.default = Node;
//# sourceMappingURL=Node.js.map