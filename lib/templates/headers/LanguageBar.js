"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const translate1_png_1 = require("./assets/translate1.png");
const translate2_png_1 = require("./assets/translate2.png");
const translate3_png_1 = require("./assets/translate3.png");
const LanguageBar = props => {
    return (React.createElement("div", { className: "d-flex align-items-center" },
        React.createElement("ul", { className: "d-flex m-0" },
            React.createElement("li", { className: "list-inline-item" },
                React.createElement("img", { src: translate1_png_1.default, alt: "" })),
            React.createElement("li", { className: "list-inline-item" },
                React.createElement("img", { src: translate2_png_1.default, alt: "" })),
            React.createElement("li", { className: "list-inline-item" },
                React.createElement("img", { src: translate3_png_1.default, alt: "" })))));
};
exports.default = LanguageBar;
//# sourceMappingURL=LanguageBar.js.map