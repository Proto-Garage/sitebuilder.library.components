"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const reactstrap_1 = require("reactstrap");
const styled_components_1 = require("styled-components");
const NavigationBar_1 = require("./NavigationBar");
const LoginBar_1 = require("./LoginBar");
const Logo_1 = require("./Logo");
const Topbar_1 = require("./Topbar");
const Header1 = props => {
    return (React.createElement("div", { style: props.styles ? props.styles : {} },
        React.createElement(Topbar_1.default, { boxed: true, styles: props.topStyles ? props.topStyles : {} }),
        React.createElement(LoginBarWrapper, null,
            React.createElement(reactstrap_1.Container, null,
                React.createElement("div", { className: "d-flex align-items-center" },
                    React.createElement(Logo_1.default, null),
                    React.createElement(LoginBar_1.default, null)))),
        React.createElement(NavigationBar_1.default, { boxed: true, styles: props.navStyles ? props.navStyles : {} })));
};
const LoginBarWrapper = styled_components_1.default.div `
  /* background-color: #181124; */
`;
exports.default = Header1;
//# sourceMappingURL=Header1.js.map