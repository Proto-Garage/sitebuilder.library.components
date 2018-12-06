"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_owl_carousel2_1 = require("react-owl-carousel2");
class Carousel extends React.Component {
    render() {
        return (React.createElement(react_owl_carousel2_1.default, { ref: "car", options: {
                items: 1,
                nav: false,
                dots: true,
                rewind: true,
                autoplay: true
            } },
            React.createElement("img", { src: "https://res.cloudinary.com/dmhahyfum/image/upload/v1543410726/banner_1.png", alt: "The Last of us" }),
            React.createElement("img", { src: "https://res.cloudinary.com/dmhahyfum/image/upload/v1543410726/lottery_banner.png", alt: "GTA V" }),
            React.createElement("img", { src: "https://res.cloudinary.com/dmhahyfum/image/upload/v1543410729/live_banner.png", alt: "Mirror Edge" }),
            React.createElement("img", { src: "https://res.cloudinary.com/dmhahyfum/image/upload/v1543410726/banner_1.png", alt: "The Last of us" }),
            React.createElement("img", { src: "https://res.cloudinary.com/dmhahyfum/image/upload/v1543410726/lottery_banner.png", alt: "GTA V" }),
            React.createElement("img", { src: "https://res.cloudinary.com/dmhahyfum/image/upload/v1543410729/live_banner.png", alt: "Mirror Edge" }),
            React.createElement("img", { src: "https://res.cloudinary.com/dmhahyfum/image/upload/v1543410730/sport_banner.png", alt: "Mirror Edge" })));
    }
}
Carousel.defaultProps = {
    boxed: false
};
exports.default = Carousel;
//# sourceMappingURL=Carousel.js.map