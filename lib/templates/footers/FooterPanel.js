"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Footer1_1 = require("./Footer1");
const Footer2_1 = require("./Footer2");
const Footer3_1 = require("./Footer3");
const Footer4_1 = require("./Footer4");
const Footer5_1 = require("./Footer5");
const utils_1 = require("../../utils");
const FooterPanel = props => {
    let template = 1;
    let styles = null;
    let navStyles = null;
    if (props.footer) {
        template = props.footer.attributes.template;
    }
    if (props.footer && props.footer.attributes.styles) {
        styles = utils_1.parseStyles(props.footer.attributes.styles);
    }
    if (props.footer && props.footer.attributes.navStyles) {
        navStyles = utils_1.parseStyles(props.footer.attributes.navStyles);
    }
    const footerProps = {
        styles,
        navStyles
    };
    switch (template) {
        case 1:
            return React.createElement(Footer1_1.default, Object.assign({}, footerProps));
        case 2:
            return React.createElement(Footer2_1.default, Object.assign({}, footerProps));
        case 3:
            return React.createElement(Footer3_1.default, Object.assign({}, footerProps));
        case 4:
            return React.createElement(Footer4_1.default, Object.assign({}, footerProps));
        case 5:
            return React.createElement(Footer5_1.default, Object.assign({}, footerProps));
    }
    return null;
};
exports.default = FooterPanel;
//# sourceMappingURL=FooterPanel.js.map