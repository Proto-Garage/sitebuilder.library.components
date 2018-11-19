"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (styles) => {
    if (!styles)
        return "";
    let output = "";
    Object.entries(styles).map(item => {
        output += `${item[0]}: ${item[1]}\n`;
    });
    return output;
};
//# sourceMappingURL=parseStyles.js.map