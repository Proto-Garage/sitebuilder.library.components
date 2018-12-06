import * as React from "react";
import { Styles } from "sitebuilder.client";
export interface IProps {
    separator: boolean;
    center?: boolean;
    styles?: Styles | null;
    boxed?: boolean;
}
export default class Menu extends React.Component<IProps, any> {
    static defaultProps: {
        separator: boolean;
        center: boolean;
    };
    render(): JSX.Element;
}
