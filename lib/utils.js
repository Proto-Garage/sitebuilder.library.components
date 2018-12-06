"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseStyles = (styles) => {
    if (!styles)
        return null;
    let output = {};
    Object.entries(styles).map((item) => {
        const key = item[0];
        let value = item[1];
        if (item[0] === "backgroundImage") {
            value = `url(${value})`;
        }
        output = Object.assign({}, output, { [key]: value });
    });
    return output;
};
//# sourceMappingURL=utils.js.map