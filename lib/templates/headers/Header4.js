"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const reactstrap_1 = require("reactstrap");
const NavigationBar_1 = require("./NavigationBar");
const LoginBar_1 = require("./LoginBar");
const Logo_1 = require("./Logo");
const TextScroller_1 = require("./TextScroller");
const Header4 = props => {
    console.log(props);
    return (React.createElement("div", { style: props.styles ? props.styles : {} },
        React.createElement(reactstrap_1.Container, null,
            React.createElement(reactstrap_1.Row, null,
                React.createElement(reactstrap_1.Col, { sm: 4 },
                    React.createElement(TextScroller_1.TextScroller, null, "\u4E3A\u4E86\u80FD\u591F\u63D0\u4F9B\u66F4\u4F18\u826F\u7684\u6E38\u620F\u54C1\u8D28\uFF0C\u7F51\u7AD9\u5B9A\u671F\u5BF9\u6E38\u620F\u5385\u8FDB\u884C\u7EF4\u62A4\uFF0C\u5177\u4F53\u7EF4\u62A4\u65F6\u95F4\u5982\u4E0B\uFF1A\uFF081\uFF09\u2605AG\u4E9A\u6E38-\u56FD\u9645\u5385\u4E2D\u7684\u3010\u65D7\u8230\u5385\u53CA")),
                React.createElement(reactstrap_1.Col, { sm: 8 },
                    React.createElement(LoginBar_1.default, { align: "right" })))),
        React.createElement(reactstrap_1.Container, null,
            React.createElement("div", { className: "d-flex align-items-center" },
                React.createElement(Logo_1.default, null),
                React.createElement(NavigationBar_1.default, { styles: props.navStyles ? props.navStyles : {} })))));
};
exports.default = Header4;
//# sourceMappingURL=Header4.js.map