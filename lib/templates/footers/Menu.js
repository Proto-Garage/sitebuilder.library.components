"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const reactstrap_1 = require("reactstrap");
const styled_components_1 = require("styled-components");
class Menu extends React.Component {
    render() {
        return (React.createElement(Wrapper, { separator: this.props.separator, style: this.props.styles ? this.props.styles : {}, linkColor: this.props.styles ? this.props.styles.color : null },
            React.createElement(reactstrap_1.Navbar, { expand: "xs", className: "p-0" },
                React.createElement(reactstrap_1.Nav, { navbar: true, className: `d-flex flex-fill ${this.props.center
                        ? "justify-content-center"
                        : "justify-content-start"} justify-content-start flex-wrap` },
                    React.createElement(reactstrap_1.NavItem, null,
                        React.createElement(reactstrap_1.NavLink, { href: "/" }, "\u5173\u4E8E\u6211\u4EEC")),
                    React.createElement(reactstrap_1.NavItem, null,
                        React.createElement(reactstrap_1.NavLink, { href: "/" }, "\u9690\u79C1\u653F\u7B56")),
                    React.createElement(reactstrap_1.NavItem, null,
                        React.createElement(reactstrap_1.NavLink, { href: "/" }, "\u8D23\u4EFB\u535A\u5F69")),
                    React.createElement(reactstrap_1.NavItem, null,
                        React.createElement(reactstrap_1.NavLink, { href: "/" }, "\u5E38\u898B\u554F\u984C")),
                    React.createElement(reactstrap_1.NavItem, null,
                        React.createElement(reactstrap_1.NavLink, { href: "/" }, "\u89C4\u5219\u6761\u6B3E")),
                    React.createElement(reactstrap_1.NavItem, null,
                        React.createElement(reactstrap_1.NavLink, { href: "/" }, "\u5408\u8425\u52A0\u76DF")),
                    React.createElement(reactstrap_1.NavItem, null,
                        React.createElement(reactstrap_1.NavLink, { href: "/" }, "\u8054\u7CFB\u6211\u4EEC"))))));
    }
}
Menu.defaultProps = {
    separator: false,
    center: false
};
exports.default = Menu;
const Wrapper = styled_components_1.default.div `
  a {
    position: relative;
    padding: ${props => (props.separator ? "0.5rem 1.5rem" : "0.5rem 1rem")};
    &:after {
      opacity: ${props => (props.separator ? "1" : "0")};
      content: "";
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0;
      background-color: #68686a;
      width: 1px;
      height: 50%;
    }
    color: ${props => props.linkColor ? props.linkColor : "inherit"} !important;
  }
  li {
    &:last-child {
      a {
        &:after {
          display: none;
        }
      }
    }
  }
`;
//# sourceMappingURL=Menu.js.map