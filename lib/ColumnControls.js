"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const fi_1 = require("react-icons/fi");
const reactstrap_1 = require("reactstrap");
const ColumnControls = props => {
    const { dragControl } = props;
    return (React.createElement(ControlWrapper, { className: "column-controls" },
        React.createElement(Controls, null,
            React.createElement("ul", { className: "list-unstyled" },
                React.createElement("li", { className: "list-inline-item" },
                    React.createElement(reactstrap_1.Button, { color: "primary" },
                        React.createElement(fi_1.FiMove, null))),
                React.createElement("li", { className: "list-inline-item" },
                    React.createElement(reactstrap_1.Button, { color: "primary" },
                        React.createElement(fi_1.FiSettings, null))),
                React.createElement("li", { className: "list-inline-item" },
                    React.createElement(reactstrap_1.Button, { color: "primary" },
                        React.createElement(fi_1.FiTrash, null)))))));
};
exports.default = ColumnControls;
const ControlWrapper = styled_components_1.default.div `
  /* &:after {
    opacity: 0;
    content: "";
    position: absolute;
    top: 0;
    left: 15px;
    border: 1px solid var(--primary);
    width: calc(100% - 30px);
    height: 100%;
  } */
`;
const Controls = styled_components_1.default.div `
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0;
  z-index: 10;
`;
//# sourceMappingURL=ColumnControls.js.map