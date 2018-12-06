"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Header1_1 = require("./Header1");
const Header2_1 = require("./Header2");
const Header3_1 = require("./Header3");
const Header4_1 = require("./Header4");
const utils_1 = require("../../utils");
const HeaderPanel = props => {
    let template = 1;
    let styles = null;
    let navStyles = null;
    let topStyles = null;
    if (props.header) {
        template = props.header.attributes.template;
    }
    if (props.header && props.header.attributes.styles) {
        styles = utils_1.parseStyles(props.header.attributes.styles);
    }
    if (props.header && props.header.attributes.navStyles) {
        navStyles = utils_1.parseStyles(props.header.attributes.navStyles);
    }
    if (props.header && props.header.attributes.topStyles) {
        topStyles = utils_1.parseStyles(props.header.attributes.topStyles);
    }
    const headerProps = {
        styles,
        navStyles,
        topStyles
    };
    switch (template) {
        case 1:
            return React.createElement(Header1_1.default, Object.assign({}, headerProps));
        case 2:
            return React.createElement(Header2_1.default, Object.assign({}, headerProps));
        case 3:
            return React.createElement(Header3_1.default, Object.assign({}, headerProps));
        case 4:
            return React.createElement(Header4_1.default, Object.assign({}, headerProps));
    }
    return null;
};
exports.default = HeaderPanel;
//# sourceMappingURL=HeaderPanel.js.map