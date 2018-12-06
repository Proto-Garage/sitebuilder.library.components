"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const fi_1 = require("react-icons/fi");
const reactstrap_1 = require("reactstrap");
const SectionControls = props => {
    return (React.createElement(Controls, { className: "section-controls" },
        React.createElement("ul", { className: "list-inline" },
            React.createElement("li", { className: "list-inline-item" },
                React.createElement(reactstrap_1.Button, { color: "primary" },
                    React.createElement(fi_1.FiMove, null))),
            React.createElement("li", { className: "list-inline-item" },
                React.createElement(reactstrap_1.Button, { color: "primary" },
                    React.createElement(fi_1.FiSettings, null))),
            React.createElement("li", { className: "list-inline-item" },
                React.createElement(reactstrap_1.Button, { color: "primary" },
                    React.createElement(fi_1.FiTrash, null))))));
};
exports.default = SectionControls;
const Controls = styled_components_1.default.div `
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 100;
  ul {
    margin: 0;
  }
  li {
    margin-right: 2px !important;
  }
`;
//# sourceMappingURL=SectionControls.js.map