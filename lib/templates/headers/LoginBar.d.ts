import * as React from "react";
export interface IProps {
    align?: "left" | "right";
}
export default class LoginBar extends React.Component<IProps, any> {
    static defaultProps: {
        align: string;
    };
    render(): JSX.Element;
}
