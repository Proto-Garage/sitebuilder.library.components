"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const utils_1 = require("../utils");
const Section = props => {
    const styles = props.node.attributes
        ? utils_1.parseStyles(props.node.attributes.styles)
        : "";
    return (React.createElement(Wrapper, { className: props.className, styles: styles },
        props.children,
        " ",
        React.createElement("div", { className: "background" })));
};
exports.default = Section;
const Wrapper = styled_components_1.default.section `
  ${props => props.styles}
  position: relative;
  .background {
    position: absolute;
  }
`;
//# sourceMappingURL=Section.js.map