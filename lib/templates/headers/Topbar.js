"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const reactstrap_1 = require("reactstrap");
const styled_components_1 = require("styled-components");
const LanguageBar_1 = require("./LanguageBar");
const Boxed = props => props.boxed ? React.createElement(reactstrap_1.Container, null, props.children) : React.createElement(React.Fragment, null, props.children);
const Topbar = props => {
    return (React.createElement(Wrapper, { className: "d-none d-md-block", style: props.styles ? props.styles : {}, linkColor: props.styles ? props.styles.color : null },
        React.createElement(Boxed, { boxed: props.boxed },
            React.createElement("div", { className: "d-flex flex-fill" },
                React.createElement(reactstrap_1.Navbar, { light: true, expand: "md", className: "flex-grow-1 p-0" },
                    React.createElement(reactstrap_1.Nav, { navbar: true, className: "d-flex flex-fill justify-content-between" },
                        React.createElement(reactstrap_1.NavItem, null,
                            React.createElement(reactstrap_1.NavLink, { href: "https://github.com/reactstrap/reactstrap" }, "\u592A\u9633\u57CE\u7B80\u4ECB")),
                        React.createElement(reactstrap_1.NavItem, null,
                            React.createElement(reactstrap_1.NavLink, { href: "https://github.com/reactstrap/reactstrap" }, "\u4EE3\u7406\u52A0\u76DF")),
                        React.createElement(reactstrap_1.NavItem, null,
                            React.createElement(reactstrap_1.NavLink, { href: "https://github.com/reactstrap/reactstrap" }, "\u624B\u673A\u6295\u6CE8")),
                        React.createElement(reactstrap_1.NavItem, null,
                            React.createElement(reactstrap_1.NavLink, { href: "https://github.com/reactstrap/reactstrap" }, "VIP\u8D35\u5BBE\u4F1A")),
                        React.createElement(reactstrap_1.NavItem, null,
                            React.createElement(reactstrap_1.NavLink, { href: "https://github.com/reactstrap/reactstrap" }, "\u5929\u5929\u62A2\u7EA2\u5305")),
                        React.createElement(reactstrap_1.NavItem, null,
                            React.createElement(reactstrap_1.NavLink, { href: "https://github.com/reactstrap/reactstrap" }, "MG\u8001\u864E\u673A")),
                        React.createElement(reactstrap_1.NavItem, null,
                            React.createElement(reactstrap_1.NavLink, { href: "https://github.com/reactstrap/reactstrap" }, "\u514D\u8D39\u8BD5\u73A9")),
                        React.createElement(reactstrap_1.NavItem, null,
                            React.createElement(reactstrap_1.NavLink, { href: "https://github.com/reactstrap/reactstrap" }, "\u4E0B\u8F7D\u4E2D\u5FC3")),
                        React.createElement(reactstrap_1.NavItem, null,
                            React.createElement(reactstrap_1.NavLink, { href: "https://github.com/reactstrap/reactstrap" }, "APP\u4E0B\u8F7D")),
                        React.createElement(reactstrap_1.NavItem, null,
                            React.createElement(reactstrap_1.NavLink, { href: "https://github.com/reactstrap/reactstrap" }, "\u94F6\u8054\u626B\u7801")),
                        React.createElement(reactstrap_1.NavItem, null,
                            React.createElement(reactstrap_1.NavLink, { href: "https://github.com/reactstrap/reactstrap" }, "QQ\u94B1\u5305")))),
                React.createElement(LanguageBar_1.default, null)))));
};
const Wrapper = styled_components_1.default.div `
  /* background-color: #ecebec; */
  font-size: small;
  a {
    color: ${props => props.linkColor ? props.linkColor : "inherit"} !important;
  }
`;
Topbar.defaultProps = {
    boxed: false
};
exports.default = Topbar;
//# sourceMappingURL=Topbar.js.map