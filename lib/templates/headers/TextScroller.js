"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
// import Marquee from "react-marquee";
const fa_1 = require("react-icons/fa");
function TextScroller(props) {
    return (React.createElement(Wrapper, { className: "d-flex align-items-center" },
        React.createElement("div", { className: "mr-2" },
            React.createElement(fa_1.FaBullhorn, null)),
        React.createElement("div", { className: "marquee d-flex align-items-center" },
            React.createElement("div", { className: "inner" }, props.children))));
}
exports.TextScroller = TextScroller;
const Wrapper = styled_components_1.default.div `
  height: 100%;
  .marquee {
    height: 100%;
    overflow: hidden;
    white-space: nowrap;
    .inner {
      position: relative;
      animation: scroll 20s infinite linear;
    }
    @keyframes scroll {
      0% {
        left: 500px;
      }
      100% {
        left: -950px;
      }
    }
    @-webkit-keyframes scroll {
      0% {
        left: 500px;
      }
      100% {
        left: -950px;
      }
    }
  }
`;
//# sourceMappingURL=TextScroller.js.map