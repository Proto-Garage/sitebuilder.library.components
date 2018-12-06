"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const reactstrap_1 = require("reactstrap");
const Logo_1 = require("./Logo");
const Menu_1 = require("./Menu");
const styled_components_1 = require("styled-components");
class Footer3 extends React.Component {
    render() {
        return (React.createElement(Wrapper, { className: "text-white py-3" },
            React.createElement(reactstrap_1.Container, null,
                React.createElement("div", { className: "d-flex align-items-center" },
                    React.createElement("div", { className: "mr-auto" },
                        React.createElement(Logo_1.default, null)),
                    React.createElement(Menu_1.default, null)))));
    }
}
exports.default = Footer3;
const Wrapper = styled_components_1.default.div `
  background-color: #1c1c1f;
`;
//# sourceMappingURL=Footer3.js.map