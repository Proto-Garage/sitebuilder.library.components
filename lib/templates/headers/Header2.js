"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const NavigationBar_1 = require("./NavigationBar");
const Logo_1 = require("./Logo");
const reactstrap_1 = require("reactstrap");
const Header2 = props => {
    return (React.createElement("div", { style: props.styles ? props.styles : {} },
        React.createElement(reactstrap_1.Container, null,
            React.createElement("div", { className: "d-flex" },
                React.createElement(Logo_1.default, null),
                React.createElement(NavigationBar_1.default, { styles: props.navStyles ? props.navStyles : {} })))));
};
exports.default = Header2;
//# sourceMappingURL=Header2.js.map