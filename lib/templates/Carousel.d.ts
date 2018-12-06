import * as React from "react";
import { CarouselNode } from "sitebuilder.client";
interface IProps {
    node: CarouselNode;
    boxed: false;
}
export default class Carousel extends React.Component<IProps, any> {
    static defaultProps: {
        boxed: boolean;
    };
    render(): JSX.Element;
}
export {};
