"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const classnames_1 = require("classnames");
const styled_components_1 = require("styled-components");
const Description = props => {
    return (React.createElement(Wrapper, { separator: props.separator, theme: props.theme, className: classnames_1.default("py-3", { "text-center": props.center }, `text-${props.theme}`) }, "\u7535\u7ADE\u738B\u6700\u5177\u6709\u516C\u4FE1\u529B\u7684\u535A\u5F69\u516C\u53F8\uFF0C\u66F4\u6709\u9AD8\u54C1\u8D28\u7684\u6E38\u620F\u5E73\u53F0\u53CA\u591A\u56FD\u771F\u4EBA\u5385\u8D4C\u57CE\u4F9B\u5BA2\u6237\u9009\u62E9\u3001\u6253\u9020\u7EBF\u4E0A\u535A\u5F69\u7B2C\u4E00\u54C1\u724C\u3002\u516C\u53F8\u4E0D\u4EC5\u62E5\u6709\u5E02\u573A\u4E0A\u6700\u591A\u6837\u5316\u7684\u6E38\u620F\u6295\u6CE8\u5E73\u53F0\uFF0C\u540C\u65F6\u4E3A\u5BA2\u6237\u63D0\u4F9B\u5373\u65F6\u3001\u523A\u6FC0\u3001\u9AD8\u4FE1\u8A89\u7684\u670D\u52A1\u4FDD\u8BC1\u3001\u9AD8\u54C1\u8D28\u7684\u6E38\u620F\u5E73\u53F0\uFF0C\u4E5F\u662F\u516C\u53F8\u7684\u9996\u8981\u5B97\u65E8\u3002"));
};
Description.defaultProps = {
    center: false,
    separator: false,
    theme: "dark"
};
const Wrapper = styled_components_1.default.div `
  border-bottom: 1px solid
    ${props => (props.separator ? `var(--${props.theme})` : "inherit")};
`;
exports.default = Description;
//# sourceMappingURL=Description.js.map