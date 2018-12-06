import * as React from "react";
import { Styles } from "sitebuilder.client";
import "./navigation.scss";
interface IProps {
    styles?: Styles | null;
    boxed?: boolean;
}
export default class NavigationBar extends React.Component<IProps> {
    state: {
        isOpen: boolean;
    };
    static defaultProps: {
        boxed: boolean;
    };
    toggle: () => void;
    render(): JSX.Element;
}
export {};
