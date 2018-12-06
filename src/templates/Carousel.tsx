import * as React from "react";
import { CarouselNode, Node } from "sitebuilder.client";
import OwlCarousel from "react-owl-carousel2";

interface IProps {
  node: CarouselNode;
  boxed: false;
}

export default class Carousel extends React.Component<IProps, any> {
  static defaultProps = {
    boxed: false
  };
  public render() {
    return (
      <OwlCarousel
        ref="car"
        options={{
          items: 1,
          nav: false,
          dots: true,
          rewind: true,
          autoplay: true
        }}
      >
        <img
          src="https://res.cloudinary.com/dmhahyfum/image/upload/v1543410726/banner_1.png"
          alt="The Last of us"
        />
        <img
          src="https://res.cloudinary.com/dmhahyfum/image/upload/v1543410726/lottery_banner.png"
          alt="GTA V"
        />
        <img
          src="https://res.cloudinary.com/dmhahyfum/image/upload/v1543410729/live_banner.png"
          alt="Mirror Edge"
        />
        <img
          src="https://res.cloudinary.com/dmhahyfum/image/upload/v1543410726/banner_1.png"
          alt="The Last of us"
        />
        <img
          src="https://res.cloudinary.com/dmhahyfum/image/upload/v1543410726/lottery_banner.png"
          alt="GTA V"
        />
        <img
          src="https://res.cloudinary.com/dmhahyfum/image/upload/v1543410729/live_banner.png"
          alt="Mirror Edge"
        />
        <img
          src="https://res.cloudinary.com/dmhahyfum/image/upload/v1543410730/sport_banner.png"
          alt="Mirror Edge"
        />
      </OwlCarousel>
    );
  }
}
