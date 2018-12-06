"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const fi_1 = require("react-icons/fi");
const reactstrap_1 = require("reactstrap");
const RowControls = props => {
    return (React.createElement(Controls, null,
        React.createElement("ul", { className: "list-unstyled" },
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
exports.default = RowControls;
const Controls = styled_components_1.default.div `
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0;
`;
//# sourceMappingURL=RowControls.js.map