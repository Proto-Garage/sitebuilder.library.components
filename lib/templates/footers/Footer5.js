"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const reactstrap_1 = require("reactstrap");
const styled_components_1 = require("styled-components");
const CopyrightBar_1 = require("./CopyrightBar");
const Description_1 = require("./Description");
const Logo_1 = require("./Logo");
const Menu_1 = require("./Menu");
class Footer5 extends React.Component {
    render() {
        return (React.createElement(Wrapper, { className: "py-3" },
            React.createElement(reactstrap_1.Container, null,
                React.createElement(Menu_1.default, null),
                React.createElement(Description_1.default, { separator: true, theme: "light" }),
                React.createElement("div", { className: "d-flex align-items-center justify-content-between" },
                    React.createElement(Logo_1.default, null),
                    React.createElement(CopyrightBar_1.default, null)))));
    }
}
exports.default = Footer5;
const Wrapper = styled_components_1.default.div `
  background-color: #090911;
`;
//# sourceMappingURL=Footer5.js.map