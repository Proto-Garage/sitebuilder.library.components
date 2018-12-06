"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const classnames_1 = require("classnames");
const SigninInlineForm_1 = require("./SigninInlineForm");
class LoginBar extends React.Component {
    render() {
        let alignment = "justify-content-start";
        if (this.props.align === "right") {
            alignment = "justify-content-end";
        }
        return (React.createElement("div", { className: classnames_1.default("d-flex", alignment) },
            React.createElement(SigninInlineForm_1.default, null)));
    }
}
LoginBar.defaultProps = {
    align: "left"
};
exports.default = LoginBar;
//# sourceMappingURL=LoginBar.js.map