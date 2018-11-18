"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_render_html_1 = require("react-render-html");
const Heading = props => {
    return React.createElement(React.Fragment, null, react_render_html_1.default(`<${props.tag}>${props.value}</${props.tag}>`));
};
Heading.defaultProps = {
    tag: "h1"
};
exports.default = Heading;
//# sourceMappingURL=Heading.js.map