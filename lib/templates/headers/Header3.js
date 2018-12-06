"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const reactstrap_1 = require("reactstrap");
const NavigationBar_1 = require("./NavigationBar");
const LoginBar_1 = require("./LoginBar");
const Logo_1 = require("./Logo");
const Header3 = props => {
    return (React.createElement("div", { style: props.styles ? props.styles : {} },
        React.createElement(reactstrap_1.Container, null,
            React.createElement("div", { className: "d-flex align-items-center" },
                React.createElement(Logo_1.default, null),
                React.createElement(LoginBar_1.default, null))),
        React.createElement(NavigationBar_1.default, { styles: props.navStyles ? props.navStyles : {}, boxed: true })));
};
exports.default = Header3;
//# sourceMappingURL=Header3.js.map