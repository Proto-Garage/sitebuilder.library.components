"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const reactstrap_1 = require("reactstrap");
const Menu_1 = require("./Menu");
const CopyrightBar_1 = require("./CopyrightBar");
const Footer1 = props => {
    return (React.createElement("div", { style: props.styles ? props.styles : {} },
        React.createElement(reactstrap_1.Container, null,
            React.createElement("div", { className: "d-flex align-items-center justify-content-center" },
                React.createElement(Menu_1.default, { separator: true, styles: props.navStyles ? props.navStyles : {} })),
            React.createElement("div", { className: "text-center" },
                React.createElement(CopyrightBar_1.default, null)))));
};
exports.default = Footer1;
//# sourceMappingURL=Footer1.js.map