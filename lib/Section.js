"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const parseStyles_1 = require("./utils/parseStyles");
const Section = props => {
    const styles = props.node.attributes
        ? parseStyles_1.default(props.node.attributes.styles)
        : "";
    return (React.createElement(Wrapper, { className: props.className, styles: styles },
        props.children,
        " ",
        React.createElement("div", { className: "background" })));
};
exports.default = Section;
const Wrapper = styled_components_1.default.section `
  ${props => props.styles}
  .background {
    position: absolute;
  }
`;
//# sourceMappingURL=Section.js.map