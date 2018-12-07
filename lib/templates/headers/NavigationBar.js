"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const reactstrap_1 = require("reactstrap");
const styled_components_1 = require("styled-components");
require("./navigation.scss");
const Boxed = props => props.boxed ? React.createElement(reactstrap_1.Container, null, props.children) : React.createElement(React.Fragment, null, props.children);
class NavigationBar extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            isOpen: false
        };
        this.toggle = () => {
            this.setState({
                isOpen: !this.state.isOpen
            });
        };
    }
    render() {
        return (React.createElement(Wrapper, { style: this.props.styles ? this.props.styles : {}, linkColor: this.props.styles ? this.props.styles.color : null, backgroundColor: this.props.styles ? this.props.styles.backgroundColor : null, className: "d-flex align-items-center" },
            React.createElement(Boxed, { boxed: this.props.boxed },
                React.createElement(reactstrap_1.Navbar, { light: true, expand: "md" },
                    React.createElement(reactstrap_1.NavbarToggler, { onClick: this.toggle }),
                    React.createElement(reactstrap_1.Collapse, { isOpen: this.state.isOpen, navbar: true },
                        React.createElement(reactstrap_1.Nav, { navbar: true, className: "d-flex flex-fill justify-content-between" },
                            React.createElement(reactstrap_1.NavItem, null,
                                React.createElement(reactstrap_1.NavLink, { href: "/components/" }, "\u9996\u9875")),
                            React.createElement(reactstrap_1.UncontrolledDropdown, { nav: true, inNavbar: true },
                                React.createElement(reactstrap_1.DropdownToggle, { nav: true, caret: true }, "\u7535\u5B50"),
                                React.createElement(reactstrap_1.DropdownMenu, null,
                                    React.createElement(reactstrap_1.DropdownItem, { tag: "a" }, "\u7CD6\u679C\u6D3E\u5BF9"),
                                    React.createElement(reactstrap_1.DropdownItem, { tag: "a" }, "\u8FDE\u73AF\u593A\u5B9D2"),
                                    React.createElement(reactstrap_1.DropdownItem, { tag: "a" }, "\u7CD6\u679C\u6D3E\u5BF92"),
                                    React.createElement(reactstrap_1.DropdownItem, { tag: "a" }, "\u5F00\u5FC3\u6D88\u6D88\u4E50"),
                                    React.createElement(reactstrap_1.DropdownItem, { tag: "a" }, "\u8FDE\u73AF\u593A\u5B9D"))),
                            React.createElement(reactstrap_1.UncontrolledDropdown, { nav: true, inNavbar: true },
                                React.createElement(reactstrap_1.DropdownToggle, { nav: true, caret: true }, "MG"),
                                React.createElement(reactstrap_1.DropdownMenu, null,
                                    React.createElement(reactstrap_1.DropdownItem, { tag: "a" }, "\u7CD6\u679C\u6D3E\u5BF9"),
                                    React.createElement(reactstrap_1.DropdownItem, { tag: "a" }, "\u8FDE\u73AF\u593A\u5B9D2"),
                                    React.createElement(reactstrap_1.DropdownItem, { tag: "a" }, "\u7CD6\u679C\u6D3E\u5BF92"),
                                    React.createElement(reactstrap_1.DropdownItem, { tag: "a" }, "\u5F00\u5FC3\u6D88\u6D88\u4E50"),
                                    React.createElement(reactstrap_1.DropdownItem, { tag: "a" }, "\u8FDE\u73AF\u593A\u5B9D"))),
                            React.createElement(reactstrap_1.NavItem, null,
                                React.createElement(reactstrap_1.NavLink, { href: "/components/" }, "PT")),
                            React.createElement(reactstrap_1.UncontrolledDropdown, { nav: true, inNavbar: true },
                                React.createElement(reactstrap_1.DropdownToggle, { nav: true, caret: true }, "BBIN"),
                                React.createElement(reactstrap_1.DropdownMenu, null,
                                    React.createElement(reactstrap_1.DropdownItem, { tag: "a" }, "\u7CD6\u679C\u6D3E\u5BF9"),
                                    React.createElement(reactstrap_1.DropdownItem, { tag: "a" }, "\u8FDE\u73AF\u593A\u5B9D2"),
                                    React.createElement(reactstrap_1.DropdownItem, { tag: "a" }, "\u7CD6\u679C\u6D3E\u5BF92"),
                                    React.createElement(reactstrap_1.DropdownItem, { tag: "a" }, "\u5F00\u5FC3\u6D88\u6D88\u4E50"),
                                    React.createElement(reactstrap_1.DropdownItem, { tag: "a" }, "\u8FDE\u73AF\u593A\u5B9D"))),
                            React.createElement(reactstrap_1.UncontrolledDropdown, { nav: true, inNavbar: true },
                                React.createElement(reactstrap_1.DropdownToggle, { nav: true, caret: true }, "\u68CB\u724C"),
                                React.createElement(reactstrap_1.DropdownMenu, null,
                                    React.createElement(reactstrap_1.DropdownItem, { tag: "a" }, "\u7CD6\u679C\u6D3E\u5BF9"),
                                    React.createElement(reactstrap_1.DropdownItem, { tag: "a" }, "\u8FDE\u73AF\u593A\u5B9D2"),
                                    React.createElement(reactstrap_1.DropdownItem, { tag: "a" }, "\u7CD6\u679C\u6D3E\u5BF92"),
                                    React.createElement(reactstrap_1.DropdownItem, { tag: "a" }, "\u5F00\u5FC3\u6D88\u6D88\u4E50"),
                                    React.createElement(reactstrap_1.DropdownItem, { tag: "a" }, "\u8FDE\u73AF\u593A\u5B9D"))),
                            React.createElement(reactstrap_1.UncontrolledDropdown, { nav: true, inNavbar: true },
                                React.createElement(reactstrap_1.DropdownToggle, { nav: true, caret: true }, "\u6355\u9B5A"),
                                React.createElement(reactstrap_1.DropdownMenu, null,
                                    React.createElement(reactstrap_1.DropdownItem, { tag: "a" }, "\u7CD6\u679C\u6D3E\u5BF9"),
                                    React.createElement(reactstrap_1.DropdownItem, { tag: "a" }, "\u8FDE\u73AF\u593A\u5B9D2"),
                                    React.createElement(reactstrap_1.DropdownItem, { tag: "a" }, "\u7CD6\u679C\u6D3E\u5BF92"),
                                    React.createElement(reactstrap_1.DropdownItem, { tag: "a" }, "\u5F00\u5FC3\u6D88\u6D88\u4E50"),
                                    React.createElement(reactstrap_1.DropdownItem, { tag: "a" }, "\u8FDE\u73AF\u593A\u5B9D"))),
                            React.createElement(reactstrap_1.UncontrolledDropdown, { nav: true, inNavbar: true },
                                React.createElement(reactstrap_1.DropdownToggle, { nav: true, caret: true }, "\u5F69\u7968"),
                                React.createElement(reactstrap_1.DropdownMenu, null,
                                    React.createElement(reactstrap_1.DropdownItem, { tag: "a" }, "\u7CD6\u679C\u6D3E\u5BF9"),
                                    React.createElement(reactstrap_1.DropdownItem, { tag: "a" }, "\u8FDE\u73AF\u593A\u5B9D2"),
                                    React.createElement(reactstrap_1.DropdownItem, { tag: "a" }, "\u7CD6\u679C\u6D3E\u5BF92"),
                                    React.createElement(reactstrap_1.DropdownItem, { tag: "a" }, "\u5F00\u5FC3\u6D88\u6D88\u4E50"),
                                    React.createElement(reactstrap_1.DropdownItem, { tag: "a" }, "\u8FDE\u73AF\u593A\u5B9D"))),
                            React.createElement(reactstrap_1.UncontrolledDropdown, { nav: true, inNavbar: true },
                                React.createElement(reactstrap_1.DropdownToggle, { nav: true, caret: true }, "\u89C6\u8BAF"),
                                React.createElement(reactstrap_1.DropdownMenu, null,
                                    React.createElement(reactstrap_1.DropdownItem, { tag: "a" }, "\u7CD6\u679C\u6D3E\u5BF9"),
                                    React.createElement(reactstrap_1.DropdownItem, { tag: "a" }, "\u8FDE\u73AF\u593A\u5B9D2"),
                                    React.createElement(reactstrap_1.DropdownItem, { tag: "a" }, "\u7CD6\u679C\u6D3E\u5BF92"),
                                    React.createElement(reactstrap_1.DropdownItem, { tag: "a" }, "\u5F00\u5FC3\u6D88\u6D88\u4E50"),
                                    React.createElement(reactstrap_1.DropdownItem, { tag: "a" }, "\u8FDE\u73AF\u593A\u5B9D"))),
                            React.createElement(reactstrap_1.UncontrolledDropdown, { nav: true, inNavbar: true },
                                React.createElement(reactstrap_1.DropdownToggle, { nav: true, caret: true }, "\u4F53\u80B2"),
                                React.createElement(reactstrap_1.DropdownMenu, null,
                                    React.createElement(reactstrap_1.DropdownItem, { tag: "a" }, "\u7CD6\u679C\u6D3E\u5BF9"),
                                    React.createElement(reactstrap_1.DropdownItem, { tag: "a" }, "\u8FDE\u73AF\u593A\u5B9D2"),
                                    React.createElement(reactstrap_1.DropdownItem, { tag: "a" }, "\u7CD6\u679C\u6D3E\u5BF92"),
                                    React.createElement(reactstrap_1.DropdownItem, { tag: "a" }, "\u5F00\u5FC3\u6D88\u6D88\u4E50"),
                                    React.createElement(reactstrap_1.DropdownItem, { tag: "a" }, "\u8FDE\u73AF\u593A\u5B9D"))),
                            React.createElement(reactstrap_1.UncontrolledDropdown, { nav: true, inNavbar: true },
                                React.createElement(reactstrap_1.DropdownToggle, { nav: true, caret: true }, "\u4F18\u60E0"),
                                React.createElement(reactstrap_1.DropdownMenu, null,
                                    React.createElement(reactstrap_1.DropdownItem, { tag: "a" }, "\u7CD6\u679C\u6D3E\u5BF9"),
                                    React.createElement(reactstrap_1.DropdownItem, { tag: "a" }, "\u8FDE\u73AF\u593A\u5B9D2"),
                                    React.createElement(reactstrap_1.DropdownItem, { tag: "a" }, "\u7CD6\u679C\u6D3E\u5BF92"),
                                    React.createElement(reactstrap_1.DropdownItem, { tag: "a" }, "\u5F00\u5FC3\u6D88\u6D88\u4E50"),
                                    React.createElement(reactstrap_1.DropdownItem, { tag: "a" }, "\u8FDE\u73AF\u593A\u5B9D"))),
                            React.createElement(reactstrap_1.UncontrolledDropdown, { nav: true, inNavbar: true },
                                React.createElement(reactstrap_1.DropdownToggle, { nav: true, caret: true }, "\u5BA2\u670D"),
                                React.createElement(reactstrap_1.DropdownMenu, null,
                                    React.createElement(reactstrap_1.DropdownItem, { tag: "a" }, "\u7CD6\u679C\u6D3E\u5BF9"),
                                    React.createElement(reactstrap_1.DropdownItem, { tag: "a" }, "\u8FDE\u73AF\u593A\u5B9D2"),
                                    React.createElement(reactstrap_1.DropdownItem, { tag: "a" }, "\u7CD6\u679C\u6D3E\u5BF92"),
                                    React.createElement(reactstrap_1.DropdownItem, { tag: "a" }, "\u5F00\u5FC3\u6D88\u6D88\u4E50"),
                                    React.createElement(reactstrap_1.DropdownItem, { tag: "a" }, "\u8FDE\u73AF\u593A\u5B9D")))))))));
    }
}
NavigationBar.defaultProps = {
    boxed: false
};
exports.default = NavigationBar;
const Wrapper = styled_components_1.default.div `
  a {
    color: ${props => props.linkColor ? props.linkColor : "inherit"} !important;
  }
  .navbar-nav .dropdown-menu {
    background-color: ${props => props.backgroundColor ? props.backgroundColor : "inherit"} !important;
  }
  .dropdown-item:focus,
  .dropdown-item:hover {
    color: ${props => props.linkColor ? props.linkColor : "inherit"} !important;
    opacity: 0.75;
    background-color: ${props => props.backgroundColor ? props.backgroundColor : "inherit"} !important;
  }
`;
//# sourceMappingURL=NavigationBar.js.map