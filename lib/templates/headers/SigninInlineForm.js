"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const reactstrap_1 = require("reactstrap");
const SigninInlineForm = props => {
    return (React.createElement("div", { className: "px-0 py-2" },
        React.createElement(reactstrap_1.Form, { inline: props.formInline, className: "" },
            React.createElement(reactstrap_1.FormGroup, { className: "mr-sm-2" },
                React.createElement("input", { className: "form-control", size: 15, type: "email", name: "email", placeholder: "\u6E38\u620F\u8D26\u53F7" })),
            React.createElement(reactstrap_1.FormGroup, { className: "mr-sm-2" },
                React.createElement("input", { className: "form-control", type: "password", size: 15, name: "password", placeholder: "\u5BC6\u7801" })),
            React.createElement(reactstrap_1.FormGroup, { className: "mr-sm-2" },
                React.createElement("input", { className: "form-control", type: "text", name: "valid", placeholder: "\u9A8C\u8BC1\u7801", size: 10 })),
            React.createElement(reactstrap_1.Button, { type: "submit", color: "primary", className: "mr-sm-2" }, "\u767B\u5F55"),
            React.createElement(reactstrap_1.Button, { type: "submit", color: "primary" }, "\u5FD8\u8BB0\u5BC6\u7801"))));
};
SigninInlineForm.defaultProps = {
    formInline: true
};
exports.default = SigninInlineForm;
//# sourceMappingURL=SigninInlineForm.js.map