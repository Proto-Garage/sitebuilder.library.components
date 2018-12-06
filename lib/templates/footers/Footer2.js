"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const reactstrap_1 = require("reactstrap");
const styled_components_1 = require("styled-components");
const Menu_1 = require("./Menu");
const CopyrightBar_1 = require("./CopyrightBar");
class Footer2 extends React.Component {
    render() {
        return (React.createElement(Wrapper, { className: "text-white py-3" },
            React.createElement(reactstrap_1.Container, null,
                React.createElement("div", { className: "d-flex align-items-center" },
                    React.createElement("div", { className: "flex-grow-1" },
                        React.createElement(Menu_1.default, { separator: true })),
                    React.createElement(CopyrightBar_1.default, null)))));
    }
}
exports.default = Footer2;
const Wrapper = styled_components_1.default.div `
  background-color: #0a0f22;
`;
//# sourceMappingURL=Footer2.js.map